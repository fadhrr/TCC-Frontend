import SidebarSubmissions from "@/Fragments/SidebarSubmissions";
import React from "react";
import ScoreboardLayout from "@/Layouts/ScoreboardLayout";

const Scoreboard = () => {
  return (
    <div className="overflow-hidden font-mono md:min-w-fit xl:min-w-full">
    <div className="flex">
        <div>
            <SidebarSubmissions/>
        </div>
        <div className="w-2/3 mt-8">
            <ScoreboardLayout/>
        </div>
    </div>
</div>
  )
};

export default Scoreboard;
