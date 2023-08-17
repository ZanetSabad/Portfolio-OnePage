// react
import React from 'react';
//mui
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export type NavLink = {
	href: string;
	label: string;
	Icon: React.ReactNode;
	id: number;
}

const navLinks: NavLink[] = [
	{
		href: '/#AboutMe',
		label: 'O mně',
		Icon: <KeyboardArrowDownIcon />,
		id: 1,
	},
	{
		href: '/#Skills',
		label: 'Skills',
		Icon: <KeyboardArrowDownIcon />,
		id: 2,
	},
	{
		href: '/#Portfolio',
		label: 'Portfolio',
		Icon: <KeyboardArrowDownIcon />,
		id: 3,
	},
	{
		href: '/#Certificate',
		label: 'Certifikáty',
		Icon: <KeyboardArrowDownIcon />,
		id: 4,
	},
	{
		href: '/#Contact',
		label: 'Kontakt',
		Icon: <KeyboardArrowDownIcon/>,
		id: 5,
	},
];

export default navLinks;
