'use client'

import Link from "next/link";
import React from "react";
import Image from "next/image";
import ContesCard from "@/components/Contest/ContestCard";

const page = () => {
  return (
  <div className="w-full my-10">
    <div className="pt-[70px] md:pt-[80px]">
        <h1 className="text-3xl font-bold lg:text-4xl">
            <span className="underline decoration-blue-500">Contests List</span>
        </h1>
        <p className="mt-4 mb-2">Create Contest</p>
        <Link href="/" className="hover:opacity-70 ml-1 ">
            <div className="inline-block px-9 py-2 mt-2 mb-3 w-fit text-gray-900 bg-white border border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm me-2">
                <Image src='/assets/icons/pen.svg' alt="icon" width={15} height={15}/>
            </div>
        </Link>
    </div>
    <ContesCard/>
  </div>
  );
};

export default page;
