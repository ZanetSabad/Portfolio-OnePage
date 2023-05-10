import React from 'react';
//mui
import { IconButton, MenuItem, MenuItemProps, styled } from "@mui/material"
//custom components
import ConstantsContext from '../context/constantsContext';


interface SocialNetworkProps{}

const IconBox = styled(MenuItem)<MenuItemProps>(({theme}) => ({
    justifyContent: "flex-end", 
    "&:hover": {
      background: "none"}
  }))

const SocialNetwork: React.FC<SocialNetworkProps> = () => {

    const { iconLinks } = React.useContext(ConstantsContext);
    iconLinks?.sort((a, b) => (a.order > b.order ? 1 : -1));

    return (
    <>
                <IconBox>             
          {iconLinks?.map((IconLink, index) => (
                 <IconButton
                    key={IconLink.href}
                    href={IconLink.href}
                    target='_blank'
                  >
                    {IconLink.Icon}
                    </IconButton>
            ))}
        </IconBox>
    </>
  );
}

export default SocialNetwork;
