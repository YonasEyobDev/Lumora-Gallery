import { MessageCircle, Phone } from "lucide-react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { shop, shootTypes } from "@/config";
import { wa, tel } from "@/lib/whatsapp";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const lines = [
      `Hi ${shop.name}, I would like to book a shoot.`,
      `Name: ${f.get("name")}`,
      `Shoot type: ${f.get("type")}`,
      `Date: ${f.get("date") || "Not sure yet"}`,
      f.get("message") ? `Message: ${f.get("message")}` : null,
    ].filter(Boolean);
    window.open(wa(lines.join("\n")), "_blank", "noopener");
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let's make something great">
      <div className="grid items-stretch gap-6 lg:grid-cols-2">
        <Reveal>
          <div
            className="surface-card flex h-full flex-col justify-center gap-6 p-8 lg:p-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(61,214,198,0.14), rgba(124,92,255,0.18)), var(--surface)",
            }}
          >
            <h3 className="font-display text-3xl font-bold">
              Ready to book your shoot?
            </h3>
            <p className="text-dim">
              Fill in the form and we will continue the chat on WhatsApp. Prefer
              to talk? Call us on {shop.phoneDisplay}.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={wa(`Hi ${shop.name}, I would like to book a shoot.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp us
              </a>
              <a href={tel()} className="btn-ghost">
                <Phone className="h-5 w-5" /> Call now
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <form onSubmit={handleSubmit} className="surface-card space-y-4 p-8">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                Your name
              </label>
              <input
                id="name"
                name="name"
                required
                className="field"
                placeholder="Full name"
                autoComplete="name"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="type" className="mb-2 block text-sm font-semibold">
                  Shoot type
                </label>
                <select id="type" name="type" required className="field" defaultValue="">
                  <option value="" disabled>
                    Choose one
                  </option>
                  {shootTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="date" className="mb-2 block text-sm font-semibold">
                  Preferred date
                </label>
                <input id="date" name="date" type="date" className="field" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="field"
                placeholder="Tell us about your shoot"
              />
            </div>
            <button type="submit" className="btn-pill w-full">
              <MessageCircle className="h-5 w-5" /> Send on WhatsApp
            </button>
            <p className="text-dim text-center text-xs">
              This opens WhatsApp with your details already typed.
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}