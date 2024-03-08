import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from 'next/image';

const cardData = [
  {
    imageSrc: "/card1.png",
    title: "Digital Financing",
    description: "This term refers to the impact of new technologies on the financial services industry. It includes a variety of products, applications that have transformed the traditional way.",
  },
  {
    imageSrc: "/card2.png",
    title: "Digital Investment",
    description: "This is a digital solution that allows customers to save and invest money in stocks, shares, and investment funds through an automated platform.",
  },
  {
    imageSrc: "/card3.png",
    title: "Digital SME Commercial",
    description: "This product caters to the SME sector and provides long-term financing for infrastructure development and industrial projects.",
  },
  {
    imageSrc: "/card4.png",
    title: "Low Cost Housing Finance",
    description: "This product provides digital solutions for low-cost housing finance schemes. This creates employment and boosts demand in industries.",
  },
];

const Cards = () => {
  return (
    <Box sx={{
      width: '1558px',
      height: '368px',
      left: 'calc(50% - 1558px/2)',
      top: '3596px',
      display: 'flex',
    }}>
      {cardData.map((card, index) => (
        <Card
          key={index}
          sx={{
            width: '280px',
            height: '250px',
            backgroundColor: '#313131',
            boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
            borderRadius: '14.4083px',
            marginTop: '60px',
            marginLeft: index === 0 ? '80px' : '20px', 
          }}
        >
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Image src={card.imageSrc} width={40} height={40} style={{ marginTop: '12px', marginBottom: '10px' }} />
            <Typography variant="h6" sx={{ fontStyle: 'Montserrat', fontSize: '18.65px', fontWeight: '700', lineHeight: '22.73px', textAlign: 'center', color: '#FFFFFF' }}>{card.title}</Typography>
            <Typography variant="body1" sx={{ fontStyle: 'Raleway', fontSize: '15px', fontWeight: '100', lineHeight: '20px', textAlign: 'center', marginTop: '18px', color: 'white' }}>{card.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Cards;
