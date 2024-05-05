import React from "react";
import { Suspense } from "react";
import TestCase from "@/components/problems/TestCase";

const page = () => {

  return (
    <div className="w-full my-10">
      <Suspense fallback={<div>Loading...</div>}>
        <TestCase/>
      </Suspense>
    </div>
  )
};

export default page;