'use client'
import { Margin } from '@mui/icons-material';
import { styled } from '@mui/system';
export const H1 = (additionalStyles = {}) => ({
    fontFamily: 'Roboto,sans-serif',
    color: '#ffffff',
    position: 'relative', 
    left: '7.5%', 
    top: '-2.5em',
    fontStyle: 'normal',
    fontSize: '20px',
    fontWeight: '400',
    borderBottom: '4px solid #D8B150',
    borderRadius:'3px',
    width:'3.5em',
    ...additionalStyles,
  });

export const text =(additionalStyles = {}) => ({
    fontFamily: 'Inter, sans-serif',
    color: '#ffffff',
    position: 'relative', 
    fontStyle: 'normal',
    fontSize: '30px',
    left:'25%',
    fontWeight: '750',
    width: 'max-content',
    ...additionalStyles,
  });

export const box =(additionalStyles={})=>({
  background: '#302148',
  width: '86%',
  borderRadius: '2.5em',
  marginTop: '5em',
  height:'14rem',
  position: 'relative',
  left: '8%', 
  marginBottom:'5em',
  ...additionalStyles,
})

export const button =(additionalStyles={})=>({
  
  color: '#ffffff',
  fontSize: '1.2vw',
  border: '0px',
  height: '50px',
        width: '200px',
        backgroundColor: '#D8B150',
        borderRadius: '2em',
  ...additionalStyles
})

export const input =(additionalStyles={})=>({
  width:'35%',
  top:'30%',
  right:'9%',
  borderRadius:'60px',
  position:'absolute',
  background: '#444444',
  ...additionalStyles
})