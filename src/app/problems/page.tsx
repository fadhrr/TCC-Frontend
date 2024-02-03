"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React, { useEffect, useState, CSSProperties } from "react";
import { FadeLoader } from "react-spinners";

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
    return <div>Error: {error}</div>; // Display a meaningful error message
  }

  return (
    <div className="container mx-auto my-12">
      <form className="my-4 md:w-1/3 w-full xl:my-6">
          <Input
            type="search"
            id="default-search"
            className="w-full py-2 md:py-4 text-sm text-gray-900 border bg-white border-gray-300 rounded-lg  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search here"
            // required
            style={{ fontSize: "16px" }}
          />
      </form>
      <div className="flex gap-4">
        <Card className=" min-w-64 h-max">
          <div className="p-3 border-b">
            <Label className="text-md font-bold">Filter</Label>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center p-3 space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Filter 1
              </label>
            </div>
            <div className="flex items-center p-3 space-x-2">
              <Checkbox id="terms1" />
              <label
                htmlFor="terms1"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                filter 2
              </label>
            </div>
            <div className="flex items-center p-3 space-x-2">
              <Checkbox id="terms2" />
              <label
                htmlFor="terms2"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                filter 3
              </label>
            </div>
          </div>
        </Card>
        <div className="flex flex-col w-full gap-3">
          <h1 className="px-1 text-xl font-bold underline">Browse problems</h1>
          {loading && (
            <Card className="flex justify-center h-full items-center">
              <FadeLoader color="#bfbfbf" />
            </Card>
          )}
          {problems.map((problem, index) => (
            <Link key={index} href={`/problems/${problem.id}`}>
              <Card className="transition h-full hover:bg-slate-100">
                <CardHeader>
                  <CardTitle className="text-md">{problem.title} </CardTitle>
                  <CardDescription>{problem.description}</CardDescription>
                </CardHeader>
                <CardFooter className="space-x-1">
                  <Badge variant="default">Badge</Badge>
                  <Badge variant="outline">Badge</Badge>
                  <Badge variant="destructive">Badge</Badge>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
