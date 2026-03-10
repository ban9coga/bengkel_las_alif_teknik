"use client";

import { useMemo, useRef, useState } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  caption: string;
  initial?: number;
};

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  caption,
  initial = 55,
}: Props) {
  const [pos, setPos] = useState(() => clamp01to100(initial));
  const rootRef = useRef<HTMLElement | null>(null);
  const draggingRef = useRef(false);

  const style = useMemo(
    () => ({ ["--pos" as any]: `${pos}%` }),
    [pos],
  );

  function clamp01to100(v: number) {
    return Math.max(0, Math.min(100, Number.isFinite(v) ? v : 50));
  }

  function setFromClientX(clientX: number) {
    const root = rootRef.current;
    if (!root) return;
    const rect = root.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
    const next = (x / rect.width) * 100;
    setPos(Math.round(next));
  }

  return (
    <figure
      className="ba"
      style={style}
      ref={(el) => {
        rootRef.current = el;
      }}
      onPointerDown={(e) => {
        draggingRef.current = true;
        (e.currentTarget as any).setPointerCapture?.(e.pointerId);
        setFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (!draggingRef.current) return;
        setFromClientX(e.clientX);
      }}
      onPointerUp={() => {
        draggingRef.current = false;
      }}
      onPointerCancel={() => {
        draggingRef.current = false;
      }}
    >
      <img
        className="ba__after"
        src={afterSrc}
        alt={afterAlt}
        width={1200}
        height={800}
        loading="lazy"
      />
      <div className="ba__before">
        <img
          src={beforeSrc}
          alt={beforeAlt}
          width={1200}
          height={800}
          loading="lazy"
        />
      </div>
      <div className="ba__handle" aria-hidden="true" />
      <input
        className="ba__range"
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(clamp01to100(Number(e.target.value)))}
        aria-label="Geser untuk membandingkan sebelum dan sesudah"
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

