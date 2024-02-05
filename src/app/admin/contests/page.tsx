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
        <Link href="/" className="hover:opacity-70 ml-1">
            <div className="inline-block px-7 py-2 border-gray-600 border-2 my-2 bg-black w-fit">
                <Image src="/assets/icons/pen.svg" alt="icon" width={15} height={15}/>
            </div>
        </Link>
    </div>
    <ContesCard/>
  </div>
  );
};

export default page;
