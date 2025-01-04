import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

import { cn } from "@/lib/utils";
import { appConfig } from "@/lib/app.config";
import { Layout } from "@/components/layout";
import GoogleAdsenseScript from "@/components/ads/google.adsense.script";
import { GoogleAnalyticsScript } from "@/components/analytics/google.analytics.script";

export const metadata: Metadata = {
  title: {
    default: "Default title",
    template: "%s | My Site",
  },
  description: "",
  keywords: "",
  alternates: {
    canonical: appConfig.url,
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
      <body
        className={
          process.env.NODE_ENV === "production"
            ? cn(inter.className, sansFont.variable)
            : cn(sansFont.variable)
        }
      >
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
