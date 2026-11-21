import { shop } from "@/config";

// Opens WhatsApp with a pre-typed message
export const wa = (message = "") =>
  `https://wa.me/${shop.whatsapp}?text=${encodeURIComponent(message)}`;

// Phone call link
export const tel = () => `tel:+${shop.whatsapp}`;