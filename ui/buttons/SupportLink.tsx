import type { AnchorHTMLAttributes, ReactNode } from "react";

export const SUPPORT_URL = "https://buymeacoffee.com/randalhernp";

type SupportLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children?: ReactNode;
};

export default function SupportLink({
  children = "Buy me a coffee",
  ...props
}: SupportLinkProps) {
  return (
    <a
      href={SUPPORT_URL}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
