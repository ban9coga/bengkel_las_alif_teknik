function normalizeDigits(input: string) {
  return String(input || "").replace(/[^\d]/g, "");
}

export function buildWhatsAppLink(number: string, text?: string) {
  const digits = normalizeDigits(number);
  if (!digits) return "#";
  const msg = text ? `?text=${encodeURIComponent(text)}` : "";
  return `https://wa.me/${digits}${msg}`;
}

export function buildTelLink(number: string) {
  const digits = normalizeDigits(number);
  if (!digits) return "#";
  return `tel:+${digits}`;
}

export function buildMailto(email: string, subject?: string) {
  if (!email) return "#";
  const s = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${email}${s}`;
}

export function buildMapsLink(query: string) {
  if (!query) return "#";
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

