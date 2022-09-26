import "@/styles/global.css";

import * as React from "react";
import { useEffect, useState } from "react";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

import { SessionIdProvider } from "@/utils/sessionId/sessionId";
import Layout from "@/components/Layout";

export default function App(props) {
  const { Component, pageProps } = props;

  // Google Analytics Config
  // const handleRouteChange = (url) => {
  //   window.gtag("config", process.env.GA_ID, {
  //     page_path: url,
  //   });
  // };
  // useEffect(() => {
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NextNProgress
        color="#fff"
        startPosition={0.3}
        stopDelayMs={200}
        height={1}
        showOnShallow={true}
      />

      <SessionIdProvider>
        {Component.getLayout ? (
          Component.getLayout(<Component {...pageProps} />)
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </SessionIdProvider>
    </>
  );
}
