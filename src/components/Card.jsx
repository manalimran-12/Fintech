import { Box, Card, CardContent, Typography, useMediaQuery,createTheme  } from "@mui/material";
import Image from 'next/image';

const Cards1 = () => {
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


  const cardData = [
    {
      imageSrc: "/cards1.png",
      title: "Digital Financing",
      description: "This term refers to the impact of new technologies on the financial services industry. It includes a variety of products, applications that have transformed the traditional way.",
    },
    {
      imageSrc: "/cards2.png",
      title: "Digital Investment",
      description: "This is a digital solution that allows customers to save and invest money in stocks, shares, and investment funds through an automated platform.",
    },
    {
      imageSrc: "/cards3.png",
      title: "Digital SME Commercial",
      description: "This product caters to the SME sector and provides long-term financing for infrastructure development and industrial projects.",
    },
    {
      imageSrc: "/cards4.png",
      title: "Low Cost Housing Finance",
      description: "This product provides digital solutions for low-cost housing finance schemes. This creates employment and boosts demand in industries.",
    },
  ];
  return (
    <Box sx={{
      width: '1558px',
      height: '368px',
      // left: 'calc(50% - 1558px/2)',
      top: '3596px',
      display: isSmScreen ? 'block' : 'flex',
      flexDirection: isSmScreen ? 'column' : 'row',
    }}>
      {cardData.map((card, index) => (
        <Card
          key={index}
          sx={{
            width: isSmScreen ? '230px' : (isMdScreen ? '165px' : '280px'),
            height: isSmScreen ? '200px' : (isMdScreen ? '170px' : '250px'),
            backgroundColor: '#313131',
            boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
            borderRadius: '14.4083px',
            marginTop: isSmScreen ? '30px' : '60px',
            marginLeft: index === 0 ? isSmScreen ? '5%' : (isMdScreen? '2.5%': '4%') : isSmScreen ? '4.5%' : (isMdScreen? '1%': '2%'), 
          }}
        >
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Image src={card.imageSrc} alt='cards' width={40} height={40} style={{ marginTop: isMdScreen ? '0px' : '12px', marginBottom: '10px' }} />
            <Typography variant="h6" sx={{ fontStyle: 'Montserrat', fontSize: isSmScreen ? '15px' : (isMdScreen ? '14px' : '18.65px'), fontWeight: isSmScreen ? '500' : '700', lineHeight: isMdScreen ? '15px' : '22.73px', textAlign: 'center', color: '#FFFFFF' }}>{card.title}</Typography>
            <Typography variant="body1" sx={{ fontStyle: 'Raleway', fontSize: isSmScreen ? '10px' : (isMdScreen ? "11px" : '15px'), fontWeight: isSmScreen ? '50' : '100', lineHeight: '20px', textAlign: 'center', marginTop: isMdScreen ? '14px' : '18px', color: 'white' }}>{card.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Cards1;
