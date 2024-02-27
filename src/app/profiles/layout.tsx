'use client'

import Sidebar from '@/components/Sidebar';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';


export default function UserLayout({ children }) {
  const currentUser = useAuth();
  const router = useRouter();
  
  const menuItems = [
    { label: 'Summary', href: `/profiles/${currentUser.uid}`  },
    { label: 'Submission', href: `/profiles/${currentUser.uid}/submission` },
  ];
  return (
    <div className="flex px-2 space-x-4">
      <Sidebar menuItems={menuItems} title="Profile" title_menu="Profile Menu"/>
      <span className="md:block hidden border-l border-gray-500"></span>
      {children}
    </div>
  );
}