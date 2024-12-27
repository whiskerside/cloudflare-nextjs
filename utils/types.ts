/* eslint-disable no-unused-vars */
export type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export type AlertProps = {
  kind: string | "info";
  message: string;
};

export type BadgeProps = {
  kind: string | "default";
  text: string;
};
