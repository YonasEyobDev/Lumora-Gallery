import { Aperture, MessageCircle } from "lucide-react";
import Container from "@/components/Container";
import { shop } from "@/config";
import { wa } from "@/lib/whatsapp";
import { navLinks } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-12">
      <Container className="flex flex-col items-center gap-6 text-center">
        <a href="#home" className="flex items-center gap-2">
          <Aperture className="text-aqua h-6 w-6" />
          <span className="font-display text-xl font-bold">{shop.name}</span>
        </a>
        <p className="text-dim max-w-md text-sm">{shop.tagline}</p>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={wa(`Hi ${shop.name}, I would like to book a shoot.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pill btn-pill-sm"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>

        <p className="text-dim text-xs">
          © {new Date().getFullYear()} {shop.name}. {shop.city}.
        </p>
      </Container>
    </footer>
  );
}