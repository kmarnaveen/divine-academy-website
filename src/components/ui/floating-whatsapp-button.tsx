import { MessageCircle } from "lucide-react";

const whatsappHref =
  "https://wa.me/918859262900?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Divine%20International%20Academy.";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Send a WhatsApp message to Divine International Academy"
      className="fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_24px_60px_-30px_rgba(37,211,102,0.72)] transition-transform duration-200 hover:scale-[1.03] hover:bg-[#20bd5b] sm:bottom-5 sm:right-5 sm:h-15 sm:w-15"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">WhatsApp chat</span>
    </a>
  );
}
