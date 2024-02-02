import React from "react";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default async function ProblemSubmission({
  params,
}: {
  params: { productId: string };
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/submissions`
  );
  const submissions = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
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
                    </td>
                    <td className={`border-y border-black`}>
                      {submission.time}
                    </td>
                    <td className={`border-y border-e border-black`}>
                      <Link
                        href={`/problems/${params.productId}/submission/${submission.id}`}
                        className="text-blue-500"
                      >
                        Find
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                    </td>
                    <td className={`border-y border-black`}>
                      {submission.time}
                    </td>
                    <td className={`border-y border-e border-black`}>
                      <Link
                        href={`/problems/${params.productId}/submission/${submission.id}`}
                        className="text-blue-500"
                      >
                        Find
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
