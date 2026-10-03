"use client";

import Image from "next/image";
import type { ReactElement } from "react";
import type { MediaType } from "@/data/media";

type MediaFrameProps = {
  type: MediaType;
  src: string;
  alt: string;
  className?: string;
  label?: string;
  priority?: boolean;
  sizes?: string;
  poster?: string;
};

export const MediaFrame = ({
  type,
  src,
  alt,
  className = "",
  label,
  priority = false,
  sizes = "(max-width: 900px) 100vw, 50vw",
  poster,
}: MediaFrameProps): ReactElement => {
  return (
    <div className={`ph has-media ${className}`.trim()}>
      {type === "video" ? (
        <video
          className="ph-media"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          aria-label={alt}
        />
      ) : (
        <Image
          className="ph-media"
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
        />
      )}
      {label ? <i>{label}</i> : null}
    </div>
  );
};
