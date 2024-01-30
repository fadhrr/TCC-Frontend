import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default async function ProblemDetail({
  params,
}: {
  params: { slug: string };
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/problem/${params.slug}`
  );
  const problem = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (
    <div className="w-full my-8 border rounded-lg">
      <div className="text-2xl font-bold border-b p-2">
        <h1>{problem.title}</h1>
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
                  {problem.time_limit}
                </td>
                <td className="text-center border border-slate-700 ...">
                  {problem.memory_limit}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <Label className="font-bold">Language: </Label>
          <Label>C++</Label>
        </div>

        <div className="space-y-2">
          <h1 className="font-bold">Description</h1>
          <p>{problem.description}</p>
        </div>

        <div className="px-8 space-y-2">
          <h1 className="font-bold">File PDF:</h1>
          <object
            className="border-2 border-black w-full"
            data="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"
            height="720"
          ></object>
        </div>

        <div className="space-y-2">
          <h1 className="font-bold">Submmit Solution</h1>
          <form className="flex space-x-2">
            <Input id="picture" type="file" />
            <Button type="submit">Submit</Button>
          </form>
        </div>

        <div className="table-wrapper space-y-2">
          <h1 className="font-bold">Top User by Time</h1>
          <table className="w-full border-separate border-spacing-y-3 table-auto">
            <thead>
              <tr>
                <th>#</th>
                <th className="text-left pl-3">Name</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody className="text-center"></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
