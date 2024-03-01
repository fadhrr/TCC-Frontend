'use client'

import React, { useEffect, useState } from "react";

const ScoreboardLayout = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
      const getScoreboard =async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contest/1/scoreboard`)
          const data = await response.json();
          setData(data);
        } catch (error) {
          console.log("error fetching scoreboard", error);
        }
       
      };
    getScoreboard();
  }, []);
  
  return (
    <div>
      <div className="table-wrapper">
        <h1 className=" mt-5 text-2xl">Scoreboard</h1>
          <table className="mt-4 w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Participant</th>
              {data && data.contestants.length > 0 && data.contestants[0].problems.map((problem) => (
                <th key={problem.problem_id}>Problem {data.problem_length > 5 ? <br/>: ''} {problem.problem_id}</th>
              ))}
            </tr>
          </thead>
          <tbody className="text-center">
            {data && data.contestants && data.contestants.length > 0 && data.contestants[0].problems && (
              data.contestants.map((contestant, index) => (
                <tr key={index}>
                  {index === 0 && (
                    <td className="bg-[#4D4D4D] text-white border-y-2 border-s-2 border-black min-w-[25px] font-semibold" rowSpan={data.contestants_length}>
                      {data.contest.id}
                    </td>
                  )}
                  <td className="border-2 border-black">{contestant.user.username}</td>
                  {contestant.problems.map((problem, problemIndex) => {
                    let cellClassName = 'border-2 border-black font-semibold';
                    if (problem.status === 'Not Attempted') {
                      cellClassName += '';
                    } else if (problem.status === 'WA') {
                      cellClassName += ' bg-[#E36262]';
                    } else if (problem.status === 'RTE') {
                      cellClassName += ' bg-[#FCF55F]';
                    } else {
                      cellClassName += ' bg-[#22C55E] text-white';
                    }
                    return (
                      <td key={problemIndex} className={cellClassName}>
                      {problem.attempted > 0 && (
                        <React.Fragment>
                          <div>{problem.status}</div>
                          <p>{problem.attempted > 0 ? `+${problem.attempted}` : ''}</p>
                        </React.Fragment>
                      )}
                    </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScoreboardLayout;
