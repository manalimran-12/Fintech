"use client"
// import {Suspense} from 'react'
import { Box, Typography, Button, useMediaQuery, createTheme } from '@mui/material';
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import PhoneMod from '@/components/PhoneMod';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "../app/globals.css";

const Home = () => {
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
  const isMdScreen = useMediaQuery("(min-width: 600px) and (max-width: 1024px)");
  const isLgScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const isIpadProScreen = useMediaQuery("(min-width: 1024px) and (max-width: 1024px)");

  const contentData = {
    box: {
      position: 'absolute',
      width: '100%',
      height: isSmScreen ? '100vh' : '100vh',
      background: 'linear-gradient(180deg, #351D5B 0%, #272727 53.33%)',
      overflow: 'hidden',
    },
    innerBox: {
      width: '55%',
      marginLeft: isSmScreen ? '20px' : (isMdScreen ? '35px' : '90px'),
      marginTop: isSmScreen ? '20px' : '120px',
      marginBottom: '10px',
      maxWidth: isSmScreen ? '170px' : (isMdScreen ? (isIpadProScreen ? '450px' : '550px') : '800px')
    },
    title: {
      fontFamily: 'Rounded Elegance',
      fontStyle: 'normal',
      color: 'white',
      fontWeight: 400,
      fontSize: isSmScreen ? '15px' : (isMdScreen ? '20px' : '27px'),
      lineHeight: '10px',
    },
    subTitle: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: isSmScreen ? '18px' : (isMdScreen ? '35px' : '45px'),
      color: '#D8B150',
    },
    description: {
      fontFamily: 'Raleway',
      fontStyle: 'normal',
      fontSize: isSmScreen ? '8px' : (isMdScreen ? '10px' : '18px'),
      color: '#FFFFFF',
      lineHeight: '15px',
      letterSpacing: '0.04rem',
      marginTop: '21px',
      lineHeight: isSmScreen ? '15px' : (isMdScreen ? '20px' : '26.16px'),
    },
    getStartedButton: {
      fontFamily: 'Montserrat',
      fontSize: isSmScreen ? '12px' : '20px',
      color: 'white',
      backgroundColor: '#D8B150',
      width: isSmScreen ? '136px' : '200px',
      height: isSmScreen ? '30px' : '49.19px',
      borderRadius: '9837.85px',
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: '#D8B150',
      },
    },
    demoButton: {
      fontFamily: 'Montserrat',
      fontSize: isSmScreen ? '12px' : '20px',
      color: 'white',
      width: isSmScreen ? '139px' : '250px',
      height: isSmScreen ? '30px' : '49.19px',
      borderRadius: '9837.85px',
      textTransform: 'capitalize',
    },
    gradientBox: {
      position: 'absolute',
      background: 'linear-gradient(180deg, #563985 0%, rgba(43, 37, 51, 0) 100%)',
      borderRadius: '182.898px 182.898px 0px 0px',
      transform: 'rotate(-18.73deg)',
    },
  };

  return (
    <Box sx={{ width: '100%', height: '280vh', position: 'absolute' }}>
      <Box sx={contentData.box}>
        <Navbar />
        <Box sx={contentData.innerBox}>
          <Typography variant="h4" sx={contentData.title}>
            Virtual Islamic Banking
          </Typography>
          <Image src='/Line 1.png' alt='line' width={isSmScreen ? 153.1 : (isMdScreen ? 200 : 263)} height={4} sx={{ paddingTop: '0px' }} />
          <Typography variant="h5" sx={{ ...contentData.subTitle, fontWeight: 700, fontSize: isSmScreen ? '24px' : '54px' }}>
            Transforming Finance
          </Typography>

          <Typography variant="h5" sx={{ ...contentData.subTitle, color: '#FFFFFF', fontSize: isSmScreen ? '17px' : '40px', fontWeight: 400 }}>
            with Fast & Easy!
          </Typography>
          <Typography variant='body2' sx={{ ...contentData.description }} >
            From Virtual Islamic/ Digital Banking and payment platforms to asset management, our FinTech products encompass a wide spectrum of offerings that are reshaping the financial landscape.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: isSmScreen ? 'column' : 'row', gap: isSmScreen ? '10px' : '20px', marginTop: isSmScreen ? '18px' : '35px' }}>
            <Button variant='text' sx={contentData.getStartedButton} endIcon={<ArrowForwardIcon />}>
              Get Started
            </Button>
            <Button variant='text' endIcon={<Image src='/playCircle.png' width={24} height={24} alt='playCircle' />} sx={contentData.demoButton}>
              See Live Demo
            </Button>
          </Box>
        </Box>
        <Image src="/Vector.png" alt='vector' width={isSmScreen ? 90 : 240} height={isSmScreen ? 35 : 100} sx={{ marginTop: isSmScreen ? '10px' : '50px' }} />
        <Box sx={{
          justifyContent: 'right',
          alignItems: 'right',
        }}>
          <div
            style={{
              ...contentData.gradientBox,
              ...{
                width: isSmScreen ? '130px' : (isMdScreen ? (isIpadProScreen ? '230px' : '220px') : '300.8px'),
                height: isSmScreen ? '230px' : (isMdScreen ? (isIpadProScreen ? '350px' : '330px') : '450.19px'),
                left: isSmScreen ? '200px' : (isMdScreen ? (isIpadProScreen ? '550px' : '470px') : 'calc(70% - 132.9px)'),
                top: isSmScreen ? '130px' : '145.45px',
              },
            }}
          />
          <div
            style={{
              ...contentData.gradientBox,
              ...{ width: isSmScreen ? '18px' : (isMdScreen ? '30px' : '2.5vw'), height: isSmScreen ? '15vh' : (isMdScreen ? (isIpadProScreen ? '11vh' : '13vh') : '30vh'), left: isSmScreen ? '340px' : (isMdScreen ? (isIpadProScreen ? '800px' : '720px') : '1160px'), top: isSmScreen ? '155px' : (isMdScreen ? (isIpadProScreen ? '18vh' : '19vh') : '50vh') },
            }}
          />
          <Box sx={{ width: isSmScreen ? '70%' : (isMdScreen ? (isIpadProScreen ? '40%' : '40%') : '55%'), height: isSmScreen ? '250px' : (isMdScreen ? (isIpadProScreen ? '400px' : '400px') : '550px'), marginTop: isSmScreen ? '-360px' : (isMdScreen ? (isIpadProScreen ? '-500px' : '-500px') : '-555px'), marginLeft: isSmScreen ? '185px' : (isMdScreen ? (isIpadProScreen ? '550px' : '530px') : '750px') }}>
            <PhoneMod />
          </Box>
        </Box>
      </Box>
    </Box >
  );
};

export default Home;