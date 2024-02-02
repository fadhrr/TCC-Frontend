"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function Sidebar({ slug }) {
  const pathname = usePathname();

  // Function to tokenize the URL until the "submission" part
  const tokenizeUntilSubmission = (url) => {
    const tokens = url.split("/");
    const submissionIndex = tokens.indexOf("submission");
    if (submissionIndex !== -1) {
      return tokens.slice(0, submissionIndex + 1).join("/");
    }
    return url;
  };

  // Function to determine if a link is active based on tokenization until "submission"
  const isLinkActive = (href) => {
    return tokenizeUntilSubmission(pathname) === tokenizeUntilSubmission(href);
  };

  return (
    <Card>
      <div className="p-3 border-b">
        <Label className="text-xl font-bold">Problem</Label>
      </div>
      <div className="flex flex-col">
        <Link
          href={`/problems/${slug}`}
          className={`text-sm  border-b p-3 hover:bg-muted ${
            isLinkActive(`/problems/${slug}`)
              ? "bg-muted font-medium"
              : "text-muted-foreground"
          }`}
        >
          Detail
        </Link>
        <Link
          href={`/problems/${slug}/submission`}
          className={`text-sm p-3 rounded-b-lg hover:bg-muted ${
            isLinkActive(`/problems/${slug}/submission`)
              ? "bg-muted font-medium"
              : "text-muted-foreground"
          }`}
        >
          Submissions
        </Link>
      </div>
    </Card>
  );
}
