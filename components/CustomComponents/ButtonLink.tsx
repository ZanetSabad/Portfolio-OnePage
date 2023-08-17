import { FC, forwardRef } from 'react';
//next
import Link, { LinkProps } from 'next/link';
//mui
import { ButtonProps, styled } from '@mui/material';
//custom components
import CustomButton from './CustomButton';

type ButtonLinkProps = ButtonProps & {
	href?: string
};

const LinkRoot= styled(Link)<LinkProps>(({ theme }) => 
	({  
		textDecoration: 'none',
		'&:hover': {
			color: theme.palette.primary.main,
		},
	}));

const CustomButtonWithRef = forwardRef<ButtonLinkProps, ButtonLinkProps>(	
	({ children, ...otherProps},) => (
		<CustomButton {...otherProps}>{children}</CustomButton>
	)
);

CustomButtonWithRef.displayName = 'CustomButtonWithRef';

const ButtonLink: FC<ButtonLinkProps> = ({ children, href = '#', }) => {
	return (
		<LinkRoot href={href} passHref >
			<CustomButtonWithRef>{children}</CustomButtonWithRef>
		</LinkRoot>
	);
};

export default ButtonLink;
