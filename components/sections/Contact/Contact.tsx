"use client";

import {
  useState,
  type FormEvent,
  type ReactElement,
} from "react";
import { useLocale } from "@/context/LocaleContext";
import { Reveal } from "@/components/ui/Reveal";

export const Contact = (): ReactElement => {
  const { dictionary } = useLocale();
  const t = dictionary.contact;
  const [status, setStatus] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "");

    if (!name || !/\S+@\S+\.\S+/.test(email)) {
      setStatus(t.form.error);
      return;
    }

    setStatus(t.form.success);
    form.reset();
  };

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
        <form className="sg-form" noValidate onSubmit={onSubmit}>
          <div className="fl">
            <label htmlFor="a">{t.form.name}</label>
            <input id="a" name="name" required autoComplete="name" />
          </div>
          <div className="fl">
            <label htmlFor="b">{t.form.phone}</label>
            <input id="b" name="phone" type="tel" autoComplete="tel" />
          </div>
          <div className="fl">
            <label htmlFor="c">{t.form.email}</label>
            <input
              id="c"
              name="email"
              type="email"
              required
              autoComplete="email"
            />
          </div>
          <div className="fl">
            <label htmlFor="d">{t.form.vehicle}</label>
            <input
              id="d"
              name="vehicle"
              placeholder={t.form.vehiclePlaceholder}
            />
          </div>
          <div className="fl w">
            <label htmlFor="e">{t.form.service}</label>
            <select id="e" name="service" defaultValue={t.form.serviceOptions[0]}>
              {t.form.serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="fl w">
            <label htmlFor="g">{t.form.message}</label>
            <textarea id="g" name="message" />
          </div>
          <button className="btn" type="submit">
            {t.form.submit}
          </button>
          <p id="ok" role="status">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
};
