import React from 'react';
import { Box, Typography, Paper, styled } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'
import CustomTitle from '../CustomComponents/CustomTitle';
import ConstantsContext from '../../context/constantsContext';
import Link, { LinkProps } from 'next/link';

interface CertificateProps{}

const LinkRoot = styled(Link)<LinkProps>(({theme})=> ({
    textDecoration: "none",
    ...theme.typography.h3,
    color: theme.palette.primary.main,
    margin: "0.5rem 1rem",
    "&:hover": {
        color: theme.palette.primary.light
    }
}))

const Certificate: React.FC<CertificateProps> = (props) => {

    const { certificates } = React.useContext(ConstantsContext);
    certificates?.sort((a, b) => (a.id > b.id ? 1 : -1))
  return (
    <>
        <Box sx={{padding: "4rem", backgroundColor: "transparent"}} id="Certificate">
            <CustomTitle>Certifikáty</CustomTitle>
            <Grid container spacing={2} columns={{ xs: 1}} margin="auto">
                {certificates?.map ((Certificate, id) => (
                    <LinkRoot
                        key={id}
                        href={Certificate.href}
                        target='_black'
                        rel="nooper"
                        sx={{margin:"1rem auto"}}
                    >
                        {Certificate.label}
                        {Certificate.icon}
                     </LinkRoot>
                ))}
            </Grid>
        </Box>
    </>
  );
}

interface CertificateProps{}

export default Certificate;
  