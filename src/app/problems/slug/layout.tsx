import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: 'TCC',
  description: 'Generated by create next app',
};

const menuItems = [
  { label: 'Detail', href: '/problems/slug/detail' },
  { label: 'Submission', href: '/problems/slug/submission' },
];

export default function ProblemLayout({ children }) {
  return (
    <div className="flex px-2 space-x-4">
      <Sidebar menuItems={menuItems} title="Problems" title_menu="Problems Menu"/>
      <span className="md:block hidden border-l border-gray-500"></span>
      {children}
    </div>
  );
}
