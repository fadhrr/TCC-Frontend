'use client'

import React, {useState} from "react";
import SidebarProfile from "@/Fragments/SidebarProfile";
import SubmissionsLayout from "@/Layouts/SubmissionsLayout";
import { mySubmissionsData } from "@/Data/mySubmissionsData";

const SubmissionsHistory = () => {
    const [submissionsData, setSubmissionsData] = useState(mySubmissionsData);
    const updateSubmissionsData = (newData) => {
        setSubmissionsData(newData);
    };

return (
    <div className="overflow-hidden font-mono md:min-w-fit xl:min-w-full">
        <div className="flex">
            <div>
                <SidebarProfile/>
            </div>
            <div className="w-3/4 mt-8">
                <SubmissionsLayout data={submissionsData}/>
            </div>
        </div>
    </div>
)
};

export default SubmissionsHistory;
