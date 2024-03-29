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
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/problem/${problemId}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch problem data");
  }
  return res.json();
}

async function getLang() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/languages`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch problem data");
  }
  return res.json();
}


export default function ProblemDetail({
  params,
}: {
  params: { contestProblemId: string };
}) {
  const router = useRouter();
  const currentUser = useAuth();
  const [problem, setProblem] = useState<Problem | null>(null);
  const [lang, setLang] = useState(null);
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const problemData = await getProblem(params.contestProblemId);
        const langData = await getLang();
        setProblem(problemData);
        setLang(langData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params.contestProblemId]);

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
            problem_id: params.contestProblemId,
            language_id: lang,
            time: 0,
            memory: 0,
            code: fileContent,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        // Instead of throwing an error, set the error message directly
        setSubmitLoading(false);
        setError(`Failed to submit: ${response.statusText}`);
        return;
      }

      router.push(`/problems/${params.contestProblemId}/submissions`);
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
          <div className="p-4 bg-background border rounded space-y-4">
            <p>{problem.description}</p>
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-md font-bold">Input Format</Label>
          <div className="p-4 bg-background border rounded space-y-4">
            <p>{problem.input_format}</p>
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-md font-bold">Output Format</Label>
          <div className="p-4 bg-background border rounded space-y-4">
            <p>{problem.output_format}</p>
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-md font-bold">Input sample</Label>
          <div className="p-4 bg-background border rounded">
            <pre>{problem.sample_input}</pre>
          </div>
        </div>
        <div className="space-y-1">
          <Label className="text-md font-bold">Output sample</Label>
          <div className="p-4 bg-background border rounded">
            <pre>{problem.sample_output}</pre>
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-md font-bold">Explanation</Label>
          <div className="p-4 bg-background border rounded space-y-4">
            <p>{problem.explanation}</p>
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-md font-bold">Constraints</Label>
          <div className="p-4 bg-background border rounded space-y-4">
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
            <div className="p-4 text-sm text-muted-foreground bg-muted rounded">
              You must login to submit a solution!!
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
