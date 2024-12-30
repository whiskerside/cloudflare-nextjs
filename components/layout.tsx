import React from "react";
import { getLocale } from "next-intl/server";
import { Navigation } from "./navigation";
import { Footer } from "./footer";

export async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  // categories data
  const categories: {
    name: string;
    src: string;
    description: string;
    link: string;
  }[] = [
    {
      name: "analytics",
      src: "analytics.jsonc",
      link: "analytics",
      description: "Tools for tracking and analyzing website data.",
    },
    {
      name: "database",
      src: "database.jsonc",
      link: "database",
      description: "Services for storing and managing data.",
    },
    {
      name: "deployment",
      src: "deployment.jsonc",
      link: "deployment",
      description: "Tools for automating application deployment.",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navigation categories={categories} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
