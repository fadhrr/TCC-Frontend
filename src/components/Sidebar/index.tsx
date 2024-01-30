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
    <div className="min-w-64 my-8 h-max border rounded-lg">
      <h1 className="text-2xl p-2 font-bold w-full border-b">Problem</h1>
      <div className="flex flex-col">
        <Link
          href={`/problems/detail/${slug}`}
          className={`text-md border-b p-2 hover:bg-slate-50 ${
            isLinkActive(`/problems/detail/${slug}`)
              ? "bg-slate-50 font-bold"
              : ""
          }`}
        >
          Detail
        </Link>
        <Link
          href={`/problems/detail/${slug}/submission`}
          className={`text-md p-2 hover:bg-slate-50 ${
            isLinkActive(`/problems/detail/${slug}/submission`)
              ? "bg-slate-50 font-bold"
              : ""
          }`}
        >
          Submission
        </Link>
      </div>
    </div>
  );
}
