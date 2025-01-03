"use client";

import Script from "next/script";

const googleAdsenseId =
  process.env.NODE_ENV === "production"
    ? process.env.PUBLIC_GOOGLE_ADSENSE_ID!
    : "";

const GoogleAdsenseScript = () => {
  return googleAdsenseId ? (
    <Script
      async
      strategy="afterInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`}
      data-ad-client={`${googleAdsenseId}`}
      crossOrigin="anonymous"
    />
  ) : null;
};

export default GoogleAdsenseScript;
