'use client'
import { useMediaQuery, Box, Typography, Grid, Button,  List, ListItem, ListItemText,createTheme } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';
import { elementsbg, H1, heading, text, button } from '@/Styling';
import EastIcon from '@mui/icons-material/East';
const Bullet = styled('span')({
  display: 'inline-block',
  width: '15px', 
  height: '15px', 
  backgroundColor: '#D8B150',
  borderRadius: '50%', 
  marginRight: '8px', 
  color:'#ffffff',
});
const StyledList = styled(List)(({ isSmScreen, isMdScreen}) => ({
  top: isSmScreen ? '2%':  (isMdScreen ?  '30%' :'20%'),
  left:isSmScreen ? '-150px':'10%',
  width:isSmScreen ? '100%':'50%',
  
}));

const CustomBulletList = ({ words }) => {
    const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
        const isMdScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <StyledList isSmScreen={isSmScreen} isMdScreen={isMdScreen} isMedScreen={isMdScreen}>
          {words.map((word, index) => (
            <ListItem sx={{marginBottom:'-10px', }} key={index}>
              <Bullet />
              <ListItemText
                primary={word}
                primaryTypographyProps={{ style: { color: 'white', fontSize:isSmScreen?'12px':'14px'} }}
              />
            </ListItem>
          ))}
        </StyledList>
  );
};


const Investment = () => {
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
    const shapesbg = elementsbg();
    const I_heading = H1({ width: '115px', top:'13%',fontSize:isSmScreen ? '11px' : (isMdScreen ? '14px' : '20px')});
    const I_subheading = heading({fontSize: isSmScreen ? '14px' : (isMdScreen ? '16px' : '28px'), top: '13%', width: '55%', left: '7.5%'});
    const smalltxt = text({  width:'70%',top:'14%',left:'8%',fontSize: isSmScreen ? '11px' : (isMdScreen ? '12px' : '13px')});
    const Readmore = button({textTransform: 'none', top:isSmScreen ? '5%':isMdScreen?'10%' :  '25%',left:isSmScreen ? '-50px' :isMdScreen?'-50%' :   '8%',width:isSmScreen ? '140px' :  '180px',height:isSmScreen?'40px':'60px'});
    const words = ["Current","Saving","Fixed Deposit","Sukuk"]; // Your array of words
    return (
        <Box sx={shapesbg}>
            <Box sx={{
                
                height:isSmScreen?'650px':isMdScreen?'700px': isLgScreen?'700px':'700px',
                width: '30%', 
                left:isSmScreen?'-10%':'20%',
            }}>
                <Image
                    width={isSmScreen ? 170 : (isMdScreen? 200 : 380)} 
                    height={isSmScreen ? 160 : (isMdScreen? 210 : 380)}
                    style={{
                        position: 'absolute',
                        top: '8vw',
                        left: isSmScreen?'5%': isMdScreen?'8%' :'10%',
                    }}
                    src="/Ellipse1.png"
                    alt="Ellipse"
                />
                <Image
                    width={isSmScreen ? 190 : (isMdScreen? 230 : 460)}
                    height={isSmScreen ? 200 : (isMdScreen? 260 : 480)} 
                    style={{
                        position: 'absolute',
                        top:'5vw',
                        left:isSmScreen?'2%':isMdScreen?'5%': '6%',
                    }}
                    src="/cellphone.png"
                    alt="cellphone"
                />
                <Image
                    width={isSmScreen ? 70 : (isMdScreen? 80 : 180)}
                    height={isSmScreen ? 60 : (isMdScreen? 70 : 160)}
                    style={{
                        position: 'absolute',
                        top:  isSmScreen?'180px':(isMdScreen? '240px' : '430px'),
                        left:isSmScreen?'100px':(isMdScreen? '170px':  '320px'),
                    }}
                    src="/graph1.png"
                    alt="/graph.png"
                />
            </Box>
            <Box sx={{ position: 'absolute', top:  isSmScreen?'0':(isMdScreen? '-60px' : '0%'),
             left:isSmScreen?'180px':(isMdScreen? '45%' : isLgScreen?'50%':isXlScreen?'40%':'55%'), 
            width: '50%', height:isSmScreen?'650px':isMdScreen?'700px': '400px'}}>
                <Typography sx={I_heading}>
                    Investments
                </Typography>
                <Typography sx={I_subheading}>
                    Our Digital Products on <span style={{ color: '#D8B150' }}>Deposit or investments</span>
                </Typography>
                <Typography sx={smalltxt}>
                    Through our Digital Products on Deposit or investments, you can fulfill your
                     different requirements as per your need through digital payment
                      mechanism or virtual cards. Our main products are mentioned below.
                     However, they could be customized as per your need in Shariah Compliance ways.
                </Typography>
                <CustomBulletList words={words} />
                <Button sx={Readmore} endIcon={<EastIcon/>}><Typography>Read more</Typography></Button>
            </Box>
        </Box>
    );
}

export default Investment;
