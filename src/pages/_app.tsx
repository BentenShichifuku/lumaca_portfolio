import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head'; // ← これを追加

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* フォントを読み込み */}
        <link
          href="https://fonts.google.com/specimen/Share+Tech"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
