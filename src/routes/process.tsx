import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { EditorialCursor } from "@/components/site/cursor";
import { ProcessSection, Sketchbook } from "@/components/site/sections";
import { Reveal } from "@/lib/motion";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — From Idea to Form | Ilaria Voss" },
      {
        name: "description",
        content:
          "Research, concept, experiment, development, final form: how an Ilaria Voss collection is built in the atelier.",
      },
      { property: "og:title", content: "Process — From Idea to Form | Ilaria Voss" },
      {
        property: "og:description",
        content: "How a collection is built, from archive research to finished garment.",
      },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <main className="bg-paper">
      <EditorialCursor />
      <SiteNav tone="ink" />
      <header className="px-6 pb-12 pt-44 md:px-12 md:pt-56">
        <div className="mx-auto max-w-[1700px]">
          <Reveal variant="fade">
            <span className="eyebrow text-ink/45">Atelier</span>
          </Reveal>
          <Reveal variant="fade" delay={80}>
            <h1 className="display mt-6 max-w-4xl text-[clamp(3rem,10vw,9rem)] leading-[0.85]">
              Process
            </h1>
          </Reveal>
        </div>
      </header>
      <ProcessSection />
      <Sketchbook />
      <SiteFooter />
    </main>
  );
}
