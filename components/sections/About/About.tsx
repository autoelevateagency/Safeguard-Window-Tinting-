"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { Reveal } from "@/components/ui/Reveal";

export const About = (): ReactElement => {
  const { dictionary } = useLocale();
  const t = dictionary.about;

  return (
    <section id="about">
      <div className="ph">
        <i>{t.photoLabel}</i>
      </div>
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
