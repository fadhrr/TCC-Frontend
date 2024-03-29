"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import moment from "moment";
import { useAuth } from "@/context/AuthContext";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/problems/Card";
import Loading from "@/components/problems/SubmissionLoader";

async function getSubmissions(problemId: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/submissions/problem/${problemId}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getMySubmissions(userId: any, problemId: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/submissions/user/${userId}/problem/${problemId}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default function ProblemSubmission({
  params,
}: {
  params: { problemId: string };
}) {
  const currentUser = useAuth();
  const [submissions, setSubmissions] = useState([]);
  const [mySubmissions, setMySubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const fetchSubs = async () => {
        const allSubs = await getSubmissions(params.problemId);
        setSubmissions(allSubs);
      };
      if (currentUser && currentUser.uid) {
        const fetchCurrentSubs = async () => {
          const mySubs = await getMySubmissions(
            currentUser.uid,
            params.problemId,
          );
          setMySubmissions(mySubs);
        };
        fetchCurrentSubs();
      }
      fetchSubs();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [params.problemId, currentUser]);

  if (loading || submissions == null) {
    return <Loading />;
  }

  return (
    <Card className="h-max w-full">
      <div className="border-b p-3">
        <Label className="text-xl font-bold">Submissions</Label>
      </div>

      <Tabs defaultValue="allSubmissions" className="p-8">
        <TabsList className="mx-auto flex w-max">
          <TabsTrigger value="allSubmissions">All Submissions</TabsTrigger>
          <TabsTrigger value="mySubmissions">My Submission</TabsTrigger>
        </TabsList>

        <TabsContent value="allSubmissions" className="space-y-4">
          <div className="table-wrapper">
            <table className="w-full border-separate border-spacing-y-2 text-sm">
              <thead>
                <tr className="text-left">
                  <th className="pl-2">Id</th>
                  <th>User</th>
                  <th>Lang</th>
                  <th>Verdict</th>
                  <th>Time</th>
                  <th>#</th>
                </tr>
              </thead>

              <tbody>
                {submissions &&
                  submissions.map((submission, index) => (
                    <tr
                      key={index}
                      className={`text-left ${
                        index % 2 === 0 ? "bg-background" : "bg-muted"
                      }`}
                    >
                      <td
                        className={`border-y border-s border-black py-1 pl-2`}
                      >
                        {submission.id}
                      </td>
                      <td className={`border-y border-black`}>
                        {submission.user && submission.user.name}
                      </td>
                      <td className={`border-y border-black`}>
                        {submission.language}
                      </td>
                      <td className={`border-y border-black`}>
                        {submission.status ? (
                          <Badge variant={submission.status}>
                            {submission.status}
                          </Badge>
                        ) : (
                          <Badge variant="pending">Pending</Badge>
                        )}
                      </td>
                      <td className={`border-y border-black`}>
                        {moment(submission.created_at).fromNow()}
                      </td>
                      <td className={`border-y border-e border-black`}>
                        <Link
                          href={`/problems/${params.problemId}/submissions/${submission.id}`}
                          className="text-blue-500"
                        >
                          <svg
                            className="h-4 w-4 text-sky-500 hover:text-sky-700 dark:text-sky-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                          </svg>
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="mySubmissions" className="space-y-4">
          <div className="table-wrapper">
            <table className="w-full border-separate border-spacing-y-2 text-sm">
              <thead>
                <tr className="text-left">
                  <th className="pl-2">Id</th>
                  <th>User</th>
                  <th>Lang</th>
                  <th>Verdict</th>
                  <th>Time</th>
                  <th>#</th>
                </tr>
              </thead>

              <tbody>
                {mySubmissions &&
                  mySubmissions.map((submission, index) => (
                    <tr
                      key={index}
                      className={`text-left ${
                        index % 2 === 0 ? "bg-background" : "bg-muted"
                      }`}
                    >
                      <td
                        className={`border-y border-s border-black py-1 pl-2`}
                      >
                        {submission.id}
                      </td>
                      <td className={`border-y border-black`}>
                        {submission.user && submission.user.name}
                      </td>
                      <td className={`border-y border-black`}>
                        {submission.language}
                      </td>
                      <td className={`border-y border-black`}>
                        {submission.status ? (
                          <Badge variant={submission.status}>
                            {submission.status}
                          </Badge>
                        ) : (
                          <Badge variant="pending">Pending</Badge>
                        )}
                      </td>
                      <td className={`border-y border-black`}>
                        {moment(submission.created_at).fromNow()}
                      </td>
                      <td className={`border-y border-e border-black`}>
                        <Link
                          href={`/problems/${params.problemId}/submissions/${submission.id}`}
                          className="text-blue-500"
                        >
                          <svg
                            className="h-4 w-4 text-sky-500 hover:text-sky-700 dark:text-sky-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                          </svg>
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
