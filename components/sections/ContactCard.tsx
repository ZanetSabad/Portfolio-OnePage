// react
import * as React from 'react';
// @mui
import { Box, CardActionArea, Paper, styled, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';
// custom component
import CustomTitle from '../CustomComponents/CustomTitle';
import ConstantsContext from "../../context/constantsContext";

interface ContactCardProps {}

const breakpoints = createBreakpoints({}) 

const Item = styled(Paper)(({ theme }) => ({
  width: '150px',
  height: '80px',
  backgroundColor: "transparent", 
  display: "flex", 
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  border: '2px solid #2C2642',
  [theme.breakpoints.down("sm")]: {
    width: "100px"
},
  [theme.breakpoints.up("md")]: {
    width: "300px"
}
}));

const ContactCard: React.FC<ContactCardProps> = (props) => {
    const { contactLinks } = React.useContext(ConstantsContext);
    contactLinks?.sort((a, b) => (a.id > b.id ? 1 : -1));

  return (
   
    <Box sx={{padding: "6rem", backgroundColor: "transparent"}} id="Contact">
      <CustomTitle>Kontakt</CustomTitle>
      <Grid container xs={8} maxWidth="1240px" m="4rem auto" sx={{display: "flex", justifyContent: "space-evenly"}}>
      {contactLinks?.map((ContactLink, index) => (            
          <Item key={ContactLink.id + index}>
            <CardActionArea                               
              href={ContactLink.href}                  
            >         
              {ContactLink.Icon}
                <Box sx={{[breakpoints.down("md")]: {
                  display: "none"
                }}}>
                  {ContactLink.label}       
                </Box>
            </CardActionArea>
            </Item>  
        ))}          
      </Grid>
    </Box>
  );
}
export default ContactCard;
