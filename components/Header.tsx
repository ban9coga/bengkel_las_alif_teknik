"use client";

import { useEffect, useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClick(e: MouseEvent) {
      const nav = document.querySelector("[data-nav]");
      const toggle = document.querySelector("[data-nav-toggle]");
      if (!open || !nav || !toggle) return;
      if (nav.contains(e.target as Node) || toggle.contains(e.target as Node)) return;
      setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="#top" aria-label="Bengkel Las Alif Teknik">
          <img src="/assets/logo.svg" alt="" width={36} height={36} />
          <span className="brand__text">
            <span className="brand__name" data-business-name>
              Alif Teknik
            </span>
            <span className="brand__sub">Bengkel Las</span>
          </span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Buka menu"
          aria-expanded={open}
          data-nav-toggle
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${open ? "is-open" : ""}`} data-nav>
          <a href="#layanan" onClick={() => setOpen(false)}>
            Layanan
          </a>
          <a href="#before-after" onClick={() => setOpen(false)}>
            Before/After
          </a>
          <a href="#galeri" onClick={() => setOpen(false)}>
            Galeri
          </a>
          <a href="#lokasi" onClick={() => setOpen(false)}>
            Lokasi
          </a>
          <a className="nav__cta" href="#kontak" onClick={() => setOpen(false)}>
            Kontak
          </a>
        </nav>
      </div>
    </header>
  );
}

