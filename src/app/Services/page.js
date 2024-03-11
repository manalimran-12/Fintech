"use client"
import Navbar from "@/components/Navbar";
import { Box, Typography, Button } from "@mui/material";
import Image from 'next/image';
import Cards from '@/components/Cards';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const page = () => {
  return (
    <Box sx={{
      position: 'absolute',
      width: '98.75vw',
      height: '150vh',
      left: '0px',
      top: '0px',
      backgroundColor: '#272727',
      overflow: 'hidden',
    }}>
      <Navbar />
      <Box sx={{ width: '807px', height: '173px', marginLeft: '270px', marginTop: "80px", justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h4" sx={{ fontFamily: 'Rounded Elegance', fontStyle: 'normal', color: 'white', fontWeight: 2, fontSize: '27px', lineHeight: '10px' , marginLeft:'350px'}}>Our Service</Typography>
        <Image src='/line 1.png' width={130} height={4} style={{ paddingTop: '0px', marginLeft:'350px' }} />
        <Typography variant="h5" sx={{fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: '700', fontSize: '40px', marginLeft: '130px', color: '#D8B150', textTransform:'capitalize'}}><span style={{color: 'white'}}>Our</span> cutting edge solutions <span style={{color: 'white'}}>for</span></Typography>
        <Typography variant="h4" sx={{ fontFamily: 'Rounded Elegance', fontStyle: 'normal', color: 'white', fontWeight: 2, fontSize: '45px', lineHeight: '10px' , marginLeft:'120px', marginTop:'10px'}}>Virtual Islamic & Digital Banking</Typography>
      </Box>
      <Cards/>
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
          marginTop: '10px',
          marginLeft: '580px',
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

    </Box>
  )
}

export default page
