import React from 'react';
//swiper
import { Swiper, SwiperSlide } from "swiper/react"
import SwipeIconKeyframes from '../SwipeIconKeyframes';
import "swiper/css"
//mui
import { Box, BoxProps, Card, Stack, Typography, styled } from "@mui/material"
//custom components
import CustomTitle from '../CustomComponents/CustomTitle';
import SkillsMob from '../SkillsMob';
import ConstantsContext from '@/context/constantsContext';
//css
import style from "../../styles/Skill.module.css"

interface SkillProps{}

const BoxRoot = styled(Box)<BoxProps>(({theme})=> ({
  maxWidth: "1240px",
  margin: "auto",
  padding: "8rem",
  [theme.breakpoints.down("md")]: {
    display: "none"
  }}
))

const Skill: React.FC<SkillProps> = (props) => {

  const { skillsData } = React.useContext(ConstantsContext);
    skillsData?.sort((a, b) => (a.id > b.id ? 1 : -1));

  return (
    <div>        
       <BoxRoot id="Skills" sx={{display: {xs: "none", sm: "block"}}}>
      <CustomTitle>Moje 'skilly'</CustomTitle>
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
        <Box sx={{textAlign: "center"}}>
          <SwipeIconKeyframes />
        </Box>  
        </BoxRoot> 
        <Box sx={{padding: "8rem 0", display: {xs: "flex", sm: "none"}}}>    
        <SkillsMob /> 
        </Box>
    </div>         
  );
}

export default Skill;
