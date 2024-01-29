import React from "react";
import SidebarProfile from "@/Fragments/SidebarProfile";
import ProfileLayout from "@/Layouts/ProfileLayout";

const Profile = () => {
return (
    <div className="overflow-hidden font-mono md:min-w-fit xl:min-w-full">
        <div className="flex">
            <div>
                <SidebarProfile/>
            </div>
            <div className="w-3/4 mt-8">
                <ProfileLayout/>
            </div>
        </div>
    </div>
);
};

export default Profile;
