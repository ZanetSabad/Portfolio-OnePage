import { FC } from 'react';
//mui
import { Box, styled } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
//custom components
import CustomTitle from '../CustomComponents/CustomTitle';
//next
import Link, { LinkProps } from 'next/link';
//data 
import CertificateList from '../../constants/certificates';

export const LinkRoot = styled(Link)<LinkProps>(({theme})=> ({
	textDecoration: 'none',
	...theme.typography.h3,
	color: theme.palette.primary.main,
	margin: '0.5rem 1rem',
	'&:hover': {
		color: theme.palette.primary.light
	}
}));

const Certificate: FC = () => {	
	return (
		<Box sx={{padding: '4rem', backgroundColor: 'transparent'}} id='Certificate'>
			<CustomTitle>Certifikáty</CustomTitle>
			<Grid container spacing={2} columns={{ xs: 1}} margin='auto'>
				{CertificateList?.map ((Certificate, id) => (
					<LinkRoot
						key={id}
						href={Certificate.href}
						target='_black'
						rel='nooper'
						sx={{margin:'1rem auto'}}
					>
						{Certificate.label}
						{Certificate.icon}
					</LinkRoot>
				))}
			</Grid>
		</Box>
	);
};

export default Certificate;
  