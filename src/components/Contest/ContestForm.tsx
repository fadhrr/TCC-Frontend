"use client";
import { useAuth } from "@/context/AuthContext";
import { Headline } from "../ui/headline";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContestForm() {
  const router = useRouter();
  const currentUser = useAuth();
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    const title = e.target[0].value;
    const description = e.target[1].value;
    const timeStart = e.target[2].value;
    const duration = e.target[3].value;


    
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contest`,
        {
          method: "POST",
          body: JSON.stringify({
            admin_id: currentUser.uid,
            title: title,
            slug: title.toLowerCase(),
            description: description,
            start_time: timeStart,
            end_time: duration,
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
    <section>
      <div className="container px-2 md:px-8  mx-auto">
        <Headline
          title="Create Contest"
          desc=" Welcome to the Contests section, here you will find a variety of exciting contests and challenges that cater to diverse interests and skills. Each contest is designed to test your abilities and knowledge in a specific area."
        />
        <div className="w-full  md:px-0  py-8 z-20 ">
          {/* card */}
          <div id="section2" className="p-4 rounded shadow ">
            <form onSubmit={handleSubmit}>
              {/* e:0 */}
              <div className="md:flex mb-6">
                <div className="md:w-1/3">
                  <label htmlFor="image">Title</label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="block w-full p-4 text-lg border border-black rounded-md"
                    type="text"
                    id="title"
                    required
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
                    id="title"
                    required
                  />
                </div>
              </div>
              {/* e:2 */}
              <div className="md:flex mb-6">
                <div className="md:w-1/3">
                  <label htmlFor="image">Start Time</label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="block w-full p-4 text-lg  mb-2 border border-black rounded-md"
                    required
                    type="datetime-local"
                    id="deadline"
                  />
                </div>
              </div>
              {/* e:3 */}
              <div className="md:flex mb-6">
                <div className="md:w-1/3">
                  <label htmlFor="image">End Time</label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="block w-full p-4 text-lg  mb-2 border border-black rounded-md"
                    required
                    type="datetime-local"
                    id="deadline"
                  />
                </div>
              </div>
              {/* button */}
              <div className="md:col-span-5 text-left md:text-right">
                <div className="inline-flex  md:items-end">
                  <Button disabled={submitLoading} className="w-40">Post</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
