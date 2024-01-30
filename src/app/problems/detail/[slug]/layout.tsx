import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "TCC",
  description: "Generated by create next app",
};

export default function ProblemLayout({ children, params }) {
  return (
    <div className="flex w-3/4 mx-auto space-x-4">
      <Sidebar slug={params.slug}/>
      {/* <span className="border-l border-gray-500"></span> */}
      {children}
    </div>
  );
}
