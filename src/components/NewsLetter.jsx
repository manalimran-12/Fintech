import { H1, text, box, input, button } from '../styling';
import { useMediaQuery, Box, Typography, Input,Button } from '@mui/material';
export const NewsLetter = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isSmallScreen1 = useMediaQuery("(max-width: 900px)");
  const sub1 = H1({ top: '34px', left: '8%', position: "absolute", width: '4.5em', fontFamily: 'Rounded Elegance' });
  const header = text({ position: 'absolute', fontFamily: 'Montserrat', top: '30%', left: '2.6em', fontSize: isSmallScreen?'18px':(isSmallScreen1 ? '25px' : '35px'), fontWeight: '500', width: '41%' });
  const box1 = box({
    height: isSmallScreen1 ? '15rem' : '13rem',
    background: `url('./Vector1.png') no-repeat,url('./vector2.png')  no-repeat,url('./vector3.png')  no-repeat, #302148 `,
    backgroundSize: '330px 180px, 300px 300px,120px 37px, cover ',
    backgroundPosition: '50px 100%, 650px 0px,200px 100%'
  });
  const yheader = text({ color: '#D8B150', fontSize: isSmallScreen?'18px':(isSmallScreen1 ? '25px' : '35px'), fontWeight: '500', left: '0px', fontFamily: 'Montserrat' });
  const input1 = input({ height: isSmallScreen ? '45px' : '50px', top:isSmallScreen?'63%':'30%', left:isSmallScreen?'18%':'50%',width:isSmallScreen?'60%':(isSmallScreen1?'40%':'30%'),marginLeft:'10px' });
  const inputtxt = text({
    fontWeight: '100px', fontSize: '14px', top:isSmallScreen?'15%': '19%', left: '8%',
    width: '80%', background: '#444444', border: 'none'
  });
  const inputbtn = button({ width: '30%', left: isSmallScreen1 ? '30%' : '69.1%', position: 'absolute', height: '85%', top: isSmallScreen?'109%' :(isSmallScreen1 ? '107%' : '6.5%') });
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
            <Typography sx={{ fontWeight: '650', top: '-5%', position: 'relative', fontSize: '14px', display: 'inline' }}>Submit</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}