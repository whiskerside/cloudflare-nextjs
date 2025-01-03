import React from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const sections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="py-6 bg-gray-100 dark:bg-gray-900">
      <section className="flex flex-col max-w-screen-2xl items-center justify-between">
        <div className="space-x-2 text-sm text-muted-foreground ">
          <p>© 2025 Shadcnblocks. All rights reserved.</p>
          <ul className="flex mt-2 justify-center gap-6">
            <li className="hover:text-primary">
              <a href="#"> Terms</a>
            </li>
            <li className="hover:text-primary">
              <a href="#"> Privacy</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
