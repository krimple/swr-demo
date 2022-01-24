import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { fetcher as myFetcher } from '../shared/fetcher';
import { SWRConfig } from 'swr';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{
      refreshInterval: 10000,
      fetcher: myFetcher
    }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp
