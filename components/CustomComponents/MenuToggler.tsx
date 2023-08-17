// react
import { FC } from 'react';
// @mui
import { IconButtonProps } from '@mui/material';
// @mui/icons-material
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
// custom component
import CustomIconButton from './CustomIconButton';
// type
type MenuTogglerProps = IconButtonProps & {
  open?: boolean
};

const MenuToggler: FC<MenuTogglerProps> = ({
	open = 'false',
	...otherProps
}) => {

	return (
		<CustomIconButton
			aria-label='Menu toggler'
			size='medium'
			color='inherit'
			{...otherProps}
		>
			{open ? (
				<CloseIcon fontSize='inherit' color='inherit' />
			) : (
				<MenuIcon fontSize='inherit' color='inherit' />
			)}
		</CustomIconButton>
	);
};

export default MenuToggler;
