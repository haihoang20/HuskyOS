import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Devices',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
    children: [
      {
        title: 'AMD',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Nvidia',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  {
    title: 'Monitor',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
},
{
  title: 'System',
  icon: 'nb-gear',
  children: [
    {
      title: 'Settings',
      link: '/pages/components/tree',
    },
    {
      title: 'Status',
      link: '/pages/components/notifications',
    },
  ],
},
];
