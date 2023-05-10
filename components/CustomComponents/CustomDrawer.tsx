import React from 'react'
//mui
import { Box, Drawer, IconButton } from '@mui/material'
//custom components
import CloseIcon from '@mui/icons-material/Close';
import Navbar from '../sections/NavBar'

interface CustomDrawerProps{
  open?: boolean | undefined;
  onClose: () => void;
}

const CustomDrawer:React.FC<CustomDrawerProps> = (props) => {
  const {open, onClose, ...otherProps} = props
  return (
    <>
    <Drawer
      PaperProps={{
        sx: { width: '50%', background: "#4a4576"},
      }}
      anchor='left'
      open={open}
      onClose={onClose}
    >
      <Box sx={{ padding: '2px' }}>
        <IconButton onClick={onClose} sx={{ padding: 0, marginLeft: '5px' }}>
          <CloseIcon />
        </IconButton>
        <Box sx={{ padding: '44px'}}>
          <Navbar />
        </Box>
      </Box>
    </Drawer>
    </>
  )
}

export default CustomDrawer