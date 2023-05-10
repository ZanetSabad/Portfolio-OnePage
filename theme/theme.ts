
import { createTheme } from "@mui/material"
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';
// import commonThemeOptions from 'styles/theme/commonThemeOptions';

// const { components: commonComponentsOptions } = commonThemeOptions;
const breakpoints = createBreakpoints({})



const theme = createTheme ({
    palette: {
        primary: {
            main: "#2C2642",
            light: "#C2B548",
            contrastText: '#822879',
        },
        secondary: {
            main: '#822879',
            light: "#2B8C62",

        },
        info: {
            main: '#C2B548',

        },
        text: {
            primary: '#dcdc',
            secondary: '#2C2642',
    
      },
    },

    typography: {
        h1: {
            fontFamily: 'Inconsolata, monospace',
            fontWeight: 700,
            fontSize: "3rem",
            lineHeight: "4rem", 
            [breakpoints.down("xs")]: {
                fontSize: "1rem",
                lineHeight: "4rem",
            }, 
            [breakpoints.up("sm")]: {
                fontSize: "2rem",
                lineHeight: "5rem",
            },   
            [breakpoints.up("md")]: {
                fontSize: "2.5rem",
                lineHeight: "5.5rem",
            },
            [breakpoints.up("lg")]: {
                fontSize: "3.3rem",
                lineHeight: "5rem",
            },  
        },
        h2: {
            fontFamily: 'Inconsolata, monospace',
            fontWeight: 600,
            fontSize: "1.5rem",
            lineHeight: "3rem",
            [breakpoints.down("xs")]: {
                fontSize: "1rem",
                lineHeight: "2rem",
            }, 
            [breakpoints.up("sm")]: {
                fontSize: "2rem",
                lineHeight: "3rem",
            },
            [breakpoints.up("md")]: {
                fontSize: "3rem",
                lineHeight: "3rem",
            },
            [breakpoints.up("lg")]: {
                fontSize: "2.5rem",
                lineHeight: "4rem",
            } 
        },
        h3:{
            fontFamily: 'Inconsolata, monospace',
            fontWeight: 600,
            fontSize: "1.3rem",
            lineHeight: "1.4rem",
        },     
        h5: {
            fontFamily: 'Inconsolata, monospace',
            fontSize: "1.5rem",
            lineHeight: "4rem",
            [breakpoints.down("xs")]: {
                fontSize: "1rem",
                lineHeight: "1rem",
            }, 
            [breakpoints.down("sm")]: {
                fontSize: "1rem",
                lineHeight: "1rem",
            }, 
            [breakpoints.up("sm")]: {
                fontSize: "1rem",
                lineHeight: "1.2rem",
            },
            [breakpoints.up("md")]: {
                fontSize: "1.5rem",
                lineHeight: "5rem",
            },
            [breakpoints.up("lg")]: {
                fontSize: "1.8rem",
                lineHeight: "3rem",
            }
        },
        body1: {
            fontFamily: 'Inconsolata, monospace',
            fontWeight: 200,
            fontSize: "1rem",
            lineHeight: "1.4rem",
        },    
    },
    breakpoints: {
        values: {
          xs: 0,
          sm: 950,
          md: 1200,
          lg: 1400,
          xl: 1610,
        },
      },
       
})



export default theme;
