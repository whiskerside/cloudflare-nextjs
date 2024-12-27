import Image from "next/image";
import Link from "next/link";

import { WEBSITE_BRAND, WEBSITE_URL, WEBSITE_LOGO } from "@/utils/constants";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link className="flex items-center" href={WEBSITE_URL}>
              <Image
                width={30}
                height={48}
                src={WEBSITE_LOGO}
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                {WEBSITE_BRAND}
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    href="https://twitter.com"
                    className="hover:underline"
                    title={`Follow ${WEBSITE_BRAND} on Twitter`}
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://facebook.com"
                    className="hover:underline"
                    title={`Follow ${WEBSITE_BRAND} on Facebook`}
                  >
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-conditions" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-3 border-gray-100 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link className="hover:underline" href={WEBSITE_URL}>
              {WEBSITE_BRAND}
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link
              href={"https://facebook.com"}
              title={`${WEBSITE_BRAND} on Facebook`}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-3"
            >
              <Image
                src="/facebook.svg"
                width={20}
                height={20}
                alt="Facebook"
              />
            </Link>
            <Link
              href={"https://twitter.com"}
              title={`${WEBSITE_BRAND} on Twitter`}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-3"
            >
              <Image
                src="/twitter.svg"
                width={20}
                height={20}
                alt={`${WEBSITE_BRAND} on Twitter`}
              />
            </Link>
            <Link
              href={"https://github.com"}
              title={`${WEBSITE_BRAND} on Github`}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-3"
            >
              <Image
                src="/github.svg"
                width={20}
                height={20}
                alt={`${WEBSITE_BRAND} on Github`}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
