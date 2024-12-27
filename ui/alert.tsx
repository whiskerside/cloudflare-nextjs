import { AlertProps } from "@/utils/types";

export default function Alert({ kind, message }: AlertProps) {
  const status: { [key: string]: string } = {
    info: "p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400",
    danger:
      "p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",
    success:
      "p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400",
    warning:
      "p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300",
    default:
      "p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300",
  };

  return (
    <section className="flex flex-col">
      <div className={status[kind]} role="alert">
        {message}
      </div>
    </section>
  );
}
