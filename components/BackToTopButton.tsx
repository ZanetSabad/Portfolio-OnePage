import { FC, useEffect, useState} from 'react';
//mui
import { Button } from '@mui/material';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const BackToTopButton: FC = () => {
	const [backToTopButton, setBackToTopButton] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if(window.scrollY > 500) {
				setBackToTopButton(true);
			} else {
				setBackToTopButton(false);
			}
		});
	}, []);

	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<>
			{backToTopButton && (
				<Button sx={{ 
					position: 'fixed', 
					bottom: '40px', 
					right: '100px', 
					border: '2px solid #C2B548',
					zIndex: 2,
					display: {xs: 'none', sm: 'flex'}
				}}
				onClick={scrollUp}
				> 
					<KeyboardDoubleArrowUpIcon fontSize='large' color='info'/> 
				</Button>
			)}
		</>
	);
};

export default BackToTopButton;
