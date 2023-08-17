import { FC } from 'react';
//mui
import { Box, Card, CardMedia, Typography } from '@mui/material';
//next
import Image from 'next/image';
import Link from 'next/link';
//css
import style from '../../styles/Portfolio.module.css';

const BuyList: FC = () => {
	return(
		<Card className={style.container} sx={{ maxWidth: 400}}>        
			<CardMedia className={style.img}
				component='img'
				height='200'
				image='/images/portfolio/buy_list.png'
				alt='Seznam'
			/>        
			<Card className={style.caption}>      
				<Typography variant='h3' color='secondary.light'>Seznam</Typography>   
				<Box>     
					<Image src='/images/logo/html.png' alt='HTML' width={60} height={60}></Image>        
					<Image src='/images/logo/css.png' alt='CSS' width={60} height={60}></Image>               
					<Image src='/images/logo/react.png' alt='React' width={60} height={60}></Image>               
				</Box>
				<Link href='https://aplikace-ukoly-2wdh.vercel.app/'  target='_blank' style={{color: 'black'}}>Náhled</Link>
			</Card>
		</Card>
	);
};

export default BuyList;