import { Menu } from '@/types/menu';

const menuData: Menu[] = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    newTab: false,
  },
  {
    id: 2,
    title: 'Problems',
    path: '/problems',
    newTab: false,
  },
  {
    id: 3,
    title: 'Contests',
    newTab: false,
    submenu: [
      {
        id: 31,
        title: 'Join Contest',
        path: '/contests/',
        newTab: false,
      },
      {
        id: 32,
        title: 'Create Contest',
        path: '/contests/createContest',
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: 'Ranking',
    path: '/ranking',
    newTab: false,
  },
];
export default menuData;
