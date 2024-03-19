"use client"
import React from 'react';
import { Box, Typography, useMediaQuery, Button } from '@mui/material';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const AboutUs = () => {
    const isSmScreen = useMediaQuery("(max-width:600px)");
    const isMdScreen = useMediaQuery("(min-width: 600px) and (max-width: 1024px)");
    const isIpadProScreen = useMediaQuery("(min-width: 900px) and (max-width: 1024px)");
    const isS8Screen = useMediaQuery('(min-width: 360px) and (max-height: 740px)');
    return (
        <Box sx={{ width: '100%', backgroundColor: '#272727', overflow: 'hidden', height: '115vh', display: 'flex', position: 'absolute', top: isSmScreen ? (isS8Screen ? '25%' : '19%') : (isMdScreen ? (isIpadProScreen ? '20%' : '20%') : '45%') }}>
            <Box sx={{ width: isSmScreen ? '50%' : '39%', height: '200px', margin: 'auto', marginTop: isSmScreen ? '20%' : (isMdScreen ? (isIpadProScreen ? '20%' : '20%') : '80px'), marginLeft: isSmScreen ? '25px' : (isMdScreen ? (isIpadProScreen ? '50px' : '50px') : '100px') }}>
                <Typography variant='h4' sx={{ fontFamily: 'Rounded Elegance', fontStyle: 'normal', color: 'white', fontWeight: 2, fontSize: isSmScreen ? (isS8Screen ? '15px' : '15px') : (isMdScreen ? (isIpadProScreen ? '27px' : '27px') : '27px'), lineHeight: '0px' }}>
                    About Us
                </Typography>
                <Image src='/Line 1.png' alt='' width={isSmScreen ? 69 : 108} height={3} style={{ paddingTop: '0px' }} />
                <Typography variant="h5" sx={{ fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: isSmScreen ? '100' : '700', fontSize: isSmScreen ? '18px' : (isMdScreen ? '29px' : '40px'), color: 'white', textTransform: 'capitalize' }}>
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
            </Box>
            <Button
                endIcon={<ArrowForwardIcon />}
                variant='text'
                sx={{
                    fontFamily: 'Raleway',
                    fontSize: isSmScreen ? '15px' : '20px',
                    color: 'white',
                    backgroundColor: '#D8B150',
                    width: isSmScreen ? '150px' : '188px',
                    height: '52px',
                    position: 'absolute',
                    marginTop: isSmScreen ? '230px' : (isMdScreen ? '380px' : '380px'),
                    marginLeft: isSmScreen ? (isS8Screen ? '25px' : '25px') : (isMdScreen ? (isIpadProScreen ? '50px' : '50px') : '100px'),
                    marginRight: '110px',
                    borderRadius: '12024.34px',
                    textTransform: 'capitalize',
                    '&:hover': {
                        backgroundColor: '#D8B150',
                    },
                }}
            >
                Know More
            </Button>
            <Image src='/Frame.png' width={isSmScreen? (isS8Screen? 50: 50 ): (isMdScreen? (isIpadProScreen? 120: 120):120)} height={isSmScreen? (isS8Screen? 50: 50 ): (isMdScreen? (isIpadProScreen? 120: 120):120)} alt='' style={{ position: 'absolute', left:isSmScreen? (isS8Screen? '300px': '300px'): (isMdScreen? (isIpadProScreen? '450px' : '330px') :'630px'), top:isSmScreen? (isS8Screen? '100px': '100px'): (isMdScreen? (isIpadProScreen? '370px': '370px'): '390px') }} />
            <Box sx={{ position: 'absolute', width: isSmScreen ? '155px' : (isMdScreen ? (isIpadProScreen ? '450px' : '400px') : '550px'), height: isSmScreen ? '145px' : (isMdScreen ? '370px' : '420px'), backgroundColor: '#302148', marginLeft: isSmScreen ? (isS8Screen ? '196px' : '247px') : (isMdScreen ? (isIpadProScreen ? '500px' : '370px') : '700px'), marginTop: '80px', borderRadius: '66px 0px 66px 66px' }}>
                <Image src='/VectorA1.png' alt='vec1' width={isSmScreen ? (isS8Screen ? 100 : 100) : (isMdScreen ? (isIpadProScreen ? 300 : 300) : 380)} height={isSmScreen ? (isS8Screen ? 90 : 90) : (isMdScreen ? (isIpadProScreen ? 300 : 280) : 325)} alt='' style={{ marginLeft: isSmScreen ? (isS8Screen ? '35px' : '35px') : (isMdScreen ? (isIpadProScreen ? '146px' : '100px') : '170px'), marginTop: isSmScreen ? (isS8Screen ? '50px' : '50px') : (isMdScreen ? (isIpadProScreen ? '69px' : '87px') : '95px') }} />
                <Image src='/VectorA2.png' alt='vec2' width={isSmScreen ? (isS8Screen ? 38 : 38) : (isMdScreen ? (isIpadProScreen ? 120 : 120) : 145)} height={isSmScreen ? (isS8Screen ? 40 : 40) : (isMdScreen ? (isIpadProScreen ? 125 : 125) : 145)} alt='' style={{ position: 'absolute', left: isSmScreen ? (isS8Screen ? '80px' : '80px') : (isMdScreen ? (isIpadProScreen ? '280px' : '230px') : '340px'), top: isSmScreen ? (isS8Screen ? '100px' : '100px') : (isMdScreen ? (isIpadProScreen ? '247px' : '247px') : '275px') }} />
                <Image src='/logo.png' alt='vec3' width={isSmScreen ? (isS8Screen ? 30 : 30) : (isMdScreen ? (isIpadProScreen ? 80 : 80) : 110)} height={isSmScreen ? (isS8Screen ? 30 : 30) : (isMdScreen ? (isIpadProScreen ? 80 : 80) : 110)} alt='' style={{ position: 'absolute', left: isSmScreen ? (isS8Screen ? '60px' : '60px') : (isMdScreen ? (isIpadProScreen ? '200px' : '180px') : '240px'), top: isSmScreen ? (isS8Screen ? '63px' : '62px') : (isMdScreen ? (isIpadProScreen ? '133px' : '138px') : '150px') }} />
            </Box>
            <Box
            sx={{
              position: 'absolute',
              width: isSmScreen ? '300px' : '700px',
              height: '100px',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: isSmScreen
                ? isS8Screen
                  ? '8%'
                  : '15%'
                : isMdScreen
                ? isIpadProScreen
                  ? '15%'
                  : '5%'
                : '25%',
              marginTop: isSmScreen
                ? isS8Screen
                  ? '72%'
                  : '67%'
                : isMdScreen
                ? isIpadProScreen
                  ? '50%'
                  : '60%'
                : '38%',
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

