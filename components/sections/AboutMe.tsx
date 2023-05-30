import { FC } from 'react'
//next
import Image, { ImageProps } from 'next/image'
//foto
import Foto from '../../public/images/Foto.png'
//mui
import { Box, BoxProps, styled, Typography } from '@mui/material'
//custom components
import SocialNetwork from '../SocialNetwork'
import BackToTopButton from '../BackToTopButton'

const BoxRoot = styled(Box)<BoxProps>(({theme})=> ({
	marginBottom: '8rem',
	[theme.breakpoints.up('xs')]: {
		display: 'flex',
		justifyContent: 'center',
		padding: '44px 22px 0px',
	}
}))

const BoxWrapper = styled(Box)<BoxProps>(({theme})=> ({
	[theme.breakpoints.up('md')]: {
		maxWidth: '1240px',
		display: 'flex',
		alignItems: 'center',
		gap: '35px',
	}
}))

const MyFoto = styled(Image)<ImageProps>(()=> ({
	display: 'block',
	margin: '0px auto 0',
	borderRadius: '40%',
}))

const AboutMe: FC = () => {
	return (
		<BoxRoot>         
			<BoxWrapper>            
				<Box>
					<SocialNetwork />
					<Box>
						<Typography variant='h2'>
							Jmenuji se 
						</Typography>
						<Typography variant='h1'  color='text.secondary'>
							Žaneta Sabadková
						</Typography>
						<Typography variant='body1'>
							začínající Front-end developer 
						</Typography>
					</Box>
				</Box>
				<Box sx={{borderRadius: '40%',}}>
					<MyFoto src={Foto} alt='foto' width={260} height={450} priority/>
				</Box>
			</BoxWrapper>
			<BackToTopButton />
		</BoxRoot>      
	)
}

export default AboutMe
