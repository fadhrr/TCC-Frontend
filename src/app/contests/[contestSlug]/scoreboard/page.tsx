"use client";
// import ScoreboardLayout from '@/Layouts/ScoreboardLayout';
import { Card } from "@/components/problems/Card";
import { useState, useEffect } from "react";

async function getId(contestSlug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contest/s/${contestSlug}`
  );
  if (res.status == 404) {
    return res.status;
  }
  if (!res.ok) {
    throw new Error("Failed to fetch score memory data");
  }
  return res.json();
}

async function getScoreBoards(contestId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contest/${contestId}/scoreboard`
  );
  if (res.status == 404) {
    return res.status;
  }
  if (!res.ok) {
    throw new Error("Failed to fetch score memory data");
  }
  return res.json();
}

const Scoreboard = ({ params}: { params: { contestSlug: string } }) => {
  const [scoreBoards, setScoreBoards] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const contestObj = await getId(params.contestSlug);
        const scoreBoardsData = await getScoreBoards(contestObj.id);
        setScoreBoards(scoreBoardsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params.contestSlug]);

  if (loading || scoreBoards == null) {
    return <>Loading</>;
  }

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
              {scoreBoards &&
                scoreBoards.contestants.length > 0 &&
                scoreBoards.contestants[0].problems.map((problem) => (
                  <th key={problem.problem_id}>
                    Problem {scoreBoards.problem_length > 5 ? <br /> : ""}{" "}
                    {problem.problem_id}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody className="text-center">
            {scoreBoards &&
              scoreBoards.contestants &&
              scoreBoards.contestants.length > 0 &&
              scoreBoards.contestants[0].problems &&
              scoreBoards.contestants.map((contestant, index) => (
                <tr key={index}>
                  <td className="bg-[#4D4D4D] text-white border-y-2 border-s-2 border-black min-w-[25px] font-semibold">
                    {index + 1}
                  </td>
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
