import { Header } from "./header";
import { Footer } from "./footer";
import { FloatingWhatsAppButton } from "@/components/ui/floating-whatsapp-button";
import { PWAInstallButton } from "@/components/ui/pwa-install-button";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <PWAInstallButton />
      <FloatingWhatsAppButton />
      <Footer />
    </div>
  );
}
