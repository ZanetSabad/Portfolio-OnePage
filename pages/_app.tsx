import type { AppProps } from 'next/app';
// @mui
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../theme/theme';



export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID as string, {
        page_path: url,
      });
    }
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
		
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router.events]);
  return ( 
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<Component {...pageProps} />
	</ThemeProvider>
	);
}

