import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand, steps, meta } from "@/components/site";

export const Route = createFileRoute("/approach")({
  head: () => meta("Our Approach | Virtuoso Business Consultancy", "Diagnose, design, deliver, sustain — a disciplined advisory process built around your business.", "/approach"),
  component: () => (
    <>
      <PageHero eyebrow="Our approach" title="A disciplined process, built around you"
        text="Every engagement follows a clear, proven path — so you always know where you stand and what comes next." />
      <section className="mx-auto max-w-5xl px-6 py-24">
        <ol className="space-y-6">
          {steps.map(([t, d], i) => (
            <li key={t} className="grid gap-6 rounded-2xl border bg-card p-8 transition hover:shadow-elegant md:grid-cols-[120px_1fr]">
              <div className="font-display text-6xl text-accent">0{i + 1}</div>
              <div><h2 className="text-3xl">{t}</h2><p className="mt-3 text-lg text-muted-foreground">{d}</p></div>
            </li>
          ))}
        </ol>
      </section>
      <CtaBand />
    </>
  ),
});
