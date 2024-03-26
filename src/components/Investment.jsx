'use client'
import { useMediaQuery, Box, Typography, Grid, Button,  List, ListItem, ListItemText} from '@mui/material';
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
const StyledList = styled(List)(({ isSmallScreen, isMdScreen, isIpadProScreen }) => ({
  top: isSmallScreen ? '2%':  (isMdScreen ? (isIpadProScreen ? '20%' : '20%') :'18%'),
  left:isSmallScreen ? '-150px':'10%',
  width:isSmallScreen ? '100%':'50%',
  
}));

const CustomBulletList = ({ words }) => {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
        const isMedScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
        const isMdScreen = useMediaQuery("(min-width: 600px) and (max-width: 1024px)");
        const isIpadProScreen = useMediaQuery("(min-width: 900px) and (max-width: 1024px)");
  return (
    <StyledList isSmallScreen={isSmallScreen} isMedScreen={isMedScreen} isIpadProScreen={isIpadProScreen} isMdScreen={isMdScreen}>
          {words.map((word, index) => (
            <ListItem sx={{marginBottom:'-10px', }} key={index}>
              <Bullet />
              <ListItemText
                primary={word}
                primaryTypographyProps={{ style: { color: 'white', fontSize:isSmallScreen?'12px':'14px'} }}
              />
            </ListItem>
          ))}
        </StyledList>
  );
};


const Investment = () => {
    // const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isSmallScreen = useMediaQuery("(max-width:600px)");
    const isMedScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const isS8Screen = useMediaQuery('(min-width: 360px) and (max-height: 740px)');
    const isMdScreen = useMediaQuery("(min-width: 600px) and (max-width: 1024px)");
    const isIpadProScreen = useMediaQuery("(min-width: 900px) and (max-width: 1024px)");
    const isSm1Screen = useMediaQuery("(max-width: 428px) and (max-height: 926px)");;
    const isLgScreen = useMediaQuery("(min-width: 1500px) and (max-width: 3000px)");
    const shapesbg = elementsbg({
    top: isSmallScreen ? (isS8Screen ? '100%' : '73.5%') : (isMdScreen ? (isIpadProScreen ? '65%' : '75%') : '148%')
    /**top: isSmallScreen ?'73.5%': isS8Screen ? '100%' :isMdScreen ? '70%':isIpadProScreen ? '65%' : isSm1Screen ? '79%' : '148%' */
    });
    
    const I_heading = H1({ width: '115px', top:'20%',fontSize:isSmallScreen ? '11px' : (isMedScreen ? '14px' : '20px')});
    const I_subheading = heading({fontSize: isSmallScreen ? '14px' : (isMedScreen ? '16px' : '28px'), top: '20%', width: '55%', left: '7.5%'});
    const smalltxt = text({  width:'70%',top:'21%',left:'8%',fontSize: isSmallScreen ? '11px' : (isMedScreen ? '12px' : '13px')});
    const Readmore = button({textTransform: 'none', top:isSmallScreen ? '5%':isMedScreen?'10%' : isIpadProScreen? '18%' : '18%',left:isSmallScreen ? '-50px' :isMedScreen?'-50%' :   '8%',width:isSmallScreen ? '140px' :  '180px',height:isSmallScreen?'40px':'60px'});
    const words = ["Current","Saving","Fixed Deposit","Sukuk"]; // Your array of words
    return (
        <Box sx={shapesbg}>
            <Box sx={{
                
                height:isSmallScreen?'71vh': isLgScreen?'110vh':'100vh',
                width: '30%', 
                marginRight:'60px',
                left:isSmallScreen?'-10%':'20%',
            }}>
                <Image
                    width={isSmallScreen ? 170 : (isMedScreen? 200 : 380)} 
                    height={isSmallScreen ? 160 : (isMedScreen? 210 : 380)}
                    style={{
                        position: 'absolute',
                        top: '8vw',
                        left: isSmallScreen?'5%': isMedScreen?'8%' :isIpadProScreen?'2%':'13%',
                    }}
                    src="/Ellipse1.png"
                    alt="Ellipse"
                />
                <Image
                    width={isSmallScreen ? 190 : (isMedScreen? 230 : 460)}
                    height={isSmallScreen ? 200 : (isMedScreen? 260 : 480)} 
                    style={{
                        position: 'absolute',
                        top:'5vw',
                        left:isSmallScreen?'2%':isMedScreen?'5%':isIpadProScreen?'2%': '8%',
                    }}
                    src="/cellphone.png"
                    alt="cellphone"
                />
                <Image
                    width={isSmallScreen ? 70 : (isMedScreen? 80 : 180)}
                    height={isSmallScreen ? 60 : (isMedScreen? 70 : 160)}
                    style={{
                        position: 'absolute',
                        top:  isSmallScreen?'180px':(isMedScreen? '240px' : '430px'),
                        left:isSmallScreen?'100px':(isMedScreen? '170px':isIpadProScreen?'150px' :  '380px'),
                    }}
                    src="/graph1.png"
                    alt="/graph.png"
                />
            </Box>
            <Box sx={{ position: 'absolute', top:  isSmallScreen?'-90px':(isMedScreen? '-60px' : '0%'), left:isSmallScreen?'180px':(isMedScreen? '300px':isIpadProScreen?'500px' : isLgScreen?'1000px':'600px'), width: '50%', height:isSmallScreen?'80vh': '100vh'}}>
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
