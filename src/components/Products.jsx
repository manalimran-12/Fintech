'use client'
import { useMediaQuery, Box, Typography, Grid, Button, Card, List, ListItem, ListItemText, CardContent, createTheme } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';
import { elementsbg, H1, heading, text, button } from '@/Styling';
import EastIcon from '@mui/icons-material/East';
const Products = () => {
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 500,
                md: 1025,
                lg: 1500,
                xl: 2600,
            },
        },
    });

    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isLgScreen = useMediaQuery(theme.breakpoints.down('lg'));
    const isXlScreen = useMediaQuery(theme.breakpoints.down('xl'));
    const isIpadProScreen = useMediaQuery("(min-width: 1024px) and (max-width: 1024px)");
    const shapebg = elementsbg({
        height: isSmScreen ? '450px' : isMdScreen ? '500px' : isLgScreen ? '800px' : '65vw', display: 'flex',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 43 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.25' d='M41.3202 25.9081L3.26431 1.43119L1.09466 46.627L41.3202 25.9081Z' stroke='white' stroke-width='1.37494'/%3E%3C/svg%3E"),
    url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 49 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle opacity='0.25' cx='24.0615' cy='24.0615' r='23.374' transform='matrix(-1 0 0 1 48.8175 0.980713)' stroke='white' stroke-width='1.37494'/%3E%3C/svg%3E"),
    url('data:image/svg+xml,<svg width="40" height="42" viewBox="0 0 49 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" d="M47.0806 41.041L24.4566 1.85517L1.83269 41.041H47.0806Z" stroke="white" stroke-width="1.37494"/></svg>'),
    url('data:image/svg+xml,<svg width="40" height="42" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" d="M46.5804 41.0828L23.9565 1.89698L1.33257 41.0828H46.5804Z" stroke="white" stroke-width="1.37494"/></svg>'),
    url('data:image/svg+xml,<svg width="50" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.25" x="-0.453708" y="0.859872" width="46.748" height="46.748" transform="matrix(-0.955372 0.295405 0.295405 0.955372 45.6429 0.312905)" stroke="white" stroke-width="1.37494"/></svg>'),
    url('data:image/svg+xml,<svg width="25" height="25" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.25" cx="13.7494" cy="13.7494" r="13.0619" transform="matrix(-1 0 0 1 27.8146 0.519714)" stroke="white" stroke-width="1.37494"/></svg>'),
    url('data:image/svg+xml,<svg width="42" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.25" cx="24.0615" cy="24.0615" r="23.374" transform="matrix(-1 0 0 1 48.6954 0.766907)" stroke="white" stroke-width="1.37494"/></svg>'),
    url('data:image/svg+xml,<svg width="52" height="52" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.25" x="14.6676" y="1.24281" width="46.748" height="46.748" transform="rotate(17.1818 14.6676 1.24281)" stroke="white" stroke-width="1.37494"/></svg>'),
    url('data:image/svg+xml,<svg width="25" height="25" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.25" cx="13.7494" cy="14.2671" r="13.0619" stroke="white" stroke-width="1.37494"/></svg>'),
    url('data:image/svg+xml,<svg width="40" height="40" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.25" cx="24.4312" cy="24.9565" r="23.374" stroke="white" stroke-width="1.37494"/></svg>'),
    url('data:image/svg+xml,<svg width="537" height="800" viewBox="0 0 737 1130" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M368.5 0H737L368.5 1130H0L368.5 0Z" fill="%23543881"/></svg>')`,
    });
    const I_heading = H1({ width: '90px', top: '8vw', fontSize: 'clamp(1rem, 1.7vw, 2rem);', });
    const I_subheading = heading({ fontSize: isSmScreen ? '14px' : (isMdScreen ? '16px' : '28px'), top: '8.4vw', width: isSmScreen ? '90%' : '75%', left: '7.5%' });
    const smalltxt = text({ fontSize: isSmScreen ? '11px' : (isMdScreen ? '12px' : '13px'), width: isSmScreen ? '90%' : '70%', top: '9.5vw', left: '7.5%' });
    const Readmore = button({ top: '12vw', left: '8%', width: isSmScreen ? '120px' : '170px', height: isSmScreen ? '30px' : '45px', textTransform: 'none' });
    const cards = [
        {
            imageSrc: '/mobile.png',
            title: 'Virtual Islamic Bank',
            description: 'The Islamic Fintech industry provides ways of Shariah-compliant virtual digital, transparent, easy, and quick ',

        },
        {
            imageSrc: '/network.png',
            title: 'Shariah Compliant Marketplace',
            description: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
            backgroundImage1: '/Rectangle1.png',
            backgroundImage2: '/Rect.png'
        },
        {
            imageSrc: '/person.png',
            title: 'Islamic Edtech',
            description: 'The online learning industry is growing quite fast, as it easiest, cost effective, time saving',

        },
        {
            imageSrc: '/pc.png',
            title: 'Product Advisory',
            description: 'strategic partnership that provides vital insights for informed decision-making in product development and ',

        }
    ]
    return (
        <Box sx={shapebg}>
            <Box sx={{width:'50%' , height: '200px', display:'flex',direction:'row',gap:'3px',flexWrap: 'wrap',paddingLeft:isSmScreen?'20px':'50px',paddingTop:isSmScreen?'35px':'50px'}}>
            {cards.map((card, index) => (
            <Card
                key={index}
                sx={{
                width: isSmScreen? '40%' : isMdScreen? '40%' :isLgScreen?'40%':isXlScreen?'290px':'35%',
                height: isSmScreen?'90%':isMdScreen?'180px':isLgScreen?'330px':'20vw',
                backgroundColor: index === 1 ? '#4d3672' : '#313131',
                backgroundImage: index === 1 ? `url(${card.backgroundImage1}), url(${card.backgroundImage2})` : 'none',
                backgroundSize: index === 1 ? '60% 100%' : 'auto',
                backgroundPosition: index === 1 ? 'left, right' : 'auto',
                backgroundRepeat: 'no-repeat',
                marginTop: index === 1 || index === 3 ? '-22px':'0px'
                /*marginLeft: index === 1 || index === 3 ? (isSmScreen ? '55%' : (isMdScreen ? '60%' : '320px')) : (isSmScreen ? '20%' : (isMdScreen ? '25%' : '120px')),
                marginTop: index === 1 || index === 3 ? (isSmScreen ? '-45%' : (isMdScreen ? '-50%' : '-280px')) : (isSmScreen ? '7%' : (isMdScreen ? '10%' : '65px')),
                */
                }}
            >
            <CardContent sx={{ display: 'flex', flexDirection: 'column',padding:'10px' }}>
                <Image src={card.imageSrc} alt='cards' width={isSmScreen? 20 : (isMdScreen? 30 :(isLgScreen? 80 :40))} height={isSmScreen? 20: (isMdScreen? 30  :(isLgScreen? 80 :40))} style={{ marginTop: isMdScreen ? '0px' : '12px', marginBottom: '10px' }} />
                <Typography variant="h6" sx={{ width:isSmScreen?'98%':'85%', fontFamily: "Raleway, sans-serif", fontSize: isSmScreen? '1.6vw' : (isMdScreen ? '1.4vw' : '1.2vw'), fontWeight: isSmScreen? '400' : '400', lineHeight: isSmScreen? '10px' :isMdScreen ? '15px' : isLgScreen?'25px':'18px',  color: '#FFFFFF' }}>{card.title}</Typography>
                <Typography variant="body1" sx={{width:isSmScreen?'100%':isMdScreen?'110%':isLgScreen?'100%':'90%',fontFamily: "Raleway, sans-serif", fontSize: isSmScreen? '1vw' : (isMdScreen ? "1.2vw" : '1.5vw'), fontWeight: isSmScreen? '50' : '100', lineHeight: isSmScreen? '10px' :isMdScreen?'12px' :isLgScreen?'20px': isXlScreen?'25px':'20px',  marginTop:isSmScreen?'2px': isMdScreen ? '6px' : '7px', color: 'white' }}>{card.description}</Typography>
                <Button  sx={{color: '#D8B150', height:isSmScreen?'10px':isMdScreen?'16px':isLgScreen?'60px':'20px',width:isSmScreen?'70px':isMdScreen?'80px':isLgScreen?'160px':'120px',left:isSmScreen? '5px':isMdScreen?'5px':isMdScreen?'-4px': '10px',marginTop:isSmScreen? '6px' :isMdScreen?'0px': '11px'}} endIcon={<EastIcon sx={{ height: isSmScreen ? '10px' :isMdScreen?'12px':isLgScreen?'50px': '20px',marginLeft:'-10px' }} />}><Typography sx={{textTransform:'none',color:'#D8B150',fontSize:isSmScreen?'7px':isMdScreen?'12px':isLgScreen?'25px':'20px',marginLeft:'-30px'}}>Know more</Typography></Button>
            </CardContent>
        </Card>
))}

            </Box>
            <Box sx={{ width: '50%' }}>
                <Typography sx={I_heading}>
                    Products
                </Typography>
                <Typography sx={I_subheading}>
                    Our <span style={{ color: '#D8B150' }}>Islamic Fintech </span>Products includes:
                </Typography>
                <Typography sx={smalltxt}>
                    We have complete and very easy solution for Virtual Islamic / Digital Banking and different
                    fintech products for Islamic banking including deposit and asset side for all requirements of clients.
                </Typography>
                <Button sx={Readmore} endIcon={<EastIcon />}><Typography sx={{ fontSize: isSmScreen ? '10px' : '16px' }}>All Products</Typography></Button>
            </Box>
        </Box>
    );
}
export default Products;