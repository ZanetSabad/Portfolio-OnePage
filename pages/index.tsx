//Next
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
//custom components
import Header from '@/components/sections/Header';
import AboutMe from '@/components/sections/AboutMe';
import Introduction from "@/components/sections/Introduction"
import Skill from "@/components/sections/Skill"
import Portfolio from '@/components/sections/Portfolio';
import Certificate from '@/components/sections/Certificate';
import ContactCard from '@/components/sections/ContactCard';
import Footer from '@/components/sections/Footer';


const App = () => {
  return (
    <>     
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Žaneta Sabadka - portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>

      <main className={styles.main}>    
          <Header/>
          <AboutMe />
          <Introduction />
          <Skill />
          <Portfolio />
          <Certificate />
          <ContactCard />
          <Footer />
      </main>
 
    </>

  );
}

export default App;
