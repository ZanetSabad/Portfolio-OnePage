// react
import { FC } from 'react';
// @mui
import { IconButton, IconButtonProps, styled } from '@mui/material';

type CustomIconButtonProps = { children: React.ReactNode, size: 'large' | 'small' | 'medium', 
	color: 'inherit' | 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
	};

const CustomIconButtonRoot = styled(IconButton)<IconButtonProps>(
	() => ({
		': active': {
			opacity: 0.5,
			transition: '0.3s ease-in-out',
		},
		':hover': {
			backgroundColor: 'rgba(127, 127, 127, 0.1)',
		},
	})
);

const CustomIconButton: FC<CustomIconButtonProps> = ({ children, color = 'inherit', ...otherProps } ) => {

	return (
		<CustomIconButtonRoot color={color} disableRipple {...otherProps}>
			{children}
		</CustomIconButtonRoot>
	);
};

export default CustomIconButton;
