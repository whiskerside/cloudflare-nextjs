import React from "react";
import { useTranslations } from "next-intl";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { appConfig } from "@/lib/app.config";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="py-6 bg-gray-100 dark:bg-gray-900">
      <section className="flex flex-col max-w-screen-2xl items-center justify-between">
        <div className="space-x-2 text-sm text-muted-foreground ">
          <p>© 2025 {appConfig.name}. All rights reserved.</p>
          <ul className="flex mt-2 justify-center gap-6">
            <li className="hover:text-primary">
              <a href="/terms">Terms</a>
            </li>
            <li className="hover:text-primary">
              <a href="/privacy">Privacy</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
