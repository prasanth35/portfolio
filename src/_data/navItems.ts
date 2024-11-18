import NavItemsProps from '@/types/NavItemsProps'

const navItems: NavItemsProps[] = [
  {
    name: 'Home',
    href: '/',
    isNew: false,
    openInNewTab : false
  },
  {
    name: 'Projects',
    href: '/projects',
    isNew: false,
    openInNewTab : false
  },
  {
    name: 'About',
    href: '/about',
    isNew: false,
    openInNewTab : false
  },
  {
    name: 'Resume',
    href: 'https://docs.google.com/document/d/1jgzv66Sn-mIdKQo40QSr69sYkWbyXk4YOTRd-GVBOow',
    isNew: true,
    openInNewTab : true
  }
]

export default navItems
