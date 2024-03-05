"use client";
// import ScoreboardLayout from '@/Layouts/ScoreboardLayout';
import { Card } from "@/components/problems/Card";
import { useState, useEffect } from "react";

const data = {
  id: 1,
  name: "tesssss",
  problem_length: 1,
  contest: {
    id: 1,
  },
  contestants: [
    {
      user: {
        username: "testName",
      },
      problems: [
        {
          problem_id: 1,
          status: "null",
          attempted: 0,
        },
      ],
      length: 2,
    },
  ],
  contestants_length: 5,
};
// Tambahkan package lain jika diperlukan

async function getScoreBoards(contestId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contest/${1}/scoreboard`
  );
  if (res.status == 404) {
    return res.status;
  }
  if (!res.ok) {
    throw new Error("Failed to fetch score memory data");
  }
  return res.json();
}

const Scoreboard = ({ params }: { params: { contestId: string } }) => {
  const [scoreBoards, setScoreBoards] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const scoreBoardsData = await getScoreBoards(params.contestId);
  //       setScoreBoards(scoreBoardsData);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, [params.contestId]);

  // if (loading || scoreBoards == null) {
  //   return <>Loading</>;
  // }

  return (
    <Card className="w-full container md:mt-0 !z-0 py-8 px-6">
      <h1 className="text-3xl font-bold font-lato">
        The final round of who will be the Sepuh
      </h1>
      <div className="table-wrapper">
        <h1 className=" mt-5 text-2xl">Scoreboard</h1>
        <table className="mt-4 w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Participant</th>
              {data &&
                data.contestants.length > 0 &&
                data.contestants[0].problems.map((problem) => (
                  <th key={problem.problem_id}>
                    Problem {data.problem_length > 5 ? <br /> : ""}{" "}
                    {problem.problem_id}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody className="text-center">
            {data &&
              data.contestants &&
              data.contestants.length > 0 &&
              data.contestants[0].problems &&
              data.contestants.map((contestant, index) => (
                <tr key={index}>
                  {index === 0 && (
                    <td
                      className="bg-[#4D4D4D] text-white border-y-2 border-s-2 border-black min-w-[25px] font-semibold"
                      rowSpan={data.contestants_length}
                    >
                      {data.contest.id}
                    </td>
                  )}
                  <td className="border-2 border-black">
                    {contestant.user.username}
                  </td>
                  {contestant.problems.map((problem, problemIndex) => {
                    let cellClassName = "border-2 border-black font-semibold";
                    if (problem.status === "Not Attempted") {
                      cellClassName += "";
                    } else if (problem.status === "WA") {
                      cellClassName += " bg-[#E36262]";
                    } else if (problem.status === "RTE") {
                      cellClassName += " bg-[#FCF55F]";
                    } else {
                      cellClassName += " bg-[#22C55E] text-white";
                    }
                    return (
                      <td key={problemIndex} className={cellClassName}>
                        {problem.attempted > 0 && (
                          <>
                            <div>{problem.status}</div>
                            <p>
                              {problem.attempted > 0
                                ? `+${problem.attempted}`
                                : ""}
                            </p>
                          </>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default Scoreboard;
