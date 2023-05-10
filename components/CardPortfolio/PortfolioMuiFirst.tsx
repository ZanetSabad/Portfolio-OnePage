import React from 'react';
import { Box, Card, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import style from "../../styles/Portfolio.module.css"

interface PortfolioMuiFirstProps{}

const PortfolioMuiFirst: React.FC<PortfolioMuiFirstProps> = (props) => {
  return (
    <>
      <Card className={style.container} sx={{ maxWidth: 400}}>        
            <CardMedia className={style.img}
            component="img"
            height="200"
            image="/images/portfolio/portfolio_mui1.png"
            alt="Moje první portfolio"
            />        
            <Card className={style.caption}>      
                <Typography variant="h3" color="secondary.light">Moje první portfolio</Typography>   
                <Box>     
                <Image src="/images/logo/html.png" alt='HTML' width={80} height={80}></Image>        
                    <Image src="/images/logo/css.png" alt="CSS" width={80} height={80}></Image>               
                    <Image src="/images/logo/react.png" alt="React" width={80} height={80}></Image>               
                    <Image src="/images/logo/material_ui.png" alt="Material UI" width={80} height={80}></Image>                
                </Box>
                <Link href="portfolio-strankovani-bgz4ktubz-zanetsabad.vercel.app" style={{color: "black"}}>Náhled</Link>
            </Card>
        </Card>
    </>
  );
}

export default PortfolioMuiFirst;