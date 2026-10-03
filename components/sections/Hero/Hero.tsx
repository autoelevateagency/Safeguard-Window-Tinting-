"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";

export const Hero = (): ReactElement => {
  const { dictionary } = useLocale();
  const t = dictionary.hero;

  return (
    <header id="hero">
      <div className="ph" aria-hidden="true" />
      <div className="hv" aria-hidden="true" />
      <div className="lb hm">{t.sideLabel}</div>
      <div className="hc">
        <h1 className="h">
          <span>
            <em>{t.line1}</em>
          </span>
          <span>
            <em>{t.line2}</em>
          </span>
        </h1>
        <div className="hrow">
          <div className="lb" style={{ color: "#c9c9c6", maxWidth: "30ch" }}>
            {t.tagline}
          </div>
          <div className="hb">
            <a className="btn fill" href="#contact">
              {t.ctaPrimary}
            </a>
            <a className="ul" href="#gallery">
              {t.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
