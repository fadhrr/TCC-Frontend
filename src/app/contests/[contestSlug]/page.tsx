"use client";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { ModalSucces } from "@/components/ui/modal";
import Image from "next/image";
import { Card } from "@/components/problems/Card";

async function getId(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contest/s/${slug}`,
  );
  if (res.status == 404) {
    return res.status;
  }
  if (!res.ok) {
    throw new Error("Failed to fetch score memory data");
  }

  return res.json();
}

async function getContestOverview(contestId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contest/${contestId}`,
  );
  if (res.status == 404) {
    return res.status;
  }
  if (!res.ok) {
    throw new Error("Failed to fetch score memory data");
  }
  return res.json();
}

async function getMember(contestId: string, userId: string) {
  console.log(userId);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contest/${contestId}/participant/${userId}`,
  );

  if (!res.ok) {
    if (res.status == 404 || res.status == 400) {
      return false;
    }
    throw new Error("Failed to fetch score memory data");
  }
  return true;
}

export default function ContestDetail({
  params,
}: {
  params: { contestSlug: string };
}) {
  const currentUser = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [contestOverview, setContestOverview] = useState(null);
  const [contestObj, setContestObj] = useState(null);
  const [member, setMember] = useState(false);
  const [started, setStarted] = useState(false);
  const [ended, setEnded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState(null);
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contestObj = await getId(params.contestSlug);
        setContestObj(contestObj);
  
        if (currentUser && currentUser.uid) {
          const isJoined = await getMember(contestObj.id, currentUser.uid);
          setMember(isJoined);
        }
  
        const contestData = await getContestOverview(contestObj.id);
        setContestOverview(contestData);
  
        // Check if the contest has ended
        if (moment().isAfter(contestObj.end_time)) {
          setEnded(true);
          setCountdown("Contest has ended");
          return;
        }
  
        // Check if the contest has not started yet
        if (moment().isBefore(contestObj.start_time)) {
          const startTime = moment(contestObj.start_time);
          const intervalId = setInterval(() => {
            const now = moment();
            const duration = moment.duration(startTime.diff(now));
            const hours = duration.hours();
            const minutes = duration.minutes();
            const seconds = duration.seconds();
            setCountdown(`${hours}:${minutes}:${seconds}`);
          }, 1000);
          return () => clearInterval(intervalId);
        } else {
          // Contest has started
          const startTime = moment(contestObj.start_time);
          const intervalId = setInterval(() => {
            const now = moment();
            const duration = moment.duration(now.diff(startTime));
            const hours = duration.hours();
            const minutes = duration.minutes();
            const seconds = duration.seconds();
            setCountdown(`Duration since start: ${hours}:${minutes}:${seconds}`);
          }, 1000);
          return () => clearInterval(intervalId);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [params.contestSlug, currentUser]);
  

  if (loading || contestOverview == null) {
    return <>Loading</>;
  }

  const handleJoinContest = async () => {
    setSubmitLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contest/participant`,
        {
          method: "POST",
          body: JSON.stringify({
            contest_id: contestObj.id,
            user_id: currentUser.uid,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        setSubmitLoading(false);
        setError(`Failed to submit: ${response.statusText}`);
        return;
      }
      console.log("Join Successful");
    } catch (error) {
      setSubmitLoading(false);
      setError("An unexpected error occurred.");
    }
  };

  return (
    <Card className="container !z-0 px-6 py-8 md:mt-0">
      <h1 className="mb-8 w-full text-center text-4xl font-bold">
        Contest Information
      </h1>
      <article className="group mb-8 flex w-full flex-col gap-6">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex w-full flex-col items-center justify-center text-center ">
            <h1>{countdown && <p>{countdown}</p>}</h1>
            <a href="#">
              <h3 className="font-reguler text-2xl text-gray-900 md:text-4xl">
                {contestOverview.title}
              </h3>
            </a>
            <p className="mt-2 line-clamp-3 w-4/5  text-sm/relaxed text-gray-500">
              {contestOverview.description}
            </p>
          </div>
        </div>
        <ul className="list-disc  px-4">
          {contestOverview.details?.map((detail, index) => (
            <li key={index}>
              {detail.label}: {detail.value}
            </li>
          ))}
        </ul>
      </article>
      {!member && !ended && (
        <Button
          onClick={handleJoinContest}
          disabled={submitLoading}
          className="w-40"
        >
          Join
        </Button>
      )}
      {showModal && <ModalSucces setOpenModal={setShowModal} />}
    </Card>
  );
}
