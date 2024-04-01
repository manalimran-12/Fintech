'use client';
import * as React from 'react';
import { Cards } from './Cards';
import { H1, text, button } from '../Styling';
import Foo from '@/components/Foo'
import { useMediaQuery, Box, Typography,Grid,Button,createTheme  } from '@mui/material';
import { NewsLetter } from '@/components/NewsLetter';
import Image from 'next/image';

export const BlogSection = () => {
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
  const Blogs = H1({fontFamily: 'Rounded Elegance',fontSize:isSmScreen ? '11px' : (isMdScreen ? '14px' : '20px')});
  const Headings = text({  top: '-1.6em', fontSize:isSmScreen?'20px':'30px',fontFamily:'Montserrat'});
  const Readmore = button({marginLeft: isSmScreen?'12%' :'43%'});
  const H2yellow = text({ color: '#D8B150', fontSize:isSmScreen?'20px':'30px',fontFamily:'Montserrat',position: 'absolute', left:isSmScreen? '0em': '5.5em',top: isSmScreen? '1em':'0em' });
  const smalltxt = text({ left:'7.5%',fontFamily:'Raleway', fontSize: isSmScreen ? '11px' : (isMdScreen ? '12px' : '13px'),width:'60%', fontWeight: '500', top: isSmScreen?'-4em':'-5em', marginTop:'45px'});
  const cardData = [
    { imageUrl: './card1.png', title: 'Lorem ipsum dolor sit amet', Desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt...' },
    { imageUrl: './card2.png', title: 'Lorem ipsum dolor sit amet', Desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt...' },
    { imageUrl: './card3.png', title: 'Lorem ipsum dolor sit amet', Desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt...' },
  ];

  return (
    <Box
    sx={{
      
      overflowX: 'auto',
      position: 'relative',
      left: '0px',
      width: '100%',
      minHeight: '100vh',
      background: '#272727',
      display: 'flex',
      top: isSmScreen? ( isS8Screen? '23in' : '23in'):(isMdScreen? '14in':'25in'),
      flexDirection: 'column',
      paddingTop: '6em',
    }}
    >
      <Typography sx={Blogs}>BLOGS</Typography>
      <Box sx={{ width: '30%' }}>
        <Typography sx={Headings}>
          Latest News <span style={{ color: '#D8B150' }}> Managing Money Better</span>
        </Typography>
        
      </Box>
      <Typography sx={smalltxt}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </Typography>
      {/* For card Section */}
      <Grid container sx={{ position: 'relative', display: 'flex', gap: '45px', flexWrap: 'wrap', paddingLeft: '5.6%' }}>
        {cardData.map((card, index) => (
          <Grid item xs={10} sm={6} md={4} lg={3} key={index} sx={{ marginBottom: '10px', marginRight: '40px' }}>
            {/* Adjust marginBottom and marginRight as needed */}
            <Cards ImageUrl={card.imageUrl} Title={card.title} Description={card.Desc} />
          </Grid>
        ))}
      </Grid>

      <Button sx={Readmore}>
        <Typography sx={{ fontWeight: '500',fontFamily:'Montserrat', position: 'relative', fontSize: '16px', display: 'inline' }}>Read All Blogs</Typography>
        <Image width={25} height={25} sx={{ position: 'relative', top: '5px',left:'4px' }} src='/arrow.png' alt="Arrow Icon" />
      </Button>
      <NewsLetter />
      <Foo />
    </Box>

  );
}
