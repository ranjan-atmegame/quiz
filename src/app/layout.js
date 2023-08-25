// 'use client';
import Script from 'next/script';
import SessionProvider from '@/context/Provider';
import { Provider } from '@/context/AuthProvider';
import './globals.css';

export const metadata = {
  title: 'AtmeQuiz',
  description: 'Play online Quiz',
};

export default function RootLayout({ session, children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          crossorigin="anonymous"
          data-ad-frequency-hint="30s"
          data-ad-channel="8585429111"
          data-ad-client="ca-pub-9733910408335876"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></Script>
        {/* <Script id="google-ad-page" strategy="beforeInteractive">
          {`(adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: "ca-pub-9733910408335876",
        enable_page_level_ads: true,
      });`}
        </Script> */}
        <Script id="google-ad-config" strategy="beforeInteractive">
          {`window.adsbygoogle = window.adsbygoogle || [];
      var adBreak = (adConfig = function (o) {
        adsbygoogle.push(o);
      });
      adConfig({ preloadAdBreaks: "on" })`}
        </Script>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-213644786-1"
        ></Script>

        <Script id="google-tag" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "UA-213644786-1");`}
        </Script>

        <Script id="google-tag-layer" strategy="beforeInteractive">
          {` (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-NVVJCR6");`}
        </Script>
      </head>
      <body>
        <SessionProvider session={session} basePath="/api/auth">
          <Provider>{children}</Provider>
        </SessionProvider>
        {/* <SessionProvider session={session} basePath="/api/auth"> */}
        {/* {children} */}
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
