import Script from "next/script";

export type FaqItem = {
  q: string;
  a: string;
};

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((it) => ({
              "@type": "Question",
              name: it.q,
              acceptedAnswer: { "@type": "Answer", text: it.a },
            })),
          }),
        }}
      />

      <div className="faq">
        {items.map((it) => (
          <details key={it.q} className="faq__item">
            <summary className="faq__q">{it.q}</summary>
            <div className="faq__a">
              <p className="muted">{it.a}</p>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}

