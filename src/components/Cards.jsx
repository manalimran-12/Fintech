
import { H1, text } from '../styling';
import Image from 'next/image';
import { useMediaQuery, Box, Typography, Container,Button } from '@mui/material';
export const Cards = ({ ImageUrl, Title, Description }) => {
  
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const tech = text({
    fontSize: '1.1em',
    left: '1em',
    fontWeight: '0',
    letterSpacing: '0.7px',
    top: '.2em',
  });
  const smalltxt = text({
    fontSize: isSmallScreen?'1em':'1.25em',
    fontWeight: '500',
    top: '10.5em',
    fontFamily:'Raleway',
    letterSpacing: '0px',
    left: '1.25em',

  });
  const smalltxt1 = text({
    fontSize: isSmallScreen?'0.75em':'0.85em',
    fontWeight: '400',
    fontFamily:'Raleway',
    top:isSmallScreen?'14em':'17em',
    letterSpacing: '0px',
    left: '1.75em',
    width: '80%',
  });
  const buttontxt = text({ fontSize: '1.16em', fontWeight: '600', left: '0px' });

  return (
    <Container sx={{ position: 'relative', top: '-2em' }}>
      <Box
        sx={{
          backgroundImage: `url(${ImageUrl})`,
          backgroundSize: '33em 22em',
          backgroundPosition: '-9em',
          height:isSmallScreen?'18em': '22em',
          position:'relative',
          width: isSmallScreen?'300px':'370px',
          marginTop: '3px',
          borderRadius: '0.6em',
          boxShadow: '0px -40px 56px 0px inset #000000',
        }}
      >
        <Box
          sx={{
            height: '35px',
            width: '85px',
            backgroundColor: '#D8B150',
            borderRadius: '2em',
            position: 'absolute',
            top: '1.65em',
            left: isSmallScreen?'200px':'250px',
          }}
        >
          <Typography sx={tech}>Tech</Typography>
        </Box>
        <Box position='absolute'>
          <Typography sx={smalltxt}>{Title}</Typography>
          <Typography sx={smalltxt1}>{Description}</Typography>
          <Button
            sx={{
              background: 'transparent',
              border: 'none',
              left: '1.25em',
              top:isSmallScreen?'13em':'16.8em',
              height: '2em',

            }}
          >
            <Typography sx={buttontxt}>Know More</Typography>
            <Image
              width={24}  // Set your desired width in pixels
              height={24}  // Set your desired height in pixels
              sx={{
                position: 'relative',
                top:isSmallScreen?'-60px':'0px' 
              }}
              src='/arrow.png'
              alt="arrow"
            />



          </Button>
        </Box>
      </Box>
    </Container>
  );
};
