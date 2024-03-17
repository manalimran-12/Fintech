'use client';
import * as React from 'react';
import { Cards } from './Cards';
import { H1, text, button, heading } from '../styling';
import Foo from '@/components/Foo'
import { useMediaQuery, Box, Typography,Grid,Button } from '@mui/material';
import { NewsLetter } from '@/components/NewsLetter';
import EastIcon from '@mui/icons-material/East';
export const BlogSection = () => {
  const Blogs = H1();
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isSmallScreen1 = useMediaQuery("(max-width: 900px)");
  const Headings = heading({  top: '-1.6em', fontSize:isSmallScreen?'20px':'30px',fontFamily:'Montserrat'});
  const Readmore = button({marginLeft: isSmallScreen?'12%' :'43%'});
  const smalltxt = text({ left:'7.5%', fontSize: '14px',width:'60%', fontWeight: '500', top: isSmallScreen?'-4em':'-5em', marginTop:'45px'});
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
      top: isSmallScreen? '83%':(isSmallScreen1? '67%':'114%'),
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
      <Button sx={Readmore} endIcon={<EastIcon/>}><Typography>Read more</Typography></Button>
      <NewsLetter />
      <Foo />
    </Box>

  );
}
