import { FC } from 'react';
//mui
import { Box, Card, CardMedia, Typography } from '@mui/material';
//next
import Image from 'next/image';
import Link from 'next/link';
//css
import style from '../../styles/Portfolio.module.css';

const GeneratorCode: FC = () => {
	return (
		<Card className={style.container} sx={{ maxWidth: 400}}>        
			<CardMedia className={style.img}
				component='img'
				height='200'
				image='/images/portfolio/generator_hesel.png'
				alt='Generator hesel'
			/>        
			<Card className={style.caption}>      
				<Typography variant='h3' color='secondary.light'>Generator hesel</Typography>   
				<Box>     
					<Image src='/images/logo/html.png' alt='HTML' width={60} height={60}></Image>        
					<Image src='/images/logo/css.png' alt='CSS' width={60} height={60}></Image>               
					<Image src='/images/logo/django.png' alt='Django' width={60} height={60}></Image>               
				</Box>
				<Link href='https://github.com/ZanetSabad/generator_hesel/tree/master'  target='_blank'  style={{color: 'black'}}>Náhled, jen na GitHub</Link>
			</Card>
		</Card>
	);
};
export default GeneratorCode;