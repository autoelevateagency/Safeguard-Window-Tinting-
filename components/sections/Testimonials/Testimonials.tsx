"use client";

import {
  useCallback,
  useEffect,
  useState,
  type ReactElement,
} from "react";
import { useLocale } from "@/context/LocaleContext";

export const Testimonials = (): ReactElement => {
  const { dictionary } = useLocale();
  const t = dictionary.testimonials;
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const show = useCallback(
    (next: number) => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex(next);
        setVisible(true);
      }, 350);
    },
    []
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      show((index + 1) % t.items.length);
    }, 6200);
    return () => window.clearTimeout(timer);
  }, [index, show, t.items.length]);

  const current = t.items[index];

  return (
    <section id="quote">
      <div className="q" aria-hidden="true">
        “
      </div>
      <p className="lb" style={{ marginBottom: 40 }}>
        {t.label}
      </p>
      <blockquote
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(10px)",
        }}
      >
        {current.quote}
      </blockquote>
      <div className="qm">
        <div>
          <div
            style={{
              fontSize: 14,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            {current.name}
          </div>
          <div className="lb" style={{ marginTop: 6 }}>
            {current.detail}
          </div>
        </div>
        <div className="qb">
          {t.items.map((_, k) => (
            <button
              key={k}
              type="button"
              aria-label={`Testimonial ${k + 1}`}
              className={k < index ? "d" : k === index ? "on" : ""}
              onClick={() => show(k)}
            >
              <span />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
