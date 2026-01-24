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
    href: 'https://docs.google.com/document/d/1at1523A8507IjCzMAcpjqP7B4C89Hfp2nqepBig1hQk/edit?usp=sharing',
    isNew: true,
    openInNewTab : true
  }
]

export default navItems
