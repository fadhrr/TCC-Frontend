import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: 'TCC',
  description: 'Generated by create next app',
};


const menuItems = [
  { label: 'Dashboard', href: '/admin' },
  { label: 'Problems', href: '/admin/problems' },
  { label: 'Contests', href: '/admin/contests' },
  { label: 'Users', href: '/admin/users' },
];

export default function AdminLayout({ children }) {
  return (
    <div className="flex px-2 space-x-4">
      <Sidebar menuItems={menuItems} title="Admin" title_menu="Admin Menu"/>
      <span className="md:block hidden border-l border-gray-500"></span>
      {children}
    </div>
  );
}
