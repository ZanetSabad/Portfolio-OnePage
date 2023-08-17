import { FC } from 'react';
//next
import Image from 'next/image';
//images
import Obr from '../../public/images/obr.png';
// @mui
import { Grid, GridProps, Paper, Typography, styled } from '@mui/material';
import style from '../../styles/Introduction.module.css';

const GridImg = styled(Grid)<GridProps>(({theme})=> ({
	[theme.breakpoints.down('sm')]:{
		display: 'none'
	}
}));

const AboutMyText: FC = () => {
	return (    
		<Paper
			id='AboutMe'
			elevation={5}
			sx={{
				p: 2,
				margin: 'auto',
				maxWidth: 1240,
				flexGrow: 1,
				backgroundColor: 'transparent'
			}}
		> 
			<Grid container rowSpacing={1} maxWidth='1240px' m='4rem auto'>
				<GridImg item xs={5} textAlign='center'>  
					<Image src={Obr} alt='obrázek' width={200} />
				</GridImg> 
				<Grid item xs={7} m='auto'> 
					<Typography variant='h2' color='text.secondary' gutterBottom> O mně </Typography>  
					<Typography variant='body1' color='text.primary'>
						Jsem Junior Front-End Developer na počátku své kariéry. Rádá se zdokonaluji v kódování a vývoji aplikací 
						a webových stránek. Myslím si, že mohu říci, že ovládám <span className={style.textcolor}> HTML, CSS, JavaScript 
						</span>
						a moderní framework jako <span className={style.textcolor}>React.js</span>. 
						Znám i lehce základy backendových technologií jako Php, MySql...
					</Typography>
					<Typography variant='body1' color='text.primary' mt={2}>
						V současné době se zdokonaluji v <span className={style.textcolor}> Next.js </span> a <span className={style.textcolor}> Typescript </span>
						společně s <span className={style.textcolor}>Materialy MUI </span>, 
						což je vlastně můj oblíbený framework JavaScriptu.
					</Typography>
				</Grid>      
			</Grid>
		</Paper> 
	);
};

export default AboutMyText;