import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { ServicesGrid, Reasons, ContactBlock, steps, meta } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => meta(
    "Virtuoso Business Consultancy | Forensic, IFRS & Compliance Advisory",
    "Forensic accounting, IFRS reporting, debt recovery, tax planning, NSSA & ZIMDEF compliance and SOP development.",
    "/",
  ),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <img src={hero} alt="" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/30" />
        <div className="relative mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-14 md:pb-24">
          <div className="max-w-3xl fade-up">
            <p className="mb-4 inline-flex rounded-full border border-sky/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky">
              Financial · Operational · Statutory
            </p>
            <h1 className="text-5xl leading-[1.05] md:text-7xl">
              Clarity in your numbers. <span className="text-gradient italic">Integrity</span> in your growth.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-navy-foreground/75">
              Virtuoso Business Consultancy is a professional advisory firm helping organisations master financial management, operational strategy and statutory compliance.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-sky px-7 py-3.5 font-semibold text-navy transition hover:bg-navy-foreground">
                Explore services <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="rounded-full border border-navy-foreground/30 px-7 py-3.5 font-semibold transition hover:border-sky hover:text-sky">Talk to an advisor</Link>
            </div>
          </div>
        </div>
        <div className="relative border-t border-navy-foreground/10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
            {[["IFRS", "Compliant reporting"], ["6", "Core service lines"], ["NSSA", "& ZIMDEF experts"], ["100%", "Confidential"]].map(([a, b]) => (
              <div key={b}><div className="font-display text-3xl text-sky">{a}</div><div className="text-sm text-navy-foreground/60">{b}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">What we do</p>
            <h2 className="mt-3 max-w-xl text-4xl md:text-5xl">Expertise that protects and propels your business</h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-accent hover:text-primary">
            All services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <ServicesGrid />
      </section>

      <section className="bg-brand text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky">Our approach</p>
              <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">A disciplined process, built around you</h2>
            </div>
            <Link to="/approach" className="inline-flex items-center gap-2 font-semibold text-sky hover:text-primary-foreground">
              See our approach <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-4">
            {steps.map(([t], i) => (
              <div key={t} className="border-t border-primary-foreground/25 pt-6">
                <div className="font-display text-5xl text-sky">0{i + 1}</div>
                <h3 className="mt-4 text-2xl">{t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Why Virtuoso</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Advisors who understand the local landscape</h2>
          <Link to="/why-us" className="mt-8 inline-flex items-center gap-2 font-semibold text-accent hover:text-primary">
            Why clients choose us <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <Reasons />
      </section>

      <section className="px-6 pb-28"><ContactBlock /></section>
    </>
  );
}
