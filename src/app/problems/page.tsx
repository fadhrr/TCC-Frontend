"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/problem/Card";
import Loading from "@/components/problem/ProblemsLoader";

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
      <div className="flex flex-col w-full space-y-4">
        {problems.map((problem, index) => (
          <Link key={index} href={`/problems/${problem.id}`}>
            <Card>
              <CardContent>
                <CardTitle>{problem.title}</CardTitle>
                <CardDescription>{problem.description}</CardDescription>
                <CardFooter>
                  {problem.categories.map((category, index) => (
                    <Badge key={index} variant={category.id}>{category.name}</Badge>
                  ) )}
                </CardFooter>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
