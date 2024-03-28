"use client";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/problems/Card";
import Loading from "@/components/problems/ProblemDetailLoader";
import { FormError } from "@/components/form-error";

interface Problem {
  title: string;
  time_limit: number;
  memory_limit: number;
  description: string;
  input_format: string;
  output_format: string;
  sample_input: string;
  sample_output: string;
  explanation: string;
  constraints: string;
}

async function getProblem(problemId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/problem/${problemId}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch problem data");
  }
  return res.json();
}

async function getLang() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/languages`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch problem data");
  }
  return res.json();
}

async function getTopByTime(problemId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/problem/${problemId}/submissions/topbytime`,
  );
  if (res.status == 404) {
    return res.status;
  }
  if (!res.ok) {
    throw new Error("Failed to score time fetch data");
  }
  return res.json();
}

async function getTopByMemory(problemId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/problem/${problemId}/submissions/topbymemory`,
  );
  if (res.status == 404) {
    return res.status;
  }
  if (!res.ok) {
    throw new Error("Failed to fetch score memory data");
  }
  return res.json();
}

export default function ProblemDetail({
  params,
}: {
  params: { problemId: string };
}) {
  const router = useRouter();
  const currentUser = useAuth();
  const [problem, setProblem] = useState<Problem | null>(null);
  const [lang, setLang] = useState(null);
  const [topTime, setTopTime] = useState([]);
  const [topMemory, setTopMemory] = useState([]);
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const problemData = await getProblem(params.problemId);
        const langData = await getLang();
        const topTimeData = await getTopByTime(params.problemId);
        const topMemoryData = await getTopByMemory(params.problemId);
        setProblem(problemData);
        setLang(langData);
        setTopTime(topTimeData);
        setTopMemory(topMemoryData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params.problemId]);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);

    const lang = e.target[1].value;
    const fileName = e.target[2].files?.[0].name;
    try {
      if (!fileContent) {
        setSubmitLoading(false);
        return;
      }

      const langIdToExtension = {
        1: "cpp",
        2: "c",
        3: "py",
        // Add more mappings as needed
      };

      const fileExtension = fileName.split(".").pop().toLowerCase();

      if (langIdToExtension[lang] !== fileExtension) {
        // Instead of throwing an error, set the error message directly
        setSubmitLoading(false);
        setError("File extension does not match the selected language.");
        return;
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/submission`,
        {
          method: "POST",
          body: JSON.stringify({
            user_id: currentUser.uid,
            problem_id: params.problemId,
            language_id: lang,
            time: 0,
            memory: 0,
            code: fileContent,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        // Instead of throwing an error, set the error message directly
        setSubmitLoading(false);
        setError(`Failed to submit: ${response.statusText}`);
        return;
      }

      router.push(`/problems/${params.problemId}/submissions`);
    } catch (error) {
      // Handle other types of errors as needed
      setSubmitLoading(false);
      setError("An unexpected error occurred.");
    }
  };

  if (loading || problem == null) {
    return <Loading />;
  }

  return (
    <Card className="w-full">
      <div className="border-b p-3">
        <Label className="text-xl font-bold">{problem.title}</Label>
      </div>
      <div className="space-y-4 p-8">
        <div className="flex justify-center">
          <table className="... border-separate border border-slate-500">
            <thead>
              <tr>
                <th className="... border border-slate-600 px-10">
                  Time Limit
                </th>
                <th className="... border border-slate-600 px-10">
                  Memory Limit
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="... border border-slate-700 text-center">
                  {problem.time_limit} s
                </td>
                <td className="... border border-slate-700 text-center">
                  {problem.memory_limit} mb
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-1">
          <Label className="text-md font-bold">Description</Label>
          <div className="space-y-4 rounded border bg-background p-4">
            <p>{problem.description}</p>
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-md font-bold">Input Format</Label>
          <div className="space-y-4 rounded border bg-background p-4">
            <p>{problem.input_format}</p>
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-md font-bold">Output Format</Label>
          <div className="space-y-4 rounded border bg-background p-4">
            <p>{problem.output_format}</p>
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-md font-bold">Input sample</Label>
          <div className="rounded border bg-background p-4">
            <pre>{problem.sample_input}</pre>
          </div>
        </div>
        <div className="space-y-1">
          <Label className="text-md font-bold">Output sample</Label>
          <div className="rounded border bg-background p-4">
            <pre>{problem.sample_output}</pre>
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-md font-bold">Explanation</Label>
          <div className="space-y-4 rounded border bg-background p-4">
            <p>{problem.explanation}</p>
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-md font-bold">Constraints</Label>
          <div className="space-y-4 rounded border bg-background p-4">
            <p>{problem.constraints}</p>
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-md font-bold">Submmit Solution</Label>
          {currentUser ? (
            <div className="space-y-2">
              <form className="flex space-x-2" onSubmit={handleSubmit}>
                <Select defaultValue="1">
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {lang.map((lang, index) => (
                      <SelectItem key={index} value={`${lang.id}`}>
                        {lang.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  required
                  className="transition hover:bg-muted"
                  type="file"
                  onChange={handleFileChange}
                />
                <Button disabled={submitLoading} type="submit">
                  Submit
                </Button>
              </form>
              <FormError message={error} />
            </div>
          ) : (
            <div className="rounded bg-muted p-4 text-sm text-muted-foreground">
              You must login to submit a solution!!
            </div>
          )}
        </div>

        <div className="flex">
          <div className="w-full">
            <div className="border-b p-2">
              <Label className="text-md font-bold">Top User by Time</Label>
            </div>
            <div className="table-wrapper p-2 text-muted-foreground">
              <table className="w-full border-separate border-spacing-y-2 text-sm">
                <thead>
                  <tr className="text-left">
                    <th>#</th>
                    <th>User</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {topTime.map((user, index) => (
                    <tr key={index} className="text-left">
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-full">
            <div className="border-b p-2">
              <Label className="text-md font-bold">Top User by Memory</Label>
            </div>
            <div className="table-wrapper p-2 text-muted-foreground">
              <table className="w-full border-separate border-spacing-y-2 text-sm">
                <thead>
                  <tr className="text-left">
                    <th>#</th>
                    <th>User</th>
                    <th>Memory</th>
                  </tr>
                </thead>
                <tbody>
                  {topMemory.map((user, index) => (
                    <tr key={index} className="text-left">
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.memory}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
