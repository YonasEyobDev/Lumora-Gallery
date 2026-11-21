import { ChevronDown } from "lucide-react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { faqs } from "@/config";

export default function FAQ() {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Questions we hear a lot"
      className="bg-[#16212f]/40"
    >
      <div className="mx-auto max-w-3xl space-y-4">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 80}>
            <details className="faq surface-card px-6 py-5">
              <summary className="font-display flex items-center justify-between gap-4 font-semibold">
                {f.q}
                <ChevronDown className="chev text-aqua h-5 w-5 shrink-0" />
              </summary>
              <p className="text-dim mt-3 leading-relaxed">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}