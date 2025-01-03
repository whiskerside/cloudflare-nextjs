import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import type { Metadata } from "next";
import FeatureWhy from "@/components/features/feature.why";
import FeatureValues from "@/components/features/feature.values";
import HeroDefault from "@/components/heros/hero.default";
import HeroText from "@/components/heros/hero.text";
import FaqDefault from "@/components/faqs/faq.normal";
import FaqSimple from "@/components/faqs/faq.simple";
import Grid from "@/components/games/recommends/grid";
import HeroGame from "@/components/games/heros/hero.game";

export const metadata: Metadata = {
  title:
    "Sprunki Corruptbox Free Online Game, incredibox corrupt box Game - corruptboxfree.com",
  description:
    "Play Sprunki Corruptbox free online. Craft glitchy beats with unique characters in this fun music mod. Explore Corruptbox 2 and 3 versions—no download required!",
  alternates: {
    canonical: `https://corruptboxfree.com`,
  },
};
export default function Home() {
  const t = useTranslations("home");
  return (
    <>
      {/* <HeroText /> */}
      {/* <HeroDefault /> */}
      {/* <FeatureValues /> */}
      {/* <FeatureWhy /> */}
      {/* <FaqDefault /> */}

      <HeroGame />
      <FaqSimple />
    </>
  );
}
