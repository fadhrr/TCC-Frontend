"use client";
import React, { useEffect, useState } from "react";
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
  if (res.status == 404 || res.status == 400) {
    return false;
  }
  if (!res.ok) {
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
  const [member, setmember] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const contestObj = await getId(params.contestSlug);
        setContestObj(contestObj);
        if (currentUser && currentUser.uid) {
          const isJoined = await getMember(contestObj.id, currentUser.uid);
          console.log(isJoined);
          setmember(isJoined)
        }
        const contestData = await getContestOverview(contestObj.id);
        setContestOverview(contestData);
      };
      fetchData();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [params.contestSlug, currentUser]);

  if (loading || contestOverview == null) {
    return <>Loading</>;
  }

  const handleJoinContest = async (e) => {
    console.log(currentUser.uid);
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
        // Instead of throwing an error, set the error message directly
        setSubmitLoading(false);
        setError(`Failed to submit: ${response.statusText}`);
        return;
      }
      console.log("Join Successfull");
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
      {/* {contestOverview.map((article, index) => ( */}
      <article className="group mb-8 flex w-full flex-col gap-6">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex w-full flex-col items-center justify-center text-center ">
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
      {/* ))} */}
      {!member && (
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
