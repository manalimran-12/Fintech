'use client';
import * as React from 'react';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Cards } from './Cards';
import { H1, text,button} from '../styling';
import { Grid } from '@mui/material';
import { NewsLetter } from '@/components/NewsLetter';

export const BlogSection = () => {
  const Blogs = H1({});
  const isSmallScreen = window.innerWidth <= 600;
  const Headings = text({  top: '-1.6em'});
  const Readmore = button({marginLeft: '43%'});
  const H2yellow = text({ color: '#D8B150',position: 'absolute', left:isSmallScreen? '0em': '6.8em',top: isSmallScreen? '1em':'0em' });
  const smalltxt = text({ left:'7.5%', fontSize: '14px',width:'60%', fontWeight: '360', top: '-5em', letterSpacing: '-0.5px',marginTop:'45px'});
  const cardData = [
    { imageUrl: './card1.png', title: 'Lorem ipsum dolor sit amet', Desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt...' },
    { imageUrl: './card2.png', title: 'Lorem ipsum dolor sit amet', Desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt...' },
    { imageUrl: './card3.png', title: 'Lorem ipsum dolor sit amet', Desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt...' },
  ];

  return (
    <Box
    sx={{
      overflowX: 'auto',
      position: 'absolute',
      left: '0px',
      width: '100%',
      minHeight: '100vh',
      background: '#272727',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '10em',
    }}
    >
      <Typography style={Blogs}>BLOGS</Typography>
      <Box sx={{width:'30%'}}>
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
      <Grid container sx={{ position: 'relative', display: 'flex',gap:'45px', flexWrap: 'wrap', paddingLeft:'5.6%' }}>
      {cardData.map((card, index) => (
        <Grid item xs={10} sm={6} md={4} lg={3} key={index} style={{ marginBottom: '10px', marginRight: '40px' }}>
        {/* Adjust marginBottom and marginRight as needed */}
        <Cards ImageUrl={card.imageUrl} Title={card.title} Description={card.Desc} />
      </Grid>
  ))}
</Grid>

      <button style={Readmore}>
        <Typography sx={{ fontWeight:'500', top: '-8%', position: 'relative',  fontSize: '16px', display:'inline' }}>Read All Blogs</Typography>
        <img style={{ height: '50%', width: '12%', position: 'relative',top:'2px' }} src='./arrow.png' alt="Arrow Icon" />
      </button>
      <NewsLetter/> 
    </Box>
    
  );
}
