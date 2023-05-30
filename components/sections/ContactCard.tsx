// react
import { FC, useContext } from 'react'
// mui
import { Box, BoxProps, CardActionArea, Paper, styled } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
// custom component
import CustomTitle from '../CustomComponents/CustomTitle'
import ConstantsContext from '../../context/constantsContext'

export const Item = styled(Paper)(({ theme }) => ({
	width: '300px',
	height: '80px',
	backgroundColor: 'transparent', 
	display: 'flex', 
	flexDirection: 'column',
	justifyContent: 'center',
	textAlign: 'center',
	border: '2px solid #2C2642',
	[theme.breakpoints.down('sm')]: {
		width: '100px'
	},
}))

export const BoxLabel = styled(Box)<BoxProps>(({theme})=> ({
	[theme.breakpoints.down('sm')]: {	
		display: 'none'
	}
}))

const ContactCard: FC = () => {
	const { contactLinks } = useContext(ConstantsContext)
	contactLinks?.sort((a, b) => (a.id > b.id ? 1 : -1))

	return (
		<Paper
			id='Contact'  
			elevation={5}
			sx={{
				p: 2,
				margin: 'auto',
				maxWidth: 1240,
				flexGrow: 1,
				backgroundColor: 'transparent',
			}}
		> 
			<CustomTitle>Kontakt</CustomTitle>
			<Grid container xs={8} maxWidth='1240px' m='4rem auto' sx={{display: 'flex', justifyContent: 'space-evenly'}}>
				{contactLinks?.map((ContactLink, index) => (            
					<Item key={ContactLink.id + index}>
						<CardActionArea                               
							href={ContactLink.href}                  
						>         
							{ContactLink.Icon}
							<BoxLabel>
								{ContactLink.label}       
							</BoxLabel>
						</CardActionArea>
					</Item>  
				))}          
			</Grid>
		</Paper>
	)
}
export default ContactCard
