import { FC, useContext } from 'react'
//mui
import { IconButton, MenuItem, MenuItemProps, styled } from '@mui/material'
//custom components
import ConstantsContext from '../context/constantsContext'

export const IconBox = styled(MenuItem)<MenuItemProps>(() => ({
	justifyContent: 'flex-end', 
	'&:hover': {
		background: 'none'}
}))

const SocialNetwork:FC = () => {
	const { iconLinks } = useContext(ConstantsContext)
	iconLinks?.sort((a, b) => (a.order > b.order ? 1 : -1))

	return (
		<IconBox>             
			{iconLinks?.map((IconLink) => (
				<IconButton
					key={IconLink.href}
					href={IconLink.href}
					target='_blank'
				>
					{IconLink.Icon}
				</IconButton>
			))}
		</IconBox>
	)
}

export default SocialNetwork
