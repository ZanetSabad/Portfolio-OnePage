import { FC, useContext } from 'react'
//swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import SwipeIconKeyframes from '../SwipeIconKeyframes'
import 'swiper/css'
//mui
import { Box, BoxProps, styled } from '@mui/material'
//custom components
import CustomTitle from '../CustomComponents/CustomTitle'
import ConstantsContext from '@/context/constantsContext'
import SkillsMob from './SkillsMob'
//css
import style from '../../styles/Skill.module.css'

export const BoxRoot = styled(Box)<BoxProps>(()=> ({
	maxWidth: '1240px',
	margin: 'auto',
	padding: '2rem',
}))

const Skill: FC = () => {

	const { skillsData } = useContext(ConstantsContext)
	skillsData?.sort((a, b) => (a.id > b.id ? 1 : -1))

	return (        
		<BoxRoot id='Skills' >
			<CustomTitle>Moje &quotskilly&quot</CustomTitle>
			<Box sx={{display: {xs: 'none', sm: 'block'}}}>
				<Box className={style.boxSkill}>
					<Swiper
						className={style.slides}
						loop
						spaceBetween={10}
						slidesPerView={5}       
					>        
						{skillsData?.map((SkillData, id) => (
							<SwiperSlide key={id} className={style.slide}>
								{SkillData.images}
							</SwiperSlide>
						))}
					</Swiper>
				</Box>
				<Box sx={{textAlign: 'center'}}>
					<SwipeIconKeyframes />
				</Box> 
			</Box> 
			<Box id='Skills' sx={{display: {xs: 'flex', sm: 'none'}}}>    
				<SkillsMob /> 
			</Box>
		</BoxRoot>          
	)
}

export default Skill
