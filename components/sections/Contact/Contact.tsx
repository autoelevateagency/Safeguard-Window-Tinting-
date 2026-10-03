"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { Reveal } from "@/components/ui/Reveal";

export const Contact = (): ReactElement => {
  const { dictionary } = useLocale();
  const t = dictionary.contact;

  return (
    <section id="contact">
      <Reveal as="h2" className="h">
        {t.title}
      </Reveal>
      <div className="ct">
        <div className="info">
          <div>
            <div className="lb">{t.visit}</div>
            <p>{t.visitValue}</p>
          </div>
          <div>
            <div className="lb">{t.call}</div>
            <p>{t.callValue}</p>
          </div>
          <div>
            <div className="lb">{t.email}</div>
            <p>{t.emailValue}</p>
          </div>
          <div>
            <div className="lb">{t.hours}</div>
            <p>{t.hoursValue}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
