"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { Reveal } from "@/components/ui/Reveal";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { siteMedia } from "@/data/media";

export const Gallery = (): ReactElement => {
  const { dictionary } = useLocale();
  const t = dictionary.gallery;

  return (
    <section id="gallery">
      <div className="gh">
        <Reveal as="h2" className="h">
          {t.title}
        </Reveal>
        <a className="ul" href="#contact">
          {t.cta}
        </a>
      </div>
      <div className="gg">
        {siteMedia.gallery.map((media, index) => (
          <Reveal key={media.src} className={`gg-cell ${media.className}`}>
            <MediaFrame
              type={media.type}
              src={media.src}
              alt={media.alt}
              label={t.items[index]?.label}
              sizes="(max-width: 900px) 100vw, 70vw"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
};
