import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Picture from "@/components/Picture";

export default function Lightbox({ items, index, onClose, onChange }) {
  const open = index !== null && index !== undefined;

  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % items.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + items.length) % items.length);
    };

    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, index, items.length, onClose, onChange]);

  if (!open) return null;

  const item = items[index];
  const go = (e, next) => {
    e.stopPropagation();
    onChange((next + items.length) % items.length);
  };

  return (
    <div
      className="lightbox fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <button
        type="button"
        onClick={onClose}
        className="btn-ghost absolute right-4 top-4 !p-3"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={(e) => go(e, index - 1)}
        className="btn-ghost absolute left-3 top-1/2 -translate-y-1/2 !p-3"
        aria-label="Previous"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <figure className="max-h-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
        <Picture
          src={item.src}
          alt={item.alt}
          loading="eager"
          className="max-h-[78vh] w-auto rounded-2xl object-contain"
        />
        <figcaption className="mt-4 text-center">
          <p className="font-display text-lg font-semibold">{item.title}</p>
          <p className="text-dim text-sm">
            {item.category} · {index + 1} / {items.length}
          </p>
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={(e) => go(e, index + 1)}
        className="btn-ghost absolute right-3 top-1/2 -translate-y-1/2 !p-3"
        aria-label="Next"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}