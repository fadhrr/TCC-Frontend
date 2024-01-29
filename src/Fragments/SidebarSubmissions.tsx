'use client'

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const SidebarSubmissions = () => {
    const pathname = usePathname();

    const [isActiveAllSubmissions, setIsActiveAllSubmissions] = useState(false);
    const [isActiveMySubmissions, setIsActiveMySubmissions] = useState(false);

    useEffect(() => {
        setIsActiveAllSubmissions(pathname === '/submissions');
        setIsActiveMySubmissions(pathname === '/submissions/mine');
    }, [pathname]);

    return (
        <div className="m-8 border-r-2 border-black h-full w-5/6 pr-16 text-[24px]">
            <h1 className="text-[32px] font-bold">Menu</h1>
            <Link
                href="/submissions"
                className={`${isActiveAllSubmissions ? 'text-[#9BC12E]' : 'text-black'} hover:opacity-60`}
            >
                <p className="ml-2 mt-2">All Submissions</p>
            </Link>
            <Link
                href="/submissions/mine"
                className={`${isActiveMySubmissions ? 'text-[#9BC12E]' : 'text-black'} hover:opacity-60`}
            >
                <p className="ml-2 mt-2">My Submissions</p>
            </Link>
        </div>
    );
};

export default SidebarSubmissions;