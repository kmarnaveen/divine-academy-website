import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Divine International Academy | Best CBSE School in Firozabad",
  description:
    "Divine International Academy is a CBSE affiliated school in Sirsaganj, Firozabad offering admissions, academics, facilities, and school guidance from Nursery to Class 12.",
  keywords:
    "CBSE school Firozabad, best school Sirsaganj, Divine International Academy, admissions 2026-27, school in Uttar Pradesh",
  authors: [{ name: "Divine International Academy" }],
  creator: "Divine International Academy",
  publisher: "Divine International Academy",
  applicationName: "Divine International Academy",
  generator: "Next.js",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://divineacademy.edu.in"),
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Divine Academy",
    startupImage: [
      {
        url: "/icons/icon-512x512.png",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
  openGraph: {
    title: "Divine International Academy | Best CBSE School in Firozabad",
    description:
      "CBSE education, admissions guidance, and school facilities from Nursery to Class 12 at Divine International Academy, Sirsaganj.",
    url: "https://divineacademy.edu.in",
    siteName: "Divine International Academy",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Divine International Academy Logo",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divine International Academy | Best CBSE School in Firozabad",
    description:
      "CBSE education, admissions guidance, and school facilities from Nursery to Class 12 at Divine International Academy, Sirsaganj.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icons/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/icons/icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/icons/safari-pinned-tab.svg",
        color: "#1E3A8A",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1E3A8A" },
    { media: "(prefers-color-scheme: dark)", color: "#1E3A8A" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* PWA Meta Tags */}
        <meta name="application-name" content="Divine Academy" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Divine Academy" />
        <meta
          name="description"
          content="Divine International Academy - Quality CBSE Education"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#1E3A8A" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#1E3A8A" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/icons/icon-180x180.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/icon-180x180.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/icons/icon-192x192.png"
        />

        {/* Favicons */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/icon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/icon-16x16.png"
        />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Safari Pinned Tab */}
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#1E3A8A"
        />

        {/* Microsoft Tiles */}
        <meta
          name="msapplication-TileImage"
          content="/icons/icon-144x144.png"
        />

        {/* PWA Registration Script */}
        <script async src="/pwa-register.js?v=disable-sw-cache"></script>
      </head>
      <body
        className={`${nunito.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
