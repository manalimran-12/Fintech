'use client'
import { useMediaQuery, Box, Typography, Input, Grid, Button, Card, List, ListItem, ListItemText, CardContent, createTheme } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';
import { elementsbg, H1, heading, text, button, input } from '@/Styling';
import EastIcon from '@mui/icons-material/East';

const Contact = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 500,
        md: 1025,
        lg: 1500,
        xl: 1920,
      },
    },
  });
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isLgScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const isXlScreen = useMediaQuery(theme.breakpoints.down('xl'));
  const C_heading = heading({
    color: '#D8B150', left: '0px', fontSize: '18px',
    width: isSmScreen ? '80%' : '100%'
  });
  const C_text = text({ left: '0px', fontSize: '14px', width: isSmScreen ? '76%' : '100%' });
  const C_button = button({ height: '40px', borderRadius: '10px' });
  const C_input = {
    color: '#ffffff',
    paddingLeft: '3px',
    height: isSmScreen ? '25px' : '30px',
    border: '1px solid #ffffff',
    transition: 'border 0.5s ease',
    borderRadius: '5px',
    '&:hover': {
      border: '1px solid #D8B150'
    }
  };
  return (
    <Box sx={{
      background: '#313131', height: 'auto', borderRadius: '6px',
      width: isSmScreen ? '80%' : isMdScreen ? '80%' : '76%', padding: '20px 10px 20px 10px',
      position: 'absolute', top: isSmScreen ? '4.5in' : isMdScreen ? '6.75in' : isLgScreen ? '6.2in' : '6.2in', left: '10%',
      display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center'
    }}>
      <Typography textAlign='center' sx={C_heading}>GET YOUR PROJECT ESTIMATION</Typography>
      <Typography textAlign='center' sx={C_text}>Submit your details,
        our representative will be in your touch soon</Typography>
      <Box sx={{
        display: 'flex', flexWrap: 'wrap', gap: '12px', flexDirection: 'row',
        width: '100%', justifyContent: 'center', alignItems: 'center'
      }}>
        <Input disableUnderline='false' sx={C_input} placeholder='FullName'></Input>
        <Input disableUnderline='false' sx={C_input} placeholder='Email'></Input>
        <Input disableUnderline='false' sx={C_input} placeholder='Phone no'></Input>
        <Button sx={C_button} endIcon={<EastIcon />}><Typography sx={{ fontSize: isSmScreen ? '12px' : '18px' }}>Get A Quote</Typography></Button>
      </Box>
    </Box>
  )
}

export default Contact
