// react
import * as React from 'react';
// @mui
import { Box, BoxProps, Grid, Typography, TypographyProps, styled } from '@mui/material';
// custom components
import SocialNetwork from '../SocialNetwork';

interface FooterProps {}

const CustomBox = styled(Box)<BoxProps>(({ theme }) => ({
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: 'space-evenly',
    borderTop: "0.5px solid #2C2642",
    maxWidth: "1240px",
    margin: "auto", 
}));

 const TypographyFooter = styled(Typography)<TypographyProps>(({theme})=> ({  
  padding: "40px 0",
  color: theme.palette.primary.light,
 }))

const Footer: React.FunctionComponent<FooterProps> = (props) => { 
  return (
    <>
      <CustomBox>
          <TypographyFooter variant='body1' textAlign='center'>
                  &copy; Žaneta Sabadková &#128540;
          </TypographyFooter>      
          <SocialNetwork />       
      </CustomBox>
    </>
  );
};

export default Footer;