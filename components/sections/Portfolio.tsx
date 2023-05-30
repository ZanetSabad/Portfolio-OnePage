import { FC } from 'react'
//mui
import { Paper } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
//custom components
import CustomTitle from '../CustomComponents/CustomTitle'
import ContactForm from '../CardPortfolio/ContactForm'
import GeneratorCode from '../CardPortfolio/GeneratorCode'
import PortfolioMuiFirst from '../CardPortfolio/PortfolioMuiFirst'
import BuyList from '../CardPortfolio/BuyList'
import PortfolioMui from '../CardPortfolio/PortfolioMui'

const Portfolio:FC = () => {

	return (
		<Paper
			id='Portfolio'  
			elevation={5}
			sx={{
				p: 2,
				margin: 'auto',
				maxWidth: 1240,
				flexGrow: 1,
				backgroundColor: 'transparent',
			}}
		> 
			<CustomTitle>Portfolio</CustomTitle>
			<Grid sx={{ flexGrow: 1,}} container spacing={{xs: 5}} justifyContent={'space-evenly'}>
				<Grid xs={12} sm={6} md={4} lg={4}>
					<ContactForm />
				</Grid>
				<Grid xs={12} sm={6} md={4}>
					<BuyList />
				</Grid>
				<Grid xs={12} sm={6} md={4}>
					<PortfolioMuiFirst />
				</Grid>
				<Grid xs={12} sm={6} md={4}>
					<GeneratorCode />
				</Grid>
				<Grid xs={12} sm={6} md={4}>
					<PortfolioMui />
				</Grid>      	
			</Grid>
		</Paper>
	)
}
export default Portfolio


