import React from "react";
import { appConfig } from "@/lib/app.config";
import { Navigations } from "@/types/navigations";
import { getLocale } from "next-intl/server";
import { Navigation } from "./navigation";
import { Footer } from "./footer";

export async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const navigations: Navigations = {
    items: appConfig.navigations,
    loginEnabled: false,
    langsEnabled: false,
    themeSwitched: false,
  };

  return (
    <div className="bg-background font-sans antialiased">
      <Navigation
        items={navigations.items}
        loginEnabled={navigations.loginEnabled}
        langsEnabled={navigations.langsEnabled}
        themeSwitched={navigations.themeSwitched}
      />
      <main className="flex flex-col min-h-screen ">{children}</main>
      <Footer />
    </div>
  );
}
