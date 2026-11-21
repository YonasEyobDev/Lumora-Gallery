import { Aperture } from "lucide-react";

export default function Marquee({ items }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee py-4" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span
            key={i}
            className="font-display text-dim flex items-center gap-6 px-6 text-lg font-semibold uppercase tracking-widest"
          >
            {item}
            <Aperture className="text-aqua h-5 w-5" />
          </span>
        ))}
      </div>
    </div>
  );
}