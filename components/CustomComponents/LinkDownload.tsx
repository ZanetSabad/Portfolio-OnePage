// react
import { FC } from 'react';
// mui
import { Link, styled } from '@mui/material';

type LinkDownloadProps = {children: React.ReactNode }

const LinkDownloadRoot = styled(Link)(({ theme }) => ({
	fontSize: '18px',
	fontFamily: 'Inconsolata, monospace',
	fontWeight: 600,
	lineHeight: '22px',
	textTransform: 'capitalize',
	display: 'flex',
	padding: 0,
	marginRight: '44px',
	marginBottom: '20px',
	color: theme.palette.primary.light,
	textDecoration: 'none',
	cursor: 'pointer',
	'&:hover': {
		color: theme.palette.primary.main,
	},    
}));

const LinkDownload: FC<LinkDownloadProps> = ({children, ...otherProps}) => {
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