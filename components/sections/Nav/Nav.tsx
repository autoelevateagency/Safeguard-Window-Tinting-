"use client";

import { useEffect, useState, type ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";

export const Nav = (): ReactElement => {
  const { dictionary } = useLocale();
  const t = dictionary.nav;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = (): void => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    const onResize = (): void => {
      if (window.innerWidth > 900 && open) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const closeMenu = (): void => setOpen(false);

  const links = [
    { href: "#hero", label: t.home },
    { href: "#services", label: t.services },
    { href: "#gallery", label: t.gallery },
    { href: "#about", label: t.about },
    { href: "#contact", label: t.contact },
  ];

  return (
    <>
      <nav
        className={`sg-nav${scrolled ? " s" : ""}${open ? " o" : ""}`}
        id="nav"
      >
        <a
          className="logo"
          href="#hero"
          aria-label={t.brandAria}
          onClick={closeMenu}
        >
          <b>{t.brandSafe}</b>
          {t.brandGuard}
        </a>
        <div className="nl">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a className="nq" href="#contact">
          {t.requestQuote}
        </a>
        <button
          className="bg"
          type="button"
          aria-label={t.menuAria}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? t.menuClose : t.menuOpen}
        </button>
      </nav>

      <div
        className={`mobile-drawer${open ? " is-open" : ""}`}
        id="primary-nav"
        hidden={!open}
        aria-hidden={!open}
      >
        <div className="mobile-drawer-links">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </div>
        <a className="mobile-drawer-cta" href="#contact" onClick={closeMenu}>
          {t.requestQuote}
        </a>
      </div>
    </>
  );
};
