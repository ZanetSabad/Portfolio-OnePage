import * as React from 'react';
//mui
import { Box, Paper, styled, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
//custom components
import CustomTitle from '../CustomComponents/CustomTitle';
import ContactForm from '../CardPortfolio/ContactForm';
import GeneratorCode from '../CardPortfolio/GeneratorCode';
import PortfolioMuiFirst from '../CardPortfolio/PortfolioMuiFirst';
import BuyList from '../CardPortfolio/BuyList';
import PortfolioMui from '../CardPortfolio/PortfolioMui';

interface PortfolioProps{}

const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Portfolio: React.FC <PortfolioProps> = (props) => {

  return (
    <>
     <Paper
          id="Portfolio"  
          elevation={5}
          sx={{
            p: 2,
            margin: 'auto',
            maxWidth: 1240,
            flexGrow: 1,
            backgroundColor: "transparent",
          }}
        > 
        <CustomTitle>Portfolio</CustomTitle>
        <Grid sx={{ flexGrow: 1,}} container spacing={{xs: 5}} justifyContent={"space-evenly"}>
            <Grid xs={12} sm={6} md={4} lg={4}>
                    <ContactForm />
            </Grid>
            <Grid xs={12} sm={6} md={4}>
                    <BuyList />
            </Grid>
            <Grid xs={12} sm={6} md={4}>
                    <PortfolioMuiFirst />
            </Grid>
            <Grid xs={12} sm={6} md={4}>
                    <GeneratorCode />
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <PortfolioMui />
            </Grid>      
        </Grid>
    </Paper>
    </>
  );
}

export default Portfolio;


