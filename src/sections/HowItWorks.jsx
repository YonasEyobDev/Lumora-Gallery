import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { steps } from "@/config";

export default function HowItWorks() {
  return (
    <Section
      id="process"
      eyebrow="Booking process"
      title="How it works"
      subtitle="Four simple steps from first message to finished photos."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 120}>
            <div className="surface-card lift h-full p-7">
              <span className="icon-bubble font-display text-lg font-bold">
                {i + 1}
              </span>
              <h3 className="font-display mt-5 text-lg font-semibold">
                {s.title}
              </h3>
              <p className="text-dim mt-2 text-sm leading-relaxed">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}