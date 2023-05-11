// react
import * as React from 'react';
// @mui
import { Button, ButtonProps, styled } from '@mui/material';
// type
interface CustomButtonProps extends ButtonProps {}

const CustomButtonRoot = styled(Button)<ButtonProps>(({ theme, variant }) => ({
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
  '&: hover': {
    boxShadow: 'none',
    backgroundColor: 'transparent',
    color: 'primary.main',
  },
  '&: active': {
    opacity: 0.5,
    transition: '0.3s ease-in-out',
  },
  ':focus-visible': {
    boxShadow: 'none',
    backgroundColor: 'transparent',
    color: 'currentcolor',
  },
}));

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <CustomButtonRoot disableRipple {...otherProps}>
      {children}
    </CustomButtonRoot>
  );
};

export default CustomButton;
