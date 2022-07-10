import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import Page from './component/Page';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Page>
        <Component {...pageProps} />
      </Page>
    </RecoilRoot>
  );
}

export default MyApp;
