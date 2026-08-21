import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { EditorialCursor } from "@/components/site/cursor";
import { Reveal } from "@/lib/motion";
import { collections } from "@/data/collections";

export const Route = createFileRoute("/collections/")({
  head: () => ({
    meta: [
      { title: "Collections Index — Ilaria Voss" },
      {
        name: "description",
        content:
          "An index of every Ilaria Voss collection: Echoes, Salt Index, Second Skin and Black Atlas.",
      },
      { property: "og:title", content: "Collections Index — Ilaria Voss" },
      {
        property: "og:description",
        content: "Echoes, Salt Index, Second Skin and Black Atlas.",
      },
    ],
  }),
  component: CollectionsIndex,
});

function CollectionsIndex() {
  return (
    <main className="min-h-screen bg-paper">
      <EditorialCursor />
      <SiteNav tone="ink" />
      <header className="px-6 pb-10 pt-44 md:px-12 md:pt-56">
        <div className="mx-auto max-w-[1700px]">
          <Reveal variant="fade">
            <span className="eyebrow text-ink/45">Index</span>
          </Reveal>
          <Reveal variant="fade" delay={80}>
            <h1 className="display mt-6 text-[clamp(3rem,11vw,10rem)] leading-[0.85]">
              Collections
            </h1>
          </Reveal>
        </div>
      </header>

      <section className="px-6 pb-32 md:px-12">
        <ul className="mx-auto max-w-[1700px]">
          {collections.map((c) => (
            <li key={c.slug} className="border-t border-ink/12">
              <Link
                to="/collections/$slug"
                params={{ slug: c.slug }}
                data-cursor="VIEW"
                className="group grid grid-cols-12 items-center gap-4 py-8"
              >
                <span className="meta col-span-2 text-wine">{c.index}</span>
                <span className="display col-span-10 text-[clamp(2rem,6vw,4.5rem)] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-4 md:col-span-5">
                  {c.name}
                </span>
                <span className="meta col-span-6 hidden text-ink/45 md:block">
                  {c.season}
                </span>
                <span className="meta col-span-12 text-ink/40 md:hidden">{c.season}</span>
              </Link>
            </li>
          ))}
          <li className="border-t border-ink/12" />
        </ul>
      </section>
      <SiteFooter />
    </main>
  );
}
