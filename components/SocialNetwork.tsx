import { FC } from 'react';
//mui
import { IconButton, MenuItem, MenuItemProps, styled } from '@mui/material';
//custom components
import NetworkIcon from '../constants/IconLinks';

export const IconBox = styled(MenuItem)<MenuItemProps>(() => ({
	justifyContent: 'flex-end', 
	'&:hover': {
		background: 'none'}
}));

const SocialNetwork:FC = () => {
	return (
		<IconBox>             
			{NetworkIcon?.map((IconLink) => (
				<IconButton
					key={IconLink.href}
					href={IconLink.href}
					target='_blank'
				>
					{IconLink.Icon}
				</IconButton>
			))}
		</IconBox>
	);
};

export default SocialNetwork;
