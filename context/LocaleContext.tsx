"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type ReactElement,
} from "react";
import {
  defaultLocale,
  getDictionary,
  type Dictionary,
  type Locale,
} from "@/data/dictionary";

type LocaleContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
  dir: "ltr" | "rtl";
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

type LocaleProviderProps = {
  children: ReactNode;
};

export const LocaleProvider = ({
  children,
}: LocaleProviderProps): ReactElement => {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const dictionary = getDictionary(locale);
  const dir = locale === "UR" ? "rtl" : "ltr";

  return (
    <LocaleContext.Provider value={{ locale, dictionary, setLocale, dir }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextValue => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
};
