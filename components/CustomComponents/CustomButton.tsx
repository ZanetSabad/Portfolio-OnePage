import React from 'react';
//next
import Link, { LinkProps } from 'next/link';
//mui
import { Button, ButtonProps, styled } from "@mui/material"
//custom components
import ScrollLink from '../ScrollLink';

interface CustomButtonProps extends ButtonProps {}
 
 const CustomButtonRoot= styled(Button)<ButtonProps>(({ theme, variant}) => 
 ({  
      fontFamily: 'Inconsolata, monospace',
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "22px",
      textTransform: "capitalize",
      display: "flex",
      padding: 0,
      marginRight: "44px",
      marginBottom: "20px",
      color: theme.palette.primary.light,
      textDecoration: 'none',
      cursor: 'pointer',
      '&:hover': {
        color: theme.palette.primary.main,
      },
  })) 
 
    const CustomButton: React.FC<CustomButtonProps> = (props) => {
      const {children, href="#", ref, ...otherProps } = props

    return(
      <div>
        <ScrollLink href={href} passHref> 
          <CustomButtonRoot> {children} </CustomButtonRoot>
        </ScrollLink>  
      </div>
    )
  }
    

export default CustomButton;
