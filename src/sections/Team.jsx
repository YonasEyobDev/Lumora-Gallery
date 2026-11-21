import { MessageCircle } from "lucide-react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Picture from "@/components/Picture";
import { shop, about, team } from "@/config";
import { wa } from "@/lib/whatsapp";

export default function Team() {
  return (
    <Section
      id="about"
      eyebrow="About us"
      title={about.title}
      subtitle={about.body}
      className="bg-[#16212f]/40"
    >
      <div className="mb-14 grid grid-cols-3 gap-3 sm:gap-6">
        {about.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100}>
            <div className="surface-card p-4 text-center sm:p-6">
              <p className="font-display text-aqua text-2xl font-bold sm:text-4xl">
                {s.value}
              </p>
              <p className="text-dim mt-1 text-xs sm:text-sm">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3 sm:gap-8">
        {team.map((p, i) => {
          const first = p.name.split(" ")[0];
          return (
            <Reveal key={p.name} delay={i * 120}>
              <div className="surface-card lift overflow-hidden">
                <Picture
                  src={p.photo}
                  alt={p.alt}
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="p-3 text-center sm:p-5">
                  <h3 className="font-display text-sm font-semibold sm:text-lg">
                    {p.name}
                  </h3>
                  <p className="text-dim text-[11px] sm:text-sm">{p.role}</p>
                  <a
                    href={wa(
                      `Hi ${shop.name}, I would like to talk to ${p.name} about a shoot.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-pill-sm mt-3 !px-3 sm:!px-4"
                  >
                    <MessageCircle className="hidden h-4 w-4 sm:block" />
                    Contact {first}
                  </a>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}