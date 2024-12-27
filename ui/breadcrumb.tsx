import Link from "next/link";
import React from "react";

interface BreadcrumbItem {
  href?: string; //Optional to allow for non-link elements
  element: React.ReactNode; //Allows other JSX elements besides <Link>
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="breadcrumb" className="max-w-screen-xl mx-auto p-3 px-0">
      <ol className="list-none p-0 inline-flex">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <Link href={item.href} className="text-gray-600 hover:underline">
                {item.element}
              </Link>
            ) : typeof item.element === "string" ? (
              item.element
            ) : (
              item.element
            )}
            {index < items.length - 1 && (
              <span className="mx-2">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
