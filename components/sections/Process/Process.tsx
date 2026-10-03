"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { Reveal } from "@/components/ui/Reveal";

export const Process = (): ReactElement => {
  const { dictionary } = useLocale();
  const t = dictionary.process;

  return (
    <section id="process">
      <Reveal as="h2" className="h">
        {t.title}
      </Reveal>
      <div className="pl">
        {t.steps.map((step) => (
          <Reveal key={step.number}>
            <span className="num">{step.number}</span>
            <h4>{step.title}</h4>
            <p>{step.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
