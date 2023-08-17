// react
import { FC } from 'react';
// @mui
import { Box, BoxProps, Typography, TypographyProps, styled } from '@mui/material';
// custom components
import SocialNetwork from '../SocialNetwork';

const CustomBox = styled(Box)<BoxProps>(() => ({
	backgroundColor: 'transparent',
	display: 'flex',
	justifyContent: 'space-evenly',
	borderTop: '0.5px solid #2C2642',
	maxWidth: '1240px',
	margin: 'auto', 
}));

const TypographyFooter = styled(Typography)<TypographyProps>(({theme})=> ({  
	padding: '40px 0',
	color: theme.palette.primary.light,
}));

const Footer: FC = () => { 
	return (
		<CustomBox>
			<TypographyFooter variant='body1' textAlign='center'>
				&copy; Žaneta Sabadková &#128540;
			</TypographyFooter>      
			<SocialNetwork />       
		</CustomBox>
	);
};

export default Footer;