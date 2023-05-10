// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// @mui
import { ThemeProvider, CssBaseline, styled } from '@mui/material';
import theme from '../theme/theme';

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

