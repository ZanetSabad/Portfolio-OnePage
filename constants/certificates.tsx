// react
import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
// type
import { ButtonProps } from '@mui/material';
export interface Certificate {
  href: string;
  label: string;
  icon?: React.ReactNode,
  id: number;
}

const certificates: Certificate[] = [
  {
    href: '/docs/Webová vývojářka.pdf',
    label: 'Webová vývojářka',
    icon: <DownloadIcon />,
    id: 1,
  },
  {
    href: '/docs/pracovni_navyky.pdf',
    label: 'Pracovní návyky',
    icon: <DownloadIcon />,
    id: 2,
  },
  {
    href: '/docs/tematicke miniworkshopy.pdf',
    label: 'Miniworshopy',
    icon: <DownloadIcon />,
    id: 3,
  },
  {
    href: '/docs/material_ui.pdf',
    label: 'Material UI',
    icon: <DownloadIcon />,
    id: 4,
  },
];

export default certificates;