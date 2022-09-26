import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" data-theme="synthwave">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          {/* <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          ></link>

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap"
            rel="stylesheet"
          /> */}
          {/* google analytics configuration */}
          {/*<script
            async
            src=`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', process.env.GA_ID);
            `,
            }}
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
