import { FC, useContext } from 'react'
//mui
import { Card, Grid } from '@mui/material'
//custom components
import ConstantsContext from '../../context/constantsContext'
//css
import style from '../../styles/Skill.module.css'

const SkillsMob:FC = () => {

	const { skillsData } = useContext(ConstantsContext)
	skillsData?.sort((a, b) => (a.id > b.id ? 1 : -1))

	return (
		<Grid sx={{alignItems:'center', justifyContent:'center'}} container>
			{skillsData?.map((SkillData) => (
				<Card key={SkillData.id}
					sx={{ width: '140px', 
						backgroundColor: 'transparent',
						margin: '0.2rem' }} 
					className={style.skillDataMob}>
					{SkillData.imagesMob}
				</Card>
			))}
		</Grid>
	)
}
export default SkillsMob
