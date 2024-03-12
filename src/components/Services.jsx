"use client"
import { Box, Button, Typography, useMediaQuery, } from '@mui/material';
import Cards1 from '@/components/Card';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
const Services = () => {
    const isSmScreen = useMediaQuery("(max-width:600px)");
    const isMdScreen = useMediaQuery("(min-width: 600px) and (max-width: 1024px)");
    const isIpadProScreen = useMediaQuery("(min-width: 900px) and (max-width: 1024px)");
    return (
        <>
            <Box sx={{
                position: 'absolute',
                width: '100%',
                height: isSmScreen? '250vh': (isMdScreen? '220vh':'200vh'),
                justifyContent: 'center',
                alignItems: 'center',
                top: isSmScreen? '28%':(isMdScreen? '27%':'50%'),
                backgroundColor: '#272727',
                overflow: 'hidden',
                
            }}>
                <Box
                    sx={{
                        width:'80%',
                        height: '100px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: isSmScreen? '80px': (isMdScreen? '160px':  '300px'),
                        marginLeft: isMdScreen? "25px" : '',
                        marginTop: isSmScreen? '4px': '10px',
                        marginLeft: isIpadProScreen? '90px': '',
                    }}
                >
                    <Typography variant="h4" sx={{ fontFamily: 'Rounded Elegance', fontStyle: 'normal', color: 'white', fontWeight: 2, fontSize: isSmScreen? '12px': '27px', margin: 'auto', paddingLeft: isSmScreen? '50px': (isMdScreen? '170px': "300px") , lineHeight:'0px'}}>
                        Our Service
                    </Typography>
                    <Image src='/line 1.png' alt='' width={isSmScreen? 59: 130} height={4} style={{ paddingTop: '0px' , marginLeft: isSmScreen? '50px': (isMdScreen? '170px': "300px")}} />
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
                        marginTop: isSmScreen? '600px' : (isMdScreen?'0px': '10px'),
                        marginLeft: isSmScreen ? '80px' : (isMdScreen ? (isIpadProScreen ? '420px' : '310px') : '580px'),
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
                    width: isSmScreen? '340px': (isMdScreen? (isIpadProScreen? '780px': '700px' ): '1200px'),
                    height: isSmScreen? '180px': (isMdScreen? (isIpadProScreen? '350px' : '300px') :'361px'),
                    marginLeft: isSmScreen? '10px': (isMdScreen? (isIpadProScreen? '100px': '50px') :'67px'),
                    marginTop: isSmScreen? '700px' : '150px',
                    backgroundColor: '#302148',
                    borderRadius: '61.6px',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <Typography variant="h5" sx={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: isSmScreen? '14px' : (isMdScreen? (isIpadProScreen? '25px': '25px'):'40px'),
                        position: 'absolute',
                        top: '25%',
                        marginLeft: isSmScreen? '40px' : (isMdScreen? (isIpadProScreen? '150px' : '100px') :'220px'),
                        color: '#D8B150',
                        textTransform: 'capitalize'
                    }}>
                        <span style={{ color: 'white' }}>Digital Products On</span> Deposite Or Investments
                    </Typography>

                    <Typography sx={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontSize: isSmScreen? '7px': (isMdScreen? (isIpadProScreen? '15px': '15px'):'15px'),
                        position: 'absolute',
                        top: '45%',
                        marginLeft: isSmScreen? '70px' : (isMdScreen? (isIpadProScreen? '160px': '150px'):'370px'),
                        color: 'white',
                        maxWidth: isSmScreen? '250px': '500px',
                    }}>Work with Greensfin, more than a fintech company, currently on a mission</Typography>
                    <Typography sx={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontSize: isSmScreen? '7px': (isMdScreen? (isIpadProScreen? '15px': '15px'):'15px'),
                        position: 'absolute',
                        top: '50%',
                        marginLeft: isSmScreen? '110px': (isMdScreen? (isIpadProScreen? '240px': '190px'):'450px'),
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
                            marginTop: isSmScreen? '110px': (isMdScreen? (isIpadProScreen? '220px': '190px' ):'250px'),
                            marginLeft: isSmScreen? '100px': (isMdScreen? (isIpadProScreen? '260px': '210px'):'460px'),
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

                    <Image src="/Rectangle 25.png" alt='shape' width={isSmScreen? 80: (isMdScreen? (isIpadProScreen? 150 : 150 ) : 320)} height={isSmScreen? 180 : 360} style={{ marginLeft:isSmScreen? '10px': (isMdScreen? (isIpadProScreen? '20px' : '20px') :'45px') }} />
                    <Image src="/VectorS.png" alt='shape1' width={isSmScreen? 90:(isMdScreen? (isIpadProScreen? 130 : 130 ) : 270)} height={isSmScreen? 90:(isMdScreen? (isIpadProScreen? 140 : 140 ) : 250)} style={{ marginLeft:isSmScreen? '160px' : (isMdScreen? (isIpadProScreen? '480px' : '400px'): '566px'), position: 'absolute', marginTop:isSmScreen? '90px': (isMdScreen? (isIpadProScreen? '210px' : '158px'):"110px" )}} />
                    <Image src="/VectorS2.png" alt='shape2' width={isSmScreen? 35: (isMdScreen? (isIpadProScreen? 50 : 50 ):120)} height={isSmScreen? 25:(isMdScreen? (isIpadProScreen? 50: 50 ): 90)} style={{ position: 'absolute', marginTop:isSmScreen? '148px':(isMdScreen? (isIpadProScreen? '300px': '247px') :'270px'), marginLeft: isSmScreen? '210px':(isMdScreen? (isIpadProScreen? '555px' : '480px') :'715px')}} />
                </Box>


            </Box>
        </>
    )
}

export default Services;
