'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const AdminProblemsLayout = ({url_create}:any) => {
    const [problemsData, setProblemsData] = useState([]);

    const [submissionsData, setSubmissionsData] = useState([]);

    useEffect(() => {
      const fetchProblemsData = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/problems`);
          const data = await response.json();
          setProblemsData(data);
        } catch (error) {
          console.log('Error fetching problems data', error);
        }
      };
  
      const fetchSubmissionsData = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/submissions`);
          const data = await response.json();
          setSubmissionsData(data);
        } catch (error) {
          console.log('Error fetching submissions data', error);
        }
      };
  
      fetchProblemsData();
      fetchSubmissionsData();
    }, []);

    const removeProblem = async (problemId: any)=>{
      try {
         const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/problem/${problemId}`, {
             method: 'DELETE',
             headers: {
                 'content-type': 'application/json',
             }
         })
     
         if (response.status === 200) {
             setProblemsData((prevData)=>prevData.filter((problem)=>problem.id !== problemId));
             console.log(`Problem with ${problemId} deleted successfully`)
         } else if(response.status === 404) {
             console.log(`Problem with ${problemId} not found.`);
         } else{
             const error = await response.json();
             console.log(`Failed to delete user with ID ${problemId}. Server error: ${error.message}`);
         }
      } 
     catch (error) {
         console.log(`Error deleting with ID ${problemId}`, error)}
     }
  
    // Hitung jumlah submit untuk setiap masalah
    const problems = problemsData.map((problem) => {
      const submitCount = submissionsData.filter((submission) => submission.problem_id === problem.id).length;
      return { ...problem, submitted: submitCount };
    });
    
  return (
<div>
    <div className="pt-[70px] md:pt-[80px]">
        <h1 className="text-3xl font-bold lg:text-4xl">
            <span className="underline decoration-blue-500">Problems List</span>
        </h1>
        <p className="mt-4 mb-2">Create problem</p>
        <Link href={url_create} className="hover:opacity-70 ml-1 ">
            <div className="inline-block px-9 py-2 mt-2 mb-3 w-fit text-gray-900 bg-white border border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm me-2">
                <Image src='/assets/icons/pen.svg' alt="icon" width={15} height={15}/>
            </div>
        </Link>
      
    </div>
    <div className="table-wrapper">
        <table className="w-full border-separate border-spacing-y-3">
            <thead>
                <tr className="text-left">
                    <th className="px-3">Id</th>
                    <th>Problems</th>
                    <th className=" pr-10">Submitted</th>
                </tr>
            </thead>
            <tbody>
                {problems.map((item, index) => (
                    <tr key={index} className={index%2 === 0? 'bg-white' : 'bg-[#EDEDED]'}>
                        <td className="border-y-2 border-s-2 border-black h-10 pl-3">
                            {item.id}
                        </td>
                        <td className="border-y-2 border-black">
                            {item.title}
                        </td>
                        <td className="border-y-2 border-black text-center w-1/12 pr-10">
                            {item.submitted}
                        </td>
                        <td className="border-y-2 border-r-2 border-black">
                            <div className="flex space-x-3">
                                <Link href={`/admin/problems/edit/${item.id}`}>
                                    <Image alt="edit" src="/assets/icons/edit.svg" width={20} height={20} className="hover:opacity-65 max-w-10"/>
                                </Link>
                                <button type="submit" onClick={()=>removeProblem(item.id)}>
                                    <Image alt="remove" src="/assets/icons/trash.svg" width={20} height={20} className="hover:opacity-65 max-w-10"/>
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>
  );
};

export default AdminProblemsLayout;
