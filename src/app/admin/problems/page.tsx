import AdminProblemsLayout from "@/Layouts/UsersProblemsLayout";
import React from "react";

const ProblemsAdmin = () => {
  return (
    <div className="w-full">
        <div className="my-10">
          <AdminProblemsLayout url_create="/admin/problems/create" url_edit="/admin"/>
        </div>
    </div>
  );
};

export default ProblemsAdmin;
