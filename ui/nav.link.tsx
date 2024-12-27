"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children, ...props }) {
  const pathname = usePathname();
  const isCurrent = pathname === href;

  const linkClassName = isCurrent
    ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
    : "block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  return (
    <Link
      href={href}
      aria-current={isCurrent ? "page" : undefined}
      {...props}
      className={linkClassName}
    >
      {children}
    </Link>
  );
}
