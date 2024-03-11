import { List } from '@mui/icons-material';
import {Box,Typography,Grid,Divider} from '@mui/material';


const FooterContent = ({ heading, contentList }) => {
    const Listitemsx ={fontFamily:'inter,serif', cursor:'pointer', color:'#ffffff', '&:hover': {color:'#7b1fa2'},fontSize: '16px' };
  return (
    <Grid
      sx={{ paddingTop: '1%', width: '13em'}}
      container
      direction="column"
      alignItems="left"
    >
      <Box>
        <Typography sx={{ color: '#ffffff', fontSize: '18px', fontWeight: '700' }}>
          {heading}
        </Typography>
      </Box>
      <Box sx={{ display: 'grid', direction: 'column', gap: '8px', paddingTop: '10px' }}>
        {contentList.map((item, index) => (
          <Typography key={index} sx={Listitemsx}>
            {item}
          </Typography>
        ))}
      </Box>
    </Grid>
  );
};

const Foo = ()=>{
    
    const productsHeading = 'Products';
    const productsList = ['Virtual Islamic Banking', 'Shariah MarketPlace', 'Islamic Edtech', 'Product Advisory'];
    const quickLinks ='Quick Links';
    const quicklinkslist = ['Services','Blogs','Knowledge Center','Clients','About us']
    const contactUs= "Contact Us";
    const contactuslist=['Phone Number:' ,'0321-18932','Email: info@greensfin.com', 'Address:' ,'4C 21st Comm. St, D.H.A Phase II Extension Defence Housing Authority, Karachi']

    return(
        <Box sx={{background:'#1f1f1f'}}>
            <Grid sx={{paddingTop:'5%',width:'100%',paddingLeft:'5%'}}
                            container
                            direction="rows"
                            justifyContent="center"
                            background="#000000"
                            gap='70px'
                            >
                            <Grid sx={{width:'13em'}}
                            container
                            direction="column"
                            
                            alignItems="left">
                                <Box><img src='./logo.png' height='40px' width='40px'></img></Box>
                                <Box><Typography sx={{marginTop:'20px', color:'#ffffff',width:'90%'}} >Virtual Islamic/ Digital Banking and payment platforms to asset management</Typography></Box>
                                <Box sx={{marginTop:'20px', display:'flex' ,gap:'30px'}}>
                                    <img src='./fb.png' alt='fb' height='20px' width='15px' />
                                    <img src='./li.png' alt='fb' height='20px' width='20px' />
                                    <img src='./yt.png' alt='fb' height='20px' width='20px' />
                                </Box>
                            </Grid>
                            <FooterContent heading={productsHeading} contentList={productsList} />
                            <FooterContent heading={quickLinks} contentList={quicklinkslist} />
                            <FooterContent heading={contactUs} contentList={contactuslist} />
                        </Grid>
                          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '3%' }}>
                              <Divider sx={{ backgroundColor: '#ffffff', width: '90%', height: '0.4px' }} />
                              <Typography variant="subtitle1" color="white" align="center" sx={{ fontFamily: 'inter,serif', marginTop: '3%' }}>
                                Copyright © 2023 Sheikh. All rights reserved
                              </Typography>
                            </Box>
        </Box>    
        
    );
}
/*<Grid sx={{paddingTop:'5%',minWidth:'20%',maxWidth:'100%'}}
        container
        direction="column"
        justifyContent="center"
        alignItems="center">
         <img src='./logo.png' height='40px'></img>
         <Typography sx={{marginTop:'20px', color:'#ffffff'}} >Virtual Islamic/ Digital Banking and payment platforms to asset management</Typography>
        <Box sx={{marginTop:'20px', display:'flex' ,gap:'30px'}}>
        <img src='./fb.png' alt='fb' height='20px' width20px />
         <img src='./li.png' alt='fb' height='20px' width='20px' />
         <img src='./yt.png' alt='fb' height='20px' width='20px' />
                 </Box>
                 </Grid>  */

export default Foo;