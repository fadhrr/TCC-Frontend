import React from "react";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import moment from "moment";

async function getSubmission(submissionId: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/submission/${submissionId}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getUser(submissionId: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/${submissionId}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function submissionDetail({
  params,
}: {
  params: { submissionId: string };
}) {
  const submission = await getSubmission(params.submissionId);
  const user = await getUser(submission.user_id);

  return (
    <Card className="w-full">
      <div className="p-3 border-b">
        <Label className="text-xl font-bold">Submission #{submission.id}</Label>
      </div>
      <div className="p-8 space-y-4">
        <div className="space-x-2">
          <Badge
            variant="customTailwind"
            className={`${
              submission.status === "Accepted"
                ? "bg-green-500"
                : submission.status === "Wrong Answer"
                ? "bg-red-500"
                : submission.status === "Compile Error"
                ? "bg-yellow-500"
                : ""
            }`}
          >
            {submission.status}
          </Badge>
          <span>-</span>
          <Label>{user.name}</Label>
          <span>-</span>
          <Label>{moment(submission.createdAt).format("HH:mm:ss, DD-MM-YYYY")}</Label>
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
          {/* <Label className="text-md font-bold">Code:</Label> */}
          <div className="p-4 bg-slate-100 border rounded-md space-y-4"></div>
        </div>
      </div>
    </Card>
  );
}
