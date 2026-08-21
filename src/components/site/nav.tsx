import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { DESIGNER } from "@/data/collections";

const links = [
  { label: "WORK", to: "/work" },
  { label: "COLLECTIONS", to: "/collections" },
  { label: "ABOUT", to: "/about" },
  { label: "PROCESS", to: "/process" },
  { label: "CONTACT", to: "/contact" },
] as const;

export function SiteNav({ tone = "ivory" }: { tone?: "ivory" | "ink" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const base = scrolled || open ? "text-ink" : tone === "ivory" ? "text-ivory" : "text-ink";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[80] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
        scrolled
          ? "bg-paper/70 py-4 backdrop-blur-xl"
          : "bg-transparent py-7 md:py-9"
      } ${open ? "bg-paper/95 backdrop-blur-xl" : ""}`}
    >
      <div className={`mx-auto flex max-w-[1700px] items-center justify-between px-6 md:px-12 ${base}`}>
        <Link
          to="/"
          className="display text-xl tracking-[0.22em] md:text-2xl"
          data-cursor="HOME"
        >
          {DESIGNER.name}
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="eyebrow link-underline"
              activeProps={{ className: "eyebrow link-underline text-wine" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex size-11 items-center justify-center rounded-full border border-current text-[9px] tracking-[0.2em] md:hidden"
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-6 px-6 pb-12 pt-10 text-ink md:hidden">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="display text-5xl">
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
