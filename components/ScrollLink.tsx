import React, { PropsWithChildren } from "react";
//next
import Link, { LinkProps } from "next/link";
//mui
import { styled } from "@mui/material"

type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;

type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;

const LinkRoot = styled(Link)<LinkProps>(({theme}) =>
({
  textDecoration: "none",
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
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}))

const ScrollLink: React.FC<ScrollLinkProps> = (props) => {
    const {children, href="#", ...otherProps } = props

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
  
    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: "smooth",
    });
  };
  return (
    <Link {...otherProps} onClick={handleScroll} href={href} passHref style={{textDecoration: "none"}}>
      {children}
    </Link>
  );
};
export default ScrollLink;
