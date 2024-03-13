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
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contests`
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
          className="group relative w-full my-4 cursor-pointe inline-block"
        >
          <div className="relative bg-gray-50 z-10 flex flex-col overflow-hidden p-4 border-2 rounded-lg border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:gap-4">
            <div className="flex justify-start">
              <h3 className="mt-4 text-lg font-medium sm:text-xl">
                <a
                  href={`/admin/contests/edit/${article.id}`}
                  className="hover:underline"
                >
                  {article.title}
                </a>
              </h3>
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
