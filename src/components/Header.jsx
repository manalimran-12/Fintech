import Box from '@mui/material/Box'; 
import Navbar from './Navbar';

export default function Home() {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100vw',
        height: '80vh',
        left: '0px',
        top: '0px',
        background: 'linear-gradient(180deg, #351D5B 0%, #272727 53.33%), #000000',
      }}
    >
      <Navbar/>
    </Box>

  );
}