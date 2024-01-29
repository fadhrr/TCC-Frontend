"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Sidebar({ slug }) {
  // const router = useRouter();
  const pathname = usePathname();

  // Function to determine if a link is active
  const isLinkActive = (href: string) => {
    return pathname === href;
  };

  return (
    <div className="w-1/5 my-8">
      <h1 className="text-3xl font-bold w-full mb-4">Problem</h1>
      <div className="flex flex-col">
        <Link
          href={`/problems/detail/${slug}`}
          className={`text-md ml-2 mt-2 ${
            isLinkActive(`/problems/detail/${slug}`) ? "text-[#FFC900]" : ""
          }`}
        >
          Detail
        </Link>
        <Link
          href={`/problems/detail/${slug}/submission`}
          className={`text-md ml-2 mt-2 ${
            isLinkActive(`/problems/detail/${slug}/submission`)
              ? "text-[#FFC900]"
              : ""
          }`}
        >
          Submission
        </Link>
      </div>
    </div>
  );
}
