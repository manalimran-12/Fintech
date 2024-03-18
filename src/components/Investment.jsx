'use client'
import { useMediaQuery, Box, Typography, Grid, Button,  List, ListItem, ListItemText} from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';
import { elementsbg, H1, heading, text, button } from '@/styling';
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
const StyledList = styled(List)(({ isSmallScreen, isMdScreen }) => ({
  top: isSmallScreen ? '0px':  (isMdScreen? (isIpadProScreen? '25%' : '20%' ) :'18%'),
  left:isSmallScreen ? '-150px':'45px',
  width:isSmallScreen ? '100%':'50%'
}));

const CustomBulletList = ({ words }) => {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
        const isMedScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <StyledList isSmallScreen={isSmallScreen} isMedScreen={isMedScreen}>
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
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isMedScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const isMdScreen = useMediaQuery("(min-width: 600px) and (max-width: 1024px)");
    const isIpadProScreen = useMediaQuery("(min-width: 900px) and (max-width: 1024px)");
    const shapesbg = elementsbg({top:  isSmallScreen? '110%': (isMdScreen?(isIpadProScreen? '67%' :  '70%' ):'148%')});
    const I_heading = H1({ width: '115px', top:'20%'});
    const I_subheading = heading({ top: '20%', width: '55%', left: '7.5%'});
    const smalltxt = text({  width:'70%',top:'21%',left:'8%'});
    const Readmore = button({textTransform: 'none', top:isSmallScreen ? '-5%':isMedScreen?'10%' :  '18%',left:isSmallScreen ? '0px' :isMedScreen?'-50%' :   '50px',width:isSmallScreen ? '140px' :  '180px'});
    const words = ["Current","Saving","Fixed Deposit","Sukuk"]; // Your array of words
    return (
        <Box sx={shapesbg}>
            <Box sx={{
                height: '100vh',
                width: '40%', 
                marginRight:'60px',
                left:isSmallScreen?'-10%':'20%',
                height:'100vh'
            }}>
                <Image
                    width={isSmallScreen ? 170 : (isMedScreen? 200 : 380)} 
                    height={isSmallScreen ? 160 : (isMedScreen? 210 : 380)}
                    style={{
                        position: 'absolute',
                        top:  '10%',
                        left: '13%',
                    }}
                    src="/Ellipse1.png"
                    alt="Ellipse"
                />
                <Image
                    width={isSmallScreen ? 190 : (isMedScreen? 230 : 460)}
                    height={isSmallScreen ? 200 : (isMedScreen? 260 : 480)} 
                    style={{
                        position: 'absolute',
                        top:'5%',
                        left: '8%',
                    }}
                    src="/cellphone.png"
                    alt="cellphone"
                />
                <Image
                    width={isSmallScreen ? 70 : (isMedScreen? 80 : 180)}
                    height={isSmallScreen ? 60 : (isMedScreen? 70 : 160)}
                    style={{
                        position: 'absolute',
                        top:  isSmallScreen?'180px':(isMedScreen? '260px' : '380px'),
                        left:isSmallScreen?'150px':(isMedScreen? '210px' :  '380px'),
                    }}
                    src="/graph1.png"
                    alt="/graph.png"
                />
            </Box>
            <Box sx={{ position: 'absolute', top:  isSmallScreen?'-10%':(isMedScreen? '-50px' : '0%'), left:isSmallScreen?'250px':(isMedScreen? '300px' : '600px'), width: '50%', height: '100vh'}}>
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
