'use client';

import { useState, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface ContentLayoutProps {
  user: any;
  header?: ReactNode;
  children: ReactNode;
}

export default function ContentLayout({ user, header, children }: ContentLayoutProps) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState<boolean>(false);
  const pathUrl = usePathname();
  
  return (
    <div className={`min-h-screen bg-[#212121] px-4 ${pathUrl !== '/' && 'bg-[#f5f5f5]'}`}>
      {header && (
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
        </header>
      )}
      <main>{children}</main>
    </div>
  );
}
