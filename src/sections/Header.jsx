import { useState } from "react";
import { Aperture, Menu, X } from "lucide-react";
import Container from "@/components/Container";
import { shop } from "@/config";
import { wa } from "@/lib/whatsapp";
import { navLinks } from "@/lib/nav";

export default function Header() {
  const [open, setOpen] = useState(false);
  const message = `Hi ${shop.name}, I would like to book a shoot.`;

  return (
    <header className="header-blur sticky top-0 z-30">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#home"
          className="u-group flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Aperture className="text-aqua h-6 w-6" />
          <span className="font-display u-hover text-lg font-bold">{shop.name}</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={wa(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-pill-sm hidden sm:inline-flex"
          >
            Book now
          </a>
          <button
            type="button"
            className="btn-ghost !p-2.5 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <nav
          className="border-t border-[var(--line)] lg:hidden"
          aria-label="Mobile"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link py-3"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}