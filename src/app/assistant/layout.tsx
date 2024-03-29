import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: 'TCC',
  description: 'Generated by create next app',
};


const menuItems = [
  { label: 'Dashboard', href: '/assistant' },
  { label: 'Problems', href: '/assistant/problems' },
  { label: 'Users', href: '/assistant/users' },
];

export default function AsisstantLayout({ children }) {
  return (
    <div className="flex px-2 space-x-4">
      <Sidebar menuItems={menuItems} title="Assistant" title_menu="Admin Menu"/>
      <span className="md:block hidden border-l border-gray-500"></span>
      {children}
    </div>
  );
}
