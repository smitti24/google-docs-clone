import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import Script from "next/script";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Script
        src="node_modules/@material-tailwind/html@latest/scripts/ripple.js"
        async
      ></Script>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
