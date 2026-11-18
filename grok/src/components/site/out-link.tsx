import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function OutLink({
  href,
  children,
  placeholder = false,
}: {
  href: string;
  children: ReactNode;
  placeholder?: boolean;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="tap inline-flex h-11 items-center gap-2 text-sm">
      <span className="border-b border-current pb-px">{children}</span>
      {placeholder ? (
        <span className="text-xs tracking-widest text-lacquer uppercase">Placeholder</span>
      ) : null}
      <ArrowUpRight className="size-4" aria-hidden />
    </a>
  );
}
