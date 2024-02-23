'use client'

import SubmissionsLayout from "@/Layouts/SubmissionsLayout";
import { mySubmissionsData } from "@/Data/mySubmissionsData";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import moment from "moment";
import { useAuth } from "@/context/AuthContext";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/problems/Card";
import Loading from "@/components/problems/SubmissionsLoader";


export default function SubmissionsHistory({
    params,
  }: {
    params: { problemId: string };
  }) {
    const [mySubmissions, setMySubmissions] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const currentUser = useAuth();

    useEffect(() => {
        const fetchData = async (userId:any) => {
          try {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/submissions/user/${userId}`
            );
            const mySubmissions = await response.json();
            setMySubmissions(mySubmissions);
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
    
        if (currentUser && currentUser.uid) {
          fetchData(currentUser.uid);
        }
      }, [currentUser, params.problemId]);
    
      if (error) {
        console.log(error);
      }
    
      if (loading) {
        return <Loading />;
      }

return (
    <Card className="w-full h-full mt-28">
            <div className="p-3">
                <div className="ml-2 pb-10">
                <h1 className="text-3xl font-bold lg:text-4xl py-5">
                    <span className="underline decoration-blue-500">
                    Submission
                    </span>
                </h1>
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
                            {mySubmissions && (mySubmissions.map((submission, index) => (
                              <tr
                                key={index}
                                className={`text-left ${
                                  index % 2 === 0 ? "bg-background" : "bg-card"
                                }`}
                              >
                                <td className={`pl-2 py-1 border-y border-s border-black`}>
                                  {submission.id}
                                </td>
                                <td className={`border-y border-black`}>
                                  {submission.user && submission.user.name}
                                </td>
                                <td className={`border-y border-black`}>
                                  {submission.language_id}
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
                            )))}
                          </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Card>
)
};

