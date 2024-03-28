"use client";
import Sidebar from "@/components/Contest/Sidebar";
import { useEffect, useState } from "react";
import { AuthContextProvider } from "@/context/AuthContext";

export default function ContestLayout({ children, params }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="container mx-auto flex flex-col md:my-8 md:flex-row md:space-x-4">
      <div className="h-max min-w-80 space-y-4">
        <Sidebar slug={params.contestSlug} open={open} />
      </div>
      <AuthContextProvider>{children}</AuthContextProvider>
    </div>
  );
}
