import React from 'react'
import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import Person4Icon from '@mui/icons-material/Person4';
import { useNavigate } from 'react-router-dom';
import { Constants } from '../../utils/constants/constants';

const drawerWidth = 240;

const navItems = [
  {
    label: 'Home',
    icon: <HomeIcon />,
    link: '/'
  },
  // {
  //   label: 'About',
  //   icon: <Person4Icon />,
  //   link: '/about'
  // },
  // {
  //   label: 'Projects',
  //   icon: <AccountTreeIcon />,
  //   link: '/projects'
  // },
  {
    label: 'Resume',
    icon: <DescriptionIcon />,
    link: '/resume'
  },
  
]


const NavBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const reloadOnClickLogo = () => window.location.reload()
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} >
            <ListItemButton onClick={()=>navigateToLink(item.link)}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = typeof window !== 'undefined' ? () => window.document.body : undefined;
  const navigate = useNavigate()
  const navigateToLink = (link:string) => navigate(link)
  return (
    <>
      <AppBar sx={{
        background:'linear-gradient(90deg, rgba(2,0,36,1) 100%, rgba(0,212,255,1) 100%, rgba(10,7,126,1) 100%)',
        opacity:0.9,
      }}
      >
        <Toolbar >
          <Typography
            variant="body1"
            
            component="div"
            fontWeight={700}
            letterSpacing={4}
            sx={{ flexGrow: 1, color: '#9067C6' }}
            onClick={reloadOnClickLogo}
            className='cursor-pointer'
          >
            {Constants.NAME}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }} gap={6}>
            {navItems.map((item) => (
              <Stack className=' cursor-pointer' onClick={()=>navigateToLink(item.link)} key={item.label} direction={'row'} alignItems={'center'} gap={2}>
                <Typography variant='body2' className='text-stone-300 text-2xl font-semibold'>
                  {item.label}
                </Typography>
                {item.icon}
              </Stack>
            ))}
          </Box>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{ color: 'white' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          anchor='right'
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  )
}

export default NavBar
