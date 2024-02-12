import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-[#212121] overflow-hidden border-b-2 pt-[80px] text-black border-black">
      <div className=" container bg-white flex rounded-md flex-col justify-center p-2 mx-auto sm:py-12 lg:flex-row ">
        {/* Tulisan */}
        <div className="flex flex-col justify-center lg:w-1/2 text-black p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left order-2 md:order-1">
          <h1 className="text-5xl font-bold leadi sm:text-6xl">
            Ac mattis
            <span className="text-black"> senectus</span>erat pharetra
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Dictum aliquam porta in condimentum ac integer
            <br className="hidden md:inline lg:hidden" />
            turpis pulvinar, est scelerisque ligula sem
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border-2 border-black bg-black text-white">
              Suspendisse
            </a>
            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg text-black font-semibold border-2 border-black ">
              Malesuada
            </a>
          </div>
        </div>
        {/* image */}
        <div className="flex  items-center justify-center lg:w-1/2 p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 order-1 md:order-2">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hand Image"
            className="object-cover border-black border shadow-[4px_4px_0px_rgba(0,0,0,1)] h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 "
          />
          {/* <img src="/images/Hand.png" alt="Hand Image" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" /> */}
        </div>
      </div>
    </section>
  );
}
