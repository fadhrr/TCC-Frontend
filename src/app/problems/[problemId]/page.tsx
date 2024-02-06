"use client";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { auth } from "@/lib/firebase-config";
import React, { useEffect, useState} from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { onAuthStateChanged } from "firebase/auth";
import { FadeLoader } from "react-spinners";

interface Problem {
  title: string;
  time_limit: number;
  memory_limit: number;
  description: string;
  explanation: string;
  input_format: string;
  output_format: string;
  sample_input: string;
  sample_output: string;
  // Add other properties as needed
}

interface CurrentUser {
  uid: string;
  // Add other properties if needed
}

async function getProblem(problemId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/problem/${problemId}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default function ProblemDetail({
  params,
}: {
  params: { problemId: string };
}) {
  // const problem = await getProblem(params.problemId);
  const [problem, setProblem] = useState<Problem | null>(null);
  const [lang, setLang] = useState<number | null>(null);
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProblem(params.problemId);
        setProblem(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>; // Display a meaningful error message
  }

  if (loading || problem === null) {
    return (
      <Card className="flex justify-center py-56 w-full items-center">
        <FadeLoader color="#bfbfbf" />
      </Card>
    );
  }

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      const fileReader = new FileReader();

      fileReader.onload = (e) => {
        const content = e.target?.result as string;
        setFileContent(content);
      };

      fileReader.readAsText(file);
    }
  };

  const handleSubmit = async () => {
    if (!fileContent) {
      return
    }
    await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/submission`, {
      method: "POST",
      body: JSON.stringify({
        user_id: currentUser.uid,
        problem_id: params.problemId,
        language_id: 1,
        time: 0,
        memory: 0,
        code: fileContent,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

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
          <form className="flex space-x-2" onSubmit={handleSubmit}>
            <Select>
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Lang" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">C/C++</SelectItem>
                <SelectItem value="2">Python</SelectItem>
                <SelectItem value="3">Java</SelectItem>
              </SelectContent>
            </Select>
            <Input type="file" onChange={handleFileChange} />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </Card>
  );
}
