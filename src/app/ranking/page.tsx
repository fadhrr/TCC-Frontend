import React from "react";
import RankingsLayout from "@/Layouts/RankingsLayout";
import SidebarRankings from "@/Fragments/SidebarRankings";

const Rankings = () => {
  return (
    <div className="overflow-hidden font-mono md:min-w-fit xl:min-w-full">
        <div className="flex">
          <div>
                <SidebarRankings/>
            </div>
            <div className="w-3/4 mt-8">
               <RankingsLayout/>
            </div>
        </div>
    </div>
  );
};

export default Rankings;
