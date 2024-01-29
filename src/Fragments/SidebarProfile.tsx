'use client'

import React, {useState, useEffect} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarProfile = () => {  
  const pathname = usePathname();

  const [isActiveSummary, setIsActiveSummary] = useState(false);
  const [isActiveSubmission, setIsActiveSubmission] = useState(false);

  useEffect(() => {
    setIsActiveSummary(pathname === '/user');
    setIsActiveSubmission(pathname === '/user/submission');
  }, [pathname]);
  

  return (
    <div className="m-8 border-r-2 border-black h-full w-5/6 text-[24px] pr-16">
        <h1 className="text-[32px] font-bold">Menu</h1>
        <Link href="/user" className={`${isActiveSummary ? 'text-[#9BC12E]' : 'text-black'} hover:opacity-60`}>
            <p className="ml-2 mt-2">Summary</p>
        </Link>
        <Link href="/user/submission" className={`${isActiveSubmission ? 'text-[#9BC12E]' : 'text-black'} hover:opacity-60`}>
            <p className="ml-2 mt-2">Submission</p>
        </Link>
    </div>
  );
};

export default SidebarProfile;
