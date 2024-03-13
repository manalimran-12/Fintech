import { H1, text, box, input, button } from '../styling';
import { useMediaQuery, Box, Typography, Input,Button } from '@mui/material';
export const NewsLetter = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isSmallScreen1 = useMediaQuery("(max-width: 900px)");
  const sub1 = H1({ top: '34px', left: '8%', position: "absolute", width: '4.5em', fontFamily: 'Rounded Elegance' });
  const header = text({ position: 'absolute', fontFamily: 'Montserrat', top: '30%', left: '2.6em', fontSize: isSmallScreen1 ? '25px' : '35px', fontWeight: '500', width: '40%' });
  const box1 = box({
    height: isSmallScreen1 ? '15rem' : '13rem',
    background: `url('./Vector1.png') no-repeat,url('./vector2.png')  no-repeat,url('./vector3.png')  no-repeat, #302148 `,
    backgroundSize: '330px 180px, 300px 300px,120px 37px, cover',
    backgroundPosition: '50px 100%, 750px 0px,200px 100%'
  });
  const yheader = text({ color: '#D8B150', fontSize: isSmallScreen1 ? '25px' : '35px', fontWeight: '500', left: '0px', fontFamily: 'Montserrat' });
  const input1 = input({ height: isSmallScreen ? '12%' : '22%' });
  const inputtxt = text({
    fontWeight: '100px', fontSize: '14px', top: '19%', left: '5%',
    width: '70%', background: '#444444', border: 'none'
  });
  const inputbtn = button({ width: isSmallScreen1 ? '70px' : '30%', left: isSmallScreen1 ? '20%' : '69.1%', position: 'absolute', height: '85%', top: isSmallScreen1 ? '105%' : '6.5%' });
  return (
    <Box sx={box1}>
      <Typography sx={sub1}>Newsletter</Typography>
      <Box>
        <Typography sx={header} >
          Keep Updated {' '}<Typography sx={{ ...yheader }} component='span'> About Our Product
          </Typography>
        </Typography>
        <Box sx={input1}>
          <Input sx={inputtxt} placeholder='enter your email addres'></Input>
          <Button sx={inputbtn}>
            <Typography sx={{ fontWeight: '650', top: '-5%', position: 'relative', fontSize: '14px', display: 'inline' }}>Submit</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}