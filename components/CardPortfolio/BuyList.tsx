import React from 'react';
import { Box, Card, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import style from "../../styles/Portfolio.module.css"

interface BuyListProps{}

const BuyList: React.FC<BuyListProps> = (props) => {
  return (
    <>
      <Card className={style.container} sx={{ maxWidth: 400}}>        
            <CardMedia className={style.img}
            component="img"
            height="200"
            image="/images/portfolio/buy_list.png"
            alt="Seznam"
            />        
            <Card className={style.caption}>      
                <Typography variant="h3" color="secondary.light">Seznam</Typography>   
                <Box>     
                    <Image src="/images/logo/html.png" alt='HTML' width={80} height={80}></Image>        
                    <Image src="/images/logo/css.png" alt="CSS" width={80} height={80}></Image>               
                    <Image src="/images/logo/react.png" alt="React" width={80} height={80}></Image>               
                </Box>
                <Link href="https://aplikace-ukoly-2wdh.vercel.app/" style={{color: "black"}}>Náhled</Link>
            </Card>
        </Card>
    </>
  );
}

export default BuyList;