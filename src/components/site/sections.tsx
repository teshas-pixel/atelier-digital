import { Link } from "@tanstack/react-router";
import { CountUp, Parallax, Reveal, useInView } from "@/lib/motion";
import {
  collections,
  DESIGNER,
  portraitImage,
  press,
  processSteps,
  runwayImage,
  sketchbook,
  studioImage,
} from "@/data/collections";

/* ---------------- shared bits ---------------- */

export function SectionHead({
  eyebrow,
  title,
  caption,
  tone = "ink",
}: {
  eyebrow?: string;
  title: string;
  caption?: string;
  tone?: "ink" | "ivory";
}) {
  const dim = tone === "ink" ? "text-ink/50" : "text-ivory/50";
  return (
    <div className="flex flex-col gap-5">
      {eyebrow && (
        <Reveal variant="fade">
          <span className={`eyebrow ${dim}`}>{eyebrow}</span>
        </Reveal>
      )}
      <Reveal variant="fade" delay={80}>
        <h2 className="display text-[clamp(2.75rem,8vw,7rem)]">{title}</h2>
      </Reveal>
      {caption && (
        <Reveal variant="fade" delay={160}>
          <p className={`max-w-md text-sm leading-relaxed ${dim}`}>{caption}</p>
        </Reveal>
      )}
      <Reveal variant="line" className="h-px w-full bg-current opacity-15" delay={200} />
    </div>
  );
}

export function Statement() {
  return (
    <section className="relative overflow-hidden bg-paper px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto grid max-w-[1700px] gap-16 md:grid-cols-12">
        <Parallax speed={-0.06} className="md:col-span-8">
          <Reveal variant="fade">
            <h2 className="display text-[clamp(2.5rem,7.5vw,6.5rem)]">
              I don't design clothes.
              <br />
              <span className="italic text-wine">I design a language of form.</span>
            </h2>
          </Reveal>
        </Parallax>

        <div className="md:col-span-4 md:pt-24">
          <Parallax speed={0.08}>
            <Reveal variant="mask" className="aspect-[3/4] overflow-hidden">
              <img
                src={studioImage}
                alt="The designer at work in the atelier"
                loading="lazy"
                className="size-full object-cover grayscale"
              />
            </Reveal>
          </Parallax>
          <Reveal variant="fade" delay={120}>
            <p className="mt-8 text-sm leading-loose text-ink/60">
              Trained between Antwerp and Paris, {DESIGNER.name.split(" ")[0]} builds
              collections the way a sculptor builds a maquette — by hand, in the round,
              testing how a shape behaves when a body moves inside it. Each season begins
              in an archive and ends on a runway.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-28 grid max-w-[1700px] grid-cols-2 gap-10 border-t border-ink/10 pt-10 md:grid-cols-4">
        {[
          { n: 12, s: "", l: "Years in practice" },
          { n: 9, s: "", l: "Runway collections" },
          { n: 24, s: "", l: "Editorials" },
          { n: 6, s: "", l: "Collaborations" },
        ].map((stat, i) => (
          <Reveal key={stat.l} variant="fade" delay={i * 90}>
            <p className="display text-5xl md:text-6xl">
              <CountUp to={stat.n} suffix={stat.s} />
            </p>
            <p className="meta mt-3 text-ink/45">{stat.l}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- collections ---------------- */

const frames = [
  "md:col-span-5 md:col-start-1 aspect-[3/4.6]",
  "md:col-span-6 md:col-start-7 md:mt-40 aspect-[4/2.7]",
  "md:col-span-4 md:col-start-3 md:-mt-24 aspect-[3/3.4]",
  "md:col-span-8 md:col-start-5 aspect-[16/8]",
];

export function CollectionCard({
  c,
  className,
}: {
  c: (typeof collections)[number];
  className?: string | undefined;
}) {
  return (
    <Link
      to="/collections/$slug"
      params={{ slug: c.slug }}
      data-cursor="VIEW"
      className={`group relative block overflow-hidden ${className ?? ""}`}
    >
      <Reveal variant="mask" className="size-full">
        <img
          src={c.cover}
          alt={`${c.name} — ${c.season}`}
          loading="lazy"
          className="size-full object-cover transition-transform duration-[2200ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.07]"
        />
      </Reveal>
      <div className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/45" />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <div className="translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-2">
          <p className="eyebrow text-ivory/70 drop-shadow">
            {c.index} / {c.name}
          </p>
          <p className="display mt-2 text-4xl text-ivory drop-shadow md:text-5xl">
            {c.season}
          </p>
          <p className="meta mt-2 text-ivory/60">{c.tags}</p>
          <p className="eyebrow mt-5 max-h-0 overflow-hidden text-ivory opacity-0 transition-all duration-700 group-hover:max-h-10 group-hover:opacity-100">
            View collection →
          </p>
        </div>
      </div>
    </Link>
  );
}

export function CollectionsGrid() {
  return (
    <section className="bg-paper px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1700px]">
        <SectionHead
          eyebrow="Archive"
          title="Selected Collections"
          caption="A study of form, material, movement and identity."
        />

        {/* mobile: horizontal editorial scroll */}
        <div className="-mx-6 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:hidden">
          {collections.map((c) => (
            <CollectionCard
              key={c.slug}
              c={c}
              className="aspect-[3/4.2] w-[78vw] shrink-0 snap-center"
            />
          ))}
        </div>

        {/* desktop: asymmetric overlapping grid */}
        <div className="mt-24 hidden grid-cols-12 gap-x-6 gap-y-24 md:grid">
          {collections.map((c, i) => (
            <CollectionCard key={c.slug} c={c} className={frames[i % frames.length]} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- process ---------------- */

export function ProcessSection() {
  return (
    <section className="bg-ivory px-6 py-28 text-ink md:px-12 md:py-40">
      <div className="mx-auto max-w-[1700px]">
        <SectionHead eyebrow="Method" title="From idea to form" />
        <div className="mt-20 space-y-0">
          {processSteps.map((s, i) => (
            <div
              key={s.n}
              className="group grid grid-cols-12 items-center gap-6 border-t border-ink/10 py-10"
            >
              <Reveal variant="fade" className="col-span-12 md:col-span-1">
                <span className="meta text-wine">{s.n}</span>
              </Reveal>
              <Reveal variant="drift" delay={60} className="col-span-12 md:col-span-5">
                <h3 className="display text-[clamp(2rem,5vw,4rem)]">{s.title}</h3>
              </Reveal>
              <Reveal variant="fade" delay={120} className="col-span-12 md:col-span-3">
                <p className="text-sm leading-relaxed text-ink/55">{s.body}</p>
              </Reveal>
              <Parallax speed={i % 2 ? 0.05 : -0.05} className="col-span-12 md:col-span-3">
                <Reveal variant="mask" className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={`${s.title} stage of the design process`}
                    loading="lazy"
                    className="size-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
                  />
                </Reveal>
              </Parallax>
            </div>
          ))}
          <div className="border-t border-ink/10" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- sketchbook ---------------- */

const tilts = [-3, 2, -1.5, 4, -2.5, 1.5, 3, -4];
const offsets = [
  "md:mt-0",
  "md:mt-24",
  "md:-mt-10",
  "md:mt-16",
  "md:mt-6",
  "md:mt-32",
  "md:-mt-6",
  "md:mt-20",
];

export function Sketchbook() {
  return (
    <section className="bg-paper px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1700px]">
        <SectionHead
          eyebrow="Unedited"
          title="The Sketchbook"
          caption="Loose pages: croquis, swatches, notes and the references that never made it to the runway."
        />
        <div className="mt-20 grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8">
          {sketchbook.map((s, i) => (
            <Reveal
              key={s.label}
              variant="fade"
              delay={(i % 4) * 90}
              className={offsets[i % offsets.length]}
            >
              <figure
                data-cursor="LOOK"
                className="group transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] hover:!rotate-0 hover:-translate-y-3"
                style={{ transform: `rotate(${tilts[i % tilts.length]}deg)` }}
              >
                <div className="overflow-hidden bg-ivory p-2 shadow-[0_10px_40px_-25px_rgba(0,0,0,0.6)] transition-shadow duration-700 group-hover:shadow-[0_35px_60px_-30px_rgba(0,0,0,0.55)]">
                  <img
                    src={s.src}
                    alt={s.label}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
                  />
                </div>
                <figcaption className="meta mt-3 text-ink/40">{s.label}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- about ---------------- */

export function AboutSplit() {
  return (
    <section className="grid bg-ink text-ivory md:grid-cols-2">
      <div className="relative min-h-[70vh] overflow-hidden">
        <Reveal variant="scale" className="size-full">
          <img
            src={portraitImage}
            alt={`Portrait of ${DESIGNER.name}`}
            loading="lazy"
            className="size-full object-cover grayscale"
          />
        </Reveal>
      </div>
      <div className="flex flex-col justify-center px-6 py-24 md:px-16">
        <Reveal variant="fade">
          <span className="eyebrow text-ivory/45">About the designer</span>
        </Reveal>
        <Reveal variant="fade" delay={80}>
          <h2 className="display mt-6 text-[clamp(2.5rem,6vw,5rem)]">{DESIGNER.name}</h2>
        </Reveal>
        <Reveal variant="fade" delay={140}>
          <p className="mt-8 max-w-xl text-sm leading-loose text-ivory/60">
            Raised between two coastlines and trained at the Royal Academy, she works from
            a converted printworks in {DESIGNER.city}. Her practice sits between couture
            technique and material research: garments are draped first, drawn second, and
            always tested in motion. Clothing, to her, is a record of the person wearing
            it.
          </p>
        </Reveal>
        <dl className="mt-12 space-y-4">
          {[
            ["Based in", DESIGNER.city],
            ["Specialization", "Couture construction & material research"],
            ["Experience", "12 years"],
            ["Focus", "Couture / Womenswear / Sustainable fashion"],
          ].map(([k, v], i) => (
            <Reveal key={k} variant="fade" delay={i * 70}>
              <div className="flex justify-between gap-8 border-b border-ivory/12 pb-4">
                <dt className="meta text-ivory/40">{k}</dt>
                <dd className="text-right text-sm text-ivory/80">{v}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
        <Reveal variant="fade" delay={200}>
          <p
            className="display mt-12 text-5xl italic text-champagne"
            style={{ transform: "rotate(-4deg)" }}
          >
            Ilaria
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- philosophy ---------------- */

export function Philosophy() {
  return (
    <section className="bg-ink px-6 py-32 text-ivory md:px-12 md:py-52">
      <div className="mx-auto max-w-[1700px]">
        <Reveal variant="fade">
          <h2 className="display max-w-5xl text-[clamp(2.75rem,8vw,7.5rem)]">
            Fashion is memory, movement and identity.
          </h2>
        </Reveal>
        <div className="mt-24 grid gap-10 md:grid-cols-3">
          {["FORM", "TEXTURE", "IDENTITY"].map((w, i) => (
            <Reveal key={w} variant="drift" delay={i * 260}>
              <p className="display border-t border-ivory/15 pt-6 text-[clamp(2.5rem,6vw,5rem)] text-ivory/90">
                {w}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- in motion ---------------- */

export function InMotion() {
  return (
    <section className="relative h-[85vh] overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src={runwayImage}
          alt="Runway presentation, 2026"
          loading="lazy"
          className="ken-burns size-full object-cover opacity-80"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/40" />
      <div className="relative flex h-full flex-col justify-between px-6 py-16 text-ivory md:px-12">
        <span className="eyebrow text-ivory/60">Runway / 2026</span>
        <div>
          <Reveal variant="fade">
            <h2 className="display text-[clamp(3.5rem,14vw,12rem)] leading-none">
              In Motion
            </h2>
          </Reveal>
          <Reveal variant="fade" delay={140}>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/60">
              Fourteen looks, one continuous walk, filmed in a single take at the Antwerp
              printworks.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- press ---------------- */

export function Press() {
  return (
    <section className="bg-paper px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1700px]">
        <SectionHead eyebrow="Recognition" title="Selected press & collaborations" />
        <ul className="mt-16">
          {press.map((p, i) => (
            <li key={p} className="border-b border-ink/10">
              <Reveal variant="drift" delay={(i % 3) * 60}>
                <span className="display block py-5 text-[clamp(1.75rem,4.5vw,3.5rem)] text-ink/80 transition-colors duration-500 hover:text-wine">
                  {p}
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- testimonial ---------------- */

export function Testimonial() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const quote =
    "The collection feels less like clothing and more like a visual language.";
  const words = quote.split(" ");

  return (
    <section className="bg-wine px-6 py-32 text-ivory md:px-12 md:py-48">
      <div ref={ref} className="mx-auto max-w-5xl">
        <blockquote className="display text-[clamp(2rem,6vw,5rem)]">
          {words.map((w, i) => (
            <span
              key={`${w}-${i}`}
              className="inline-block transition-all duration-1000 ease-out"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(0.4em)",
                transitionDelay: `${i * 70}ms`,
              }}
            >
              {w}&nbsp;
            </span>
          ))}
        </blockquote>
        <p className="meta mt-12 text-ivory/60">— Creative Director, Maison Louvre</p>
      </div>
    </section>
  );
}

/* ---------------- contact ---------------- */

export function ContactSection() {
  return (
    <section className="flex min-h-screen flex-col justify-center bg-ink px-6 py-32 text-ivory md:px-12">
      <div className="mx-auto w-full max-w-[1700px]">
        <Reveal variant="fade">
          <h2 className="display text-[clamp(3rem,11vw,10rem)] leading-[0.9]">
            Let's create
            <br />
            something
            <br />
            <span className="italic text-champagne">unforgettable.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <Reveal variant="fade" delay={120}>
            <p className="max-w-md text-sm leading-loose text-ivory/55">
              For collaborations, commissions, styling, creative direction and fashion
              projects.
            </p>
            <a
              href={`mailto:${DESIGNER.email}`}
              data-cursor="OPEN →"
              className="group mt-10 inline-flex items-center gap-4 border border-ivory/25 px-8 py-5 transition-colors duration-700 hover:border-wine hover:bg-wine"
            >
              <span className="eyebrow">Start a conversation</span>
              <span className="transition-transform duration-700 group-hover:translate-x-2">
                →
              </span>
            </a>
          </Reveal>
          <Reveal variant="fade" delay={220}>
            <ul className="space-y-5 md:text-right">
              <li>
                <a
                  href={`mailto:${DESIGNER.email}`}
                  className="link-underline text-lg text-ivory/80"
                >
                  {DESIGNER.email}
                </a>
              </li>
              <li>
                <a href="#" className="link-underline text-lg text-ivory/80">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="link-underline text-lg text-ivory/80">
                  LinkedIn
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
