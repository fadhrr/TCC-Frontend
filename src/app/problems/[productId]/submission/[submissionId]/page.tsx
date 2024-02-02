import React from "react";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    <Card className="w-full">
      <div className="p-3 border-b">
        <Label className="text-xl font-bold">Submission #{submission.id}</Label>
      </div>
      <div className="p-8 space-y-4">
        <div className="space-x-2">
          <Badge>{submission.status}</Badge>
          <span>-</span>
          <Label>{submission.user_id}</Label>
          <span>-</span>
          <Label>{submission.created_at}</Label>
        </div>
        <div className="space-y-1">
          <Label className="text-md font-bold">Sample Test Data Results</Label>
          <div className="p-4 bg-slate-100 border rounded-md space-y-4"></div>
        </div>
        <div className="space-y-1">
          <Label className="text-md font-bold">Test Data Results</Label>
          <div className="p-4 bg-slate-100 border rounded-md space-y-4"></div>
        </div>
        <div className="space-y-1">
          <Label className="text-md font-bold">Code:</Label>
          <div className="p-4 bg-slate-100 border rounded-md space-y-4"></div>
        </div>
      </div>
    </Card>
  );
}
