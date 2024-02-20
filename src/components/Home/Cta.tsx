'use client';
import React from 'react';

export default function Cta() {
  return (
    <section className="py-6  bg-[#65e5cc] mt-2 rounded-md">
      <div className="container text-black mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
        <h1 className="text-3xl md:text-5xl font-bold leadi text-center">Daftar sekarang!</h1>
        <p className="text-base md:text-xl md:font-medium text-center">Tunggu apa lagi, Mulai <span className='font-semibold italic'>`compile`</span>  impianmu bersama kami</p>
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
          <a href="#_" className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-[#fae74d]"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Daftar</span>
            </span>
            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
