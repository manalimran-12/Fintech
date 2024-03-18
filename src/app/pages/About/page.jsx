"use client"
import React from 'react';
import { Box, Typography, useMediaQuery, Button } from '@mui/material';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const page = () => {
    const isSmScreen = useMediaQuery("(max-width:600px)");
    const isMdScreen = useMediaQuery("(min-width: 600px) and (max-width: 1024px)");
    const isIpadProScreen = useMediaQuery("(min-width: 900px) and (max-width: 1024px)");
    const isS8Screen = useMediaQuery('(min-width: 360px) and (max-height: 740px)');
    return (
        <Box sx={{ width: isSmScreen? '300%':'100%', backgroundColor: '#272727', overflow: 'hidden', height: '100vh', display: 'flex' }}>
            <Box sx={{ width: '35%', height: '200px', margin: 'auto', marginTop:isSmScreen? '20%' : '80px', marginLeft: '100px' }}>
                <Typography variant='h4' sx={{ fontFamily: 'Rounded Elegance', fontStyle: 'normal', color: 'white', fontWeight: 2, fontSize: '27px', lineHeight: '0px' }}>
                    About Us
                </Typography>
                <Image src='/Line 1.png' alt='' width={108} height={3} style={{ paddingTop: '0px' }} />
                <Typography variant="h5" sx={{ fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: '700', fontSize: '40px', color: 'white', textTransform: 'capitalize' }}>
                    We promote emerging <span style={{ color: '#D8B150' }}>digital experiences.</span>
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Raleway',
                        fontWeight: '300',
                        fontStyle: 'normal',
                        fontSize: '15px',
                        lineHeight: '26.16px',
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
                    fontSize: '20px',
                    color: 'white',
                    backgroundColor: '#D8B150',
                    width: '188px',
                    height: '52px',
                    position: 'absolute',
                    marginTop: '350px',
                    borderRadius: '12024.34px',
                    textTransform: 'capitalize',
                    marginLeft: '100px',
                    '&:hover': {
                        backgroundColor: '#D8B150',
                    },
                }}
            >
                Know More
            </Button>
            <Image src='/Frame.png' width={120} height={120} alt='' style={{position: 'absolute', left: '630px', top: '390px'}}/>
            <Box sx={{ position: 'absolute', width: '550px', height: '420px', backgroundColor: '#302148', marginLeft: '700px', marginTop: '80px', borderRadius: '66px 0px 66px 66px' }}>
                <Image src='/VectorA1.png' width={380} height={325} alt='' style={{ marginLeft: '170px', marginTop: '95px' }} />
                <Image src='/VectorA2.png' width={145} height={145} alt='' style={{ position: 'absolute', left: '340px', top: '275px' }} />
                <Image src='/logo.png' width={110} height={110} alt='' style={{ position: 'absolute', left: '240px', top: '150px' }} />
            </Box>
            <Box sx={{position:'absolute', width:'700px', height:'100px', justifyContent: 'center', alignItems:'center', marginLeft:'25%', marginTop:'38%', display:'flex', gap:'20px'}}>
                <Image src='/foree-sahulat 1.png' width={80} height={25}/>
                <Image src='/tawakal bazaar.png' width={80} height={25}/>
                <Image src='/kistPay.png' width={80} height={25}/>
                <Image src='/Abhi.png' width={80} height={25}/>
                <Image src='/creditBook.png' width={80} height={25}/>
                <Image src='/Fina.png' width={80} height={25}/>
            </Box>



        </Box>
    );
};

export default page;
