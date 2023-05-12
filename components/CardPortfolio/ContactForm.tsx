import React from 'react';
import { Box, Card, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import style from "../../styles/Portfolio.module.css"

interface ContactFormProps{}

const ContactForm: React.FC<ContactFormProps> = (props) => {
  return (
    <>
      <Card className={style.container} sx={{ maxWidth: 400}}>        
            <CardMedia className={style.img}
            component="img"
            height="200"
            image="/images/portfolio/Contact.png"
            alt="Kontaktní formulář"
            />        
            <Card className={style.caption}>      
                <Typography variant="h3" color="secondary.light">Kontaktní formulář</Typography>   
                <Box>     
                    <Image src="/images/logo/html.png" alt='HTML' width={60} height={60}></Image>        
                    <Image src="/images/logo/css.png" alt="CSS" width={60} height={60}></Image>               
                    <Image src="/images/logo/php.png" alt="PHP" width={60} height={60}></Image>               
                    
                </Box>
                <Link href="https://contact-form-fawn.vercel.app/"  target='_blank'  style={{color: "black"}}>Náhled</Link>
            </Card>
        </Card>
    </>
  );
}

export default ContactForm;