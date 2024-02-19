"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Card, CardContent } from "@/components/problem/Card";
import { Label } from "@/components/ui/label";

export default function Sidebar({ slug }) {
  const pathname = usePathname();

  // Function to tokenize the URL until the "submission" part
  const tokenizeUntilSubmission = (url) => {
    const tokens = url.split("/");
    const submissionIndex = tokens.indexOf("submissions");
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
      <div className="p-2 border-b">
        <Label className="text-lg font-bold">Problem</Label>
      </div>
      <CardContent className="flex flex-col space-y-2">
        <Link
          href={`/problems/${slug}`}
          className={`hover:text-black ${
            isLinkActive(`/problems/${slug}`)
              ? "font-medium"
              : "text-muted-foreground"
          }`}
        >
          Detail
        </Link>
        <Link
          href={`/problems/${slug}/submissions`}
          className={`hover:text-black ${
            isLinkActive(`/problems/${slug}/submissions`)
              ? "font-medium"
              : "text-muted-foreground"
          }`}
        >
          Submissions
        </Link>
      </CardContent>
    </Card>
  );
}
