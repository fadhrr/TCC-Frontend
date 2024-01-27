'use client';

import React from 'react';

export default function Header() {
  const onToggleMenu = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.currentTarget.name = e.currentTarget.name === 'menu' ? 'close' : 'menu';
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      navLinks.classList.toggle('top-[9%]');
    }
  };

  return (
    // <div className="font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen">
    <header className="bg-white border-b-2 border-black">
      <nav className="flex justify-between py-4 items-center w-[92%] mx-auto">
        <div>
          <img className="w-10 cursor-pointer" src="/images/logo.png" alt="..." />
        </div>
        <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-gray-500" href="/problem">
                Problem
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Contest
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Rangking
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <a href="#_" className="relative infline-flex items-center justify-start inline-block px-4 py-2 overflow-hidden font-bold rounded-full group">
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">Log in</span>
            <span className="absolute inset-0 border-2 border-black rounded-full"></span>
          </a>
          {/* <button
                        href="#_"
                        class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                    >
                        Sing In
                    </button> */}
          {/* <ion-icon onClick={onToggleMenu} name="menu" className="text-3xl cursor-pointer md:hidden"></ion-icon> */}
          <button type="button" className=" md:hidden" onClick={onToggleMenu}>
            <img src="/icons/menu.svg" className=" w-[20px]" alt="" />
          </button>
        </div>
      </nav>
    </header>
    // </div>
  );
}
