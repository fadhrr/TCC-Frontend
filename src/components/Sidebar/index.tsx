"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Sidebar({ menuItems, title, title_menu }) {

  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    if (showMenu) {
      setShowMenu(false);
    }
  };

  return (
    <div className="relative w-0 md:w-1/5 my-8 pt-[80px] md:px-6 px-0 block md:sticky h-[calc(100vh-55px)]">
      <h1 className="text-3xl font-bold md:block hidden w-full mb-4">{title}</h1>
      <div className="md:hidden z-50 flex gap-2 items-center absolute md:left-[125%] left-[100%] top-10" style={{ width: "300px" }}>
        <button onClick={toggleMenu} className="text-xl text-black focus:outline-none">
          <span className={`relative bg-black my-1.5 block h-0.5 w-[20px] transition-all duration-300  `} />
          <span className={`relative bg-black my-1.5 block h-0.5 w-[20px] transition-all duration-300  `} />
          <span className={`relative bg-black my-1.5 block h-0.5 w-[20px] transition-all duration-300  `} />
        </button>
        <p className="text-xs inline-block md:hidden">{title_menu}</p>
      </div>

      <div ref={menuRef} className={`md:block z-30 md:visible md:opacity-100 ${showMenu ? 'visibility py-10 duration-300 opacity-100 absolute border-2 border-black rounded-md left-10 top-20 w-32 bg-white' : 'invisible left-[120%] top-[120%] w-full opacity-0'}`}>
        {menuItems.map((item, index) => (
          <Link key={index} href={item.href} onClick={handleLinkClick}  className={`hover:text-[#FFC900] focus:text-[#FFC900] ${item.active ? 'text-[#FFC900]' : ''}`}>
            <p className="text-md ml-2 mt-2">{item.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
