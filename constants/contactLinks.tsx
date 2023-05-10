// react
import React from 'react';
// mui icons
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';

export interface ContactLink {
    Icon: React.ReactNode;
    href: string;
    label: string | number;
    id: number;
}

const contactLinks: ContactLink[] = [
  {
    id: 0,
    Icon: <ContactPhoneIcon color='primary' fontSize='large'/>,
    label: '+420 724 831 189',
    href: 'tel:+420724831189',
  },
  {  
    id: 1,
    Icon: <EmailIcon color='primary' fontSize='large'/>,
    label: 'zaneta.sabadkova@email.com',
    href: 'mailto:zaneta.sabadkova@email.com',
  },
]

export default contactLinks;