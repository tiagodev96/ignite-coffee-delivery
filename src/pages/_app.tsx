import { Navbar } from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ignite Coffee Delivery</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
