'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarRankings = () => {
  const pathname = usePathname();
  const [isActiveRatings, setIsActiveRatings] = useState(false);
  const [isActiveScores, setIsActiveScores] = useState(false);

  useEffect(() => {
    setIsActiveRatings(pathname === '/ranking');
    setIsActiveScores(pathname === '/ranking/scores');
}, [pathname]);


  return (
    <div className="m-8 border-r-2 border-black h-full w-5/6 text-[24px] pr-16 pt-[70px] md:pt-[80px]">
      <h1 className="text-[32px] font-bold">Menu</h1>
      <Link href="/ranking" className={`${isActiveRatings ? 'text-[#F7C81A]' : 'text-black'} hover:opacity-60`}>
        <p className="ml-2 mt-2 font-bold">Top Ratings</p>
      </Link>
      <Link href="/ranking/scores" className={`${isActiveScores ? 'text-[#F7C81A]' : 'text-black'} hover:opacity-60`}>
        <p className="ml-2 mt-2 font-bold">Top Scorers</p>
      </Link>
    </div>
  );
};

export default SidebarRankings;
