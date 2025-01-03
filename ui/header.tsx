import Image from "next/image";
import Link from "next/link";
import {
  WEBSITE_BRAND,
  WEBSITE_URL,
  WEBSITE_LOGO,
  NAV_URLS,
  LANGUAGES,
} from "@/utils/constants";
import NavLink from "./nav.link";

export default function Header() {
  return (
    <header className="border-b-2 border-s-amber-800">
      <nav className="mx-auto w-full max-w-screen-xl bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href={`${WEBSITE_URL}`}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              width={24}
              height={24}
              src={WEBSITE_LOGO}
              className="h-8"
              alt="FlowBite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {WEBSITE_BRAND}
            </span>
          </Link>
          <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              data-dropdown-toggle="language-dropdown-menu"
              className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <Image
                width={15}
                height={15}
                src="/lang-en.svg"
                alt="FlowBite Logo"
              />
              &nbsp; English (US)
            </button>

            <div
              className="hidden z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
              id="language-dropdown-menu"
            >
              <ul className="py-2 font-medium" role="none">
                <li>
                  {LANGUAGES.map((lang) => (
                    <a
                      key={lang.locale}
                      href={`/${lang.locale}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      <div className="inline-flex items-center">
                        <Image
                          width={24}
                          height={24}
                          src={lang.flag}
                          alt={lang.label}
                          className="rounded-full mr-2"
                        />
                        {lang.label}
                      </div>
                    </a>
                  ))}
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-language"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-language"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-language"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {NAV_URLS.map((item, idx) => (
                <li key={idx}>
                  <NavLink href={item.url} title={item.title}>
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
