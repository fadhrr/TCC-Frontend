'use client';

import { ContestCard } from '@/components/ui/card';
import { ModalInput } from '@/components/ui/modal';
import {Headline} from '@/components/ui/headline';
import React, { useState, useEffect } from 'react';
import SectionContainer from '@/Layouts/SectionContainer';

export default function Contest() {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

    // fetching card contest
    const [data, setData] = useState([]);


useEffect(()=>{
  const fetchData = async() =>{
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contests`)
      const data = await response.json();
      setData(data);

    } catch (error) {
      console.log("Error fetching data ", error);
    }
  }
  fetchData();
}, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <SectionContainer className="container py-8 px-0">
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

      <ContestCard contestData={filteredData} />
    </SectionContainer>
  );
}
