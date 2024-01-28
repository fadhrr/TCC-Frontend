'use client'

import React, {useState} from "react";

const ScorersLayout = () => {
    const [data, setData] = useState(
        [
            { id: 1, name: "Sepuh", score: 2000000 },
            { id: 2, name: "Michel", score: 1500000 },
            { id: 3, name: "Andi", score: 1000000 },
            { id: 4, name: "Ridwan", score: 1000000 },
            { id: 5, name: "Putri", score: 1000000 },
            { id: 6, name: "Sepuh", score: 1000000 },
            { id: 7, name: "Michel", score: 1000000 },
            { id: 8, name: "Andi", score: 1000000 },
            { id: 9, name: "Ridwan", score: 1000000 },
            { id: 10, name: "Putri", score: 1000000 },
        ]
    );

  return (
    <div>
        <h1 className="text-[64px] font-bold font-lato">Rankings</h1>
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
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className={`bg-[#4D4D4D] text-white border-y-2 border-s-2 border-black h-10 w-10`}>
                                {item.id}
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
  )
};

export default ScorersLayout;
