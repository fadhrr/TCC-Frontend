"use client";
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { BarLoader } from "react-spinners";
import { auth } from "@/lib/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import moment from "moment";
import { FadeLoader } from "react-spinners";

interface CurrentUser {
  uid: string;
  // Add other properties if needed
}

async function getSubmissions(problemId: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/submissions/problem/${problemId}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getMySubmissions(userId: any, problemId: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/submissions/user/${userId}/problem/${problemId}`
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
  const [submissions, setSubmissions] = useState([]);
  const [mySubmissions, setMySubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingUser, setLoadingUser] = useState(true);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

  useEffect(() => {
    try {
      const unsub = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
        console.log(user.uid);
        setLoadingUser(false);
      });
      return () => {
        unsub();
      };
    } catch (error) {
      setError(error.message);
    } finally {
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataAll = await getSubmissions(params.problemId);
        setSubmissions(dataAll);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.problemId]);

  useEffect(() => {
    if (!loadingUser) {
      const fetchData = async () => {
        const dataMy = await getMySubmissions(
          currentUser.uid,
          params.problemId
        );
        setMySubmissions(dataMy);
      };
      fetchData();
    }
  }, [loadingUser]);

  if (error) {
    return <div>Error: {error}</div>; // Display a meaningful error message
  }

  if (loadingUser) {
    return (
      <Card className="flex justify-center py-56 w-full items-center">
        <FadeLoader color="#bfbfbf" />
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <div className="p-3 border-b">
        <Label className="text-xl font-bold">Submissions</Label>
      </div>

      <Tabs defaultValue="allSubmissions" className="p-8">
        <TabsList className="flex w-max mx-auto">
          <TabsTrigger value="allSubmissions">All Submissions</TabsTrigger>
          <TabsTrigger value="mySubmissions">My Submision</TabsTrigger>
        </TabsList>

        <TabsContent value="allSubmissions" className="space-y-4">
          <Label className="text-lg font-bold">All Submissions</Label>
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
                {submissions.map((submission, index) => (
                  <tr
                    key={index}
                    className={`text-left ${
                      index % 2 === 0 ? "bg-white" : "bg-[#EDEDED]"
                    }`}
                  >
                    <td className={`pl-2 py-1 border-y border-s border-black`}>
                      {submission.id}
                    </td>
                    <td className={`border-y border-black`}>
                      {submission.user_id}
                    </td>
                    <td className={`border-y border-black`}>
                      {submission.language_id}
                    </td>
                    <td className={`border-y border-black`}>
                      {submission.status ? (
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
                      ) : (
                        <Badge
                          variant="customTailwind"
                          className={"bg-purple-500"}
                        >
                          Pending
                        </Badge>
                      )}
                    </td>
                    <td className={`border-y border-black`}>
                      {moment(submission.created_at).fromNow()}
                    </td>
                    <td className={`border-y border-e border-black`}>
                      <Link
                        href={`/problems/${params.problemId}/submission/${submission.id}`}
                        className="text-blue-500"
                      >
                        <svg
                          className="w-4 h-4 text-sky-500 dark:text-sky-500 hover:text-sky-700"
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
            {loading && (
              <div className="flex justify-center py-2">
                <BarLoader color="#bfbfbf" />
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="mySubmissions" className="space-y-4">
          <Label className="text-lg font-bold">My Submissions</Label>
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
                {mySubmissions.map((submission, index) => (
                  <tr
                    key={index}
                    className={`text-left ${
                      index % 2 === 0 ? "bg-white" : "bg-[#EDEDED]"
                    }`}
                  >
                    <td className={`pl-2 py-1 border-y border-s border-black`}>
                      {submission.id}
                    </td>
                    <td className={`border-y border-black`}>
                      {submission.user_id}
                    </td>
                    <td className={`border-y border-black`}>
                      {submission.language_id}
                    </td>
                    <td className={`border-y border-black`}>
                      {submission.status ? (
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
                      ) : (
                        <Badge
                          variant="customTailwind"
                          className={"bg-purple-500"}
                        >
                          Pending
                        </Badge>
                      )}
                    </td>
                    <td className={`border-y border-black`}>
                      {moment(submission.created_at).fromNow()}
                    </td>
                    <td className={`border-y border-e border-black`}>
                      <Link
                        href={`/problems/${params.problemId}/submission/${submission.id}`}
                        className="text-blue-500"
                      >
                        <svg
                          className="w-4 h-4 text-sky-500 dark:text-sky-500 hover:text-sky-700"
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
