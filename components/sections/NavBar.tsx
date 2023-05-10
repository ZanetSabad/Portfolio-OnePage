import * as React from 'react';
//mui
import { Box } from "@mui/material"
import DownloadForIcon from '@mui/icons-material/DownloadForOffline';
//custom components
import ConstantsContext from '../../context/constantsContext';
import CustomButton from '../CustomComponents/CustomButton';
import LinkDownload from '../CustomComponents/LinkDownload';

interface NavBarProps {
  href? :string;
}

const NavBar: React.FC<NavBarProps> = (props) => {  

  const { navLinks } = React.useContext(ConstantsContext);
  navLinks?.sort((a, b) => (a.order > b.order ? 1 : -1)); 

    return (
      <>              
        <Box sx={{flexGrow: 1, display: {sm: "flex"}, justifyContent:"flex-end"}}>
                {navLinks?.map((NavLink, index) => (
                    <CustomButton
                        key={NavLink.label + index + NavLink.href}
                        href={NavLink.href}                             
                    >
                        {NavLink.label}
                        {NavLink.Icon}
                    </CustomButton>
                   
                ))}
                <LinkDownload >
                  Životopis
                  <DownloadForIcon sx={{marginLeft: "0.5rem"}} />
                </LinkDownload>       
        </Box>      
      </>
  );
}

export default NavBar;


