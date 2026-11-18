import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/cn";

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#studio", label: "Studio" },
  { href: "#toolkit", label: "Toolkit" },
  { href: "#path", label: "Path" },
  { href: "#contact", label: "Note" },
];

export function Chrome({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#content" className="skip">
        Skip to content
      </a>
      <Progress />
      <Nav />
      <div id="content">{children}</div>
      <Footer />
    </>
  );
}

function Progress() {
  const bar = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = bar.current;
    if (!node) return;
    let frame = 0;
    const paint = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      const progress = max > 0 ? root.scrollTop / max : 0;
      node.style.transform = `scaleX(${progress})`;
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(paint);
    };
    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <span className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5" aria-hidden>
      <span ref={bar} className="block h-full origin-left scale-x-0 bg-lacquer" />
    </span>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-paper/10 bg-ink/90 text-paper backdrop-blur-md">
      <div className="relative z-50 mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="font-display text-xl" onClick={() => setOpen(false)}>
          Ranjitha S
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Sections">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="nav-link text-sm">
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="tap grid size-11 place-items-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      <div
        id="mobile-nav"
        inert={!open}
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-ink px-6 pt-24 transition-opacity duration-200 md:hidden",
          open ? "visible opacity-100" : "invisible pointer-events-none opacity-0",
        )}
      >
        <nav className="grid gap-2" aria-label="Sections">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-paper/15 py-4 font-display text-4xl"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>
          {profile.degree} · {profile.location}
        </p>
      </div>
    </footer>
  );
}
