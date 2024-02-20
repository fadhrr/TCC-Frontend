'use client';
import Sidebar from '@/components/Contest/Sidebar';
import { useState } from 'react';
import { AuthContextProvider } from '@/context/AuthContext';

export default function ContestLayout({ children, params }) {
  const [open, setOpen] = useState(true);
  return (
    <AuthContextProvider>
      <div className="container flex md:flex-row flex-col mx-auto md:my-8 md:space-x-4">
        <div className="h-max min-w-80 space-y-4">
          <Sidebar open={open} onClose={() => setOpen(false)} slug={params.contestId} />
        </div>
        {children}
      </div>
    </AuthContextProvider>
  );
}
