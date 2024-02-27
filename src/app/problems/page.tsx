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
      <h1 className="text-3xl font-semibold text-black capitalize lg:text-4xl ">
        <span className="underline decoration-blue-500">Problems</span>
      </h1>
      <p className="mt-4 w-3/5 text-black xl:mt-6 ">
        Within the &rsquo;Problem&rsquo; section, explore a diverse range of
        problem categories. By selecting the right category, you can dive into
        engaging challenges and refine your skills
      </p>

      <form className="my-4 w-1/3 xl:my-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Here..."
            required
          />
        </div>
      </form>

      <div className="flex gap-4">
        <div className="bg-white min-w-64 h-max border rounded-lg">
          <h1 className="text-xl p-3 font-bold w-ful border-b">
            Problem filter
          </h1>
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
        </div>
        <div className="grid gap-3">
          <h1 className="px-1 text-xl font-bold underline">Browse problems</h1>
          {problems.map((problem, index) => (
            <Link key={index} href={`/problems/detail/${problem.id}`}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-md">{problem.title} </CardTitle>
                  <CardDescription>
                    <p className="">{problem.description}</p>
                  </CardDescription>
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
