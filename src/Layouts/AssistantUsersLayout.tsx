'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const AssistantUserLayout = () => {
    const [data, setData] = useState(
        [
            { id: 1011010,  nama: "Sepuh", submitted: "20" },
            { id: 1011011,  nama: "Andi", submitted: "40"},
            { id: 1011012,  nama: "Sepuh", submitted: "20" },
            { id: 1011013,  nama: "Andi", submitted: "40"},
            { id: 1011014,  nama: "Michel", submitted: "20" },
            { id: 1011015,  nama: "Ridwan", submitted: "20" },
            { id: 1011016,  nama: "Sepuh", submitted: "18"},
            { id: 1011017,  nama: "Andi", submitted: "18"},
            { id: 1011018,  nama: "Michael", submitted: "18"},
            { id: 1011019,  nama: "Rifa", submitted: "18"},
        ]
    );

    

return (
<div>
    <div className="pt-[70px] md:pt-[80px] mb-5">
        <h1 className="text-3xl font-bold lg:text-4xl">
            <span className="underline decoration-blue-500">Users List</span>
        </h1>
    </div>
    <div className="table-wrapper">
        <table className="w-full border-separate border-spacing-y-3">
            <thead>
                <tr className="text-left">
                    <th className="pl-3">Id</th>
                    <th>Name</th>
                    <th>Submitted</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index} className={index%2 === 0? 'bg-white' : 'bg-[#EDEDED]'}>
                        <td className={`border-y-2 border-s-2 border-black h-10 pl-3`}>
                            {item.id}
                        </td>
                        <td className={`border-y-2 border-black`}>
                            {item.nama}
                        </td>
                        <td className={`border-y-2 border-r-2 border-black`}>
                            {item.submitted}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>
);
};

export default AssistantUserLayout;
