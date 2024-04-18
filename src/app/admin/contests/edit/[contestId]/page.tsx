
import CreateProblem from "@/components/Contest/Form/CreateProblems";
import React from "react";

export default function page({ params }: { params: { contestId: string } }) {
  return (
    <div className=" w-full">
      <div className="pt-[70px] md:pt-[80px]">
        <CreateProblem contestId={params.contestId} />
      </div>
    </div>
  );
}
