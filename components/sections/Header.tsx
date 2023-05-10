import React, { useState } from 'react'
//mui
import { AppBar, AppBarProps, Box, Container, ContainerProps, IconButton, styled, Toolbar, Typography } from '@mui/material'
//next
import Image, {ImageProps} from 'next/image'
// images
import logoDesk from '../../public/images/logo/MojeLogo.png'
import logoMob from '../../public/images/logo/MojeLogoMob.png'
//custom components
import NavBar from './NavBar'
import CustomDrawer from '../CustomComponents/CustomDrawer'
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps{}

const AppBarRoot = styled(AppBar)<AppBarProps>(({theme})=> ({
  backgroundColor: "transparent",
  boxShadow: "none",
  borderBottom: "0.5px solid #2C2642",
  padding: "20px 0",
  margin: "auto",
  maxWidth: "1240px",
}))

const ContainerRoot = styled(Container)<ContainerProps>(({theme})=> ({
  [theme.breakpoints.up("lg")]:{
     padding: 0,
     margin: 0,
  }
}))

const LogoDesk = styled(Image)<ImageProps>(({theme})=> ({
  marginLeft: "5rem",
  flexGrow: 1,  
  [theme.breakpoints.up("md")]:{
    display: "flex",
  },
  [theme.breakpoints.down("md")]:{
    display: "none",
  }
}))

const LogoMob = styled(Image)<ImageProps>(({theme})=> ({
  mr: 2,
  flexGrow: 1,
  [theme.breakpoints.up("md")]:{
    display: "none",
  },
  [theme.breakpoints.down("md")]:{
    display: "flex",
  }
}))
const Header: React.FC<HeaderProps> = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <AppBarRoot position='static'>
      <ContainerRoot maxWidth='xl'>
        <CustomDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
        <Toolbar disableGutters>
          <Typography component='a' href='/' sx={{position: "absolute"}}>
            <LogoDesk src={logoDesk} alt='logo' width={150} height={90} priority  />
          </Typography>
          <Typography component='a' href='/' sx={{position: "absolute"}}>
            <LogoMob src={logoMob} alt='logo' width={120} height={80}/>
          </Typography> 
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size='large'
              aria-label='menu'
              sx={{justifyContent: "center", margin: "auto"}}
              onClick={() => setOpenDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            </Box>                  
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
            <NavBar />
          </Box>
        </Toolbar>
      </ContainerRoot>
    </AppBarRoot>
  )
}
export default Header

