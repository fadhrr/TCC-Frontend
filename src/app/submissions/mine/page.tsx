'use client'

import React, {useState} from "react";
import SubmissionsLayout from "@/Layouts/SubmissionsLayout";
import { mySubmissionsData } from "@/Data/mySubmissionsData";

const MySubmissions = () => {
  const [submissionsData, setSubmissionsData] = useState(mySubmissionsData);
  const updateSubmissionsData = (newData) => {
    setSubmissionsData(newData);
  };

  return (
    <div className="w-full">
        <div className="my-10">
            <SubmissionsLayout data={submissionsData} title="My Submissions"/>
        </div>
    </div>
  );
};

export default MySubmissions;