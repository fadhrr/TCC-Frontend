import React, { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-0 md:w-1/5 my-8 md:block hidden sticky h-[calc(100vh-55px)]top-[55px">
      <h1 className="text-3xl font-bold w-full mb-4">Problem</h1>

      <Link href={'/problems/slug/detail'} className="hover:text-[#FFC900] focus:text-[#FFC900]">
        <p className="text-md ml-2 mt-2">Detail</p>
      </Link>
      <Link href={'/problems/slug/submission'} className="hover:text-[#FFC900] focus:text-[#FFC900]">
        <p className="text-md ml-2 mt-2 ">Submission</p>
      </Link>
    </div>
  );
}
