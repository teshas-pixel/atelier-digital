import { Link } from "@tanstack/react-router";
import { DESIGNER } from "@/data/collections";

export function SiteFooter() {
  return (
    <footer className="bg-ink px-6 pb-10 pt-20 text-ivory md:px-12">
      <div className="mx-auto grid max-w-[1700px] gap-12 border-t border-ivory/15 pt-12 md:grid-cols-3">
        <div>
          <p className="display text-3xl tracking-[0.18em]">{DESIGNER.name}</p>
          <p className="meta mt-3 text-ivory/50">{DESIGNER.role}</p>
        </div>
        <div className="flex gap-14">
          <ul className="space-y-3">
            <li>
              <Link to="/work" className="meta link-underline text-ivory/70">
                Work
              </Link>
            </li>
            <li>
              <Link to="/about" className="meta link-underline text-ivory/70">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="meta link-underline text-ivory/70">
                Contact
              </Link>
            </li>
          </ul>
          <ul className="space-y-3">
            {["Instagram", "Pinterest", "LinkedIn"].map((s) => (
              <li key={s}>
                <a href="#" className="meta link-underline text-ivory/70">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-end justify-start md:justify-end">
          <p className="meta text-ivory/40">© 2026 {DESIGNER.name}</p>
        </div>
      </div>
    </footer>
  );
}
