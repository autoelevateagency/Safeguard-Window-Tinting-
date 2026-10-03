"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { Reveal } from "@/components/ui/Reveal";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { siteMedia } from "@/data/media";

export const About = (): ReactElement => {
  const { dictionary } = useLocale();
  const t = dictionary.about;
  const media = siteMedia.about;

  return (
    <section id="about">
      <MediaFrame
        type={media.type}
        src={media.src}
        alt={media.alt}
        label={t.photoLabel}
        poster={siteMedia.aboutPoster.src}
        sizes="(max-width: 900px) 100vw, 55vw"
      />
      <div className="ab">
        <span className="lb">{t.eyebrow}</span>
        <Reveal as="h2" className="h">
          {t.title}
        </Reveal>
        <Reveal as="p">{t.p1}</Reveal>
        <Reveal as="p">{t.p2}</Reveal>
        <div className="st">
          {t.stats.map((stat) => (
            <div key={stat.title}>
              <b>{stat.title}</b>
              {stat.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
