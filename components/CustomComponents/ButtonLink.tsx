import React from 'react';
//next
import Link, { LinkProps } from 'next/link';
//mui
import { Button, ButtonProps, styled } from "@mui/material"
//custom components
import CustomButton from './CustomButton';
import ScrollLink from '../ScrollLink';
interface ButtonLinkProps extends ButtonProps {
  href?: string;
}

const LinkRoot= styled(Link)<LinkProps>(({ theme }) => 
({  
  textDecoration: "none",
  '&:hover': {
    color: theme.palette.primary.main,
  },
 })) 

const CustomButtonWithRef = React.forwardRef<ButtonLinkProps, ButtonLinkProps>(
  ({ children, ...otherProps }, ref) => (
    <CustomButton {...otherProps}>{children}</CustomButton>
  )
);

CustomButtonWithRef.displayName = 'CustomButtonWithRef';

const ButtonLink: React.FC<ButtonLinkProps> = (props) => {
  const { children, href = '#', ref, ...otherProps } = props;

  return (
    <LinkRoot href={href} passHref>
      <CustomButtonWithRef {...otherProps}>{children}</CustomButtonWithRef>
    </LinkRoot>
  );
};

export default ButtonLink;
