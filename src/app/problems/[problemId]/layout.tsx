'use client';

import Sidebar from '@/components/problems/Sidebar';
import { AuthContextProvider } from '@/context/AuthContext';
import { useState } from 'react';

// export const metadata = {
//   title: 'TCC',
//   description: 'Generated by create next app',
// };

export default function ProblemLayout({ children, params }) {
  const [open, setOpen] = useState(true);

  return (
    <AuthContextProvider>
      <div className="container flex md:flex-row flex-col mx-auto md:my-8 md:space-x-4">
        <div className="h-max min-w-80 space-y-4">
          <Sidebar open={open} onClose={() => setOpen(false)} slug={params.problemId} />
        </div>
        {children}
      </div>
    </AuthContextProvider>
  );
}