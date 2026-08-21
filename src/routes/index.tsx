import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { EditorialCursor } from "@/components/site/cursor";
import {
  AboutSplit,
  CollectionsGrid,
  ContactSection,
  InMotion,
  Philosophy,
  Press,
  ProcessSection,
  Sketchbook,
  Statement,
  Testimonial,
} from "@/components/site/sections";
import { DESIGNER, heroImage } from "@/data/collections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ilaria Voss — Fashion Designer & Creative Director" },
      {
        name: "description",
        content:
          "The portfolio of Ilaria Voss: couture collections, material research and editorial fashion built between Antwerp and Paris.",
      },
      { property: "og:title", content: "Ilaria Voss — Fashion Designer & Creative Director" },
      {
        property: "og:description",
        content:
          "Couture collections, material research and editorial fashion built between Antwerp and Paris.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Home,
});

function Hero() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 500),
      setTimeout(() => setStage(2), 1200),
      setTimeout(() => setStage(3), 2100),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const ease = "cubic-bezier(0.19, 1, 0.22, 1)";

  return (
    <section className="relative min-h-screen bg-ink text-ivory">
      {/* opening black curtain */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[95] bg-ink"
        style={{
          opacity: stage >= 2 ? 0 : 1,
          transition: `opacity 900ms ${ease}`,
          visibility: stage >= 3 ? "hidden" : "visible",
        }}
      />

      <div className="grid min-h-screen grid-cols-12 items-end">
        {/* image */}
        <div className="col-span-12 row-start-1 h-[70vh] overflow-hidden md:col-span-9 md:col-start-4 md:h-screen">
          <img
            src={heroImage}
            alt="Editorial portrait from the Echoes collection"
            className="size-full object-cover"
            style={{
              clipPath: stage >= 2 ? "inset(0 0 0 0)" : "inset(100% 0 0 0)",
              transform: stage >= 2 ? "scale(1)" : "scale(1.08)",
              transition: `clip-path 1800ms ${ease}, transform 2600ms ${ease}`,
            }}
          />
        </div>

        {/* typography overlay */}
        <div className="relative z-10 col-span-12 row-start-2 px-6 pb-16 md:col-span-7 md:col-start-1 md:row-start-1 md:px-12 md:pb-24">
          <h1
            className="display text-[clamp(3rem,11vw,10.5rem)] leading-[0.85] mix-blend-difference"
            style={{
              opacity: stage >= 1 ? 1 : 0,
              transform: stage >= 1 ? "none" : "translateY(30px)",
              transition: `opacity 1600ms ${ease}, transform 1800ms ${ease}`,
            }}
          >
            {DESIGNER.name}
          </h1>

          <div
            style={{
              opacity: stage >= 3 ? 1 : 0,
              transform: stage >= 3 ? "none" : "translateY(24px)",
              transition: `opacity 1400ms ${ease}, transform 1400ms ${ease}`,
            }}
          >
            <p className="eyebrow mt-8 text-ivory/70">
              Fashion Designer &nbsp;/&nbsp; Creative Director
            </p>
            <div
              className="mt-6 h-px bg-champagne/70"
              style={{
                width: stage >= 3 ? "min(22rem, 60%)" : "0",
                transition: `width 1600ms ${ease} 300ms`,
              }}
            />
            <p className="display mt-8 max-w-xl text-2xl italic leading-snug text-ivory/85 md:text-3xl">
              "I create clothing that exists somewhere between identity, culture and
              artistic expression."
            </p>
            <Link
              to="/work"
              data-cursor="OPEN →"
              className="group mt-12 inline-flex items-center gap-4 border border-ivory/30 px-8 py-5 transition-colors duration-700 hover:border-wine hover:bg-wine"
            >
              <span className="eyebrow">Explore collections</span>
              <span className="transition-transform duration-700 group-hover:translate-x-2">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* side vertical text */}
      <div
        className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 md:block"
        style={{
          opacity: stage >= 3 ? 1 : 0,
          transition: `opacity 1600ms ${ease} 400ms`,
        }}
      >
        <span className="vertical-text eyebrow text-ivory/50">
          Fashion / Form / Culture / 2026
        </span>
      </div>
    </section>
  );
}

function Home() {
  return (
    <main className="bg-paper">
      <EditorialCursor />
      <SiteNav />
      <Hero />
      <Statement />
      <CollectionsGrid />
      <ProcessSection />
      <Sketchbook />
      <AboutSplit />
      <Philosophy />
      <InMotion />
      <Press />
      <Testimonial />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
