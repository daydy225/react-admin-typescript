export type TMenuData = {
  id: number
  title: string
  listItems: ListItem[]
}

export type ListItem = {
  id: number
  title: string
  icon: string
  url: string
}

export const menuData: TMenuData[] = [
  {
    id: 1,
    title: 'main',
    listItems: [
      {
        id: 1,
        icon: '/home.svg',
        url: '/',
        title: 'Homepage',
      },
      {
        id: 2,
        icon: '/profile.svg',
        url: '/users/1',
        title: 'Profile',
      },
    ],
  },
  {
    id: 2,
    title: 'lists',
    listItems: [
      {
        id: 1,
        icon: '/user.svg',
        url: '/users',
        title: 'Users',
      },
      {
        id: 2,
        icon: '/product.svg',
        url: '/products',
        title: 'Product',
      },
      {
        id: 3,
        icon: '/order.svg',
        url: '/orders',
        title: 'Orders',
      },
      {
        id: 4,
        icon: '/post2.svg',
        url: '/posts',
        title: 'Posts',
      },
    ],
  },
  {
    id: 3,
    title: 'general',
    listItems: [
      {
        id: 1,
        icon: '/element.svg',
        url: '/',
        title: 'Elements',
      },
      {
        id: 2,
        icon: '/note.svg',
        url: '/',
        title: 'Notes',
      },
      {
        id: 3,
        icon: '/form.svg',
        url: '/',
        title: 'Forms',
      },
      {
        id: 4,
        icon: '/calendar.svg',
        url: '/',
        title: 'Calendar',
      },
    ],
  },
  {
    id: 4,
    title: 'maintenance',
    listItems: [
      {
        id: 1,
        icon: '/setting.svg',
        url: '/',
        title: 'Settings',
      },
      {
        id: 2,
        icon: '/backup.svg',
        url: '/',
        title: 'Backups',
      },
    ],
  },
  {
    id: 5,
    title: 'analytics',
    listItems: [
      {
        id: 1,
        icon: '/chart.svg',
        url: '/',
        title: 'Charts',
      },
      {
        id: 2,
        icon: '/log.svg',
        url: '/',
        title: 'Logs',
      },
    ],
  },
]
