'use client'

import React, {useState} from "react";
import SubmissionsLayout from "@/Layouts/SubmissionsLayout";
import { allSubmissionsData } from "@/Data/allSubmissionsData";

const Submissions = () => {
  const [submissionsData, setSubmissionsData] = useState(allSubmissionsData);
  const updateSubmissionsData = (newData) => {
    setSubmissionsData(newData);
  };

  return (
    <div className="w-full">
      <div className="my-10">
          <SubmissionsLayout data={submissionsData} title="Submissions"/>
      </div>
    </div>
  );
};

export default Submissions;