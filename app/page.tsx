import Script from "next/script";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Faq } from "@/components/Faq";
import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { buildMailto, buildMapsLink, buildTelLink, buildWhatsAppLink } from "@/lib/links";
import { site } from "@/lib/site";

export default function Page() {
  const waText =
    "Halo Bengkel Las Alif Teknik, saya mau konsultasi (pagar/kanopi/teralis).";

  const whatsappHref = buildWhatsAppLink(site.whatsappNumber, waText);
  const phoneHref = buildTelLink(site.phoneNumber);
  const emailHref = buildMailto(site.email, "Konsultasi Bengkel Las");
  const mapsHref = buildMapsLink(site.mapsQuery || site.address);

  const gallery = [
    { img: "/assets/gallery-1.svg", cap: "Pagar minimalis" },
    { img: "/assets/gallery-2.svg", cap: "Kanopi" },
    { img: "/assets/gallery-3.svg", cap: "Teralis" },
    { img: "/assets/gallery-4.svg", cap: "Railing tangga" },
    { img: "/assets/gallery-5.svg", cap: "Pintu besi" },
    { img: "/assets/gallery-6.svg", cap: "Custom" },
  ];

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
            url: process.env.NEXT_PUBLIC_SITE_URL || undefined,
            image: "/assets/logo.png",
            telephone: site.phoneNumber ? `+${String(site.phoneNumber).replace(/[^\d]/g, "")}` : undefined,
            email: site.email || undefined,
            sameAs: [site.instagramProfile].filter(Boolean),
            address: {
              "@type": "PostalAddress",
              streetAddress: "Jalan Tampat Pincuran 7 No 16",
              addressLocality: "Kalumbuk, Kuranji",
              addressRegion: "Sumatera Barat",
              addressCountry: "ID",
            },
          }),
        }}
      />

      <a className="skip-link" href="#kontak">
        Lewati ke Kontak
      </a>

      <Header />

      <main id="top">
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__copy">
              <p className="eyebrow">Kota Padang • Kalumbuk, Kuranji</p>
              <h1>
                Jasa las rapi & kuat untuk{" "}
                <span className="gradient-text">kebutuhan rumah & usaha</span>
              </h1>
              <p className="lead">{site.tagline}</p>

              <div className="hero__actions">
                <a className="btn btn--primary" href={whatsappHref}>
                  <span className="btn__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20.5 11.9A8.5 8.5 0 1 1 7.2 4.6a8.5 8.5 0 0 1 13.3 7.3Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                      <path
                        d="M8 18.2 7.2 21l2.9-.8c3.7 1.2 8-.6 9.3-4.4 1.4-4-1-8.3-5.1-9.4"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  Chat WhatsApp
                </a>
                <a className="btn btn--ghost" href="#lokasi">
                  Lihat Lokasi
                </a>
              </div>

              <div className="trust">
                <div className="trust__item">
                  <span className="trust__title">Pengerjaan rapi</span>
                  <span className="trust__desc">Finishing bersih & presisi</span>
                </div>
                <div className="trust__item">
                  <span className="trust__title">Bisa custom</span>
                  <span className="trust__desc">Ukuran & desain fleksibel</span>
                </div>
                <div className="trust__item">
                  <span className="trust__title">Respon cepat</span>
                  <span className="trust__desc">Konsultasi via WA</span>
                </div>
              </div>
            </div>

            <div className="hero__visual" aria-hidden="true">
              <div className="hero-card">
                <div className="hero-card__top">
                  <span className="pill">Pagar • Kanopi • Teralis</span>
                  <span className="dot" />
                </div>
                <div className="hero-card__img">
                  <img
                    src="/assets/gallery-1.svg"
                    alt=""
                    width={640}
                    height={420}
                  />
                </div>
                <div className="hero-card__bottom">
                  <span>Kalumbuk, Kuranji • Padang</span>
                  <span className="mini">Custom sesuai kebutuhan</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="layanan">
          <div className="container">
            <div className="section__head">
              <h2>Layanan</h2>
              <p className="muted">
                Fokus ke kualitas, kekuatan, dan tampilan yang enak dilihat.
              </p>
            </div>

            <div className="grid grid--cards">
              <article className="card">
                <h3>Pagar & Pintu Besi</h3>
                <p>Model minimalis sampai ornamen, bisa sliding atau swing.</p>
              </article>
              <article className="card">
                <h3>Kanopi</h3>
                <p>Rangka kuat, rapi, dan siap untuk atap sesuai pilihan.</p>
              </article>
              <article className="card">
                <h3>Teralis</h3>
                <p>Aman, kokoh, dan tetap estetis untuk jendela & ventilasi.</p>
              </article>
              <article className="card">
                <h3>Railing Tangga</h3>
                <p>Nyaman dipakai, presisi, dan finishing halus.</p>
              </article>
              <article className="card">
                <h3>Stainless & Kombinasi</h3>
                <p>Opsi material sesuai kebutuhan: besi, hollow, stainless.</p>
              </article>
              <article className="card">
                <h3>Perbaikan & Modifikasi</h3>
                <p>Las ulang, perkuat rangka, ganti engsel, dan penyesuaian.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="section__head">
              <h2>Cara kerja</h2>
              <p className="muted">Biar jelas dari awal sampai pemasangan.</p>
            </div>
            <div className="steps">
              <div className="step">
                <span className="step__num">01</span>
                <h3>Konsultasi</h3>
                <p>
                  Ceritakan kebutuhan, ukuran, dan referensi desain lewat WhatsApp.
                </p>
              </div>
              <div className="step">
                <span className="step__num">02</span>
                <h3>Ukur & Rencana</h3>
                <p>Konfirmasi ukuran, material, dan detail finishing.</p>
              </div>
              <div className="step">
                <span className="step__num">03</span>
                <h3>Produksi & Pasang</h3>
                <p>Pengerjaan rapi, lalu pemasangan sesuai kesepakatan.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="before-after">
          <div className="container">
            <div className="section__head">
              <h2>Before / After</h2>
              <p className="muted">Geser slider untuk lihat perubahan.</p>
            </div>

            <div className="grid grid--ba">
              <BeforeAfter
                beforeSrc="/assets/before-1.svg"
                afterSrc="/assets/after-1.svg"
                beforeAlt="Sebelum: kondisi awal 1"
                afterAlt="Sesudah: contoh hasil pengerjaan 1"
                caption="Contoh Proyek 1"
                initial={58}
              />
              <BeforeAfter
                beforeSrc="/assets/before-2.svg"
                afterSrc="/assets/after-2.svg"
                beforeAlt="Sebelum: kondisi awal 2"
                afterAlt="Sesudah: contoh hasil pengerjaan 2"
                caption="Contoh Proyek 2"
                initial={46}
              />
            </div>
          </div>
        </section>

        <section className="section section--alt" id="galeri">
          <div className="container">
            <div className="section__head">
              <h2>Galeri</h2>
              <p className="muted">Klik untuk lihat detail di Instagram.</p>
            </div>

            <div className="grid grid--gallery">
              {gallery.map((g, i) => {
                const href = site.instagramPosts[i] || site.instagramProfile;
                return (
                  <a
                    key={g.cap}
                    className="shot"
                    href={href || "#"}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img src={g.img} alt={g.cap} width={800} height={600} loading="lazy" />
                    <span className="shot__cap">{g.cap}</span>
                  </a>
                );
              })}
            </div>

            <div className="center mt-20">
              <a
                className="btn btn--ghost"
                href={site.instagramProfile || "#"}
                target="_blank"
                rel="noreferrer noopener"
              >
                Buka Instagram
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <div className="section__head">
              <h2>FAQ</h2>
              <p className="muted">Pertanyaan yang sering ditanya sebelum order.</p>
            </div>

            <Faq
              items={[
                {
                  q: "Bisa custom ukuran dan model?",
                  a: "Bisa. Kirim foto referensi + ukuran (panjang/tinggi) lewat WhatsApp, nanti kami bantu rekomendasi model dan material.",
                },
                {
                  q: "Layanannya apa saja?",
                  a: "Pagar, kanopi, teralis, railing tangga, pintu besi, serta perbaikan/modifikasi dan kebutuhan custom besi lainnya.",
                },
                {
                  q: "Area pengerjaan di mana?",
                  a: "Kami berlokasi di Kalumbuk, Kuranji, Kota Padang. Untuk area pemasangan/kunjungan, chat WhatsApp untuk konfirmasi.",
                },
                {
                  q: "Cara cepat dapat estimasi?",
                  a: "Kirim foto lokasi + ukuran + kebutuhan material/finishing. Semakin lengkap informasinya, estimasi bisa lebih cepat.",
                },
              ]}
            />
          </div>
        </section>

        <section className="section" id="lokasi">
          <div className="container">
            <div className="section__head">
              <h2>Lokasi</h2>
              <p className="muted">{site.address}</p>
            </div>

            <div className="location">
              <div className="location__card">
                <h3>Alamat</h3>
                <p className="muted">{site.address}</p>
                <div className="location__actions">
                  <a className="btn btn--primary" href={mapsHref} target="_blank" rel="noreferrer noopener">
                    Buka Google Maps
                  </a>
                  <a className="btn btn--ghost" href={whatsappHref}>
                    Tanya via WhatsApp
                  </a>
                </div>
                <p className="fine">
                  Tips: kirim foto/ukuran lewat WA supaya estimasi lebih cepat.
                </p>
              </div>

              <div className="location__map" aria-label="Peta lokasi">
                <iframe
                  title="Peta Bengkel Las Alif Teknik"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    site.mapsQuery || site.address,
                  )}&output=embed`}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section cta" id="kontak">
          <div className="container cta__inner">
            <div>
              <h2>Siap bikin yang rapi?</h2>
              <p className="muted">
                Konsultasi cepat via WhatsApp. Jelaskan ukuran + kirim foto lokasi
                biar enak kami bantu.
              </p>
            </div>
            <div className="cta__actions">
              <a className="btn btn--primary" href={whatsappHref}>
                Chat WhatsApp
              </a>
              <a className="btn btn--ghost" href={phoneHref}>
                Telepon
              </a>
              <a className="btn btn--ghost" href={emailHref}>
                Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__left">
            <Logo size={28} />
            <span>
              © {new Date().getFullYear()} {site.businessName}. All rights reserved.
            </span>
          </div>
          <div className="footer__right">
            <a href={site.instagramProfile || "#"} target="_blank" rel="noreferrer noopener">
              Instagram
            </a>
            <a href={mapsHref} target="_blank" rel="noreferrer noopener">
              Maps
            </a>
          </div>
        </div>
      </footer>

      <a className="floating-wa" href={whatsappHref} aria-label="Chat WhatsApp">
        <span aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M20.5 11.9A8.5 8.5 0 1 1 7.2 4.6a8.5 8.5 0 0 1 13.3 7.3Z"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M8 18.2 7.2 21l2.9-.8c3.7 1.2 8-.6 9.3-4.4 1.4-4-1-8.3-5.1-9.4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="floating-wa__text">WhatsApp</span>
      </a>
    </>
  );
}
