"use client";

import { useState } from "react";

type Props = {
  size: number;
  alt?: string;
  className?: string;
};

export function Logo({ size, alt = "", className }: Props) {
  const [src, setSrc] = useState("/assets/logo.png");

  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={className}
      onError={() => setSrc("/assets/logo.svg")}
    />
  );
}

