"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/Problems/Card";
import { Badge } from "@/components/ui/badge";
import moment from "moment";
import Loading from "@/components/Problems/Loading/Problem/Submissions/Submission/Loading";

interface Submision {
  id: number;
  status: any;
  created_at: string;
  code: string;
}

interface User {
  name: string;
}

async function getSubmission(submissionId: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/submission/${submissionId}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getUser(userId: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/${userId}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
async function getTestResults(submissionId: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/test_case_result/submission/${submissionId}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default function SubmissionDetail({
  params,
}: {
  params: { submissionId: string };
}) {
  const [submission, setSubmission] = useState<Submision | null>(null);
  const [subsUser, setSubsUser] = useState<User | null>(null);
  const [testResults, setTestResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const submissionData = await getSubmission(params.submissionId);
        const subsUserData = await getUser(submissionData.user_id);
        const testResultsData = await getTestResults(params.submissionId);
        setSubmission(submissionData);
        setSubsUser(subsUserData);
        setTestResults(testResultsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    console.log(error);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Card className="w-full max-w-full">
      <div className="p-3 border-b">
        <Label className="text-xl font-bold">Submission #{submission.id}</Label>
      </div>
      <div className="p-8 space-y-4">
        <div className="space-x-2">
          {submission.status ? (
            <Badge
              variant={submission.status}
            >
              {submission.status}
            </Badge>
          ) : (
            <Badge variant="pending">
              Pending
            </Badge>
          )}
          <span>-</span>
          <Label>{subsUser.name}</Label>
          <span>-</span>
          <Label>
            {moment(submission.created_at).format("HH:mm:ss, DD-MM-YYYY")}
          </Label>
        </div>
        <div className="space-y-1">
          <Label className="text-md font-bold">Test Data Results</Label>
          <div className="px-4 bg-background border rounded space-y-4">
            <div className="table-wrapper">
              <table className="w-full border-separate border-spacing-y-2 text-sm">
                <thead>
                  <tr className="text-left">
                    <th className="pl-2">Id</th>
                    <th>Verdict</th>
                    <th>Time</th>
                    <th>Score</th>
                  </tr>
                </thead>

                <tbody>
                  {testResults.map((testResult, index) => (
                    <tr
                      key={index}
                      className={`text-left ${
                        index % 2 === 0 ? "bg-white" : "bg-card"
                      }`}
                    >
                      <td
                        className={`pl-2 py-1 border-y border-s border-black`}
                      >
                        {index + 1}
                      </td>
                      <td className={`border-y border-black`}>
                          <Badge
                            variant={testResult.status}
                          >
                            {testResult.status}
                          </Badge>
                      </td>
                      <td className={`border-y border-black`}>
                        {testResult.time}
                      </td>
                      <td className={`border-y border-e border-black`}>
                        {testResult.score != null ? (
                          testResult.score
                        ) : (
                          <span>*</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <div className="p-4 bg-background border rounded space-y-4">
            <pre className="overflow-x-auto max-w-3xl no-scrollbar">
              <code className="select-none text-xs">{submission.code}</code>
            </pre>
          </div>
        </div>
      </div>
    </Card>
  );
}
