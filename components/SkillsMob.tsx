import React from 'react';
//next
import Image from 'next/image';
//mui
import { Box, Card, CardMedia, Grid, Paper, ImageList, ImageListItem } from '@mui/material';
//custom components
import CustomTitle from './CustomComponents/CustomTitle';
import ConstantsContext from '../context/constantsContext';
//css
import style from "../styles/Skill.module.css"

interface SkillsMobProps {}

const SkillsMob: React.FC<SkillsMobProps> = (props) => {

    const { skillsData } = React.useContext(ConstantsContext);
    skillsData?.sort((a, b) => (a.id > b.id ? 1 : -1));

  return (
    <Box id="Skills" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
    <CustomTitle>Moje "skilly"</CustomTitle>
    <Grid sx={{alignItems:"center", justifyContent:"center"}} container>
         {skillsData?.map((SkillData, id) => (
          <Card key={id} sx={{width: "140px", backgroundColor: "transparent",margin: "0.2rem" }} className={style.skillDataMob}>
            {SkillData.imagesMob}
          </Card>
      ))}
    </Grid>
    </Box>
  );
}
export default SkillsMob;
