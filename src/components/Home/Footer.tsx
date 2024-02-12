'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathUrl = usePathname();
  return (
    <footer className={` p-4   bg-[#212121]  border-t border-black  ${pathUrl !== '/' && 'bg-[#F5F5F5] md:px-20 px-6 py-6 md:py-0'}`}>
      <div className={`container bg-[#F5F5F5] flex rounded-md flex-col items-center justify-between gap-4 md:h-16 md:flex-row ${pathUrl !== '/' && 'bg-transparent'}`}>
        <div>
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{' '}
            <a href="#" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">
              Fadhhr
            </a>
            . The source code is available on{' '}
            <a href="#" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">
              GitHub - Pay 0.016 BTC for the source code
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
