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
  const isDemo = children === "Live Demo";
  return (
    <a
      href={href}
      target={href.startsWith("#") ? undefined : "_blank"}
      rel={href.startsWith("#") ? undefined : "noopener noreferrer"}
      className={
        isDemo
          ? "tap inline-flex h-10 items-center gap-2 rounded-full bg-lacquer px-4 text-sm font-medium text-paper transition-opacity hover:opacity-90"
          : "tap inline-flex h-11 items-center gap-2 text-sm"
      }
    >
      {isDemo ? <span className="size-1.5 rounded-full bg-paper" aria-hidden="true" /> : null}
      <span className={isDemo ? "" : "border-b border-current pb-px"}>{children}</span>
      {placeholder ? (
        <span className="text-xs tracking-widest text-lacquer uppercase">Placeholder</span>
      ) : null}
      <ArrowUpRight className="size-4" aria-hidden />
    </a>
  );
}
