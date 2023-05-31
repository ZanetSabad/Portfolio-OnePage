//next
import Image  from "next/image";
//mui
import { CardProps, styled } from "@mui/material"

export interface SkillData {
  id: number;
  images: React.ReactNode | any;
  imagesMob: React.ReactNode | any;
}

const skillsData: SkillData[] = [
  { 
    id: 1,
    images: <Image src='/images/logo/html.png' 
                  alt="HTML" 
                  width={150} 
          height={150}       
            />,
    imagesMob: <Image src='/images/logo/html.png' 
                    alt="HTML" 
                    width={120} 
                    height={120}      
      />,    
  },   
  {
    id: 2,
    images: <Image src='/images/logo/css.png' 
                    alt="CSS" 
                    width={150} 
                    height={150}
            />,
    imagesMob: <Image src='/images/logo/css.png' 
                      alt="CSS" 
                      width={120} 
                      height={120}       
/>,         
  },
  {
    id: 3,
    images: <Image src='/images/logo/js.png' 
                alt="JavaScript" 
                width={150} 
                height={150}
            />,
    imagesMob:  <Image src='/images/logo/js.png' 
                        alt="JavaScript" 
                        width={120} 
                        height={120}
/>,       
  },
 {
    id: 4,
    images:<Image src='/images/logo/sass.png' 
                  alt="SaSS" 
                  width={150} 
                  height={150}
          />,
    imagesMob:<Image src='/images/logo/sass.png' 
                  alt="SaSS" 
                  width={120} 
                  height={120}
              />              
    },
  {
    id: 5,
    images:<Image src='/images/logo/git.png' 
                  alt="Git" 
                  width={150} 
                  height={150}
                
            />,
    imagesMob:<Image src='/images/logo/git.png' 
                    alt="Git" 
                    width={120} 
                    height={120}     
              />        
                    
    },
  {
    id: 6,
    images: <Image src='/images/logo/github.png' 
                    alt="GitHub" 
                    width={150} 
                    height={150}
            />,
    imagesMob: <Image src='/images/logo/github.png' 
                    alt="GitHub" 
                    width={120} 
                    height={120}
                />       
    },
  {
    id: 7,
    images: <Image src='/images/logo/canva.png' 
                    alt="Canva" 
                    width={150} 
                    height={150}
            />,
    imagesMob: <Image src='/images/logo/canva.png' 
                    alt="Canva" 
                    width={120} 
                    height={120}
               />
      },
  {
    id: 8,
    images:<Image src='/images/logo/python.png' 
                  alt="Python" 
                  width={150} 
                  height={150}
            />,
    imagesMob:<Image src='/images/logo/python.png' 
                    alt="Python" 
                    width={120} 
                    height={120}
              />       
      },
  {
    id: 9,
    images: <Image src='/images/logo/ga.png' 
              alt="Google Analytics" 
              width={150} 
              height={150}
            />,
    imagesMob: <Image src='/images/logo/ga.png' 
                      alt="Google Analytics" 
                      width={120} 
                      height={120}
                />                
    },
  {
    id: 10,
    images:<Image src='/images/logo/seo.png' 
                  alt="SEO" 
                  width={150} 
                  height={150}
            />,
    imagesMob:<Image src='/images/logo/seo.png' 
                    alt="SEO" 
                    width={120} 
                    height={120}
              />        
              
    },
  {
    id: 11,
    images: <Image src='/images/logo/shotcut.png' 
                  alt="ShotCut" 
                  width={150} 
                  height={150}
            />,
    imagesMob: <Image src='/images/logo/shotcut.png' 
                      alt="ShotCut" 
                      width={120} 
                      height={120}
                />             
  },
  {
    id: 12,
    images: <Image src='/images/logo/figma.png' 
                    alt="Figma" 
                    width={150} 
                    height={150}
            />,
    imagesMob: <Image src='/images/logo/figma.png' 
                    alt="Figma" 
                    width={120} 
                    height={120}
                />    
  },
  {
  id: 13,
  images: <Image src='/images/logo/react.png' 
                  alt="React" 
                  width={150} 
                  height={150}
          />,
  imagesMob: <Image src='/images/logo/react.png' 
                  alt="React" 
                  width={120} 
                  height={120}
              />    
  },
  { 
  id: 14,
  images: <Image src='/images/logo/material_ui.png' 
                  alt="Material UI" 
                  width={150} 
                  height={150}
          />,
  imagesMob: <Image src='/images/logo/material_ui.png' 
                  alt="Material UI" 
                  width={120} 
                  height={120}
              />    
  },
  { 
  id: 15,
  images: <Image src='/images/logo/php.png' 
                  alt="Php" 
                  width={150} 
                  height={150}
          />,
  imagesMob: <Image src='/images/logo/php.png' 
                  alt="Php" 
                  width={120} 
                  height={120}
              />    
  },
  { 
  id: 16,
  images: <Image src='/images/logo/django.png' 
                  alt="Django" 
                  width={150} 
                  height={150}
          />,
  imagesMob: <Image src='/images/logo/django.png' 
                  alt="Django" 
                  width={120} 
                  height={120}
              />    
  },
]
export default skillsData;
