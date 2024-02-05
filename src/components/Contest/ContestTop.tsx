'use client';
import React, { useState } from 'react';
import { ModalInput } from '../ui/modal';

export default function ContestTop() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="bg-white">
      <div className="container px-8 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-black capitalize lg:text-4xl ">
          <span className="underline decoration-blue-500">Contests</span>
        </h1>
        <p className="mt-4 w-full lg:w-3/5 text-black xl:mt-6 ">
          Welcome to the Contests section, here you will find a variety of exciting contests and challenges that cater to diverse interests and skills. Each contest is designed to test your abilities and knowledge in a specific area.
        </p>
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
              <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-lg bg-white  " placeholder="Search Contest..." required />
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
    </section>
  );
}
