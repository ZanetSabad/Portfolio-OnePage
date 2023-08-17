import { FC } from 'react';
//mui
import SwipeIcon from '@mui/icons-material/Swipe';
import { Box } from  '@mui/material';
//css
import style from  '../styles/Skill.module.css';

const SwipeIconKeyframes: FC = () => {
	return(
		<Box className={style.panToll}>
			<SwipeIcon fontSize='large' color='info'/>
		</Box>
	);
};
export default SwipeIconKeyframes;
