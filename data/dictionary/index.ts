import { en, type Dictionary } from "./en";
import { ur } from "./ur";

export type Locale = "EN" | "UR";

export const dictionaries: Record<Locale, Dictionary> = {
  EN: en,
  UR: ur,
};

export const defaultLocale: Locale = "EN";

export const getDictionary = (locale: Locale): Dictionary =>
  dictionaries[locale] ?? en;

export type { Dictionary };
