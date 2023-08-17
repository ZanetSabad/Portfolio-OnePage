import { FC } from 'react';
//Mui
import { Box, Card, CardMedia, Link, Typography } from '@mui/material';
// NEXT
import Image from 'next/image';
//css
import style from '../../styles/Portfolio.module.css';

const PortfolioMui: FC = () => {
	return(
		<Card className={style.container} sx={{ maxWidth: 400}}>        
			<CardMedia className={style.img}
				component='img'
				height='200'
				image='/images/portfolio/portfolioHTML.png'
				alt='Portfolio'
			/>        
			<Card className={style.caption}>      
				<Typography variant='h3' color='secondary.light'>Portfolio HTML, SaSS </Typography>   
				<Box>     
					<Image src='/images/logo/html.png' alt='HTML' width={60} height={60}></Image>        
					<Image src='/images/logo/css.png' alt='CSS' width={60} height={60}></Image>               
					<Image src='/images/logo/sass.png' alt='SaSS' width={60} height={60}></Image>               
					<Image src='/images/logo/js.png' alt='JavaScript' width={60} height={60}></Image>             
				</Box>
				<Link href='https://frontendacka.vercel.app/index.html'  target='_blank' style={{color: 'black'}}>Náhled</Link>
			</Card>
		</Card>
	);
};

export default PortfolioMui;