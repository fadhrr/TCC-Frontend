'use client'

import Sidebar from '@/components/Sidebar';
import { useAuth } from '@/context/AuthContext';

export default function UserLayout({ children }) {
  const currentUser = useAuth();
  
  const uid = currentUser ? currentUser.uid : null;

  const menuItems = [
    { label: 'Summary', href: `/profiles/${uid || ''}` },
    { label: 'Submission', href: `/profiles/${uid || ''}/submission` },
  ];
  
  return (
    <div className="flex px-2 space-x-4">
      <Sidebar menuItems={menuItems} title="Profile" title_menu="Profile Menu"/>
      <span className="md:block hidden border-l border-gray-500"></span>
      {children}
    </div>
  );
}