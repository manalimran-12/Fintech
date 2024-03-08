// "use client"
// import { Box, Typography, Button, useMediaQuery, createTheme } from '@mui/material';
// import Navbar from './Navbar';
// import Image from 'next/image';

// const Home = () => {
//   const theme = createTheme({
//     breakpoints: {
//       values: {
//         xs: 0,
//         sm: 500,
//         md: 960,
//         lg: 1280,
//         xl: 1920,
//       },
//     },
//   });

//   const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

//   const contentData = {
//     box: {
//       position: 'absolute',
//       width: isSmScreen ? '48.7vh' : '98.75vw',
//       height: isSmScreen? '180vh':'120vh',
//       left: '0px',
//       top: '0px',
//       background: 'linear-gradient(180deg, #351D5B 0%, #272727 53.33%)',
//       overflow: 'hidden',
//     },
//     innerBox: {
//       width: isSmScreen? '230px': '530px',
//       height: isSmScreen? '180px': '340px',
//       marginTop: isSmScreen? '20px': '120px',
//       marginLeft: isSmScreen? '20px': '90px',
//       marginBottom: '10px',
//     },
//     title: {
//       fontFamily: 'Rounded Elegance',
//       fontStyle: 'normal',
//       color: 'white',
//       fontWeight: 400,
//       fontSize: isSmScreen? '15px' : '27px',
//       lineHeight: isSmScreen? '0px': '10px',
//     },
//     subTitle: {
//       fontFamily: 'Montserrat',
//       fontStyle: 'normal',
//       fontWeight: '700',
//       fontSize: isSmScreen? '18px': '45px',
//       color: '#D8B150',
//     },
//     description: {
//       fontFamily: 'Raleway',
//       fontStyle: 'normal',
//       fontSize: isSmScreen? '10px': '15px',
//       color: '#FFFFFF',
//       lineHeight: '20px',
//       letterSpacing: '0.04rem',
//       marginTop: '21px',
//     },
//     gradientBox: {
//       position: 'absolute',
//       background: 'linear-gradient(180deg, #563985 0%, rgba(43, 37, 51, 0) 100%)',
//       borderRadius: '182.898px 182.898px 0px 0px',
//       transform: 'rotate(-18.73deg)',
//     },
//     getStartedButton: {
//       fontFamily: 'Montserrat',
//       fontSize: isSmScreen? '12px':'20px',
//       color: 'white',
//       backgroundColor: '#D8B150',
//       width: isSmScreen? '100px':'190.85px',
//       height: isSmScreen? '30px':'49.19px',
//       borderRadius: '9837.85px',
//       textTransform: 'capitalize',
//       '&:hover': {
//         backgroundColor: '#D8B150',
//       },
//     },
//     demoButton: {
//       fontFamily: 'Montserrat',
//       fontSize: isSmScreen? '12px':'20px',
//       color: 'white',
//       width: isSmScreen? '100px':'190.85px',
//       height: isSmScreen? '30px':'49.19px',
//       borderRadius: '9837.85px',
//       textTransform: 'capitalize',
//     }
//   };

//   return (
//     <Box sx={contentData.box}>
//       <Navbar />
//       <Box sx={contentData.innerBox}>
//         <Typography variant="h4" sx={contentData.title}>Virtual Islamic Banking</Typography>
//         <Image src='/line 1.png' width={isSmScreen? 153.1 :263} height={4} style={{ paddingTop: '0px' }} />
//         <Typography variant="h5" sx={contentData.subTitle}>Transforming Finance</Typography>
//         <Typography variant="h5" sx={{ ...contentData.subTitle, color: '#FFFFFF' , fontSize: isSmScreen? '17px' : '30px',}}>with Fast & Easy!</Typography>
//         <Typography variant='body2' sx={contentData.description}>
//           From Virtual Islamic/ Digital Banking and payment platforms to asset management, our FinTech products encompass a wide spectrum of offerings that are reshaping the financial landscape.
//         </Typography>
//         <Box sx={{ display: 'flex', gap: isSmScreen? '15':'20px', marginTop: isSmScreen? '18px':'35px' }}>
//           <Button variant='text' sx={contentData.getStartedButton}>
//             Get Started
//           </Button>
//           <Button variant='text' sx={contentData.demoButton}>
//             See Live Demo
//           </Button>
//         </Box>
//       </Box>
//       <Image src="/Vector.png" width={isSmScreen? 90 : 240} height={isSmScreen? 35 : 100} style={{marginTop: isSmScreen? '70px': '0px'}}/>
//       <div style={{ ...contentData.gradientBox, ...{ width: isSmScreen? '60px': '265.8px', height: isSmScreen? '100px' : '419.19px', left: isSmScreen? '220px': 'calc(70% - 132.9px)', top: isSmScreen? '130px':'156.45px' } }} />
//       <div style={{ ...contentData.gradientBox, ...{ width: isSmScreen? '14px' : '2.5vw', height: isSmScreen? '8vh': '32vh', left: isSmScreen? '295px': '1160px', top: isSmScreen? '20vh':'50vh' } }} />
//     </Box>
//   );
// };

// export default Home;

"use client"

import { Box, Typography, Button, useMediaQuery, createTheme } from '@mui/material';
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import Services from "@/components/Services"

const Home = () => {
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

  const contentData = {
    box: {
      position: 'absolute',
      width: '100%',
      height: isSmScreen ? '200vh' : '120vh',
      background: 'linear-gradient(180deg, #351D5B 0%, #272727 53.33%)',
      overflow: 'hidden',
    },
    innerBox: {
      width: '55%',
      marginLeft: isSmScreen ? '20px' : '90px',
      marginTop: isSmScreen ? '20px' : '110px',
      marginBottom: '10px',
    },
    title: {
      fontFamily: 'Rounded Elegance',
      fontStyle: 'normal',
      color: 'white',
      fontWeight: 400,
      fontSize: isSmScreen ? '15px' : '27px',
      lineHeight: '10px',
    },
    subTitle: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: isSmScreen ? '18px' : '45px',
      color: '#D8B150',
    },
    description: {
      fontFamily: 'Raleway',
      fontStyle: 'normal',
      fontSize: isSmScreen ? '10px' : '15px',
      color: '#FFFFFF',
      lineHeight: '20px',
      letterSpacing: '0.04rem',
      marginTop: '21px',
    },
    getStartedButton: {
      fontFamily: 'Montserrat',
      fontSize: isSmScreen ? '12px' : '20px',
      color: 'white',
      backgroundColor: '#D8B150',
      width: '150px',
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
      width: '180px',
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
    <Box sx={{width:'100%', height:'280vh', position: 'absolute' }}>
      <Box sx={contentData.box}>
        <Navbar />
        <Box sx={contentData.innerBox}>
          <Typography variant="h4" sx={contentData.title}>
            Virtual Islamic Banking
          </Typography>
          <Image src='/line 1.png' width={isSmScreen ? 153.1 : 263} height={4} style={{ paddingTop: '0px' }} />
          <Typography variant="h5" sx={contentData.subTitle}>
            Transforming Finance
          </Typography>
          <Typography variant="h5" sx={{ ...contentData.subTitle, color: '#FFFFFF', fontSize: isSmScreen ? '17px' : '30px' }}>
            with Fast & Easy!
          </Typography>
          <Typography variant='body2' sx={contentData.description}>
            From Virtual Islamic/ Digital Banking and payment platforms to asset management, our FinTech products encompass a wide spectrum of offerings that are reshaping the financial landscape.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: isSmScreen ? 'column' : 'row', gap: isSmScreen ? '10px' : '20px', marginTop: isSmScreen ? '18px' : '35px' }}>
            <Button variant='text' sx={contentData.getStartedButton}>
              Get Started
            </Button>
            <Button variant='text' endIcon={<Image src='/playCircle.png' width={24} height={24} />} sx={contentData.demoButton}>
              See Live Demo
            </Button>
          </Box>
        </Box>
        <Image src="/Vector.png" width={isSmScreen ? 90 : 240} height={isSmScreen ? 35 : 100} style={{ marginTop: isSmScreen ? '70px' : '15px' }} />
        <div
          style={{
            ...contentData.gradientBox,
            ...{
              width: isSmScreen ? '60px' : '265.8px',
              height: isSmScreen ? '100px' : '419.19px',
              left: isSmScreen ? '220px' : 'calc(70% - 132.9px)',
              top: isSmScreen ? '130px' : '156.45px',
            },
          }}
        />
        <div
          style={{
            ...contentData.gradientBox,
            ...{ width: isSmScreen ? '14px' : '2.5vw', height: isSmScreen ? '8vh' : '32vh', left: isSmScreen ? '295px' : '1160px', top: isSmScreen ? '20vh' : '50vh' },
          }}
        />
      </Box>
      <Services/>
    </Box>
  );
};

export default Home;
