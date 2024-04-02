"use client"
import { Box, Button, Typography, useMediaQuery,createTheme  } from '@mui/material';
import Cards1 from '@/components/Card';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
const Services = () => {
    const theme = createTheme({
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 1025,
            lg: 1280,
            xl: 1920,
          },
        },
      });
    
        const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
        const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));
        const isLgScreen = useMediaQuery(theme.breakpoints.down('lg'));
        const isXlScreen = useMediaQuery(theme.breakpoints.down('xl'));
        const isS8Screen = useMediaQuery('(min-width: 360px) and (max-height: 740px)');
    return (
        <>
            <Box sx={{
                position: 'absolute',
                width: '100%',
                height: isSmScreen? '1700px':isMdScreen?'1750px':'1800px',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft:isLgScreen?'0%':isMdScreen?'-6px':isSmScreen?'0px':isXlScreen?'5%':'0px',
                top: isSmScreen? '13in':(isMdScreen? '20in':(isLgScreen?'25in':isXlScreen?'23.5in':'21.5in')),
                backgroundColor: '#272727',
                overflow: 'hidden',
                
            }}>
                <Box
                    sx={{
                        width:'80%',
                        height: '100px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: isSmScreen? (isS8Screen? '80px': '120px') : (isMdScreen? '160px':  '300px'),
                        marginLeft: isMdScreen? "25px" : '',
                        marginTop: isSmScreen? (isS8Screen? '35px' : '40px'): (isMdScreen? '70px': '45px'),
                    }}
                >
                    <Typography variant="h4" sx={{ fontFamily: 'Rounded Elegance', fontStyle: 'normal', color: 'white', fontWeight: 2, fontSize: isSmScreen? '15px': '27px', margin:'auto', paddingLeft: isSmScreen? '50px': (isMdScreen? '170px': "300px") , lineHeight:'0px'}}>
                        Our Service
                    </Typography>
                    <Image src='/Line 1.png' alt='' width={isSmScreen? 74: 130} height={4} style={{ paddingTop: '0px' , marginLeft: isSmScreen? '50px': (isMdScreen? '170px': "300px")}} />
                    <Typography variant="h5" sx={{ fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight:isSmScreen? '100':  '700', fontSize: isSmScreen? '14px':(isMdScreen? '30px':'40px'), color: '#D8B150', textTransform: 'capitalize', margin: 'auto', paddingLeft: isSmScreen? '0px': (isMdScreen? '40px': "100px") }}>
                        <span style={{ color: 'white' }}>Our</span> cutting edge solutions <span style={{ color: 'white' }}>for</span>
                    </Typography>
                    <Typography variant="h4" sx={{ fontFamily: 'Rounded Elegance', fontStyle: 'normal', color: 'white', fontWeight: 2, fontSize: isSmScreen? '13px' : (isMdScreen? '32px':'45px'), lineHeight: isSmScreen? '20px':  '40px', marginTop: '10px', margin: 'auto', paddingLeft: isSmScreen? '0px': (isMdScreen? '15px':"100px") }}>
                        Virtual Islamic & Digital Banking
                    </Typography>
                </Box>
                <Cards1 />
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
                        marginTop: isSmScreen? '570px' : (isMdScreen?'-60px': '10px'),
                        marginLeft: isSmScreen ? (isS8Screen? '80px': '110px' ): isMdScreen? '310px' : '580px',
                        marginRight: '110px',
                        borderRadius: '12024.34px',
                        textTransform: 'capitalize',
                        '&:hover': {
                            backgroundColor: '#D8B150',
                        },
                    }}
                >
                    All Services
                </Button>
                <Box sx={{
                    width: isSmScreen? '340px': (isMdScreen? '700px': '1200px'),
                    height: isSmScreen? '180px': (isMdScreen? '300px' :'361px'),
                    marginLeft: isSmScreen? (isS8Screen? '10px': '35px'): (isMdScreen?'50px' :'67px'),
                    marginTop: isSmScreen?  '660px':(isMdScreen?'60px':'120px'),
                    backgroundColor: '#302148',
                    borderRadius: '61.6px',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <Typography variant="h5" sx={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: isSmScreen? '14px' : (isMdScreen?'25px':'40px'),
                        position: 'absolute',
                        top: '25%',
                        marginLeft: isSmScreen? '40px' : (isMdScreen?'100px':'220px'),
                        color: '#D8B150',
                        textTransform: 'capitalize'
                    }}>
                        <span style={{ color: 'white' }}>Digital Products On</span> Deposite Or Investments
                    </Typography>

                    <Typography sx={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontSize: isSmScreen? '7px': (isMdScreen?'15px':'15px'),
                        position: 'absolute',
                        top: '45%',
                        marginLeft: isSmScreen? '70px' : (isMdScreen? '150px':'370px'),
                        color: 'white',
                        maxWidth: isSmScreen? '250px': '500px',
                    }}>Work with Greensfin, more than a fintech company, currently on a mission</Typography>
                    <Typography sx={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontSize: isSmScreen? '7px': (isMdScreen? '15px':'15px'),
                        position: 'absolute',
                        top: '50%',
                        marginLeft: isSmScreen? '110px': (isMdScreen? '240px':'450px'),
                        color: 'white',
                        maxWidth: isSmScreen? '300px': '600px',
                    }}>to transform the global business infrastructure.</Typography>
                    <Button
                        endIcon={<ArrowForwardIcon />}
                        variant='text'
                        sx={{
                            fontFamily: 'Raleway',
                            fontSize:  isSmScreen?'10.3px': '20px',
                            color: 'white',
                            backgroundColor: '#D8B150',
                            width:isSmScreen? '140px': '280px',
                            height: isSmScreen? '40px': '52px',
                            position: 'absolute',
                            marginTop: isSmScreen? '110px': (isMdScreen? '190px':'250px'),
                            marginLeft: isSmScreen? '100px': (isMdScreen?'210px':'460px'),
                            marginRight: '110px',
                            borderRadius: '12024.34px',
                            textTransform: 'capitalize',
                            '&:hover': {
                                backgroundColor: '#D8B150',
                            },
                        }}
                    >
                        Book Your Consultation
                    </Button>

                    <Image src="/Rectangle 25.png" alt='shape' width={isSmScreen? 80: (isMdScreen? 150 : 320)} height={isSmScreen? 180 : 360} style={{ marginLeft:isSmScreen? '10px': isMdScreen?'20px' :'45px' }} />
                    <Image src="/VectorS.png" alt='shape1' width={isSmScreen? 90:(isMdScreen? 130 : 270)} height={isSmScreen? 90:(isMdScreen? 40 : 250)} style={{ marginLeft:isSmScreen? '160px' : (isMdScreen? '400px': '566px'), position: 'absolute', marginTop:isSmScreen? '90px': (isMdScreen?'158px':"110px" )}} />
                    <Image src="/VectorS2.png" alt='shape2' width={isSmScreen? 35: (isMdScreen? 130:120)} height={isSmScreen? 25:(isMdScreen? 50: 90)} style={{ position: 'absolute', marginTop:isSmScreen? '148px':(isMdScreen? '247px' :'270px'), marginLeft: isSmScreen? '210px':(isMdScreen? '480px':'715px')}} />
                </Box>


            </Box>
        </>
    )
}

export default Services;
