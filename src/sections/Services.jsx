import { useState } from "react";
import { MessageCircle } from "lucide-react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { shop, services } from "@/config";
import { wa } from "@/lib/whatsapp";
import { formatPrice } from "@/lib/format";

const categories = ["All", ...services.map((g) => g.category)];
const allItems = services.flatMap((g) =>
  g.items.map((item) => ({ ...item, category: g.category }))
);

export default function Services() {
  const [active, setActive] = useState("All");
  const items =
    active === "All" ? allItems : allItems.filter((i) => i.category === active);

  return (
    <Section
      id="services"
      eyebrow="Packages"
      title="Photo and video packages"
      subtitle="Clear starting prices. Tap a package to chat with us on WhatsApp."
      className="bg-[#16212f]/40"
    >
      <Reveal className="mb-10 flex flex-wrap justify-center gap-3">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={`tab-pill ${active === c ? "is-active" : ""}`}
          >
            {c}
          </button>
        ))}
      </Reveal>

      <div key={active} className="swap-in grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.name} className="surface-card lift flex flex-col p-7">
            <Badge
              variant="outline"
              className="text-aqua w-fit border-[var(--line)] bg-transparent"
            >
              {item.category}
            </Badge>
            <h3 className="u-group font-display mt-4 text-xl font-semibold">
              <span className="u-hover">{item.name}</span>
            </h3>
            <p className="text-dim mt-2 flex-1 text-sm leading-relaxed">
              {item.desc}
            </p>
            <div className="mt-6 flex items-center justify-between gap-3">
              <span className="font-display text-aqua text-lg font-bold">
                {formatPrice(item)}
              </span>
              <a
                href={wa(
                  `Hi ${shop.name}, I am interested in "${item.name}". Can you share availability and details?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-sm"
              >
                <MessageCircle className="h-4 w-4" />
                {item.price == null ? "Get a quote" : "Book"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}