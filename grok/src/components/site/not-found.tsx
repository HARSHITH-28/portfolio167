import { Link } from "@tanstack/react-router";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-start justify-center bg-paper px-6 pt-16">
      <p className="text-xs tracking-widest text-lacquer uppercase">Missing</p>
      <h1 className="mt-3 text-5xl">That page isn’t on this site.</h1>
      <p className="mt-4 max-w-md text-muted">The link may be old. The work itself is still on the front page.</p>
      <Link to="/" className={cn(buttonVariants({ tone: "lacquer" }), "mt-8")}>
        Back home
      </Link>
    </main>
  );
}
