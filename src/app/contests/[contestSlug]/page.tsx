"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ModalSucces } from "@/components/ui/modal";
import Image from "next/image";
import { Card } from "@/components/problems/Card";

async function getId(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contest/s/${slug}`
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
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contest/${contestId}`
  );
  if (res.status == 404) {
    return res.status;
  }
  if (!res.ok) {
    throw new Error("Failed to fetch score memory data");
  }
  return res.json();
}

export default function ContestDetail({
  params,
}: {
  params: { contestSlug: string };
}) {
  const [showModal, setShowModal] = useState(false);
  const [contestOverview, setContestOverview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contestObj = await getId(params.contestSlug);
        const contestData = await getContestOverview(contestObj.id);
        setContestOverview(contestData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params.contestSlug]);

  if (loading || contestOverview == null) {
    return <>Loading</>;
  }

  return (
    <Card className="container md:mt-0 !z-0 py-8 px-6">
      <h1 className="text-4xl font-bold text-center w-full mb-8">
        Contest Information
      </h1>
      {/* {contestOverview.map((article, index) => ( */}
        <article className="group w-full flex-col flex gap-6 mb-8">
          <div className="flex gap-8 justify-center items-center flex-col">
            <div className="w-full flex text-center items-center justify-center flex-col ">
              <a href="#">
                <h3 className="md:text-4xl text-2xl font-reguler text-gray-900">
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
      <Button
        className="w-40"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Join
      </Button>
      {showModal && <ModalSucces setOpenModal={setShowModal} />}
    </Card>
  );
}
