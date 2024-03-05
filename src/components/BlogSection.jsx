'use client';
import * as React from 'react';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Cards } from './Cards';
import { H1, text } from '../styling';
import { Grid } from '@mui/material';
import { NewsLetter } from '@/components/NewsLetter';

export const BlogSection = () => {
  const Blogs = H1({});
  const sub1 = H1({});
  const Headings = text({  top: '-1.6em'});
  const H2yellow = text({ color: '#D8B150',position: 'absolute', left: '6.8em' });
  const smalltxt = text({ fontSize: '14px',width:'60%', fontWeight: '360', top: '-5em', letterSpacing: '-0.5px',marginTop:'2em'});
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
      <Typography style={Blogs}>Blogs</Typography>
      <Box sx={{width:'30%'}}>
      <Typography style={Headings}>
        Latest News
        <Typography component="span" style={H2yellow}>
          Managing Money Better
        </Typography>
      </Typography>
      </Box>
      <Typography style={smalltxt}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </Typography>
      {/* For card Section */}
      <Grid container sx={{ position: 'relative', display: 'flex',gap:'1.5em', flexWrap: 'wrap', paddingLeft: '5em' }}>
      {cardData.map((card, index) => (
        <Grid item xs={10} sm={6} md={4} lg={3} key={index} style={{ marginBottom: '10px', marginRight: '40px' }}>
        {/* Adjust marginBottom and marginRight as needed */}
        <Cards ImageUrl={card.imageUrl} Title={card.title} Description={card.Desc} />
      </Grid>
  ))}
</Grid>

      <button style={{
        display: 'flex',
        height: '50px',
        width: '200px',
        backgroundColor: '#D8B150',
        borderRadius: '2em',
        marginLeft: '43%', // Adjust the left margin as needed
        color: '#ffffff',
        fontSize: '1.2vw', // Adjust the font size using vw
        border: '0px',
      }}>
        <Typography sx={{ fontWeight:'500', top: '26%', position: 'relative', marginLeft: '40px', fontSize: '16px' }}>Read All Blogs</Typography>
        <img style={{ height: '50%', width: '12%', marginTop: '12px', position: 'static' }} src='./arrow.png' alt="Arrow Icon" />
      </button>
      <NewsLetter/> 
    </Box>
    
  );
}
