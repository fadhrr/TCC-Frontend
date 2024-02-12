'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const AdminProblemsLayout = ({url_create}:any) => {
    const [data, setData] = useState(
        [
            { id: 1011010,  problems: "Tugas Menumpuk", submitted: 40},
            { id: 1011011,  problems: "Tugas Menumpuk", submitted: 30},
            { id: 1011012,  problems: "Tugas Menumpuk", submitted: 10},
            { id: 1011013,  problems: "Tugas Menumpuk", submitted: 30},
            { id: 1011014,  problems: "Tugas Menumpuk", submitted: 20},
            { id: 1011015,  problems: "Tugas Menumpuk", submitted: 35},
            { id: 1011016,  problems: "Tugas Menumpuk", submitted: 41},
            { id: 1011017,  problems: "Tugas Menumpuk", submitted: 19},
            { id: 1011018,  problems: "Tugas Menumpuk", submitted: 20},
            { id: 1011019,  problems: "Tugas Menumpuk", submitted: 10},
        ]
    );
    
  return (
<div>
    <div className="pt-[70px] md:pt-[80px]">
        <h1 className="text-3xl font-bold lg:text-4xl">
            <span className="underline decoration-blue-500">Problems List</span>
        </h1>
        <p className="mt-4 mb-2">Create problem</p>
        <Link href={url_create} className="hover:opacity-70 ml-1 ">
            <div className="inline-block px-9 py-2 mt-2 mb-3 w-fit text-gray-900 bg-white border border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm me-2">
                <Image src='/assets/icons/pen.svg' alt="icon" width={15} height={15}/>
            </div>
        </Link>
      
    </div>
    <div className="table-wrapper">
        <table className="w-full border-separate border-spacing-y-3">
            <thead>
                <tr className="text-left">
                    <th className="pl-3">Id</th>
                    <th>Problems</th>
                    <th>Submitted</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index} className={index%2 === 0? 'bg-white' : 'bg-[#EDEDED]'}>
                        <td className="border-y-2 border-s-2 border-black h-10 pl-3">
                            {item.id}
                        </td>
                        <td className="border-y-2 border-black">
                            {item.problems}
                        </td>
                        <td className="border-y-2 border-black">
                            {item.submitted}
                        </td>
                        <td className="border-y-2 border-r-2 border-black">
                            <div className="flex space-x-3">
                                <a href="" className="">
                                    <Image alt="edit" src="/assets/icons/edit.svg" width={20} height={20} className="hover:opacity-65"/>
                                </a>
                                <button type="submit" className="">
                                    <Image alt="remove" src="/assets/icons/trash.svg" width={20} height={20} className="hover:opacity-65"/>
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>
  );
};

export default AdminProblemsLayout;
