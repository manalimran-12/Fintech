"use client"
import React from 'react';
import { Box, Typography, useMediaQuery, Button,createTheme  } from '@mui/material';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const AboutUs = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 500,
        md: 1025,
        lg: 1500,
        xl: 2600,
      },
    },
  });

    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isLgScreen = useMediaQuery(theme.breakpoints.down('lg'));
    const isXlScreen = useMediaQuery(theme.breakpoints.down('xl'));
    return (
      <Box sx={{backgroundColor: '#272727',width:'100%'}}> 
        <Box sx={{ width: '100%', backgroundColor: '#272727', height:isSmScreen?'350px': isMdScreen?'450px':'650px', display: 'flex', justifyContent:'center' }}>
            <Box sx={{ width: isSmScreen ? '50%' : '39%', height: '200px', margin: '10% 0% 5% 5%'}}>
                <Typography variant='h4' sx={{ fontFamily: 'Rounded Elegance', fontStyle: 'normal', color: 'white', fontWeight: 2, fontSize: isSmScreen ? '15px' : (isMdScreen ?'27px' : '27px'), lineHeight: '0px' }}>
                    About Us
                </Typography>
                <Image src='/Line 1.png' alt='' width={isSmScreen ? 69 : 108} height={3} style={{ paddingTop: '0px' }} />
                <Typography variant="h5" sx={{width:'80%' ,fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: isSmScreen ? '100' : '700', fontSize: isSmScreen ? '18px' : (isMdScreen ? '29px' : '40px'), color: 'white', textTransform: 'capitalize' }}>
                    We promote emerging <span style={{ color: '#D8B150' }}>digital experiences.</span>
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Raleway',
                        fontWeight: '300',
                        fontStyle: 'normal',
                        fontSize: isSmScreen ? '8px' : (isMdScreen ? '10px' : '18px'),
                        lineHeight: isSmScreen ? '15px' : (isMdScreen ? '20px' : '26.16px'),
                        color: 'white'
                    }}>
                    We are dedicated to revolutionizing the way you manage your finances by seamlessly integrating cutting-edge technology with the principles of Islamic finance.
                </Typography>
                <Button
                endIcon={<ArrowForwardIcon />}
                variant='text'
                sx={{
                    fontFamily: 'Raleway',
                    fontSize: isSmScreen ? '15px' : '20px',
                    color: 'white',
                    backgroundColor: '#D8B150',
                    width: isSmScreen ? '150px' : '188px',
                    height: isSmScreen ? '30px' : '49.19px',
                    marginTop:'50px',
                    borderRadius: '12024.34px',
                    textTransform: 'capitalize',
                    '&:hover': {
                        backgroundColor: '#D8B150',
                    },
                }}
            >
                Know More
            </Button>
            </Box>
            
            <Box sx={{paddingLeft:'10px',margin: '0% 0% 5% 5%'}}>
            <Image src='/Frame.png' width={isSmScreen? 50: (isMdScreen? 120:120)} height={isSmScreen? 50: (isMdScreen? 120:120)} alt='' style={{position:'relative',left:isSmScreen?'-15%':isMdScreen?'10%':'14%',top:isSmScreen?'120px':isMdScreen?'20%':'160px' }} />
            <Image src='/VectorA.png' alt='vec1' width={isSmScreen ? 120 : (isMdScreen ? 300 : 380)} height={isSmScreen ? 100 : (isMdScreen ? 290 : 325)}  style={{position:'relative',left:'0%',top:isSmScreen?'0%':isMdScreen?'12%':'100px'}}  />
            </Box>
            </Box>
          <Box
            sx={{
              position: 'relative',
              width:'100%',
              height: '80px',
              justifyContent: 'center',
              alignItems: 'center',
              background:'#272727',
              display: 'flex',
              gap: '20px',
            }}
          >
            <Image src="/foree-sahulat 1.png" alt='logof' width={isSmScreen ? 30 : 80} height={isSmScreen ? 10 : 25} />
            <Image src="/tawakal bazaar.png" alt='logot' width={isSmScreen ? 30 : 80} height={isSmScreen ? 10 : 25} />
            <Image src="/kistPay.png" alt='logok' width={isSmScreen ? 30 : 80} height={isSmScreen ? 10 : 25} />
            {!isSmScreen && (
              <>
                <Image src="/Abhi.png" alt='logoa' width={80} height={25} />
                <Image src="/creditBook.png" alt='logoc' width={80} height={25} />
                <Image src="/Fina.png"  alt='logoF' width={80} height={25} />
              </>
            )}
            {isSmScreen && (
              <>
                <Image src="/Abhi.png"  alt='logoA' width={30} height={10} />
                <Image src="/creditBook.png" alt='logoC' width={30} height={10} />
                <Image src="/Fina.png" alt='logoFina' width={30} height={10} />
              </>
            )}
          </Box>;
          
        </Box>
    );
};

export default AboutUs;

