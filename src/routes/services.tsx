import { createFileRoute } from "@tanstack/react-router";
import { PageHero, ServicesGrid, CtaBand, meta } from "@/components/site";

export const Route = createFileRoute("/services")({
  head: () => meta("Services | Virtuoso Business Consultancy", "Forensic accounting, IFRS reporting, debt recovery, tax planning, NSSA & ZIMDEF compliance and custom SOPs.", "/services"),
  component: () => (
    <>
      <PageHero eyebrow="Services" title="Expertise across finance, operations and compliance"
        text="From the books to the boardroom, we deliver rigorous, practical advice across every area that underpins corporate health." />
      <section className="mx-auto max-w-7xl px-6 py-24"><ServicesGrid /></section>
      <CtaBand />
    </>
  ),
});
