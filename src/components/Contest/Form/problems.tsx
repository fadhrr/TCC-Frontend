"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function problemForm({ contestId }) {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [submitLoading, setSubmitLoading] = useState(false);

  const handleSubmitContestProblems = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contest_problems`,
        {
          method: "POST",
          body: JSON.stringify({
            contest_id: contestId,
            title: e.target[0].value,
            description: e.target[1].value,
            time_limit: e.target[2].value,       
            memory_limit: e.target[3].value,       
            input_format: e.target[4].value,
            sample_input: e.target[5].value,
            output_format: e.target[6].value,
            sample_output: e.target[7].value,
            constraints: e.target[8].value,
            explanation: e.target[9].value,
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

      router.push(`/contests`);
    } catch (error) {
      setSubmitLoading(false);
      setError("An unexpected error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmitContestProblems}>
      <div className="md:flex mb-6">
        <div className="md:w-1/3">
          <label htmlFor="image">Title</label>
        </div>
        <div className="md:w-2/3">
          <input
            className="block w-full p-4 text-lg border border-black rounded-md"
            type="text"
            // required
          />
        </div>
      </div>
      {/* e:1 */}
      <div className="md:flex mb-6">
        <div className="md:w-1/3">
          <label htmlFor="image">Description</label>
        </div>
        <div className="md:w-2/3">
          <input
            className="block w-full p-4 text-lg border border-black rounded-md"
            type="text"
            // required
          />
        </div>
      </div>
      {/* e:2 */}
      <div className="md:flex mb-6">
        <div className="md:w-1/3">
          <label htmlFor="image">Time Limit</label>
        </div>
        <div className="md:w-2/3">
          <input
            className="block w-full p-4 text-lg  mb-2 border border-black rounded-md"
            // required
            type="text"
          />
        </div>
      </div>
      {/* e:3 */}
      <div className="md:flex mb-6">
        <div className="md:w-1/3">
          <label htmlFor="image">Memory Limit </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="block w-full p-4 text-lg  mb-2 border border-black rounded-md"
            // required
            type="text"
          />
        </div>
      </div>
      <div className="md:flex mb-6">
        <div className="md:w-1/3">
          <label htmlFor="image">Input format </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="block w-full p-4 text-lg  mb-2 border border-black rounded-md"
            // required
            type="text"
          />
        </div>
      </div>
      <div className="md:flex mb-6">
        <div className="md:w-1/3">
          <label htmlFor="image">Sample Input</label>
        </div>
        <div className="md:w-2/3">
          <input
            className="block w-full p-4 text-lg  mb-2 border border-black rounded-md"
            // required
          />
        </div>
      </div>
      <div className="md:flex mb-6">
        <div className="md:w-1/3">
          <label htmlFor="image">Output Format </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="block w-full p-4 text-lg  mb-2 border border-black rounded-md"
            // required
            type="text"
          />
        </div>
      </div>
      <div className="md:flex mb-6">
        <div className="md:w-1/3">
          <label htmlFor="image">Sample Output</label>
        </div>
        <div className="md:w-2/3">
          <input
            className="block w-full p-4 text-lg  mb-2 border border-black rounded-md"
            // required
            type="text"
          />
        </div>
      </div>
      <div className="md:flex mb-6">
        <div className="md:w-1/3">
          <label htmlFor="image">Constraints</label>
        </div>
        <div className="md:w-2/3">
          <input
            className="block w-full p-4 text-lg  mb-2 border border-black rounded-md"
            // required
            type="text"
          />
        </div>
      </div>
      <div className="md:flex mb-6">
        <div className="md:w-1/3">
          <label htmlFor="image">Explanation</label>
        </div>
        <div className="md:w-2/3">
          <input
            className="block w-full p-4 text-lg  mb-2 border border-black rounded-md"
            // required
            type="text"
          />
        </div>
      </div>
      <Button type="submit" disabled={submitLoading} className="w-40">
        Edit
      </Button>
    </form>
  );
}
