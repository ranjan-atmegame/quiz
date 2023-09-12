import Script from 'next/script';
import SessionProvider from '@/context/Provider';
import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: 'AtmeQuiz',
  description: 'Play online Quiz',
};

export const dynamic = 'force-dynamic';

export default function RootLayout({ session, children }) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <meta httpEquiv="content-language" content="en-us" />
        <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="copyright"
          content="Copyright © 2023 by Apay Marketing Private Limited, All rights reserved."
        />
        <link rel="manifest" href="/manifest.json" />

        <Script
          async
          crossorigin="anonymous"
          data-ad-frequency-hint="30s"
          data-ad-channel="8585429111"
          data-ad-client="ca-pub-9733910408335876"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></Script>
        <Script async src="/js/ads.js"></Script>
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

        <Script
          async
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        ></Script>
        <Script async src="/js/publisherAd3.js"></Script>
      </head>
      <body>
        <SessionProvider session={session} basePath="/api/auth">
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
