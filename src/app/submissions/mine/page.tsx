'use client'

import React, {useState} from "react";
import SidebarSubmissions from "@/Fragments/SidebarSubmissions";
import SubmissionsLayout from "@/Layouts/SubmissionsLayout";
import { mySubmissionsData } from "@/Data/mySubmissionsData";

const MySubmissions = () => {
  const [submissionsData, setSubmissionsData] = useState(mySubmissionsData);
  const updateSubmissionsData = (newData) => {
    setSubmissionsData(newData);
  };

  return (
    <div className="overflow-hidden font-mono md:min-w-fit xl:min-w-full">
        <div className="flex">
            <div>
                <SidebarSubmissions/>
            </div>
            <div className="w-2/3 mt-8">
               <SubmissionsLayout data={submissionsData}/>
            </div>
        </div>
    </div>
  );
};

export default MySubmissions;