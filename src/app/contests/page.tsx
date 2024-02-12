'use client';

import { ContestCard } from '@/components/ui/card';
import { ModalInput } from '@/components/ui/modal';
import Headline from '@/components/ui/headline';
import React, { useState } from 'react';

export default function Contest() {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const contestData = [
    {
      title: 'Hello world',
      link: '/contests/slug/overview', // Replace with the actual link
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aut corrupti iure tempora',
      duration: '2 hours 30 minutes',
      time: 'October 21, 21:05',
    },
    {
      title: 'Die world',
      link: '#', // Replace with the actual link
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aut corrupti iure tempora',
      duration: '2 hours 30 minutes',
      time: 'October 21, 21:05',
    },
  ];

  const filteredData = contestData.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <section className="overflow-hidden font-mono md:min-w-fit pb-8  pt-[70px] md:pt-[80px] px-0 md:px-10 xl:min-w-full">
      <div className="container px-8 py-10 mx-auto">
        <Headline
          title="Contests"
          desc=" Welcome to the Contests section, here you will find a variety of exciting contests and challenges that cater to diverse interests and skills. Each contest is designed to test your abilities and knowledge in a specific area."
        />

        <div className="flex justify-start gap-4 items-center">
          <form className="mt-4 md:w-1/3 w-full xl:mt-6">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-lg bg-white  "
                placeholder="Search Contest..."
                onChange={handleChange}
                value={searchTerm}
                required
              />
            </div>
          </form>
          <div>
            <button
              className="p-4 bg-white border-2 cursor-pointer text-sm border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-sm rounded-lg xl:mt-6 mt-4"
              onClick={() => {
                setShowModal(true);
              }}
            >
              #id
            </button>
            {showModal && <ModalInput setOpenModal={setShowModal} />}
            {/* {isModalVisible && <Modal />} */}
          </div>
        </div>
      </div>
      <ContestCard contestData={filteredData} />
    </section>
  );
}
