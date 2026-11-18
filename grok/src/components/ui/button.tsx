import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export const buttonVariants = cva(
  "tap inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      tone: {
        lacquer: "bg-lacquer text-paper hover:opacity-90",
        ghost: "border border-line bg-transparent text-ink hover:border-ink",
        ghostInk: "border border-paper/30 bg-transparent text-paper hover:border-paper",
        text: "h-auto bg-transparent px-0 text-ink underline decoration-line underline-offset-4 hover:decoration-lacquer",
      },
      size: {
        md: "h-11 px-5 text-sm",
        sm: "h-10 px-4 text-sm",
      },
    },
    defaultVariants: { tone: "lacquer", size: "md" },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({ className, tone, size, asChild, type = "button", ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ tone, size }), tone === "text" && "h-auto px-0", className)}
      {...(asChild ? props : { ...props, type })}
    />
  );
}
