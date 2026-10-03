"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { Reveal } from "@/components/ui/Reveal";

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
        {t.items.map((item) => (
          <Reveal key={item.label} className={`ph ${item.className}`}>
            <i>{item.label}</i>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
