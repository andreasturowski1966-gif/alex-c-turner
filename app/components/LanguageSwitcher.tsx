"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "../i18n";

const options = [
  { locale: "en", flag: "🇺🇸", label: "English", code: "EN" },
  { locale: "de", flag: "🇩🇪", label: "Deutsch", code: "DE" },
  { locale: "fr", flag: "🇫🇷", label: "Français", code: "FR" },
  { locale: "es", flag: "🇪🇸", label: "Español", code: "ES" },
] as const;

function pathForLocale(pathname: string, locale: Locale) {
  const prefix = locales.find(
    (candidate) =>
      candidate !== "en" &&
      (pathname === `/${candidate}` || pathname.startsWith(`/${candidate}/`)),
  );
  const path = prefix
    ? pathname === `/${prefix}`
      ? "/"
      : pathname.slice(prefix.length + 1)
    : pathname;

  if (locale === "en") return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export default function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: Locale;
}) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const saved = window.localStorage.getItem("alex-language");
    const preferred =
      locales.find((locale) => locale === saved) ??
      window.navigator.languages
        .map((language) => language.toLowerCase().split("-")[0])
        .find((language): language is Locale =>
          locales.includes(language as Locale),
        ) ??
      "en";

    document.documentElement.lang = currentLocale;
    if (preferred !== currentLocale) {
      router.replace(pathForLocale(pathname, preferred));
    }
  }, [currentLocale, pathname, router]);

  const ariaLabel = {
    en: "Choose language",
    de: "Sprache wählen",
    fr: "Choisir la langue",
    es: "Elegir idioma",
  }[currentLocale];

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-white/15 bg-black/25 p-1 backdrop-blur-sm"
      aria-label={ariaLabel}
    >
      {options.map((option) => (
        <a
          key={option.locale}
          href={pathForLocale(pathname, option.locale)}
          onClick={() =>
            window.localStorage.setItem("alex-language", option.locale)
          }
          lang={option.locale}
          hrefLang={option.locale}
          aria-current={currentLocale === option.locale ? "page" : undefined}
          aria-label={option.label}
          title={option.label}
          className={`inline-flex min-h-9 items-center gap-1.5 rounded-full px-2 text-[0.62rem] font-bold tracking-[0.1em] transition-colors ${
            currentLocale === option.locale
              ? "bg-white text-[#17120e]"
              : "text-white/60 hover:bg-white/10 hover:text-white"
          }`}
        >
          <span aria-hidden="true">{option.flag}</span>
          <span className="hidden sm:inline">{option.code}</span>
        </a>
      ))}
    </div>
  );
}
