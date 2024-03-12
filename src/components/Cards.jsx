import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { H1, text } from '../styling';
import Image from 'next/image';
export const Cards = ({ ImageUrl, Title, Description }) => {
  const tech = text({
    fontSize: '1.1em',
    left: '1em',
    fontWeight: '0',
    letterSpacing: '0.7px',
    top: '.2em',
  });
  const smalltxt = text({
    fontSize: '1.25em',
    fontWeight: '500',
    top: '10.5em',
    letterSpacing: '0px',
    left: '1.25em',

  });
  const smalltxt1 = text({
    fontSize: '0.85em',
    fontWeight: '400',
    top: '17em',
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
          height: '22em',
          position: 'relative',
          width: '370px',
          marginTop: '3px',
          borderRadius: '0.6em',
          boxShadow: '0px -40px 56px 0px inset #000000',
        }}
      >
        <Box
          sx={{
            height: '5.6vh',
            width: '85px',
            backgroundColor: '#D8B150',
            borderRadius: '2em',
            position: 'absolute',
            top: '1.65em',
            left: '15.5em',
          }}
        >
          <Typography style={tech}>Tech</Typography>
        </Box>
        <Box position='absolute'>
          <Typography style={smalltxt}>{Title}</Typography>
          <Typography style={smalltxt1}>{Description}</Typography>
          <Button
            sx={{
              background: 'transparent',
              border: 'none',
              left: '1.25em',
              top: '16.8em',
              height: '2em',

            }}
          >
            <Typography style={buttontxt}>Know More</Typography>
            <Image
              layout="fixed"
              width={24}  // Set your desired width in pixels
              height={24}  // Set your desired height in pixels
              style={{
                position: 'relative',
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
