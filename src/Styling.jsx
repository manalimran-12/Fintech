"use cilent"
// import { useMediaQuery } from '@mui/material';

export const H1 = (additionalStyles = {}) => {
  
  const h1Styles = {
    fontFamily: "Rounded Elegance, sans-serif",
    color: '#ffffff',
    position: 'relative',
    left: '7.5%',
    top: '-2.5em',
    fontStyle: 'normal',
    fontSize:  '20px',
    fontWeight: '400',
    borderBottom: '4px solid #D8B150',
    borderRadius: '3px',
    width: '3.5em',
    ...additionalStyles,
  };

  return h1Styles;
};

export const heading = (additionalStyles = {}) => {
  // const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  // const isMedScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const headingStyles = {
    fontFamily: 'Montserrat, sans-serif',
    color: '#ffffff',
    fontSize: '28px',
    fontWeight: '750',
    position: 'relative',
    width: 'max-content',
    left: '25%',
    ...additionalStyles,
  };

  return headingStyles;
};

export const text = (additionalStyles = {}) => {
  // const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  // const isMedScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const textStyles = {
    fontFamily: "Raleway, sans-serif",
    color: '#ffffff',
    position: 'relative',
    fontStyle: 'normal',
    fontSize: '13px', //isSmallScreen ? '11px' : (isMedScreen ? '12px' : 
    left: '25%',
    fontWeight: '500',
    width: 'max-content',
    ...additionalStyles,
  };

  return textStyles;
};

export const box = (additionalStyles = {}) => ({
  background: '#302148',
  width: '86%',
  borderRadius: '2.5em',
  marginTop: '5em',
  height: '14rem',
  position: 'relative',
  left: '8%',
  marginBottom: '5em',
  ...additionalStyles,
});

export const button = (additionalStyles = {}) => ({
  color: '#ffffff',
  fontSize: '1.2vw',
  border: '0px',
  height: '50px',
  width: '200px',
  backgroundColor: '#D8B150',
  borderRadius: '2em',
  ...additionalStyles,
});

export const input = (additionalStyles = {}) => ({
  width: '35%',
  top: '30%',
  right: '9%',
  borderRadius: '60px',
  position: 'absolute',
  background: '#444444',
  ...additionalStyles,
});

export const elementsbg = (additionalStyles = {}) => ({
  backgroundColor: '#1F1F1F',
  overflowY: 'auto',
  width: '100%',
  position: 'relative',
  height: 'auto',
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 43 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.25' d='M41.3202 25.9081L3.26431 1.43119L1.09466 46.627L41.3202 25.9081Z' stroke='white' stroke-width='1.37494'/%3E%3C/svg%3E"),
        url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 49 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle opacity='0.25' cx='24.0615' cy='24.0615' r='23.374' transform='matrix(-1 0 0 1 48.8175 0.980713)' stroke='white' stroke-width='1.37494'/%3E%3C/svg%3E"),
        url('data:image/svg+xml,<svg width="40" height="40" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" d="M47.0806 41.041L24.4566 1.85517L1.83269 41.041H47.0806Z" stroke="white" stroke-width="1.37494"/></svg>'),
        url('data:image/svg+xml,<svg width="40" height="42" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" d="M46.5804 41.0828L23.9565 1.89698L1.33257 41.0828H46.5804Z" stroke="white" stroke-width="1.37494"/></svg>'),
        url('data:image/svg+xml,<svg width="50" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.25" x="-0.453708" y="0.859872" width="46.748" height="46.748" transform="matrix(-0.955372 0.295405 0.295405 0.955372 45.6429 0.312905)" stroke="white" stroke-width="1.37494"/></svg>'),
        url('data:image/svg+xml,<svg width="25" height="25" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.25" cx="13.7494" cy="13.7494" r="13.0619" transform="matrix(-1 0 0 1 27.8146 0.519714)" stroke="white" stroke-width="1.37494"/></svg>'),
        url('data:image/svg+xml,<svg width="42" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.25" cx="24.0615" cy="24.0615" r="23.374" transform="matrix(-1 0 0 1 48.6954 0.766907)" stroke="white" stroke-width="1.37494"/></svg>'),
        url('data:image/svg+xml,<svg width="52" height="52" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.25" x="14.6676" y="1.24281" width="46.748" height="46.748" transform="rotate(17.1818 14.6676 1.24281)" stroke="white" stroke-width="1.37494"/></svg>'),
        url('data:image/svg+xml,<svg width="25" height="25" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.25" cx="13.7494" cy="14.2671" r="13.0619" stroke="white" stroke-width="1.37494"/></svg>'),
        url('data:image/svg+xml,<svg width="40" height="40" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.25" cx="24.4312" cy="24.9565" r="23.374" stroke="white" stroke-width="1.37494"/></svg>')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '88% 70%, 78% 99%, 55% 99%, 55% 5%, 95% 30%,83% 12%, 75% 21%, 6% 38%, 3% 18%, 10% 10%, 0% 0%',
  ...additionalStyles,
});
