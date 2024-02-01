import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default async function submissionDetail({
  params,
}: {
  params: { submissionId: string };
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/submission/${params.submissionId}`
  );
  const submission = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (
    <div className="w-full my-8 border rounded-lg bg-white">
      <div className="text-2xl font-bold border-b p-3">
        <h1>{submission.status}</h1>
      </div>
    </div>
  );
}
