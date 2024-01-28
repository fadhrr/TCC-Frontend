"use client";
import React, { useState } from "react";
// import { problemLinks } from '@/Data/data.js';

export default function ProblemSubmission() {
  const [currentTab, setCurrentTab] = useState(1);

  const toogleTab = (index) => {
    setCurrentTab(index);
  };

  const data = [
    {
      id: 1011010,
      user: "Sepuh",
      archive: "Tester",
      problems: "Tugas Menumpuk",
      lang: "C++",
      verdict: "Act",
      pts: 100,
      time: "1 Min ago",
    },
    {
      id: 1011011,
      user: "Yelan",
      archive: "Tester",
      problems: "Tugas Menumpuk",
      lang: "C++",
      verdict: "Act",
      pts: 100,
      time: "1 Min ago",
    },
    {
      id: 1011012,
      user: "Furina",
      archive: "Tester",
      problems: "Tugas Menumpuk",
      lang: "C++",
      verdict: "Act",
      pts: 100,
      time: "1 Min ago",
    },
    {
      id: 1011013,
      user: "Diluc",
      archive: "Tester",
      problems: "Tugas Menumpuk",
      lang: "C++",
      verdict: "Act",
      pts: 100,
      time: "1 Min ago",
    },
    {
      id: 1011014,
      user: "Raiden Ei",
      archive: "Tester",
      problems: "Tugas Menumpuk",
      lang: "C++",
      verdict: "Act",
      pts: 100,
      time: "1 Min ago",
    },
    {
      id: 1011015,
      user: "Neuvilette",
      archive: "Tester",
      problems: "Tugas Menumpuk",
      lang: "C++",
      verdict: "Act",
      pts: 100,
      time: "1 Min ago",
    },
    {
      id: 1011016,
      user: "Venti",
      archive: "Tester",
      problems: "Tugas Menumpuk",
      lang: "C++",
      verdict: "Act",
      pts: 100,
      time: "1 Min ago",
    },
    {
      id: 1011017,
      user: "Kazuha",
      archive: "Tester",
      problems: "Tugas Menumpuk",
      lang: "C++",
      verdict: "Act",
      pts: 100,
      time: "1 Min ago",
    },
    {
      id: 1011018,
      user: "Hu Tao",
      archive: "Tester",
      problems: "Tugas Menumpuk",
      lang: "C++",
      verdict: "Act",
      pts: 100,
      time: "1 Min ago",
    },
    {
      id: 1011019,
      user: "Fagih",
      archive: "Tester",
      problems: "Tugas Menumpuk",
      lang: "C++",
      verdict: "Act",
      pts: 100,
      time: "1 Min ago",
    },
  ];

  const desc = [
    {
      id: 1,
      name: "Asep",
      lang: "C++",
      time: "Oct 9, 2023 at 22:23:13",
      status: "ACC",
    },
  ];

  const result = [
    { id: 1, status: "Acc", time: "2ms", memory: "100 KB", score: "50.0" },
    { id: 2, status: "Acc", time: "2ms", memory: "100 KB", score: "50.0" },
  ];

  return (
    <div className="w-full my-8">
      <div className="flex justify-center">
        <button
          className={`${
            currentTab === 1
              ? "border-2 border-black py-1 px-2 rounded-l-full bg-[#FFC900]"
              : "border-2 border-black py-1 px-2 rounded-l-full hover:bg-[#FFC900]"
          }`}
          onClick={() => toogleTab(1)}
        >
          My Submision
        </button>
        {/* <span className='border-l-2 border-black'></span> */}
        <button
          className={`${
            currentTab === 2
              ? "border-2 border-black border-l-0 py-1 px-2 rounded-r-full bg-[#FFC900]"
              : "border-2 border-black border-l-0 py-1 px-2 rounded-r-full hover:bg-[#FFC900]"
          }`}
          onClick={() => toogleTab(2)}
        >
          All Submissions
        </button>
      </div>

      {/* My Subs Page */}
      <div className={`${currentTab === 1 ? "" : "hidden"}`}>
        <div>
          <p className="text-4xl font-bold w-full my-4">Problem name</p>
        </div>

        <div className="">
          {desc.map((item, index) => (
            <p key={index} className="text-sm text-slate-800 w-full my-4">
              Name : {item.name} <br />
              Language: {item.lang} <br />
              Time : {item.time} <br />
              Status : {item.status}
            </p>
          ))}
        </div>

        <div className="py-4">
          <h1 className="text-xl font-bold">Test Result</h1>
          <div className="table-wrapper">
            <table className="w-full border-separate border-spacing-y-3">
              <thead>
                <tr className="text-left">
                  <th className="pl-3">Id</th>
                  <th>Status</th>
                  <th>Time</th>
                  <th>Memory</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {result.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-[#EDEDED]"}
                  >
                    <td
                      className={`border-y-2 border-s-2 border-black h-10 pl-3`}
                    >
                      {item.id}
                    </td>
                    <td className={`border-y-2 border-black`}>{item.status}</td>
                    <td className={`border-y-2 border-black`}>{item.time}</td>
                    <td className={`border-y-2 border-black`}>{item.memory}</td>
                    <td className={`border-y-2 border-r-2 border-black`}>
                      {item.score}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold">Solution</h1>
          <object
            className="mt-4 border-2 border-black w-full"
            data="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"
            height="720"
          ></object>
        </div>
      </div>

      {/* All Subs Page */}
      <div className={`${currentTab === 2 ? "" : "hidden"}`}>
        <div>
          <p className="text-4xl font-bold w-full my-4">Problem name</p>
        </div>

        <div className="py-2">
          <h1 className="text-xl font-bold">All Submissions</h1>

          <div className="table-wrapper">
            <table className="w-full border-separate border-spacing-y-3">
              <thead>
                <tr className="text-left">
                  <th className="pl-3">Id</th>
                  <th>User</th>
                  <th>Archive</th>
                  <th>Problems</th>
                  <th>Lang</th>
                  <th>Verdict</th>
                  <th>Pts</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-[#EDEDED]"}
                  >
                    <td
                      className={`border-y-2 border-s-2 border-black h-10 pl-3`}
                    >
                      {item.id}
                    </td>
                    <td className={`border-y-2 border-black`}>{item.user}</td>
                    <td className={`border-y-2 border-black`}>
                      {item.archive}
                    </td>
                    <td className={`border-y-2 border-black`}>
                      {item.problems}
                    </td>
                    <td className={`border-y-2 border-black`}>{item.lang}</td>
                    <td className={`border-y-2 border-black`}>
                      {item.verdict}
                    </td>
                    <td className={`border-y-2 border-black`}>{item.pts}</td>
                    <td className={`border-y-2 border-e-2 border-black`}>
                      {item.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
