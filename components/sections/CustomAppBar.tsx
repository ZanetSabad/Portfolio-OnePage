// react
import { FC, useState, useRef } from 'react';
// next
import { useRouter } from 'next/router';
// mui
import { AppBar, AppBarProps, Box, BoxProps, Container, Grow, ListItemButton, ListItemIcon, ListItemText, Toolbar, ToolbarProps, styled } from '@mui/material';
import DownloadForIcon from '@mui/icons-material/DownloadForOffline';
// custom component
import ButtonLink from '../CustomComponents/ButtonLink';
import MenuToggler from '../CustomComponents/MenuToggler';
import LinkDownload from '../CustomComponents/LinkDownload';
//data
import navigate from '../../constants/navLinks';

const CustomAppBarRoot = styled(AppBar)<AppBarProps>(() => ({
	backgroundColor: 'transparent',
	boxShadow: 'none',
}));

const LinkContainer = styled(Box)<BoxProps>(({ theme }) => ({
	marginLeft: theme.direction === 'ltr' ? 'auto' : 'none',
	marginRight: theme.direction === 'rtl' ? 'auto' : 'none',
}));

const LinksBox = styled(Box)<BoxProps>(({ theme }) => ({
	[theme.breakpoints.down('sm')]: {
		display: 'none',
	},
}));

const CustomToolbar = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
	[theme.breakpoints.down('md')]: {
		padding: 0,
	},
}));

const CustomAppBar: FC = () => {
	const [dropdownState, setDropdownState] = useState(false);

	const appBarRef = useRef(null);

	const router = useRouter();
	const handleDropdownItemClick = (href: string) => {
		setDropdownState(false);
		router.push(href);
	};

	return (
		<CustomAppBarRoot position='absolute' ref={appBarRef}>
			<Container >
				<CustomToolbar sx={{ marginLeft: 'auto'}}>
					<LinkContainer>
						<LinksBox sx={{flexGrow: 1, display: {xs: 'none', sm: 'flex'}, justifyContent:'flex-end'}}>
							{navigate.map((navLink) => (
								<ButtonLink
									key={navLink.id}
									href={navLink.href}
								>
									{navLink.label}
								</ButtonLink>
							))}
							<LinkDownload >
									Životopis
								<DownloadForIcon sx={{marginLeft: '0.5rem'}} />
							</LinkDownload>  
						</LinksBox>
						<MenuToggler
							color='info'
							onClick={() => setDropdownState(!dropdownState)}
							open={dropdownState}
							sx={{flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}
						/>
					</LinkContainer>
				</CustomToolbar>
			</Container>
			<Container sx={{backgroundColor: '#2C2642'}}>
				{navigate?.map((navLink, index) => (
					<Grow
						in={dropdownState}
						key={navLink.id}
						style={{ transformOrigin: 'center left'}}
						{...(dropdownState ? { timeout: index * 300 } : {})}
						unmountOnExit
					>
						<ListItemButton
							onClick={() => handleDropdownItemClick(navLink.href)}
							sx={{
								borderRadius: '4px',
								'&: hover': {
									backgroundColor: 'rgba(255, 255, 255, 0.2)',
								},
							}}
						>
							<ListItemIcon
								sx={{
									color: 'info.main',
									fontSize: 'large',
									minWidth: '2rem',
								}}
							>
								{navLink.Icon}
							</ListItemIcon>
							<ListItemText primary={navLink.label} sx={{color: '#C2B548'}} />
						</ListItemButton>
					</Grow>
				))}
			</Container>
		</CustomAppBarRoot>
	);
};

export default CustomAppBar;
