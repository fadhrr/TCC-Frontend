import Sidebar from '@/components/Sidebar';

export default function ContestLayout({ children }) {
  const menuItems = [
    { label: 'Overview', href: '/contests/slug/overview' },
    { label: 'Problem', href: '/contests/slug/problem' },
    { label: 'Score', href: '/contests/slug/scoreboard' },
  ];

  return (
    <div className="flex px-2 space-x-2">
      <Sidebar menuItems={menuItems} />
      <span className="md:block hidden border-l border-gray-500"></span>
      {children}
    </div>
  );
}
