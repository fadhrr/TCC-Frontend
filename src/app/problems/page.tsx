import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Label } from "@/components/ui/label";

export default async function Problems() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/problems`
  );
  const problems = await res.json();
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return (
    <div className="container mx-auto my-12">
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
        <div className="grid gap-3">
          <h1 className="px-1 text-xl font-bold underline">Browse problems</h1>
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
