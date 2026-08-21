import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { EditorialCursor } from "@/components/site/cursor";
import { Parallax, Reveal } from "@/lib/motion";
import { collections } from "@/data/collections";

export const Route = createFileRoute("/collections/$slug")({
  loader: ({ params }) => {
    const collection = collections.find((c) => c.slug === params.slug);
    if (!collection) throw notFound();
    return { collection };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Collection unavailable — Ilaria Voss" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { collection: c } = loaderData;
    return {
      meta: [
        { title: `${c.name} — ${c.season} | Ilaria Voss` },
        { name: "description", content: c.concept },
        { property: "og:title", content: `${c.name} — ${c.season} | Ilaria Voss` },
        { property: "og:description", content: c.concept },
        { property: "og:image", content: c.cover },
        { name: "twitter:image", content: c.cover },
      ],
    };
  },
  notFoundComponent: MissingCollection,
  component: CollectionPage,
});

function MissingCollection() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ink text-ivory">
      <h1 className="display text-6xl">Not in the archive</h1>
      <Link to="/collections" className="eyebrow mt-8 text-champagne link-underline">
        Back to index
      </Link>
    </main>
  );
}

function CollectionPage() {
  const { collection: c } = Route.useLoaderData();
  const next = collections[(collections.findIndex((x) => x.slug === c.slug) + 1) % collections.length]!;

  return (
    <main className="bg-paper">
      <EditorialCursor />
      <SiteNav />

      {/* title + full bleed cover */}
      <header className="relative min-h-screen bg-ink text-ivory">
        <div className="absolute inset-0">
          <Reveal variant="scale" className="size-full">
            <img
              src={c.cover}
              alt={`${c.name} campaign image`}
              className="size-full object-cover opacity-70"
            />
          </Reveal>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/50" />
        <div className="relative flex min-h-screen flex-col justify-end px-6 pb-20 md:px-12 md:pb-28">
          <span className="eyebrow text-ivory/60">Collection {c.index}</span>
          <h1 className="display mt-6 text-[clamp(3.5rem,16vw,14rem)] leading-[0.82]">
            {c.name}
          </h1>
          <p className="meta mt-6 text-champagne">{c.season}</p>
        </div>
      </header>

      {/* concept */}
      <section className="px-6 py-28 md:px-12 md:py-40">
        <div className="mx-auto grid max-w-[1700px] gap-12 md:grid-cols-12">
          <Reveal variant="fade" className="md:col-span-3">
            <span className="eyebrow text-ink/45">Concept</span>
            <p className="meta mt-4 text-ink/45">{c.tags}</p>
          </Reveal>
          <Reveal variant="fade" delay={100} className="md:col-span-9">
            <p className="display text-[clamp(1.75rem,4vw,3.25rem)] leading-tight">
              {c.concept}
            </p>
          </Reveal>
        </div>
      </section>

      {/* flowing editorial gallery */}
      <section className="px-6 pb-32 md:px-12">
        <div className="mx-auto grid max-w-[1700px] grid-cols-12 gap-x-6 gap-y-16 md:gap-y-32">
          {c.gallery.map((g, i) => {
            const layout =
              g.kind === "full"
                ? "col-span-12 aspect-[16/9] md:aspect-[16/8.5]"
                : g.kind === "tall"
                  ? `col-span-12 md:col-span-5 aspect-[3/4.4] ${i % 2 ? "md:col-start-8 md:-mt-24" : "md:col-start-1"}`
                  : g.kind === "wide"
                    ? "col-span-12 md:col-span-9 md:col-start-4 aspect-[16/9]"
                    : "col-span-12 md:col-span-4 md:col-start-2 aspect-square";
            return (
              <Parallax key={g.src + i} speed={i % 2 ? 0.05 : -0.05} className={layout}>
                <Reveal variant="mask" className="size-full overflow-hidden">
                  <img
                    src={g.src}
                    alt={`${c.name} look ${i + 1}`}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                </Reveal>
              </Parallax>
            );
          })}
        </div>
      </section>

      {/* next collection */}
      <section className="border-t border-ink/12 px-6 py-24 md:px-12">
        <div className="mx-auto flex max-w-[1700px] flex-col gap-6">
          <span className="eyebrow text-ink/45">Next collection</span>
          <Link
            to="/collections/$slug"
            params={{ slug: next.slug }}
            data-cursor="VIEW"
            className="display inline-block text-[clamp(2.5rem,10vw,8rem)] leading-none transition-colors duration-700 hover:text-wine"
          >
            {next.name} →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
