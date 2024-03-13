'use client';
import React from 'react';
import Image from 'next/image';
// import Team from '/images/team.jpg';

export default function Hero() {
  return (
    <section className="relative  overflow-hidden  pt-[80px] text-black ">
      <div className=" container bg-white flex rounded-md flex-col justify-center p-2 mx-auto sm:py-12 lg:flex-row ">
        {/* Tulisan */}
        <div className="flex flex-col justify-center lg:w-1/2 text-black p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left order-2 md:order-1">
          <div className="flex flex-col font-bold">
            <span className="text-md sm:text-xl">#SemuaBisaNgoding</span>

            <h2 className="text-4xl font-bold  sm:text-6xl">Mulai dari sini</h2>
          </div>
          <p className="mt-6 mb-8 text-lg sm:mb-12">TCC adalah platform yang membantu kamu meningkatkan keterampilan, memperluas pengetahuan, dan mempersiapkan diri untuk industri</p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <div
              className="px-8 cursor-pointer py-3 text-lg font-semibold border-2 border-black bg-black text-white"
              onClick={() => {
                const featureSection = document.getElementById('#fiture');
                if (featureSection) {
                  featureSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Lihat program
            </div>
            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg text-black font-semibold border-2 border-black ">
              Daftar
            </a>
          </div>
        </div>
        {/* image */}
        <div className="flex  items-center justify-center lg:w-1/2 p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 order-1 md:order-2">
          <Image src="/images/team.jpg" alt="Hand Image" width={800} height={600} fill={false} className="object-cover border-black border shadow-[4px_4px_0px_rgba(0,0,0,1)] h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 " />
        </div>
      </div>
    </section>
  );
}
