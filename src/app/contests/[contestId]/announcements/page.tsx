"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Card } from "@/components/problems/Card";

const announcements = [
  {
    id: 1,
    name: "tesssss",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, velit! Dolorum dolore rem odio dicta, error voluptatum quaerat sint eius architecto eveniet nemo quae, asperiores tenetur nulla ut magni fuga?",
    time: "13/4/2023 20:53",
  },
  {
    id: 2,
    name: "tesssss",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, velit! Dolorum dolore rem odio dicta, error voluptatum quaerat sint eius architecto eveniet nemo quae, asperiores tenetur nulla ut magni fuga?",
    time: "13/4/2023 20:53",
  },
  {
    id: 3,
    name: "tesssss",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, velit! Dolorum dolore rem odio dicta, error voluptatum quaerat sint eius architecto eveniet nemo quae, asperiores tenetur nulla ut magni fuga?",
    time: "13/4/2023 20:53",
  },
  {
    id: 4,
    name: "tesssss",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, velit! Dolorum dolore rem odio dicta, error voluptatum quaerat sint eius architecto eveniet nemo quae, asperiores tenetur nulla ut magni fuga?",
    time: "13/4/2023 20:53",
  },
  // Tambahkan package lain jika diperlukan
];

export default function ContestProblem({
  params,
}: {
  params: { contestId: string };
}) {
  //   const [announcements, setAnnouncements] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   if (loading || announcements == null) {
  //     return <>Loading</>;
  //   }

  return (
    <Card className="container md:mt-0 !z-0 py-8 px-6">
      <h1 className="text-4xl font-bold text-center w-full mb-8">
        Announcements
      </h1>

      <div className="space-y-4 text-black">
        {announcements.map((section, index) => (
          <div
            key={index}
            className="group block space-y-1.5 rounded-lg  px-5 py-3 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"
          >
            <div className="flex border-b-2 justify-between">
              <div className="flex space-x-4">
                <div className="text-xs font-semibold uppercase tracking-wider">
                  {section.time}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider ">
                  {section.name}
                </div>
              </div>
              <div>
                <p>2 months ago</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {section.description}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
