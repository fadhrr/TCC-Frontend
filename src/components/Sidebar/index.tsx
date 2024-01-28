import React, { useState } from "react";
// import { problemLinks } from "@/Data/data.js";
import Link from "next/link";
// import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-1/5 my-8">
      <h1 className="text-3xl font-bold w-full mb-4">Problem</h1>

      <Link href={"/problem/slug/detail"} className="hover:text-[#FFC900]">
        <p className="text-md ml-2 mt-2">Detail</p>
      </Link>
      <Link href={"/problem/slug/submission"} className="hover:text-[#FFC900]">
        <p className="text-md ml-2 mt-2">Submission</p>
      </Link>
      {/* {problemLinks.map((problemLink) => (
            <Link href={problemLink.link} className="hover:text-[#FFC900]">
              <p className="text-l ml-2 mt-2">{problemLink.title}</p>
            </Link> 
          ))} */}
    </div>
  );
}
