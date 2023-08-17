import { FC } from 'react';
//mui
import { AppBar, AppBarProps, Box, Container, ContainerProps, styled, Toolbar, Typography } from '@mui/material';
//next
import Image, {ImageProps} from 'next/image';
// images
import logoDesk from '../../public/images/logo/MojeLogo.png';
import logoMob from '../../public/images/logo/MojeLogoMob.png';
//custom components
import CustomAppBar from './CustomAppBar';

export const AppBarRoot = styled(AppBar)<AppBarProps>(()=> ({
	backgroundColor: 'transparent',
	boxShadow: 'none',
	borderBottom: '0.5px solid #2C2642',
	padding: '20px 0',
	margin: 'auto',
	maxWidth: '1240px',
}));

export const ContainerRoot = styled(Container)<ContainerProps>(({theme})=> ({
	[theme.breakpoints.up('lg')]:{
		padding: 0,
		margin: 0,
	}
}));

const LogoDesk = styled(Image)<ImageProps>(({theme})=> ({
	marginLeft: '5rem',
	flexGrow: 1,  
	[theme.breakpoints.up('md')]:{
		display: 'flex',
	},
	[theme.breakpoints.down('md')]:{
		display: 'none',
	}
}));

const LogoMob = styled(Image)<ImageProps>(({theme})=> ({
	mr: 2,
	flexGrow: 1,
	[theme.breakpoints.up('md')]:{
		display: 'none',
	},
	[theme.breakpoints.down('md')]:{
		display: 'flex',
	}
}));

const Header: FC = () => {
	return (
		<AppBarRoot position='static'>
			<ContainerRoot maxWidth='xl'>
				<Toolbar disableGutters>
					<Typography component='a' href='/'>
						<LogoDesk src={logoDesk} alt='logo' width={150} height={90} priority/> 
					</Typography>
					<Typography component='a' href='/'>
						<LogoMob src={logoMob} alt='logo' width={120} height={80} />
					</Typography>              
					<Box>
						<CustomAppBar />
					</Box>
				</Toolbar>
			</ContainerRoot>
		</AppBarRoot>
	);
};

export default Header;

