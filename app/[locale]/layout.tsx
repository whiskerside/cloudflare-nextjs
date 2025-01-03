import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { Layout } from "@/components/layout";
import GoogleAdsenseScript from "@/components/ads/google.adsense.script";
import { GoogleAnalyticsScript } from "@/components/analytics/google.analytics.script";

export const metadata: Metadata = {
  title: {
    default: "Sprunki Corruptbox Free Online Game, incredibox corrupt box Game",
    template: "%s | corruptboxfree.com",
  },
  description:
    "Play Sprunki Corruptbox free online. Craft glitchy beats with unique characters in this fun music mod. Explore Corruptbox 2 and 3 versions, no download required!",
  keywords:
    "Play Sprunki Corruptbox free online. Corruptbox 1, Corruptbox 2 and Corruptbox 3",
  alternates: {
    canonical: "https://krazyracing.com",
  },
};

const inter = Inter({ subsets: ["latin"] });
const sansFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn(inter.className, sansFont.variable)}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class">
            <Layout>{children}</Layout>
            <GoogleAdsenseScript />
            <GoogleAnalyticsScript />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
