import { MessageCircle } from "lucide-react";
import Container from "@/components/Container";
import OpenPill from "@/components/OpenPill";
import Picture from "@/components/Picture";
import { shop, about, gallery } from "@/config";
import { wa } from "@/lib/whatsapp";

const frame =
  "absolute rounded-3xl border border-[var(--line)] object-cover shadow-2xl";

export default function Hero() {
  const message = `Hi ${shop.name}, I would like to book a shoot.`;

  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px circle at 15% 20%, rgba(124,92,255,0.22), transparent 60%), radial-gradient(500px circle at 85% 70%, rgba(61,214,198,0.18), transparent 60%)",
        }}
      />

      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <div className="rise" style={{ "--d": "0ms" }}>
            <OpenPill />
          </div>
          <p
            className="rise text-aqua mt-6 text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ "--d": "120ms" }}
          >
            {shop.type} · {shop.city}
          </p>
          <h1
            className="rise font-display mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
            style={{ "--d": "240ms" }}
          >
            {shop.tagline}
          </h1>
          <p
            className="rise text-dim mt-5 max-w-lg text-lg"
            style={{ "--d": "360ms" }}
          >
            {shop.heroLine}
          </p>

          <div
            className="rise mt-8 flex flex-wrap gap-4"
            style={{ "--d": "480ms" }}
          >
            <a
              href={wa(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill"
            >
              <MessageCircle className="h-5 w-5" /> Book on WhatsApp
            </a>
            <a href="#portfolio" className="btn-ghost">
              View portfolio
            </a>
          </div>

          <dl
            className="rise mt-10 grid max-w-md grid-cols-3 gap-4"
            style={{ "--d": "600ms" }}
          >
            {about.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-aqua text-2xl font-bold sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="text-dim text-xs sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className="rise relative mx-auto h-[360px] w-full max-w-md sm:h-[440px]"
          style={{ "--d": "400ms" }}
        >
          <Picture
            src={gallery[0].src}
            alt={gallery[0].alt}
            loading="eager"
            className={`${frame} left-0 top-6 aspect-[4/5] w-[58%] -rotate-[5deg]`}
          />
          <Picture
            src={gallery[1].src}
            alt={gallery[1].alt}
            loading="eager"
            className={`${frame} right-0 top-0 aspect-square w-[46%] rotate-[4deg]`}
          />
          <Picture
            src={gallery[4].src}
            alt={gallery[4].alt}
            loading="eager"
            className={`${frame} bottom-0 right-4 aspect-[4/3] w-[54%] -rotate-[2deg]`}
          />
        </div>
      </Container>
    </section>
  );
}