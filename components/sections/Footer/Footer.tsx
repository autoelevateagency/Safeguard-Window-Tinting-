"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";

export const Footer = (): ReactElement => {
  const { dictionary } = useLocale();
  const t = dictionary.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="sg-footer">
      <div className="fb">
        <b>{t.brandSafe}</b>
        {t.brandGuard}
      </div>
      <div className="fg">
        <div style={{ maxWidth: "34ch" }}>{t.blurb}</div>
        <div>
          <div className="lb">{t.navigate}</div>
          <a href="#services">{t.links.services}</a>
          <br />
          <a href="#gallery">{t.links.gallery}</a>
          <br />
          <a href="#about">{t.links.about}</a>
          <br />
          <a href="#contact">{t.links.contact}</a>
        </div>
        <div>
          <div className="lb">{t.contact}</div>
          {t.phone}
          <br />
          {t.email}
          <br />
          {t.address}
        </div>
        <div>
          <div className="lb">{t.hoursSocial}</div>
          {t.hours}
          <br />
          <a href="#">{t.instagram}</a>
          &nbsp;&nbsp;
          <a href="#">{t.facebook}</a>
        </div>
      </div>
      <div className="cp">
        <span>{t.copyright.replace("{year}", String(year))}</span>
        <span>{t.rights}</span>
      </div>
    </footer>
  );
};
