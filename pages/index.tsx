//Next
import styles from '@/styles/Home.module.css';
import Head from 'next/head';
//custom components
import Header from '@/components/sections/Header';
import AboutMe from '@/components/sections/AboutMe';
import Introduction from '@/components/sections/Introduction';
import Skill from '@/components/sections/Skill';
import Portfolio from '@/components/sections/Portfolio';
import Certificate from '@/components/sections/Certificate';
import ContactCard from '@/components/sections/ContactCard';
import Footer from '@/components/sections/Footer';

const App = () => {
	
	return (
		<>    
			<Head>
				<title>Žaneta Sabadka - portfolio</title>
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
};

export default App;
