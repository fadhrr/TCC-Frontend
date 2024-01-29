import React from "react";
import SidebarRankings from "@/Fragments/SidebarRankings";
import ScorersLayout from "@/Layouts/ScorersLayout";

const Scorers = () => {
  return (
    <div className="overflow-hidden font-mono md:min-w-fit xl:min-w-full">
        <div className="flex">
            <div>
                <SidebarRankings/>
            </div>
            <div className="w-3/4 mt-8">
                <ScorersLayout/>
            </div>
        </div>
    </div>
  );
};

export default Scorers;
