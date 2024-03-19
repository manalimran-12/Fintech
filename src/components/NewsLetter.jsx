"use client"
import { H1, text, box, input, button } from '../Styling';
import { useMediaQuery, Box, Typography, Input,Button } from '@mui/material';
export const NewsLetter = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isSmallScreen1 = useMediaQuery("(max-width: 900px)");
  const isMedScreen = useMediaQuery("(min-width: 600px) and (max-width: 1024px)");
  const isS8Screen = useMediaQuery('(min-width: 360px) and (max-height: 740px)');
  const sub1 = H1({ top: '34px', left: '8%', position: "absolute", width: '4.5em', fontFamily: 'Rounded Elegance',fontSize:isSmallScreen ? '11px' : (isMedScreen ? '14px' : '20px') });
  const header = text({ position: 'absolute', fontFamily: 'Montserrat', top: '30%', left:isSmallScreen? (isS8Screen? '2em' : '2em') : '2.6em', fontSize: isSmallScreen?'15px':(isSmallScreen1 ? '25px' : '35px'), fontWeight: '500', width: '41%' });
  const box1 = box({
    height: isSmallScreen1 ? '15rem' : '13rem',
    background: `url('./Vector1.png') no-repeat,url('./vector2.png')  no-repeat,url('./vector3.png')  no-repeat, #302148 `,
    backgroundSize:isSmallScreen? (isS8Screen? '120px 35%, 100px 250px, 50px 6%' : '120px 35%, 100px 250px, 50px 6%' ): '330px 180px, 300px 300px, 120px 37px, cover',
    backgroundPosition: isSmallScreen? (isS8Screen? '20px 100%, 200px 0px, 70px 100%' : '20px 100%, 230px 0px, 70px 100%') : '50px 100%, 650px 0px, 200px 100%'
  });
  const input1 = input({ height: isSmallScreen ? '40px' : '50px', top:isSmallScreen? (isS8Screen? '30%' :'30%'):'30%', left:isSmallScreen?'18%':'50%',width:isSmallScreen?(isS8Screen?'45%':'45%'): '36%',marginLeft:isSmallScreen? (isS8Screen? '120px' : '120px' ):'10px' });
  const inputtxt = text({
    fontWeight: isSmallScreen? (isS8Screen? '50px' : '50px'): '100px', fontSize:isSmallScreen? (isS8Screen? '12px' : '12px'): '14px', top: '19%', left:isSmallScreen? (isS8Screen? '15%' : '15%'): '8%',
    width:isSmallScreen? (isS8Screen? '65%' : '65%'): '80%', background: '#444444', border: 'none'
  });
  const inputbtn = button({ width: isSmallScreen?(isS8Screen? '18%': '18%' ):'30%', left: isSmallScreen1 ? '30%' : '69.1%', position: 'absolute', height:isSmallScreen? (isS8Screen? '60%' : '60%'):'85%', top: isSmallScreen?(isSmallScreen1 ? '108%' :'107%' ): '6.5%' });
  return (
    <Box sx={box1}>
      <Typography sx={sub1}>Newsletter</Typography>
      <Box>
        <Typography sx={header} >
          Keep Updated <span style={{color:'#D8B150'}}>About Our Product</span>
        </Typography>
        
        <Box sx={input1}>
          <Input sx={inputtxt} placeholder='enter your email address'></Input>
          <Button sx={inputbtn}>
            <Typography sx={{ fontWeight:isSmallScreen? (isS8Screen? '350' : '350') : '650', top: '-5%', position: 'relative', fontSize:isSmallScreen? (isS8Screen? '12px' : '12px' ):'14px', display: 'inline' }}>Submit</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}