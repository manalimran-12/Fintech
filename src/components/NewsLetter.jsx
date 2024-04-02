"use client"
import { H1, text, box, input, button } from '../Styling';
import { useMediaQuery, Box, Typography, Input,Button,createTheme } from '@mui/material';
export const NewsLetter = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 500,
        md: 1024,
        lg: 1280,
        xl: 1920,
      },
    },
  });

    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isLgScreen = useMediaQuery(theme.breakpoints.down('lg'));
    const isIpadProScreen = useMediaQuery("(min-width: 1024px) and (max-width: 1024px)");
    const isS8Screen = useMediaQuery('(min-width: 360px) and (max-height: 740px)');
  const sub1 = H1({ top: '34px', left: '8%', position: "absolute", width: '4.5em', fontFamily: 'Rounded Elegance',fontSize:isSmScreen ? '11px' : (isMdScreen ? '14px' : '20px') });
  const header = text({ position: 'absolute', fontFamily: 'Montserrat', top: '30%', left:isSmScreen? (isS8Screen? '2em' : '2em') : '2.6em', fontSize: isSmScreen?'15px':(isMdScreen ? '25px' : '35px'), fontWeight: '500', width: '41%' });
  const box1 = box({
    height: isMdScreen ? '15rem' : '13rem',
    background: `url('./Vector1.png') no-repeat,url('./vector2.png')  no-repeat,url('./vector3.png')  no-repeat, #302148 `,
    backgroundSize:isSmScreen? (isS8Screen? '120px 35%, 100px 250px, 50px 6%' : '120px 35%, 100px 250px, 50px 6%' ): '330px 180px, 300px 300px, 120px 37px, cover',
    backgroundPosition: isSmScreen? (isS8Screen? '20px 100%, 200px 0px, 70px 100%' : '20px 100%, 230px 0px, 70px 100%') : '50px 100%, 650px 0px, 200px 100%'
  });
  const input1 = input({ height: isSmScreen ? '40px' : '50px', top:isSmScreen? (isS8Screen? '30%' :'30%'):'30%', left:isSmScreen?'18%':'50%',width:isSmScreen?(isS8Screen?'45%':'45%'): '36%',marginLeft:isSmScreen? (isS8Screen? '120px' : '120px' ):'10px' });
  const inputtxt = text({
    fontWeight: isSmScreen? (isS8Screen? '50px' : '50px'): '100px', fontSize:isSmScreen? (isS8Screen? '12px' : '12px'): '14px', top: '19%', left:isSmScreen? (isS8Screen? '15%' : '15%'): '8%',
    width:isSmScreen? (isS8Screen? '65%' : '65%'): '80%', background: '#444444', border: 'none'
  });
  const inputbtn = button({ width: isSmScreen?(isS8Screen? '18%': '18%' ):'30%', left:isSmScreen?'10%': isMdScreen ? '30%' : '69.1%', position: 'absolute', height:isSmScreen? (isS8Screen? '60%' : '60%'):'85%', top: isSmScreen?'50px':isMdScreen?'50px':'4px' });
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
            <Typography sx={{ fontWeight:isSmScreen? (isS8Screen? '350' : '350') : '650', top: '-5%', position: 'relative', fontSize:isSmScreen? (isS8Screen? '12px' : '12px' ):'14px', display: 'inline' }}>Submit</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}