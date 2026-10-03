"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { Reveal } from "@/components/ui/Reveal";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { siteMedia } from "@/data/media";

export const FinalCta = (): ReactElement => {
  const { dictionary } = useLocale();
  const t = dictionary.finalCta;
  const media = siteMedia.final;

  return (
    <section id="final">
      <MediaFrame
        type={media.type}
        src={media.src}
        alt={media.alt}
        sizes="100vw"
      />
      <span className="lb" style={{ color: "#d9b8b8" }}>
        {t.eyebrow}
      </span>
      <Reveal as="h2" className="h">
        {t.title}
      </Reveal>
      <p>{t.text}</p>
      <div>
        <a
          className="btn fill"
          href="#contact"
          style={{
            background: "#fff",
            color: "var(--ob)",
            borderColor: "#fff",
          }}
        >
          {t.cta}
        </a>
      </div>
    </section>
  );
};
