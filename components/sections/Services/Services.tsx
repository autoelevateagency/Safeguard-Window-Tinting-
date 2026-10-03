"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { Reveal } from "@/components/ui/Reveal";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { siteMedia } from "@/data/media";

export const Services = (): ReactElement => {
  const { dictionary } = useLocale();
  const t = dictionary.services;

  return (
    <section id="services">
      <div className="sv-top">
        <Reveal as="h2" className="h">
          {t.title}
        </Reveal>
        <Reveal as="p">{t.intro}</Reveal>
      </div>
      {t.items.map((item, index) => {
        const media = siteMedia.services[index];
        return (
          <Reveal key={item.number} className="row">
            <span className="n">{item.number}</span>
            <h3>{item.title}</h3>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <span className="ar" aria-hidden="true">
              →
            </span>
            {media ? (
              <MediaFrame
                type={media.type}
                src={media.src}
                alt={media.alt}
                sizes="220px"
              />
            ) : null}
          </Reveal>
        );
      })}
    </section>
  );
};
