export const H1 = (additionalStyles = {}) => ({
    fontFamily: 'Roboto,sans-serif',
    color: '#ffffff',
    position: 'relative', 
    left: '101px', 
    top: '-2.5em',
    fontStyle: 'normal',
    fontSize: '20px',
    fontWeight: '400',
    borderBottom: '4px solid #D8B150',
    borderRadius:'3px',
    width:'2.8em',
    ...additionalStyles,
  });

export const text =(additionalStyles = {}) => ({
    fontFamily: 'Inter, sans-serif',
    color: '#ffffff',
    position: 'relative', 
    fontStyle: 'normal',
    fontSize: '30px',
    left:'101px',
    fontWeight: '750',
    width: 'max-content',
    letterSpacing:'1px',
    ...additionalStyles,
  });

export const box =(additionalStyles={})=>({
  background:'#302148', width:'80%', height:'160px',marginLeft:'5em',borderRadius:'1.5em',
  marginTop:'5em'
})