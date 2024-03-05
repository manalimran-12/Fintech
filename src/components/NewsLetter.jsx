import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import {H1,text,box} from '../styling';
export const NewsLetter =()=>{
    const sub1 = H1({marginTop:'60px',left:'4em'});
    const box1 = box();
  return(
    <Box sx={box1}>
    <Typography style={sub1}>NewsLetter</Typography>
  </Box> 
  ); 
}