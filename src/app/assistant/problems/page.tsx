import AssistantProblemsLayout from "@/Layouts/UsersProblemsLayout";
import React from "react";

const ProblemsAssistant = () => {
  return (
    <div className="w-full">
        <div className="my-10">
          <AssistantProblemsLayout url_create="/assistant/problems/create" url_edit="/assistant"/>
        </div>
    </div>
  );
};

export default ProblemsAssistant;
