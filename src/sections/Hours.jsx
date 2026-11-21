import { useState } from "react";
import { MapPin, ExternalLink } from "lucide-react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import OpenPill from "@/components/OpenPill";
import { shop, hours } from "@/config";
import { getTodayStatus } from "@/lib/hours";

export default function Hours() {
  const [status] = useState(getTodayStatus);

  return (
    <Section
      id="hours"
      eyebrow="Visit us"
      title="Hours and location"
      subtitle="Shoots outside these hours are possible by appointment."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <ul className="surface-card divide-y divide-[var(--line)] p-3">
            {hours.map((h) => {
              const today = h.day === status.day;
              return (
                <li
                  key={h.day}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 ${
                    today ? "bg-[rgba(61,214,198,0.1)] font-semibold" : ""
                  }`}
                >
                  <span className={today ? "text-aqua" : ""}>
                    {h.day}
                    {today && " (today)"}
                  </span>
                  <span className={today ? "" : "text-dim"}>
                    {h.open ? `${h.open} - ${h.close}` : "Closed"}
                  </span>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={150}>
          <div className="surface-card flex h-full flex-col justify-center gap-6 p-8">
            <OpenPill />
            <div className="flex items-start gap-3">
              <span className="icon-bubble shrink-0">
                <MapPin className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">
                  {shop.name}
                </h3>
                <p className="text-dim">{shop.city}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={shop.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill"
              >
                Open in Maps
              </a>
              <a
                href={shop.social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                {shop.social.label} <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}