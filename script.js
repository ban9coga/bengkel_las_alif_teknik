function $(selector, root = document) {
  return root.querySelector(selector);
}

function $all(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

function normalizeDigits(input) {
  return String(input || "").replace(/[^\d]/g, "");
}

function buildWhatsAppLink(number, text) {
  const digits = normalizeDigits(number);
  const msg = encodeURIComponent(text || "");
  if (!digits) return "#";
  return `https://wa.me/${digits}${msg ? `?text=${msg}` : ""}`;
}

function buildTelLink(number) {
  const digits = normalizeDigits(number);
  if (!digits) return "#";
  return `tel:+${digits}`;
}

function buildMailto(email, subject) {
  if (!email) return "#";
  const s = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${email}${s}`;
}

function buildMapsLink(query) {
  const q = encodeURIComponent(query || "");
  if (!q) return "#";
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

function applyConfig() {
  const cfg = window.ALIF_TEKNIK || {};

  const businessName = cfg.businessName || "Bengkel Las Alif Teknik";
  const tagline =
    cfg.tagline ||
    "Jasa las rapi & kuat — pagar, kanopi, teralis, railing, dan custom besi.";

  const address =
    cfg.address ||
    "Jalan Tampat Pincuran 7 No 16, Kalumbuk, Kuranji, Kota Padang";

  const waText =
    "Halo Bengkel Las Alif Teknik, saya mau konsultasi (pagar/kanopi/teralis).";

  const whatsappHref = buildWhatsAppLink(cfg.whatsappNumber, waText);
  const phoneHref = buildTelLink(cfg.phoneNumber);
  const emailHref = buildMailto(cfg.email, "Konsultasi Bengkel Las");
  const mapsHref = buildMapsLink(cfg.mapsQuery || address);
  const instagramProfile = cfg.instagramProfile || "#";

  document.title = `${businessName} | Jasa Las Padang`;

  $all("[data-business-name]").forEach((el) => (el.textContent = businessName));
  const taglineEl = $("[data-tagline]");
  if (taglineEl) taglineEl.textContent = tagline;

  $all("[data-address]").forEach((el) => (el.textContent = address));

  $all("[data-whatsapp-link]").forEach((el) => (el.href = whatsappHref));
  $all("[data-phone-link]").forEach((el) => (el.href = phoneHref));
  $all("[data-email-link]").forEach((el) => (el.href = emailHref));
  $all("[data-maps-link]").forEach((el) => (el.href = mapsHref));
  $all("[data-instagram-link]").forEach((el) => (el.href = instagramProfile));

  const galleryLinks = $all("[data-gallery] [data-ig]");
  const posts = Array.isArray(cfg.instagramPosts) ? cfg.instagramPosts : [];
  galleryLinks.forEach((a, i) => {
    const href = posts[i] || instagramProfile || "#";
    a.href = href;
  });

  const y = $("[data-year]");
  if (y) y.textContent = String(new Date().getFullYear());
}

function initMobileNav() {
  const toggle = $("[data-nav-toggle]");
  const nav = $("[data-nav]");
  if (!toggle || !nav) return;

  const close = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  $all("a", nav).forEach((a) => a.addEventListener("click", close));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
  document.addEventListener("click", (e) => {
    if (!nav.classList.contains("is-open")) return;
    if (nav.contains(e.target) || toggle.contains(e.target)) return;
    close();
  });
}

function initBeforeAfter() {
  const items = $all("[data-ba]");
  items.forEach((root) => {
    const range = $(".ba__range", root);
    const before = $(".ba__before", root);
    if (!range || !before) return;

    const setPos = (value) => {
      const v = Math.max(0, Math.min(100, Number(value)));
      before.style.setProperty("--pos", `${v}%`);
      root.style.setProperty("--pos", `${v}%`);
    };

    setPos(range.value);
    range.addEventListener("input", (e) => setPos(e.target.value));

    const onPointer = (clientX) => {
      const rect = root.getBoundingClientRect();
      const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
      const percent = (x / rect.width) * 100;
      range.value = String(Math.round(percent));
      setPos(range.value);
    };

    let dragging = false;
    root.addEventListener("pointerdown", (e) => {
      dragging = true;
      root.setPointerCapture?.(e.pointerId);
      onPointer(e.clientX);
    });
    root.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      onPointer(e.clientX);
    });
    root.addEventListener("pointerup", () => {
      dragging = false;
    });
    root.addEventListener("pointercancel", () => {
      dragging = false;
    });
  });
}

applyConfig();
initMobileNav();
initBeforeAfter();

