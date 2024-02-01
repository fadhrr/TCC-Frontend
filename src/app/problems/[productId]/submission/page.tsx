import React from "react";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

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
    <div className="w-full my-8 border rounded-lg bg-white">
      <div className="text-2xl font-bold border-b p-3">
        <h1>Submission</h1>
      </div>

      <Tabs defaultValue="allSubmissions" className="p-8">
        <TabsList className="flex w-max mx-auto">
          <TabsTrigger value="allSubmissions">All Submissions</TabsTrigger>
          <TabsTrigger value="mySubmissions">My Submision</TabsTrigger>
        </TabsList>

        <TabsContent value="allSubmissions" className="space-y-4">
          <Label className="text-lg font-bold">All Submissions</Label>
          <div className="table-wrapper">
            <table className="w-full border-separate border-spacing-y-3">
              <thead>
                <tr className="text-left">
                  <th className="pl-3">Id</th>
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
                    className={`text-sm ${
                      index % 2 === 0 ? "bg-white" : "bg-[#EDEDED]"
                    }`}
                  >
                    <td
                      className={`py-1 border-y-2 border-s-2 border-black pl-3`}
                    >
                      {submission.id}
                    </td>
                    <td className={`border-y-2 border-black`}>
                      {submission.user_id}
                    </td>
                    <td className={`border-y-2 border-black`}>
                      {submission.language_id}
                    </td>
                    <td className={`border-y-2 border-black`}>
                      <Badge variant="destructive">{submission.status}</Badge>
                    </td>
                    <td className={`border-y-2 border-black`}>
                      {submission.time}
                    </td>
                    <td className={`border-y-2 border-e-2 border-black`}>
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
            <table className="w-full border-separate border-spacing-y-3">
              <thead>
                <tr className="text-left">
                  <th className="pl-3">Id</th>
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
                    className={`text-sm ${
                      index % 2 === 0 ? "bg-white" : "bg-[#EDEDED]"
                    }`}
                  >
                    <td
                      className={`py-1 border-y-2 border-s-2 border-black pl-3`}
                    >
                      {submission.id}
                    </td>
                    <td className={`border-y-2 border-black`}>
                      {submission.user_id}
                    </td>
                    <td className={`border-y-2 border-black`}>
                      {submission.language_id}
                    </td>
                    <td className={`border-y-2 border-black`}>
                      <Badge variant="destructive">{submission.status}</Badge>
                    </td>
                    <td className={`border-y-2 border-black`}>
                      {submission.time}
                    </td>
                    <td className={`border-y-2 border-e-2 border-black`}>
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
    </div>
  );
}
