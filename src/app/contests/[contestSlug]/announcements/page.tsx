"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Card } from "@/components/problems/Card";
import moment from "moment";

async function getId(contestSlug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contest/s/${contestSlug}`,
  );
  if (res.status == 404) {
    return res;
  }
  if (!res.ok) {
    throw new Error("Failed to fetch score memory data");
  }
  return res.json();
}

async function getAnnouncemnets(contestId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contest/${contestId}/notification`,
  );
  if (res.status == 404) {
    return res.status;
  }
  if (res.status == 400) {
    return res.status;
  }
  if (!res.ok) {
    throw new Error("Failed to fetch score memory data");
  }
  return res.json();
}

export default function ContestProblem({
  params,
}: {
  params: { contestSlug: string };
}) {
  const [announcements, setAnnouncements] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const contestObj = await getId(params.contestSlug);
        const contestProbsData = await getAnnouncemnets(contestObj.id);
        setAnnouncements(contestProbsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params.contestSlug]);

  if (loading || announcements == null) {
    return <>Loading</>;
  }

  return (
    <Card className="container !z-0 px-6 py-8 md:mt-0">
      <h1 className="mb-8 w-full text-center text-4xl font-bold">
        Announcements
      </h1>

      <div className="space-y-4 text-black">
        {announcements === 404 ? ( // Check if announcements are 404
          <div>No Notification</div> // Display "No Notification" if true
        ) : (
          announcements.map(
            (
              section,
              index, // Map through announcements if not 404
            ) => (
              <div
                key={index}
                className="group block space-y-1.5 rounded-lg border-2 border-black px-5 py-3 shadow-[4px_4px_0px_rgba(0,0,0,1)]"
              >
                <div className="flex justify-between border-b-2">
                  <div className="flex space-x-4">
                    <div className="text-xs font-semibold uppercase tracking-wider">
                      {moment(section.created_at).format(
                        "HH:mm:ss, DD-MM-YYYY",
                      )}{" "}
                      {/* Display timestamp */}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider ">
                      {section.title} {/* Display title */}
                    </div>
                  </div>
                  <div>
                    <p>2 months ago</p> {/* Placeholder for time elapsed */}
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                  {section.description} {/* Display description */}
                </div>
              </div>
            ),
          )
        )}
      </div>
    </Card>
  );
}
