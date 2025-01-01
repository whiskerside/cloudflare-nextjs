import React from "react";
import { appConfig } from "@/lib/app.config";
import { Navigations } from "@/lib/types";
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
    loginRequired: false,
    multipleLangs: false,
  };

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navigation
        items={navigations.items}
        loginRequired={navigations.loginRequired}
        multipleLangs={navigations.multipleLangs}
      />
      <main className="flex-1 max-w-screen-lg mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
