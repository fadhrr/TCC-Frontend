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
    <div className="bg-white min-w-64 my-8 h-max border rounded-lg">
      <h1 className="text-xl p-3 font-bold w-full border-b">Problem</h1>
      <div className="flex flex-col">
        <Link
          href={`/problems/detail/${slug}`}
          className={`text-sm border-b p-3 hover:bg-slate-100 ${
            isLinkActive(`/problems/detail/${slug}`)
              ? "bg-slate-100 font-bold"
              : ""
          }`}
        >
          Detail
        </Link>
        <Link
          href={`/problems/detail/${slug}/submission`}
          className={`text-sm p-3 rounded-b-lg hover:bg-slate-100 ${
            isLinkActive(`/problems/detail/${slug}/submission`)
              ? "bg-slate-100 font-bold"
              : ""
          }`}
        >
          Submission
        </Link>
      </div>
    </div>
  );
}
