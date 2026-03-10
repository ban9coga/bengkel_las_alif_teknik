import type { Metadata } from "next";
import "../styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bengkel Las Alif Teknik | Jasa Las Padang",
  description:
    "Bengkel Las Alif Teknik di Kota Padang — pagar, kanopi, teralis, railing, custom besi. Konsultasi cepat via WhatsApp.",
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
