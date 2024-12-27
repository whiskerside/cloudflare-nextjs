import type { Metadata, ResolvingMetadata } from "next";
import { Props } from "@/utils/types";

import Image from "next/image";
import Link from "next/link";
import Alert from "@/ui/alert";

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  // const id = (await params).id;
  return {
    title: "page title(generateMetadata)",
    description: "page description(generateMetadata)",
  };
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
        </p>
        <Link href="/about">about</Link>

        <Alert kind="info" message="infor message" />
        <Alert kind="danger" message="infor message" />
        <Alert kind="success" message="infor message" />
        <Alert kind="warning" message="infor message" />
        <Alert kind="default" message="infor message" />
      </div>
    </main>
  );
}
