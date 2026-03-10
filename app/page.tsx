import Script from "next/script";
import { getBaseUrl } from "@/lib/baseUrl";
import { site } from "@/lib/site";
import { LandingApp } from "@/components/LandingApp";

export default function Page() {
  const baseUrl = getBaseUrl();
  const mapsQuery = site.mapsQuery || site.address;

  return (
    <>
      <Script
        id="jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: site.businessName,
            url: `${baseUrl}/`,
            image: `${baseUrl}/assets/logo.png`,
            telephone: site.phoneNumber
              ? `+${String(site.phoneNumber).replace(/[^\d]/g, "")}`
              : undefined,
            email: site.email || undefined,
            sameAs: [site.instagramProfile].filter(Boolean),
            priceRange: site.priceRange || undefined,
            areaServed: (site.serviceArea || []).length
              ? site.serviceArea.map((name) => ({ "@type": "Place", name }))
              : undefined,
            openingHours: site.openingHoursText || undefined,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Jalan Tampat Pincuran 7 No 16",
              addressLocality: "Kalumbuk, Kuranji",
              addressRegion: "Sumatera Barat",
              addressCountry: "ID",
            },
            hasMap: mapsQuery ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}` : undefined,
          }),
        }}
      />

      <LandingApp />
    </>
  );
}

