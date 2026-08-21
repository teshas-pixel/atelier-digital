import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { EditorialCursor } from "@/components/site/cursor";
import { ContactSection } from "@/components/site/sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ilaria Voss Studio" },
      {
        name: "description",
        content:
          "Enquiries for collaborations, commissions, styling and creative direction with the Ilaria Voss studio in Antwerp.",
      },
      { property: "og:title", content: "Contact — Ilaria Voss Studio" },
      {
        property: "og:description",
        content: "Collaborations, commissions, styling and creative direction.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="bg-ink">
      <EditorialCursor />
      <SiteNav />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
