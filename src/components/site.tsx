import { Link } from "@tanstack/react-router";
import {
  Search, FileBarChart, HandCoins, Calculator, ShieldCheck, ClipboardList,
  ArrowUpRight, Mail, Phone, MapPin, CheckCircle2,
} from "lucide-react";
import logo from "@/assets/virtuoso-logo.png";

export const services = [
  { icon: Search, title: "Forensic Accounting & Auditing", text: "Independent investigations that uncover irregularities, quantify losses and protect your organisation's integrity." },
  { icon: FileBarChart, title: "IFRS Financial Reporting", text: "Accurate, IFRS-compliant financial statements that stakeholders, lenders and regulators can trust." },
  { icon: HandCoins, title: "Debt Collection & Recovery", text: "Structured, professional recovery processes that improve cash flow while preserving client relationships." },
  { icon: Calculator, title: "Proactive Tax Planning", text: "Forward-looking tax strategies that minimise exposure and keep you ahead of regulatory change." },
  { icon: ShieldCheck, title: "NSSA & ZIMDEF Compliance", text: "End-to-end management of statutory obligations, registrations and returns — on time, every time." },
  { icon: ClipboardList, title: "Custom SOP Development", text: "Tailored Standard Operating Procedures that bring consistency, control and scalability to operations." },
];

const navLinks = [
  { to: "/services", label: "Services" },
  { to: "/approach", label: "Approach" },
  { to: "/why-us", label: "Why us" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link to="/"><img src={logo} alt="Virtuoso Business Consultancy" className="h-12 w-auto" /></Link>
        <nav className="hidden gap-8 text-sm font-medium md:flex">
          {navLinks.map((n) => (
            <Link key={n.to} to={n.to} className="text-muted-foreground transition hover:text-primary"
              activeProps={{ className: "text-primary font-semibold" }}>{n.label}</Link>
          ))}
        </nav>
        <Link to="/contact" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-accent">Book a consultation</Link>
      </div>
      <nav className="flex justify-center gap-6 border-t py-2 text-sm md:hidden">
        {navLinks.map((n) => <Link key={n.to} to={n.to} className="text-muted-foreground" activeProps={{ className: "text-primary font-semibold" }}>{n.label}</Link>)}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
        <img src={logo} alt="Virtuoso" className="h-10 w-auto" />
        <p>© {new Date().getFullYear()} Virtuoso Business Consultancy (Pvt) Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="bg-brand text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-16 md:pt-16 md:pb-20 fade-up">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-primary-foreground/75">{text}</p>
      </div>
    </section>
  );
}

export function ServicesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map(({ icon: Icon, title, text }, i) => (
        <Link
          key={title}
          to="/contact"
          className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/75 bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-elegant cursor-pointer [&_*]:cursor-pointer"
        >
          {/* Subtle ambient corner glow on hover */}
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/10" />

          {/* Accented watermark icon in the background */}
          <div className="pointer-events-none absolute -bottom-4 -right-4 text-accent/[0.09] transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-105 group-hover:text-accent/[0.20]">
            <Icon className="h-36 w-36" strokeWidth={1} />
          </div>

          <div className="relative z-10">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-display text-3xl font-light text-accent/80 transition-colors duration-300 group-hover:text-accent">
                0{i + 1}
              </span>
            </div>
            <h3 className="text-xl font-semibold tracking-tight transition-colors duration-200 group-hover:text-primary">
              {title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {text}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}


export const steps = [
  ["Diagnose", "We assess your financial position, internal controls and compliance status to pinpoint risks and opportunities."],
  ["Design", "We craft a tailored strategy, roadmap and procedures aligned with your goals and regulatory obligations."],
  ["Deliver", "We implement with precision, reporting progress transparently at every milestone."],
  ["Sustain", "We monitor, refine and keep you compliant as your organisation grows."],
];

export const reasons = [
  "Independent, objective and strictly confidential",
  "International standards, local regulatory insight",
  "Proactive — we flag risks before they become costs",
  "Practical outputs your team can actually use",
];

export function Reasons() {
  return (
    <ul className="space-y-4">
      {reasons.map((p) => (
        <li key={p} className="flex items-start gap-4 rounded-xl border bg-card p-5">
          <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
          <span className="font-medium">{p}</span>
        </li>
      ))}
    </ul>
  );
}

export function CtaBand() {
  return (
    <section className="px-6 pb-28">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-navy p-10 text-navy-foreground shadow-elegant md:flex-row md:items-center md:p-14">
        <h2 className="max-w-xl text-3xl md:text-4xl">Ready to strengthen your business <span className="text-gradient italic">together</span>?</h2>
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-sky px-7 py-3.5 font-semibold text-navy transition hover:bg-navy-foreground">
          Talk to an advisor <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

export function ContactBlock() {
  return (
    <div className="mx-auto grid max-w-7xl gap-12 overflow-hidden rounded-3xl bg-navy p-10 text-navy-foreground shadow-elegant md:p-16 lg:grid-cols-2">
      <div>
        <h2 className="text-4xl md:text-5xl">Let's talk about your <span className="text-gradient italic">goals</span>.</h2>
        <p className="mt-6 text-navy-foreground/70">Tell us about your needs and an advisor will get back to you within one business day.</p>
        <div className="mt-10 space-y-4 text-navy-foreground/85">
          <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-sky" /> info@virtuosoconsultancy.co.zw</p>
          <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-sky" /> +263 000 000 000</p>
          <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-sky" /> Harare, Zimbabwe</p>
        </div>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); alert("Thank you — we'll be in touch shortly."); }} className="space-y-4">
        {[["Full name", "text", true], ["Email address", "email", true], ["Company", "text", false]].map(([p, t, r]) => (
          <input key={p as string} required={r as boolean} type={t as string} placeholder={p as string}
            className="w-full rounded-xl border border-navy-foreground/15 bg-navy-foreground/5 px-5 py-4 placeholder:text-navy-foreground/40 focus:border-sky focus:outline-none" />
        ))}
        <textarea rows={4} placeholder="How can we help?" className="w-full rounded-xl border border-navy-foreground/15 bg-navy-foreground/5 px-5 py-4 placeholder:text-navy-foreground/40 focus:border-sky focus:outline-none" />
        <button className="w-full rounded-xl bg-sky py-4 font-semibold text-navy transition hover:bg-navy-foreground">Send enquiry</button>
      </form>
    </div>
  );
}

export function meta(title: string, description: string, path: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: path },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
