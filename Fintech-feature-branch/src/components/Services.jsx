import { Box, Button, Typography } from '@mui/material';
import Cards from '@/components/Cards';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
const Services = () => {
    return (
        <>
            <Box sx={{
                position: 'relative',
                width: '98.75vw',
                height: '200vh',
                left: '0px',
                top: '40%',
                backgroundColor: '#272727',
                overflow: 'hidden',
            }}>
                <Box sx={{ width: '807px', height: '173px', marginLeft: '270px', marginTop: "80px", justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h4" sx={{ fontFamily: 'Rounded Elegance', fontStyle: 'normal', color: 'white', fontWeight: 2, fontSize: '27px', lineHeight: '10px', marginLeft: '350px' }}>Our Service</Typography>
                    <Image src='/line 1.png' width={130} height={4} style={{ paddingTop: '0px', marginLeft: '350px' }} />
                    <Typography variant="h5" sx={{ fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: '700', fontSize: '40px', marginLeft: '130px', color: '#D8B150', textTransform: 'capitalize' }}><span style={{ color: 'white' }}>Our</span> cutting edge solutions <span style={{ color: 'white' }}>for</span></Typography>
                    <Typography variant="h4" sx={{ fontFamily: 'Rounded Elegance', fontStyle: 'normal', color: 'white', fontWeight: 2, fontSize: '45px', lineHeight: '10px', marginLeft: '120px', marginTop: '10px' }}>Virtual Islamic & Digital Banking</Typography>
                </Box>
                <Cards />
                <Button
                    endIcon={<ArrowForwardIcon />}
                    variant='text'
                    sx={{
                        fontFamily: 'Raleway',
                        fontSize: '20px',
                        color: 'white',
                        backgroundColor: '#D8B150',
                        width: '188px',
                        height: '52px',
                        position: 'absolute',
                        marginTop: '10px',
                        marginLeft: '580px',
                        marginRight: '110px',
                        borderRadius: '12024.34px',
                        textTransform: 'capitalize',
                        '&:hover': {
                            backgroundColor: '#D8B150',
                        },
                    }}
                >
                    All Services
                </Button>
                <Box sx={{
                    width: '1200px',
                    height: '361px',
                    marginLeft: '67px',
                    marginTop: '150px',
                    backgroundColor: '#302148',
                    borderRadius: '61.6px',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <Typography variant="h5" sx={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '40px',
                        position: 'absolute',
                        top: '25%',
                        marginLeft: '220px',
                        color: '#D8B150',
                        textTransform: 'capitalize'
                    }}>
                        <span style={{ color: 'white' }}>Digital Products On</span> Deposite Or Investments
                    </Typography>

                    <Typography sx={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontSize: '15px',
                        position: 'absolute',
                        top: '45%',
                        marginLeft: '370px',
                        color: 'white',
                        maxWidth: '500px',
                    }}>Work with Greensfin, more than a fintech company, currently on a mission</Typography>
                    <Typography sx={{fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontSize: '15px',
                        position: 'absolute',
                        top: '50%',
                        marginLeft: '450px',
                        color: 'white',
                        maxWidth: '600px',}}>to transform the global business infrastructure.</Typography>
                        <Button
                    endIcon={<ArrowForwardIcon />}
                    variant='text'
                    sx={{
                        fontFamily: 'Raleway',
                        fontSize: '20px',
                        color: 'white',
                        backgroundColor: '#D8B150',
                        width: '280px',
                        height: '52px',
                        position: 'absolute',
                        marginTop: '250px',
                        marginLeft: '460px',
                        marginRight: '110px',
                        borderRadius: '12024.34px',
                        textTransform: 'capitalize',
                        '&:hover': {
                            backgroundColor: '#D8B150',
                        },
                    }}
                >
                    Book Your Consultation
                </Button>

                    <Image src="/Rectangle 25.png" width={320} height={360} style={{ marginLeft: '45px' }} />
                    <Image src="/Vector3.png" width={270} height={250} style={{ marginLeft: '566px', position: 'absolute', marginTop: "110px" }} />
                    <Image src="/Vector2.png" width={120} height={90} style={{ position: 'absolute', marginTop: '270px', marginLeft: '715px' }} />
                </Box>

            </Box>
        </>
    )
}

export default Services