import { FC } from 'react';
//mui
import { Card, Grid } from '@mui/material';
//custom components
import SkillData from '../../constants/skillsData';
//css
import style from '../../styles/Skill.module.css';

const SkillsMob:FC = () => {
	return (
		<Grid sx={{alignItems:'center', justifyContent:'center'}} container>
			{SkillData?.map((SkillData) => (
				<Card key={SkillData.id}
					sx={{ width: '140px', 
						backgroundColor: 'transparent',
						margin: '0.2rem' }} 
					className={style.skillDataMob}>
					{SkillData.imagesMob}
				</Card>
			))}
		</Grid>
	);
};
export default SkillsMob;
