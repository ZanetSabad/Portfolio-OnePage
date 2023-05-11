import React from 'react';
//swiper
import { Swiper, SwiperSlide } from "swiper/react"
import SwipeIconKeyframes from '../SwipeIconKeyframes';
import "swiper/css"
//mui
import { Box, BoxProps, Card, Grid, Stack, Typography, styled } from "@mui/material"
//custom components
import CustomTitle from '../CustomComponents/CustomTitle';
import ConstantsContext from '@/context/constantsContext';
import SkillsMob from './SkillsMob';
//css
import style from "../../styles/Skill.module.css"

interface SkillProps{}

const BoxRoot = styled(Box)<BoxProps>(({theme})=> ({
  maxWidth: "1240px",
  margin: "auto",
  padding: "2rem",
}))

const Skill: React.FC<SkillProps> = (props) => {

  const { skillsData } = React.useContext(ConstantsContext);
    skillsData?.sort((a, b) => (a.id > b.id ? 1 : -1));

  return (
    <div>        
      <BoxRoot id="Skills" >
        <CustomTitle>Moje &quot;skilly&quot;</CustomTitle>
        <Box sx={{display: {xs: "none", sm: "block"}}}>
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
        </Box> 
      <Box id="Skills" sx={{display: {xs: "flex", sm: "none"}}}>    
        <SkillsMob /> 
      </Box>
      </BoxRoot> 
    
    </div>         
  );
}

export default Skill;
