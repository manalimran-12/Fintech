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
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
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
  ];

  return (
    <Box component="section" sx={{ width: '100%', height: '100px', background: 'transparent', display: 'flex', position: 'relative' }}>
      <Image
        src='/logo.png'
        alt="Logo"
        width={isSmScreen ? 33 : 53}
        height={isSmScreen ? 35 : 55}
        style={{ marginLeft: isSmScreen ? '26px' : '110px', marginTop: isSmScreen ? '30px' : '30px' }}
      />


      {/* Mobile Hamburger Menu */}
      <IconButton
        sx={{ display: { sm: 'block', md: 'none' }, color: 'white', position: 'absolute', top: '25px', right: '37px' }}
        onClick={handleDrawerToggle}
      >
        {drawerOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>

      {/* Desktop Navigation */}
      <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', marginLeft: '140px', marginTop: '35px', gap: '25px' }}>
        {menuItems.map((item, index) => (
          <Button key={index} variant="text" sx={{ fontFamily: 'Raleway', fontSize: '20px', color: 'white', textTransform: 'capitalize' }}>
            {item.label}
          </Button>
        ))}
      </Box>

      {/* Contact Button */}
      <Button
        endIcon={<ArrowForwardIcon />}
        variant='text'
        sx={{
          fontFamily: 'Raleway',
          fontSize: '20px',
          color: 'white',
          backgroundColor: '#D8B150',
          width: '188px',
          height: '52px',
          position: 'absolute',
          marginTop: '40px',
          marginLeft: '1100px',
          marginRight: '110px',
          borderRadius: '12024.34px',
          textTransform: 'capitalize',
          '&:hover': {
            backgroundColor: '#D8B150',
          },
        }}
      >
        Contact
      </Button>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index}>
              <Button variant="text" sx={{ fontFamily: 'Raleway', fontSize: '20px', color: 'black', textTransform: 'capitalize' }}>
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
