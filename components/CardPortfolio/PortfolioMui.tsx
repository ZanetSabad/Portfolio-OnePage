import { FC } from 'react'
//Mui
import { Box, Card, CardMedia, Typography } from '@mui/material'
// NEXT
import Image from 'next/image'
//css
import style from '../../styles/Portfolio.module.css'

const PortfolioMui: FC = () => {
	return(
		<Card className={style.container} sx={{ maxWidth: 400}}>        
			<CardMedia className={style.img}
				component='img'
				height='200'
				image='/images/portfolio/portfolio_mui.png'
				alt='Portfolio'
			/>        
			<Card className={style.caption}>      
				<Typography variant='h3' color='secondary.light'>Portfolio</Typography>   
				<Box>     
					<Image src='/images/logo/html.png' alt='HTML' width={60} height={60}></Image>        
					<Image src='/images/logo/css.png' alt='CSS' width={60} height={60}></Image>               
					<Image src='/images/logo/react.png' alt='React' width={60} height={60}></Image>               
					<Image src='/images/logo/material_ui.png' alt='Material UI' width={60} height={60}></Image>             
				</Box>
			</Card>
		</Card>
	)
}

export default PortfolioMui