'use client';
import * as React from 'react';
import { Cards } from './Cards';
import { H1, text, button } from '../styling';
import Foo from '@/components/Foo'
import { useMediaQuery, Box, Typography,Grid } from '@mui/material';
import { NewsLetter } from '@/components/NewsLetter';
import Image from 'next/image';

export const BlogSection = () => {
  const Blogs = H1({fontFamily: 'Rounded Elegance'});
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isSmallScreen1 = useMediaQuery("(min-width: 900px)");
  const Headings = text({  top: '-1.6em', fontSize:isSmallScreen?'20px':'30px',fontFamily:'Montserrat'});
  const Readmore = button({marginLeft: isSmallScreen?'12%' :'43%'});
  const H2yellow = text({ color: '#D8B150', fontSize:isSmallScreen?'20px':'30px',fontFamily:'Montserrat',position: 'absolute', left:isSmallScreen? '0em': '5.5em',top: isSmallScreen? '1em':'0em' });
  const smalltxt = text({ left:'7.5%',fontFamily:'Raleway', fontSize: '14px',width:'60%', fontWeight: '500', top: isSmallScreen?'-4em':'-5em', marginTop:'45px'});
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
      top:isSmallScreen?'85%':(isSmallScreen1?'65%':'110%'),
      flexDirection: 'column',
      paddingTop: '10em',
    }}
    >
      <Typography style={Blogs}>BLOGS</Typography>
      <Box sx={{ width: '30%' }}>
        <Typography sx={Headings}>
          Latest News
          <Typography sx={H2yellow}>
            Managing Money Better
          </Typography>
        </Typography>
      </Box>
      <Typography style={smalltxt}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </Typography>
      {/* For card Section */}
      <Grid container sx={{ position: 'relative', display: 'flex', gap: '45px', flexWrap: 'wrap', paddingLeft: '5.6%' }}>
        {cardData.map((card, index) => (
          <Grid item xs={10} sm={6} md={4} lg={3} key={index} style={{ marginBottom: '10px', marginRight: '40px' }}>
            {/* Adjust marginBottom and marginRight as needed */}
            <Cards ImageUrl={card.imageUrl} Title={card.title} Description={card.Desc} />
          </Grid>
        ))}
      </Grid>

      <button style={Readmore}>
        <Typography sx={{ fontWeight: '500', top: '-5%',fontFamily:'Montserrat', position: 'relative', fontSize: '16px', display: 'inline' }}>Read All Blogs</Typography>
        <Image width={25} height={25} style={{ position: 'relative', top: '5px',left:'4px' }} src='/arrow.png' alt="Arrow Icon" />
      </button>
      <NewsLetter />
      <Foo />
    </Box>

  );
}
