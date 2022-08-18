import { AppProps } from 'next/app';
import Head from 'next/head';
import { GeistProvider, CssBaseline } from '@geist-ui/core';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to builder-studio!</title>
      </Head>
      <GeistProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </GeistProvider>
    </>
  );
}

export default CustomApp;
