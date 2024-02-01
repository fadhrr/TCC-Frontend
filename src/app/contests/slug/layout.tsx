import Sidebar from '@/components/Sidebar';


export default function ContestLayout({ children }) {
 
  const menuItems = [
    {title: "Contests", title_menu: "Contest Menu", label: 'Overview', href: '/contests/slug/overview' },
    {title: "Contests", title_menu: "Contest Menu", label: 'Problem', href: '/contests/slug/problem' },
    {title: "Contests", title_menu: "Contest Menu", label: 'Score', href: '/contests/slug/scoreboard' },
  ];

  return (
    <div className="flex px-2 space-x-2">
      <Sidebar menuItems={menuItems} title="Contest" title_menu="Contest Menu" />
      <span className="md:block hidden border-l border-gray-500"></span>
      {children}
    </div>
  );
}
