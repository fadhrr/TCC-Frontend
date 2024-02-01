"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Sidebar({ slug }) {
  const pathname = usePathname();

  // Function to tokenize the URL until the "submission" part
  const tokenizeUntilSubmission = (url) => {
    const tokens = url.split('/');
    const submissionIndex = tokens.indexOf('submission');
    if (submissionIndex !== -1) {
      return tokens.slice(0, submissionIndex + 1).join('/');
    }
    return url;
  };

  // Function to determine if a link is active based on tokenization until "submission"
  const isLinkActive = (href) => {
    return tokenizeUntilSubmission(pathname) === tokenizeUntilSubmission(href);
  };

  return (
    <div className="bg-white min-w-64 my-8 h-max border rounded-lg">
      <h1 className="text-xl p-3 font-bold w-full border-b">Problem</h1>
      <div className="flex flex-col">
        <Link
          href={`/problems/${slug}`}
          className={`text-sm border-b p-3 hover:bg-slate-100 ${
            isLinkActive(`/problems/${slug}`)
              ? "bg-slate-100 font-medium"
              : ""
          }`}
        >
          Detail
        </Link>
        <Link
          href={`/problems/${slug}/submission`}
          className={`text-sm p-3 rounded-b-lg hover:bg-slate-100 ${
            isLinkActive(`/problems/${slug}/submission`)
              ? "bg-slate-100 font-medium"
              : ""
          }`}
        >
          Submissions
        </Link>
      </div>
    </div>
  );
}
