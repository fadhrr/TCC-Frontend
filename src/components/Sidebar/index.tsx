'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Mengonfirmasi bahwa menu akan ditutup saat salah satu link diklik
  const handleLinkClick = () => {
    if (showMenu) {
      setShowMenu(false);
    }
  };

  return (
    <div className="relative w-0 md:w-1/5 my-8 pt-[80px] block  md:sticky h-[calc(100vh-55px)]">
      <h1 className="text-3xl font-bold md:block hidden w-full mb-4">Problem</h1>

      {/* Burger Menu */}
      <div className="md:hidden z-50 flex gap-2  items-center absolute md:left-[125%] left-[100%] top-10">
        <button onClick={toggleMenu} className="k text-xl text-black focus:outline-none">
          <span className={`relative bg-black my-1.5 block h-0.5 w-[20px] transition-all duration-300  `} />
          <span className={`relative bg-black my-1.5 block h-0.5 w-[20px] transition-all duration-300  `} />
          <span className={`relative bg-black my-1.5 block h-0.5 w-[20px] transition-all duration-300  `} />
        </button>
        <p className="text-xs md:hidden">Problem Menu </p>
      </div>

      {/* Menu Items */}
      <div className={`md:block  top-0 left-0 z-30  duration-300 md:visible  md:opacity-100 ${showMenu ? 'visibility py-10 opacity-100 absolute left-5 top-0 w-screen h-screen bg-white' : 'invisible top-[120%] w-0 opacity-0'}`}>
        <Link href={'/problems/slug/detail'} onClick={handleLinkClick} className="hover:text-[#FFC900] focus:text-[#FFC900]">
          <p className="text-md ml-2 mt-2">Detail</p>
        </Link>
        <Link href={'/problems/slug/submission'} onClick={handleLinkClick} className="hover:text-[#FFC900] focus:text-[#FFC900]">
          <p className="text-md ml-2 mt-2">Submission</p>
        </Link>
      </div>
    </div>
  );
}
