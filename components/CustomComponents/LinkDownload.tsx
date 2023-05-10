// react
import * as React from 'react';
// mui
import { Link, LinkProps, styled } from '@mui/material';

interface LinkDownloadProps extends LinkProps {}

const LinkDownloadRoot = styled(Link)<LinkDownloadProps>(({ theme, variant }) => ({
      fontSize: "18px",
      fontFamily: 'Inconsolata, monospace',
      fontWeight: 600,
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
}));

const LinkDownload: React.FunctionComponent<LinkDownloadProps> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <LinkDownloadRoot  {...otherProps} 
          href='/docs/Zaneta_Sabadkova_CV.pdf' 
          download 
          target='_blank' 
          rel='noopener' 
        >
      {children}
    </LinkDownloadRoot>
  );
};

export default LinkDownload;