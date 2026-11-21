import { Star } from "lucide-react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { reviews } from "@/config";

export default function Reviews() {
  return (
    <Section
      id="reviews"
      eyebrow="Reviews"
      title="Kind words from our clients"
      className="bg-[#16212f]/40"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <Reveal key={r.name} delay={i * 120}>
            <figure className="surface-card lift flex h-full flex-col p-7">
              <div
                className="text-aqua flex gap-1"
                aria-label={`${r.rating} out of 5 stars`}
              >
                {Array.from({ length: r.rating }).map((_, n) => (
                  <Star key={n} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed">
                “{r.text}”
              </blockquote>
              <figcaption className="font-display mt-6 font-semibold">
                {r.name}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}