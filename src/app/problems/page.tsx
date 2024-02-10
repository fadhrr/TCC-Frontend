"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/Problems/Card";
import Loading from "@/components/Problems/Loading";

async function getProblems() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/problems`
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default function Problems() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProblems();
        setProblems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    console.log(error);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container flex mx-auto my-8 space-x-4">
      <Card className="h-full min-w-80">
        <CardContent>
          <Label className="border-b text-md font-bold">Filter</Label>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label
                htmlFor="terms"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Filter 1
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label
                htmlFor="terms"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Filter 2
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col w-full gap-3">
        {problems.map((problem, index) => (
          <Link key={index} href={`/problems/${problem.id}`}>
            <Card>
              <CardContent>
                <CardTitle>{problem.title}</CardTitle>
                <CardDescription>{problem.description}</CardDescription>
                <CardFooter>
                  <Badge variant="default">Badge</Badge>
                  <Badge variant="outline">Badge</Badge>
                  <Badge variant="destructive">Badge</Badge>
                </CardFooter>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
