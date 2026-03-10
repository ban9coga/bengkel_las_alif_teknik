import type { Metadata } from "next";
import "../styles.css";
import "./globals.css";

function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit;
  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Bengkel Las Alif Teknik | Jasa Las Padang",
    template: "%s | Bengkel Las Alif Teknik",
  },
  description:
    "Bengkel Las Alif Teknik di Kota Padang — pagar, kanopi, teralis, railing, custom besi. Konsultasi cepat via WhatsApp.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    title: "Bengkel Las Alif Teknik | Jasa Las Padang",
    description:
      "Pagar, kanopi, teralis, railing, dan custom besi. Konsultasi cepat via WhatsApp.",
    url: "/",
    images: [{ url: "/assets/logo.png" }],
  },
  twitter: {
    card: "summary",
    title: "Bengkel Las Alif Teknik",
    description:
      "Jasa las rapi & kuat di Kota Padang. Konsultasi cepat via WhatsApp.",
    images: ["/assets/logo.png"],
  },
  icons: {
    icon: [
      { url: "/assets/logo.png" },
      { url: "/assets/logo.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport = {
  themeColor: "#0b1220",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

