import { createFileRoute } from "@tanstack/react-router";
import { PageHero, ContactBlock, meta } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact | Virtuoso Business Consultancy", "Get in touch with Virtuoso Business Consultancy to book a consultation.", "/contact"),
  component: () => (
    <>
      <PageHero eyebrow="Contact" title="Book a consultation" text="We'd love to hear about your business and how we can help." />
      <section className="px-6 py-24"><ContactBlock /></section>
    </>
  ),
});
