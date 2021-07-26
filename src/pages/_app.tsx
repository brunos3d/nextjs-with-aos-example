import { AppProps } from 'next/app';
import { useEffect } from 'react';
import AOS from 'aos';

// import aos styles
import 'aos/dist/aos.css';
import '@/styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100,
    });
  }, []);

  return <Component {...pageProps} />;
}
