import { MessageCircle, Phone } from "lucide-react";
import { shop } from "@/config";
import { wa, tel } from "@/lib/whatsapp";

export default function FloatingContact() {
  const message = `Hi ${shop.name}, I would like to book a shoot.`;

  return (
    <>
      {/* Phones: sticky bottom bar */}
      <div className="header-blur fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-b-0 p-3 md:hidden">
        <a
          href={wa(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pill flex-1"
        >
          <MessageCircle className="h-5 w-5" /> WhatsApp
        </a>
        <a href={tel()} className="btn-ghost flex-1">
          <Phone className="h-5 w-5" /> Call
        </a>
      </div>

      {/* Desktop: floating pill */}
      <a
        href={wa(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-pill fixed bottom-6 right-6 z-40 hidden md:inline-flex"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
      </a>
    </>
  );
}