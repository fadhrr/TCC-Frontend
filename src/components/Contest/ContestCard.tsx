"use client";

import { useEffect, useState } from "react";

const formatDeadline = (deadline: string): string => {
  const deadlineDate = new Date(deadline);

  if (isNaN(deadlineDate.getTime())) {
    return "Invalid Deadline";
  }

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };

  return new Intl.DateTimeFormat("id-ID", options).format(deadlineDate);
};

export default function ContesCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contests`,
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log("Error fetching data ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="px-8">
      {data.map((article, index) => (
        <article
          key={index}
          className="cursor-pointe group relative my-4 inline-block w-full"
        >
          <div className="relative z-10 flex flex-col overflow-hidden rounded-lg border-2 border-black bg-gray-50 p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:gap-4">
            <div className="flex justify-between">
              <div>
                <h3 className="text-lg font-medium sm:text-xl">
                  {article.title}
                </h3>
              </div>
              <div className="flex space-x-2">
                <h4 className="opacity-70">
                  <a
                    href={`/admin/contests/${article.id}/problem/create`}
                    className="hover:underline hover:opacity-100"
                  >
                    Add problems
                  </a>
                </h4>
                <h4 className="opacity-70">Add Announcements</h4>
              </div>
            </div>
            <p className="mt-1 text-sm text-gray-700">{article.description}</p>
            <div className="mt-4 flex gap-2 sm:items-center">
              <div className="flex items-center gap-1 p-1 text-gray-500">
                <p className="text-xs font-medium">
                  {formatDeadline(article.start_time)}
                </p>
                <span>|</span>

                <p className="text-xs font-medium">
                  {formatDeadline(article.end_time)}
                </p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
