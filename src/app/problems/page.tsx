'use client';

import React, { useState } from 'react';
import { ProblemCard } from '@/components/ui/card';

export default function Problems() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const data = [
    {
      title: 'Database',
      description: 'Enhance your knowledge of data management, database modeling, and database programming',
      link: '/problems/slug/detail',
    },
    {
      title: 'Algorithm',
      description: 'Enhance your knowledge of data management, database modeling, and database programming',
      link: '/problems/slug/detail',
    },
    {
      title: 'Database',
      description: 'Enhance your knowledge of data management, database modeling, and database programming',
      link: '/problems/slug/detail',
    },
    {
      title: 'Database',
      description: 'Enhance your knowledge of data management, database modeling, and database programming',
      link: '/problems/slug/detail',
    },
  ];

  // Lakukan filter berdasarkan nilai pencarian
  const filteredData = data.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <section className="bg-[#F5F5F5] lg:px-4  py-20 md:pt-24">
        <div className="container w-full flex flex-col items-start">
          <h1 className="text-3xl font-semibold text-black capitalize lg:text-4xl ">
            <span className="underline decoration-blue-500">Problems</span>
          </h1>
          <p className="mt-4 lg:w-3/5 w-full text-black xl:mt-6 ">
            Within the &rsquo;Problem&rsquo; section, explore a diverse range of problem categories. By selecting the right category, you can dive into engaging challenges and refine your skills
          </p>

          <form className="my-4 md:w-1/3 w-full xl:my-6">
            <div className="relative flex items-start">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-lg bg-white  "
                placeholder="Search problem..."
                onChange={handleChange}
                value={searchTerm}
                required
              />
            </div>
          </form>

          {/* Card 1 */}
          <div className="grid md:grid-cols-3 grid-cols-2 gap-4 items-stretch md:mx-0 mt-4 flex-wrap">
            <ProblemCard data={filteredData} />
          </div>
        </div>
      </section>
    </>
  );
}
