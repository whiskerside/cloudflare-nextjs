import { BadgeProps } from "@/utils/types";

export default function Badge({ kind, text }: BadgeProps) {
  const kinds: { [key: string]: string } = {
    pink: "inline-block bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-1 rounded dark:bg-pink-900 dark:text-pink-300",
    purple:
      "inline-block bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-1 rounded dark:bg-purple-900 dark:text-purple-300",
    indigo:
      "inline-block bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-1 rounded dark:bg-indigo-900 dark:text-indigo-300",
    yellow:
      "inline-block bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-1 rounded dark:bg-yellow-900 dark:text-yellow-300",
    green:
      "inline-block bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-1 rounded dark:bg-green-900 dark:text-green-300",
    red: "inline-block bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-1 rounded dark:bg-red-900 dark:text-red-300",
    dark: "inline-block bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-gray-300",
    default:
      "bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-1 rounded dark:bg-blue-900 dark:text-blue-300",
  };

  return <span className={kinds[kind]}>{text}</span>;
}
