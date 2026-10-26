import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Reasons, CtaBand, meta } from "@/components/site";

export const Route = createFileRoute("/why-us")({
  head: () => meta("Why Virtuoso | Virtuoso Business Consultancy", "Independent, confidential advisors combining international standards with local regulatory insight.", "/why-us"),
  component: () => (
    <>
      <PageHero eyebrow="Why Virtuoso" title="Advisors who understand the local landscape"
        text="We combine international reporting standards with deep knowledge of local statutory requirements — so you can run your business with confidence." />
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl">Trusted partners in integrity and growth</h2>
          <p className="mt-6 text-lg text-muted-foreground">Our team brings forensic rigour, technical accounting depth and practical operational know-how to every engagement — always with your long-term success in mind.</p>
        </div>
        <Reasons />
      </section>
      <CtaBand />
    </>
  ),
});
