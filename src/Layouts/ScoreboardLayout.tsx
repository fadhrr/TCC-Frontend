'use client'

import React, { useState } from "react";

const ScoreboardLayout = () => {
  const [scoreboard, setScoreboard] = useState([
    {
      labels: [
        { label: "A", totalNilai: 100 },
        { label: "B", totalNilai: 200 },
        { label: "C", totalNilai: 250 },
        { label: "D", totalNilai: 400 },
        { label: "E", totalNilai: 550 },
        { label: "F", totalNilai: 600 },
        { label: "G", totalNilai: 700 },
        { label: "H", totalNilai: 800 },
      ],
      no: 1,
      contestant: 'Sepuh',
      total: 3600,
      total_time: '01:11',
      details: [
        { top: '+', bottom: '00:02' },
        { top: '+1', bottom: '00:05' },
        { top: '+', bottom: '00:09' },
        { top: '+', bottom: '00:17' },
        { top: '+', bottom: '00:28' },
        { top: '+', bottom: '00:43' },
        { top: '+1', bottom: '00:52' },
        { top: '+', bottom: '01:07' }
      ]
    },
    {
      no: 2,
      contestant: 'Michel',
      total: 3600,
      total_time: '01:18',
      details: [
        { top: '+', bottom: '00:02' },
        { top: '+', bottom: '00:03' },
        { top: '+', bottom: '00:07' },
        { top: '+', bottom: '00:17' },
        { top: '+', bottom: '00:27' },
        { top: '+', bottom: '00:40' },
        { top: '+', bottom: '01:04' },
        { top: '+', bottom: '01:18' }
      ]
    },
    {
      no: 3,
      contestant: 'Andi',
      total: 2100,
      total_time: '01:35',
      details: [
        { top: '+', bottom: '00:02' },
        { top: '+1', bottom: '00:05' },
        { top: '+', bottom: '00:12' },
        { top: '+1', bottom: '00:33' },
        { top: '+', bottom: '01:06' },
        { top: '+1', bottom: '01:23' },
        { top: '+3', bottom: '-' },
        { top: '-', bottom: '-' }
      ]
    }
  ]);

  return (
    <div>
      <h1 className="text-3xl font-bold font-lato">The final round of who will be the Sepuh</h1>
      <div className="table-wrapper">
        <h1 className=" mt-5 text-2xl">Scoreboard</h1>
        <table className="w-full border-separate border-spacing-y-3 table-auto">
          <thead>
            <tr>
              <th>#</th>
              <th className="text-left pl-3">Contestant</th>
              <th>Total</th>
              {scoreboard[0].labels.map((label, index) => (
                <th key={index}>
                  {label.label} <p>{label.totalNilai}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-center">
            {scoreboard.map((item, index) => (
              <tr key={index}>
                <td className="bg-[#4D4D4D] text-white border-y-2 border-s-2 border-black h-10 w-10">
                  {item.no}
                </td>
                <td className="border-y-2 border-black text-left pl-3">
                  {item.contestant}
                </td>
                <td className="border-y-2 border-e-2 border-black">
                  {item.total}
                </td>
                {item.details.map((detail, detailIndex) => (
                  <td key={detailIndex} className={`border-y-2 border-e-2 border-black ${detail.bottom === '-' && detail.top === '-' ? 'bg-[#4D4D4D] text-white' : detail.bottom === '-' ? ' bg-[#E36262] text-white' : 'bg-[#E1FDD7]'}`}>
                    <span className="font-bold">{detail.top}</span>
                    <p>{detail.bottom}</p>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScoreboardLayout;
