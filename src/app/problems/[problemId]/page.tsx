import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import React, { useEffect, useState, CSSProperties } from "react";

async function getProblem(problemId: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/problem/${problemId}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function ProblemDetail({
  params,
}: {
  params: { problemId: string };
}) {
  const problem = await getProblem(params.problemId);

  return (
    <Card className="w-full">
      <div className="p-3 border-b">
        <Label className="text-xl font-bold">{problem.title}</Label>
      </div>

      <div className="p-8 space-y-4">
        <div className="flex justify-center">
          <table className="border-separate border border-slate-500 ...">
            <thead>
              <tr>
                <th className="px-10 border border-slate-600 ...">
                  Time Limit
                </th>
                <th className="px-10 border border-slate-600 ...">
                  Memory Limit
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center border border-slate-700 ...">
                  {problem.time_limit} s
                </td>
                <td className="text-center border border-slate-700 ...">
                  {problem.memory_limit} mb
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-1">
          <Label className="text-md font-bold">Description</Label>
          <div className="p-4 bg-slate-100 border rounded-md space-y-4">
            <p>{problem.description}</p>
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-md font-bold">Explanation</Label>
          <div className="p-4 bg-slate-100 border rounded-md space-y-4">
            <p>{problem.explanation}</p>
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-md font-bold">Input Format</Label>
          <div className="p-4 bg-slate-100 border rounded-md space-y-4">
            <p>{problem.input_format}</p>
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-md font-bold">Output Format</Label>
          <div className="p-4 bg-slate-100 border rounded-md space-y-4">
            <p>{problem.output_format}</p>
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-md font-bold">Input sample</Label>
          <div className="p-4 bg-slate-100 border rounded-md">
            <p>{problem.sample_input}</p>
          </div>
        </div>
        <div className="space-y-1">
          <Label className="text-md font-bold">Output sample</Label>
          <div className="p-4 bg-slate-100 border rounded-md">
            <p>{problem.sample_output}</p>
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-md font-bold">Submmit Solution</Label>
          <form className="flex space-x-2">
            <Input id="picture" type="file" />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </Card>
  );
}
