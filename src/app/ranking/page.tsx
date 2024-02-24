'use client'

import React, {useState, useEffect} from "react";
import { Card } from "@/components/problems/Card";


const Scorers = () => {
    const [leaderboard, setLeaderboard] = useState([]);
    

    useEffect(() => {
      const fetchData =async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/leaderboard`)
            const data = await response.json();
            setLeaderboard(data);
        } catch (error) {
            console.log(`error fetching leaderboard: ${error.message}`)
        }
      }
      fetchData();
    }, []);
    

  return (
    <div className="container flex mx-auto mb-8 space-x-4 mt-28">
      <Card className="w-full">
         <div className="m-10">
          <h1 className="text-3xl font-bold lg:text-4xl">
              <span className="underline decoration-blue-500">Rankings</span>
          </h1>
          <div className="table-wrapper">
              <table className="w-full border-separate border-spacing-y-3 table-auto">
                  <thead>
                      <tr>
                          <th>#</th>
                          <th className="text-left pl-3">Name</th>
                          <th>Score</th>
                      </tr>
                  </thead>
                  <tbody className="text-center">
                      {leaderboard.map((item, index) => (
                          <tr key={index}>
                              <td className={`bg-[#4D4D4D] text-white border-y-2 border-s-2 border-black h-10 w-10`}>
                                  {index+1}
                              </td>
                              <td className={`border-y-2 border-black text-left pl-3 w-2/3`}>
                                  {item.name}
                              </td>
                              <td className={`border-y-2 border-e-2 border-black`}>
                                  {item.score}
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      </div>
      </Card>
    </div>
   
  )
};

export default Scorers;
