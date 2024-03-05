import { Box, Typography, Button } from '@mui/material';
import Navbar from './Navbar';
import Image from 'next/image';

const contentData = {
  box: {
    position: 'absolute',
    width: '98.7vw',
    height: '150vh',
    left: '0px',
    top: '0px',
    background: 'linear-gradient(180deg, #351D5B 0%, #272727 53.33%)',
    overflow: 'hidden',
  },
  innerBox: {
    width: '530px',
    height: '340px',
    marginTop: '120px',
    marginLeft: '90px',
    marginBottom: '10px',
  },
  title: {
    fontFamily: 'Rounded Elegance',
    fontStyle: 'normal',
    color: 'white',
    fontWeight: 400,
    fontSize: '27px',
    lineHeight: '10px',
  },
  subTitle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '45px',
    color: '#D8B150',
  },
  description: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontSize: '15px',
    color: '#FFFFFF',
    lineHeight: '20px',
    letterSpacing: '0.04rem',
    marginTop: '21px',
  },
  gradientBox: {
    position: 'absolute',
    background: 'linear-gradient(180deg, #563985 0%, rgba(43, 37, 51, 0) 100%)',
    borderRadius: '182.898px 182.898px 0px 0px',
    transform: 'rotate(-18.73deg)',
  },
  getStartedButton: {
    fontFamily: 'Montserrat',
    fontSize: '20px',
    color: 'white',
    backgroundColor: '#D8B150',
    width: '190.85px',
    height: '49.19px',
    borderRadius: '9837.85px',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: '#D8B150',
    },
  },
  demoButton:{
    fontFamily: 'Montserrat',
    fontSize: '20px',
    color: 'white',
    width: '190.85px',
    height: '49.19px',
    borderRadius: '9837.85px',
    textTransform: 'capitalize',
  }
};

const Home = () => {
  return (
    <Box sx={contentData.box}>
      <Navbar />
      <Box sx={contentData.innerBox}>
        <Typography variant="h4" sx={contentData.title}>Virtual Islamic Banking</Typography>
        <Image src='/line 1.png' width={263} height={4} style={{ paddingTop: '0px' }} />
        <Typography variant="h5" sx={contentData.subTitle}>Transforming Finance</Typography>
        <Typography variant="h5" sx={{ ...contentData.subTitle, color: '#FFFFFF' }}>with Fast & Easy!</Typography>
        <Typography variant='body2' sx={contentData.description}>
          From Virtual Islamic/ Digital Banking and payment platforms to asset management, our FinTech products encompass a wide spectrum of offerings that are reshaping the financial landscape.
        </Typography>
        <Box sx={{ display: 'flex', gap: '20px', marginTop: '35px' }}>
          <Button variant='text' sx={contentData.getStartedButton}>
            Get Started
          </Button>
          <Button variant='text' sx={contentData.demoButton}>
            See Live Demo
          </Button>
        </Box>
      </Box>
      <Image src="/Vector.png" width={240} height={100} />
      <div style={{ ...contentData.gradientBox, ...{ width: '265.8px', height: '419.19px', left: 'calc(70% - 132.9px)', top: '156.45px' } }} />
      <div style={{ ...contentData.gradientBox, ...{ width: '2.5vw', height: '32vh', left: '1160px', top: '50vh' } }} />
    </Box>
  );
};

export default Home;
