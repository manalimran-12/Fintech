import Navbar from "@/components/Navbar";
import { Box } from "@mui/material";

const page = () => {
  return (
    <Box sx={{position: 'absolute',
    width: '100vw',
    height: '100vh',
    left: '0px',
    top: '0px',
    backgroundColor: '#272727',
    overflow: 'hidden', 
    }}>
        <Navbar/>
        <Box sx={{width: '807px', height: '173px', backgroundColor: 'red', marginLeft: '270px', marginTop:"30px"}}>

        </Box>
    </Box>
  )
}

export default page
