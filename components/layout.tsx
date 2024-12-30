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
  const navigations: Navigations = { items: appConfig.navigations };

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navigation items={navigations.items} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
