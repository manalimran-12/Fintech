"use client"
import React from 'react';
import { Box, Button, Typography, Drawer, IconButton, List, ListItem, useMediaQuery, createTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Navbar = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 500,
        md: 1024,
        lg: 1280,
        xl: 1920,
      },
    },
  });
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isLgScreen = useMediaQuery(theme.breakpoints.down('lg'))
  const isIpadPro = isMdScreen && !isLgScreen;

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { label: 'Home', link: '#' },
    { label: 'Product', link: '#' },
    { label: 'Services', link: '#' },
    { label: 'Clients', link: '#' },
    { label: 'Blogs', link: '#' },
    { label: 'Podcast', link: '#' },
    { label: 'About us', link: '#' },
    { label: isSmScreen?  'Contact' : (isIpadPro? 'Contact' : ''), link: '#'}
  ];

  return (
    <Box component="section" sx={{ width: '100%', height: '100px', background: 'transparent', display: 'flex', position: 'relative' }}>
      <Image
        src='/logo.png'
        alt="Logo"
        width={isSmScreen ? 33 : 53}
        height={isSmScreen ? 35 : 55}
        style={{
          marginLeft: isSmScreen ? '26px' : (isMdScreen ? '50px' : '80px'),
          marginTop: isSmScreen ? '30px' : '30px'
        }}
      />


      {/* Mobile Hamburger Menu */}
      <IconButton
        sx={{ display: { sm: 'block', md: 'none' }, color: '#D8B150', position: 'absolute', top: '25px', right: '25px' }}
        onClick={handleDrawerToggle}
      >
        {drawerOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>

      {/* Desktop Navigation */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '35px',
          gap: '25px',
          width: '120%', 
        }}
      >
        {menuItems.map((item, index) => (
          <Button
            key={index}
            variant="text"
            sx={{
              fontFamily: 'Raleway',
              fontSize: '20px',
              color: 'white',
              textTransform: 'capitalize',
            }}
          >
            {item.label}
          </Button>
        ))}
        <Button
          endIcon={<ArrowForwardIcon />}
          variant='text'
          sx={{
            fontFamily: 'Raleway',
            fontSize: isSmScreen ? '10px' : '20px',
            color: 'white',
            backgroundColor: '#D8B150',
            width: '188px',
            height:'52px',
            marginTop:'3px',
            borderRadius: '12024.34px',
            textTransform: 'capitalize',
            '&:hover': {
              backgroundColor: '#D8B150',
            },
          }}
        >
          Contact
        </Button>
      </Box>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle} sx={{ '& .MuiDrawer-paper': { backgroundColor: '#272727' }}}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index}>
              <Button variant="text" sx={{ fontFamily: 'Raleway', fontSize: '20px', color: '#D8B150', textTransform: 'capitalize' }}>
                {item.label}
              </Button>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;