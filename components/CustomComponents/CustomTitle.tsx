import { FC } from 'react';
//mui
import { styled, Typography, TypographyProps } from '@mui/material';

type CustomTitleProps = {
  children: React.ReactNode
};

const TypographyRoot = styled(Typography)<TypographyProps>(() => ({
	textAlign: 'center',
	margin: '3rem 0'
}));

const CustomTitle: FC<CustomTitleProps> = ({ children }) => {
	return (
		<TypographyRoot 
			variant='h2'
			color='text.secondary'
		> 
			{children} 
		</TypographyRoot>
	);
};

export default CustomTitle;
