import '@/styles/index.css';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
