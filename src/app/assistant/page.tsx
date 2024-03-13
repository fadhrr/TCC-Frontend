import React from "react";
import ScoreboardLayout from "@/Layouts/ScoreboardLayout";

const page = () => {
  return (
<div className="w-full mt-28">
    <div className="mt-5">
        <h1 className="text-3xl font-bold lg:text-4xl">
            <span className="underline decoration-blue-500">Dashboard</span>
        </h1>
    </div>
    <ScoreboardLayout/>
</div>
  );
};

export default page;
