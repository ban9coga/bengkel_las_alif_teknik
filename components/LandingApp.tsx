"use client";

import React, { useMemo, useState } from "react";
import Script from "next/script";
import {
  Calculator,
  CheckCircle2,
  ChevronRight,
  Clock,
  Hammer,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Ruler,
  Shield,
  X,
} from "lucide-react";
import { buildMapsLink, buildWhatsAppLink } from "@/lib/links";
import { site } from "@/lib/site";

type Material = {
  id: string;
  name: string;
  price: number;
  desc: string;
};

type Service = {
  title: string;
  slug: string;
  description: string;
  features: string[];
};

const MATERIALS: Material[] = [
  {
    id: "hollow-black",
    name: "Besi Hollow Hitam (Standard)",
    price: 450_000,
    desc: "Ekonomis & Kokoh",
  },
  {
    id: "hollow-galvanis",
    name: "Besi Hollow Galvanis (Anti-Karat)",
    price: 550_000,
    desc: "Tahan Cuaca Pesisir Padang",
  },
  {
    id: "stainless",
    name: "Stainless Steel 304",
    price: 950_000,
    desc: "Mewah & Anti-Karat Total",
  },
];

const SERVICES: Service[] = [
  {
    title: "Jasa Kanopi Padang",
    slug: "kanopi",
    description:
      "Pemasangan kanopi dengan bahan Alderon, Polycarbonate, atau Spandek. Menahan panas matahari Padang yang terik.",
    features: ["Rangka Double", "Finishing Rapi", "Garansi Kebocoran"],
  },
  {
    title: "Pagar Minimalis",
    slug: "pagar",
    description:
      "Desain pagar modern yang menambah nilai estetika rumah sekaligus keamanan maksimal.",
    features: ["Cat Anti-Karat", "Engsel Heavy Duty", "Custom Desain"],
  },
  {
    title: "Teralis & Pintu Besi",
    slug: "teralis",
    description:
      "Perlindungan ekstra untuk jendela dan pintu dengan motif laser cutting atau tempa.",
    features: ["Presisi Tinggi", "Bahan SNI", "Pemasangan Cepat"],
  },
];

function instagramHandle(url: string) {
  try {
    const u = new URL(url);
    const seg = u.pathname.split("/").filter(Boolean)[0];
    return seg ? `@${seg}` : "@instagram";
  } catch {
    return "@instagram";
  }
}

export function LandingApp() {
  const [activeTab, setActiveTab] = useState<"home" | "layanan" | "portofolio">(
    "home",
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [calc, setCalc] = useState({
    length: 0,
    width: 0,
    materialId: "hollow-galvanis",
  });

  const selectedMaterial = useMemo(
    () => MATERIALS.find((m) => m.id === calc.materialId) ?? MATERIALS[0],
    [calc.materialId],
  );

  const totalEstimate = useMemo(() => {
    const area = calc.length * calc.width;
    if (area <= 0) return 0;
    return area * selectedMaterial.price;
  }, [calc.length, calc.width, selectedMaterial.price]);

  const handleWaConsultation = (msg?: string) => {
    const text = msg || "Halo Alif Teknik, saya ingin tanya jasa las.";
    const href = buildWhatsAppLink(site.whatsappNumber, text);
    window.open(href, "_blank", "noopener,noreferrer");
  };

  const mapsHref = buildMapsLink(site.mapsQuery || site.address);
  const igHandle = instagramHandle(site.instagramProfile);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <nav className="sticky top-0 z-50 bg-slate-900 text-white shadow-xl">
        <div className="mx-auto h-20 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div
              className="flex cursor-pointer items-center gap-3"
              onClick={() => setActiveTab("home")}
            >
              <img
                src="/assets/logo.png"
                alt="Logo Alif Teknik"
                className="h-11 w-11 rounded-lg object-cover ring-2 ring-yellow-500/50"
              />
              <div>
                <span className="text-2xl font-black italic tracking-tighter">
                  ALIF TEKNIK
                </span>
                <p className="-mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-500">
                  Bengkel Las Padang
                </p>
              </div>
            </div>

            <div className="hidden space-x-8 font-medium md:flex">
              <button
                onClick={() => setActiveTab("home")}
                className={`transition hover:text-yellow-500 ${
                  activeTab === "home" ? "text-yellow-500" : ""
                }`}
              >
                Beranda
              </button>
              <button
                onClick={() => setActiveTab("layanan")}
                className={`transition hover:text-yellow-500 ${
                  activeTab === "layanan" ? "text-yellow-500" : ""
                }`}
              >
                Layanan
              </button>
              <button
                onClick={() => setActiveTab("portofolio")}
                className={`transition hover:text-yellow-500 ${
                  activeTab === "portofolio" ? "text-yellow-500" : ""
                }`}
              >
                Portofolio
              </button>
              <button
                onClick={() => handleWaConsultation()}
                className="rounded-full bg-yellow-500 px-6 py-2 font-bold text-slate-900 transition hover:bg-yellow-400"
              >
                Konsultasi Gratis
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="space-y-4 border-t border-slate-700 bg-slate-800 p-4 md:hidden">
            <button
              onClick={() => {
                setActiveTab("home");
                setIsMenuOpen(false);
              }}
              className="block w-full py-2 text-left"
            >
              Beranda
            </button>
            <button
              onClick={() => {
                setActiveTab("layanan");
                setIsMenuOpen(false);
              }}
              className="block w-full py-2 text-left"
            >
              Layanan
            </button>
            <button
              onClick={() => {
                setActiveTab("portofolio");
                setIsMenuOpen(false);
              }}
              className="block w-full py-2 text-left"
            >
              Portofolio
            </button>
            <button
              onClick={() => handleWaConsultation()}
              className="block w-full rounded-lg bg-yellow-500 p-3 text-center font-bold text-slate-900"
            >
              WhatsApp Sekarang
            </button>
          </div>
        )}
      </nav>

      {activeTab === "home" && (
        <>
          <header className="relative overflow-hidden bg-slate-900 pb-32 pt-20 text-white">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900 to-transparent" />
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200"
                alt="Welding Workshop"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative z-20 mx-auto max-w-7xl px-4">
              <div className="max-w-3xl">
                <span className="mb-4 inline-block rounded bg-yellow-500 px-3 py-1 text-xs font-bold uppercase text-slate-900">
                  Bengkel Las Terbaik di {site.city}
                </span>
                <h1 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
                  Konstruksi Besi{" "}
                  <span className="text-yellow-500 underline decoration-4 underline-offset-8">
                    Kokoh & Estetik
                  </span>
                </h1>
                <p className="mb-8 max-w-xl text-xl text-slate-300">
                  Ahli pembuatan Kanopi, Pagar, dan Teralis dengan material
                  pilihan. Rapi, cepat, dan bergaransi untuk wilayah Sumatera
                  Barat.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <button
                    onClick={() => setActiveTab("layanan")}
                    className="flex items-center justify-center gap-2 rounded-xl bg-yellow-500 px-8 py-4 text-lg font-bold text-slate-900 transition-transform hover:scale-105"
                  >
                    Lihat Jasa Kami <ChevronRight size={20} />
                  </button>
                  <button
                    onClick={() => setActiveTab("portofolio")}
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-bold backdrop-blur-md transition hover:bg-white/20"
                  >
                    <Instagram size={20} /> Lihat Portofolio
                  </button>
                  <button
                    onClick={() => handleWaConsultation()}
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-bold backdrop-blur-md transition hover:bg-white/20"
                  >
                    <Phone size={20} /> Hubungi Admin
                  </button>
                </div>
              </div>
            </div>
          </header>

          <section className="border-b bg-white py-12">
            <div className="mx-auto max-w-7xl px-4">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-yellow-100 p-3 text-yellow-600">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Garansi 1 Tahun</h4>
                    <p className="text-sm text-slate-500">
                      Jaminan kualitas las & cat.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-yellow-100 p-3 text-yellow-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Pengerjaan Tepat Waktu</h4>
                    <p className="text-sm text-slate-500">
                      Sesuai jadwal kesepakatan.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-yellow-100 p-3 text-yellow-600">
                    <Ruler size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Survey & Estimasi Gratis</h4>
                    <p className="text-sm text-slate-500">
                      Khusus area Kota Padang.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-slate-50 py-20">
            <div className="mx-auto max-w-7xl px-4">
              <div className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-2xl lg:flex-row">
                <div className="p-8 lg:w-1/2 lg:p-12">
                  <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-yellow-600">
                    <Calculator size={18} />
                    Kalkulator Estimasi
                  </div>
                  <h2 className="mb-6 text-4xl font-black">
                    Hitung Biaya Sekarang
                  </h2>
                  <p className="mb-8 text-slate-600">
                    Dapatkan perkiraan harga instan. Harga final ditentukan
                    setelah survey lokasi untuk akurasi material.
                  </p>

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="mb-2 block text-sm font-bold">
                          Panjang (Meter)
                        </label>
                        <input
                          type="number"
                          className="w-full rounded-xl bg-slate-100 p-4 outline-none focus:ring-2 focus:ring-yellow-500"
                          placeholder="Contoh: 5"
                          value={calc.length || ""}
                          onChange={(e) =>
                            setCalc({
                              ...calc,
                              length: Number.parseFloat(e.target.value) || 0,
                            })
                          }
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-bold">
                          Lebar (Meter)
                        </label>
                        <input
                          type="number"
                          className="w-full rounded-xl bg-slate-100 p-4 outline-none focus:ring-2 focus:ring-yellow-500"
                          placeholder="Contoh: 3"
                          value={calc.width || ""}
                          onChange={(e) =>
                            setCalc({
                              ...calc,
                              width: Number.parseFloat(e.target.value) || 0,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-bold">
                        Pilih Material
                      </label>
                      <select
                        className="w-full cursor-pointer appearance-none rounded-xl bg-slate-100 p-4 outline-none focus:ring-2 focus:ring-yellow-500"
                        value={calc.materialId}
                        onChange={(e) =>
                          setCalc({ ...calc, materialId: e.target.value })
                        }
                      >
                        {MATERIALS.map((m) => (
                          <option key={m.id} value={m.id}>
                            {m.name}
                          </option>
                        ))}
                      </select>
                      <p className="mt-2 text-xs italic text-slate-400">
                        * {selectedMaterial.desc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center bg-slate-900 p-8 text-white lg:w-1/2 lg:p-12">
                  <div className="space-y-4 border-l-4 border-yellow-500 pl-6">
                    <span className="font-medium text-slate-400">
                      Estimasi Total Biaya
                    </span>
                    <div className="text-5xl font-black text-yellow-500 lg:text-6xl">
                      {totalEstimate > 0
                        ? new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })
                            .format(totalEstimate)
                            .replace(",00", "")
                        : "Rp 0"}
                    </div>
                    <p className="text-sm text-slate-400">
                      *Estimasi ini sudah termasuk jasa pemasangan dan
                      transportasi area Padang.
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      handleWaConsultation(
                        `Halo Alif Teknik, saya sudah hitung estimasi di web. Proyek ukuran ${calc.length}x${calc.width}m dengan material ${selectedMaterial.name}. Bisa survey ke lokasi?`,
                      )
                    }
                    className="mt-10 w-full rounded-2xl bg-yellow-500 py-5 text-xl font-black text-slate-900 transition-all hover:scale-[1.02] hover:bg-yellow-400"
                  >
                    Klaim Harga Ini via WA
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-20">
            <div className="mx-auto mb-16 max-w-7xl px-4 text-center">
              <h2 className="mb-4 text-4xl font-black">
                Layanan Unggulan Kami
              </h2>
              <div className="mx-auto h-2 w-20 rounded-full bg-yellow-500" />
            </div>
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-3">
              {SERVICES.map((s) => (
                <div
                  key={s.slug}
                  className="group rounded-3xl border bg-slate-50 p-8 transition-all hover:border-yellow-500 hover:shadow-2xl"
                >
                  <h3 className="mb-4 text-2xl font-bold">{s.title}</h3>
                  <p className="mb-6 text-slate-600">{s.description}</p>
                  <ul className="mb-8 space-y-3">
                    {s.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm font-medium"
                      >
                        <CheckCircle2 size={16} className="text-green-500" />{" "}
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setActiveTab("layanan")}
                    className="flex items-center gap-2 font-bold text-slate-900 group-hover:text-yellow-600"
                  >
                    Selengkapnya <ChevronRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {activeTab === "layanan" && (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-4">
            <h1 className="mb-8 text-center text-5xl font-black italic">
              Layanan Profesional
            </h1>
            {SERVICES.map((s) => (
              <div
                key={s.slug}
                id={s.slug}
                className="mb-16 border-b pb-12 last:border-0"
              >
                <div className="flex flex-col items-center gap-8 md:flex-row">
                  <div className="flex-1">
                    <h2 className="mb-4 text-3xl font-bold text-slate-900">
                      {s.title}
                    </h2>
                    <p className="mb-6 text-lg leading-relaxed text-slate-600">
                      {s.description}
                    </p>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {s.features.map((f) => (
                        <div
                          key={f}
                          className="rounded-xl border-l-4 border-yellow-500 bg-slate-50 p-4"
                        >
                          <span className="font-bold text-slate-700">{f}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() =>
                        handleWaConsultation(`Saya tertarik untuk pesan ${s.title}.`)
                      }
                      className="mt-8 rounded-xl bg-slate-900 px-8 py-4 font-bold text-white transition hover:bg-slate-700"
                    >
                      Pesan Jasa {s.title}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === "portofolio" && (
        <section className="min-h-[70vh] bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <Script
              src="https://elfsightcdn.com/platform.js"
              strategy="afterInteractive"
            />

            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-pink-500/20 px-4 py-2 text-pink-400">
              <Instagram size={18} />
              <span className="text-sm font-bold">
                Live Feed Instagram {igHandle}
              </span>
            </div>
            <h1 className="mb-12 text-4xl font-black italic">Hasil Kerja Kami</h1>

            <div className="rounded-3xl border border-slate-700 bg-slate-800 p-4 md:p-8">
              <div className="rounded-2xl bg-slate-700/30 p-2">
                <div
                  className="elfsight-app-afd07eb2-c0b1-484d-9d02-c607498c3556"
                  data-elfsight-app-lazy
                />
              </div>
              <p className="mx-auto mt-4 max-w-2xl text-xs text-slate-400">
                Jika feed tidak muncul, buka langsung Instagram:{" "}
                <a
                  className="font-bold text-yellow-400 hover:text-yellow-300"
                  href={site.instagramProfile}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {igHandle}
                </a>
                .
              </p>

              <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
                {["#kanopipadang", "#pagarminimalis", "#laslistrik", "#teralisjendela"].map(
                  (tag) => (
                    <div
                      key={tag}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4 text-center transition hover:border-yellow-500"
                    >
                      <span className="font-bold text-yellow-500">{tag}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="border-t border-slate-800 bg-slate-900 py-20 text-slate-400">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 flex items-center gap-2 text-white">
              <div className="rounded-lg bg-yellow-500 p-2 text-slate-900">
                <Hammer size={20} />
              </div>
              <span className="text-xl font-black italic">ALIF TEKNIK</span>
            </div>
            <p className="mb-6 max-w-sm leading-relaxed">
              Partner konstruksi besi terpercaya di Padang. Kami melayani
              pembuatan dan renovasi kanopi, pagar, railing tangga, dan kebutuhan
              las lainnya.
            </p>
            <div className="flex gap-4">
              <a
                href={site.instagramProfile}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-yellow-500 hover:text-slate-900"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={mapsHref}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-yellow-500 hover:text-slate-900"
                aria-label="Google Maps"
              >
                <MapPin size={20} />
              </a>
              <button
                onClick={() => handleWaConsultation()}
                className="rounded-full bg-slate-800 p-3 transition hover:bg-yellow-500 hover:text-slate-900"
                aria-label="WhatsApp"
              >
                <Phone size={20} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
              Navigasi
            </h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => setActiveTab("home")}
                  className="hover:text-yellow-500"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("layanan")}
                  className="hover:text-yellow-500"
                >
                  Jasa & Layanan
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("portofolio")}
                  className="hover:text-yellow-500"
                >
                  Portofolio IG
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleWaConsultation()}
                  className="hover:text-yellow-500"
                >
                  Hubungi Kami
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
              Workshop
            </h4>
            <p className="mb-4">{site.address}</p>
            <p className="font-bold text-white">{site.openingHoursText}</p>
          </div>
        </div>
        <div className="mx-auto mt-20 max-w-7xl border-t border-slate-800 px-4 pt-8 text-center text-xs">
          &copy; {new Date().getFullYear()} {site.businessName}. All Rights
          Reserved.
        </div>
      </footer>
    </div>
  );
}
