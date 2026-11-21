import { Camera, Zap, Heart, BadgeCheck } from "lucide-react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { perks } from "@/config";

const icons = { Camera, Zap, Heart, BadgeCheck };

export default function WhyUs() {
  return (
    <Section
      id="why"
      eyebrow="Why Lumora"
      title="Why people choose us"
      subtitle="Great pictures are only half of it. The experience matters too."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {perks.map((p, i) => {
          const Icon = icons[p.icon] || Camera;
          return (
            <Reveal key={p.title} delay={i * 120}>
              <div className="surface-card lift h-full p-7">
                <span className="icon-bubble">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-display mt-5 text-lg font-semibold">
                  {p.title}
                </h3>
                <p className="text-dim mt-2 text-sm leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}