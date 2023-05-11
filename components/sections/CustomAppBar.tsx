// react
import * as React from 'react';
// next
import { useRouter } from 'next/router';
// mui
import { AppBar, AppBarProps, Box, BoxProps, Container, Grow, ListItemButton, ListItemIcon, ListItemText, Toolbar, 
          ToolbarProps, Typography,  styled, useTheme, } from '@mui/material';
import DownloadForIcon from '@mui/icons-material/DownloadForOffline';
// custom component
import ButtonLink from '../CustomComponents/ButtonLink';
import MenuToggler from '../CustomComponents/MenuToggler';
import LinkDownload from '../CustomComponents/LinkDownload';
import ConstantsContext from '../../context/constantsContext';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import ComponentsContext from '../../context/componentsContext';

interface CustomAppBarProps {}

const CustomAppBarRoot = styled(AppBar)<AppBarProps>(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
}));

const LinkContainer = styled(Box)<BoxProps>(({ theme }) => ({
  marginLeft: theme.direction === 'ltr' ? 'auto' : 'none',
  marginRight: theme.direction === 'rtl' ? 'auto' : 'none',
}));

const LinksBox = styled(Box)<BoxProps>(({ theme }) => ({
  '& > :not(a:first-of-type)': {
    marginLeft: '0.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const CustomToolbar = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    padding: 0,
  },
}));

const CustomAppBar: React.FC<CustomAppBarProps> = (props) => {
  const [dropdownState, setDropdownState] = React.useState(false);
  const { containerMaxWidth = 'lg' } = React.useContext(ComponentsContext);
  const { navLinks } = React.useContext(ConstantsContext);
  navLinks?.sort((a, b) => (a.id > b.id ? 1 : -1));

  const appBarRef = React.useRef(null);
  const handleClickOutside = () => {
    if (dropdownState) setDropdownState(false);
  };

  useOnClickOutside(appBarRef, handleClickOutside);

  const router = useRouter();
  const handleDropdownItemClick = (href: string) => {
    setDropdownState(false);
    router.push(href);
  };

  return (
    <>
      <CustomAppBarRoot position="absolute" ref={appBarRef}>
        <Container >
          <CustomToolbar sx={{ marginLeft: 'auto'}}>
            <LinkContainer>
              <LinksBox sx={{flexGrow: 1, display: {xs: "none", sm: "flex"}, justifyContent:"flex-end"}}>
                {navLinks?.map((navLink, id) => (
                  <ButtonLink
                    key={navLink.id}
                    href={navLink.href}
                  >
                    {navLink.label}
                  </ButtonLink>
                ))}
                <LinkDownload sx={{flexGrow: 1, display: {xs: "none", sm: "flex"}}}>
                  Životopis
                  <DownloadForIcon sx={{marginLeft: "0.5rem"}} />
                </LinkDownload>  
              </LinksBox>
              <MenuToggler
                color="info"
                onClick={() => setDropdownState(!dropdownState)}
                open={dropdownState}
                sx={{flexGrow: 1, display: { xs: "flex", sm: 'none' } }}
              />
            </LinkContainer>
          </CustomToolbar>
        </Container>
          <Container maxWidth={containerMaxWidth} sx={{backgroundColor: "#2C2642"}}>
              {navLinks?.map((navLink, index) => (
                <Grow
                  in={dropdownState}
                  key={navLink.id}
                  style={{ transformOrigin: 'center left' }}
                  {...(dropdownState ? { timeout: index * 300 } : {})}
                  unmountOnExit
                >
                  <ListItemButton
                    onClick={() => handleDropdownItemClick(navLink.href)}
                    sx={{
                      borderRadius: '4px',
                      '&: hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: 'info.main',
                        fontSize: 'large',
                        minWidth: '2rem',
                      }}
                    >
                      {navLink.Icon}
                    </ListItemIcon>
                    <ListItemText primary={navLink.label} sx={{color: "#C2B548"}} />
                  </ListItemButton>
                </Grow>
              ))}
          </Container>
      </CustomAppBarRoot>
    </>
  );
};

export default CustomAppBar;
