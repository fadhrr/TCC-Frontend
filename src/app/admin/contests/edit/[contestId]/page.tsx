import ContestForm from "@/components/Contest/Form/problems";
import React from "react";

export default function page({
    params,
  }: {
    params: { contestId: string };
  }) {
  return (
    <div className=" w-full">
        <div className="pt-[70px] md:pt-[80px]"><ContestForm contestId={params.contestId}/></div>
    </div>
  );
};
