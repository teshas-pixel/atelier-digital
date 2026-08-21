import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { EditorialCursor } from "@/components/site/cursor";
import {
  AboutSplit,
  Philosophy,
  Statement,
  Testimonial,
} from "@/components/site/sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ilaria Voss, Fashion Designer" },
      {
        name: "description",
        content:
          "Trained in Antwerp and Paris, Ilaria Voss builds couture collections through draping, material research and garment construction.",
      },
      { property: "og:title", content: "About — Ilaria Voss, Fashion Designer" },
      {
        property: "og:description",
        content:
          "Couture technique and material research from a converted printworks in Antwerp.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="bg-paper">
      <EditorialCursor />
      <SiteNav tone="ink" />
      <div className="pt-32 md:pt-40" />
      <AboutSplit />
      <Statement />
      <Philosophy />
      <Testimonial />
      <SiteFooter />
    </main>
  );
}
