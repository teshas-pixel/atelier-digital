import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { EditorialCursor } from "@/components/site/cursor";
import { CollectionsGrid, InMotion, Press } from "@/components/site/sections";
import { Reveal } from "@/lib/motion";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Ilaria Voss" },
      {
        name: "description",
        content:
          "Selected runway, couture and material-research collections by fashion designer Ilaria Voss.",
      },
      { property: "og:title", content: "Work — Ilaria Voss" },
      {
        property: "og:description",
        content: "Selected runway, couture and material-research collections.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <main className="bg-paper">
      <EditorialCursor />
      <SiteNav tone="ink" />
      <header className="px-6 pb-16 pt-44 md:px-12 md:pb-24 md:pt-56">
        <div className="mx-auto max-w-[1700px]">
          <Reveal variant="fade">
            <span className="eyebrow text-ink/45">2019 — 2026</span>
          </Reveal>
          <Reveal variant="fade" delay={80}>
            <h1 className="display mt-6 text-[clamp(3rem,12vw,11rem)] leading-[0.85]">
              Work
            </h1>
          </Reveal>
        </div>
      </header>
      <CollectionsGrid />
      <InMotion />
      <Press />
      <SiteFooter />
    </main>
  );
}
