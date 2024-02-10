"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Card, CardContent } from "@/components/Problems/Card";
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
      <CardContent>
        <Label className="text-xl font-bold border-b">Problem</Label>
        <div className="flex flex-col space-y-2">
          <Link
            href={`/problems/${slug}`}
            className={`text-sm font-medium hover:text-black ${
              isLinkActive(`/problems/${slug}`)
                ? "font-medium"
                : "text-muted-foreground"
            }`}
          >
            Detail
          </Link>
          <Link
            href={`/problems/${slug}/submission`}
            className={`text-sm font-medium hover:text-black ${
              isLinkActive(`/problems/${slug}/submission`)
                ? "font-medium"
                : "text-muted-foreground"
            }`}
          >
            Submissions
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
