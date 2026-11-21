import { useCallback, useState } from "react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Picture from "@/components/Picture";
import Lightbox from "@/components/Lightbox";
import { gallery, galleryCategories } from "@/config";

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [index, setIndex] = useState(null);

  const items =
    active === "All" ? gallery : gallery.filter((g) => g.category === active);

  const close = useCallback(() => setIndex(null), []);

  return (
    <Section
      id="portfolio"
      eyebrow="Portfolio"
      title="Recent work"
      subtitle="Tap any picture to view it full screen."
    >
      <Reveal className="mb-10 flex flex-wrap justify-center gap-3">
        {galleryCategories.map((c) => (
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

      <div
        key={active}
        className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3"
      >
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Open ${item.title}`}
            className="swap-in group relative aspect-square overflow-hidden rounded-3xl border border-[var(--line)]"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <Picture
              src={item.src}
              alt={item.alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-left opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              <span className="font-display block text-sm font-semibold sm:text-base">
                {item.title}
              </span>
              <span className="text-dim text-xs">{item.category}</span>
            </span>
          </button>
        ))}
      </div>

      <Lightbox items={items} index={index} onClose={close} onChange={setIndex} />
    </Section>
  );
}