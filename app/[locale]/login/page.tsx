import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Login",
};

export default function Page() {
  const t = useTranslations("home");
  return (
    <>
      <section className="py-32">
        <div className="container">
          <div className="flex flex-col gap-4">
            <div className="mx-auto w-full max-w-sm rounded-md p-6 shadow">
              <div className="mb-6 flex flex-col items-center">
                <Image
                  src="/assets/block.svg"
                  width={42}
                  height={40}
                  className="h-11"
                  alt={"logo"}
                />
                <p className="mb-2 text-2xl font-bold">Start your free trial</p>
                <p className="text-muted-foreground">
                  Sign up in less than 2 minutes.
                </p>
              </div>
              <div>
                <div className="grid gap-4">
                  <Input type="text" placeholder="Enter your name" required />
                  <Input type="email" placeholder="Enter your email" required />
                  <div>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                    <p className="mt-1 text-sm text-muted-foreground">
                      Must be at least 8 characters.
                    </p>
                  </div>
                  <Button type="submit" className="mt-2 w-full">
                    Create an account
                  </Button>
                  <Button variant="outline" className="w-full">
                    <FcGoogle className="mr-2 size-5" />
                    Sign up with Google
                  </Button>
                </div>
                <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
                  <p>Already have an account?</p>
                  <a href="#" className="font-medium text-primary">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}