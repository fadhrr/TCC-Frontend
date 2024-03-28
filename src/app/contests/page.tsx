'use client';

import { ContestCard } from '@/components/ui/card';
import { ModalInput } from '@/components/ui/modal';
import { Headline } from '@/components/ui/headline';
import React, { useState, useEffect } from 'react';
import SectionContainer from '@/Layouts/SectionContainer';
import SearchBar from '@/components/SearchBar';

export default function Contest({showHeadline=true}) {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
 
  
  // fetching card contest
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contests`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log('Error fetching data ', error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <SectionContainer className="container py-8 px-0">
      {showHeadline && (
          <Headline
           title="Contests"
           desc=" Welcome to the Contests section, here you will find a variety of exciting contests and challenges that cater to diverse interests and skills. Each contest is designed to test your abilities and knowledge in a specific area." className='mb-4'
         />
      )}
   
      <div className="flex justify-start gap-4 items-center">
        <SearchBar searchTerm={searchTerm} handleChange={handleChange} />
        <div>
          <button
            className="p-4 bg-white border-2 cursor-pointer text-sm border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-sm rounded-lg xl:mt-3 mt-4"
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
