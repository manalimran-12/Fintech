import { Box, Button } from '@mui/material';
import Image from 'next/image';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Navbar = () => {
  return (
    <Box component="section" sx={{ width: '1478px', height: '100px', left: 'calc(50% - 1478px/2 + 15px)', top: '48px', background: 'transparent', display: 'flex' }}>
      <Image src='/logo.png' width={53} height={55} style={{ marginLeft: '140px', marginTop:'30px'}} />

      <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '410px', marginTop:'35px', gap:'25px'}}>
        <Button variant="text" sx={{ fontFamily: 'Raleway', fontSize: '20px' , color:'white', textTransform: 'capitalize'}}>Home</Button>
        <Button variant="text" sx={{ fontFamily: 'Raleway', fontSize: '20px', color:'white' , textTransform: 'capitalize'}}>Product</Button>
        <Button variant="text" sx={{ fontFamily: 'Raleway', fontSize: '20px', color:'white', textTransform: 'capitalize' }}>Services</Button>
        <Button variant="text" sx={{ fontFamily: 'Raleway', fontSize: '20px', color:'white', textTransform: 'capitalize' }}>Clients</Button>
        <Button variant="text" sx={{ fontFamily: 'Raleway', fontSize: '20px', color:'white', textTransform: 'capitalize' }}>Blogs</Button>
        <Button variant="text" sx={{ fontFamily: 'Raleway', fontSize: '20px', color:'white', textTransform: 'capitalize' }}>Podcast</Button>
        <Button variant="text" sx={{ fontFamily: 'Raleway', fontSize: '20px', color:'white', textTransform: 'capitalize' }}>About us</Button>
      </Box>

      <Button
        variant='text'
        sx={{
          fontFamily: 'Raleway',
          fontSize: '20px',
          color: 'white',
          backgroundColor: '#D8B150',
          width: '188px',
          height: '52px',
          position: 'absolute',
          marginTop: '40px',
          marginLeft: '1600px',
          borderRadius: '12024.34px',
          textTransform: 'capitalize',
          '&:hover': {
            backgroundColor: '#D8B150',
          },
        }}
      >
        Contact
      </Button>
    </Box>
  );
};

export default Navbar;
