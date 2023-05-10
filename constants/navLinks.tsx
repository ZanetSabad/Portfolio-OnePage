// react
import React from 'react';
//mui
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export interface NavLink {
  href: string;
  label: string;
  Icon: React.ReactNode;
  order: number;
}

const navLinks: NavLink[] = [

{
  href: '#AboutMe',
  label: 'O mně',
  Icon: <KeyboardArrowDownIcon />,
  order: 1,
},
{
  href: '#Skills',
  label: 'Skills',
  Icon: <KeyboardArrowDownIcon />,
  order: 2,
},
{
  href: '#Portfolio',
  label: 'Portfolio',
  Icon: <KeyboardArrowDownIcon />,
  order: 3,
},
{
  href: '#Contact',
  label: 'Kontakt',
  Icon: <KeyboardArrowDownIcon/>,
  order: 4,
},
];

export default navLinks;
