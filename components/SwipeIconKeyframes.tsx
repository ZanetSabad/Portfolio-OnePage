import React from 'react';
//mui
import SwipeIcon from '@mui/icons-material/Swipe';
import { Box } from  "@mui/material"
//css
import style from  "../styles/Skill.module.css"

interface SwipeIconKeyframesProps{}

const SwipeIconKeyframes: React.FC<SwipeIconKeyframesProps> = (props) => {
  return (
    <>
      <div className={style.panToll}>
        <SwipeIcon fontSize='large' color='info'/>
      </div>
    </>
  );
}

export default SwipeIconKeyframes;
