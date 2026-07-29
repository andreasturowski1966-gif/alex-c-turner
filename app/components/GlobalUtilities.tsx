"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localePath, type Locale } from "../i18n";

const copy: Record<Locale, { ai: string }> = {
  en: {
    ai: "Portions of this website's content were created with the assistance of artificial intelligence.",
  },
  de: {
    ai: "Teile der Inhalte dieser Website wurden mit Unterstützung künstlicher Intelligenz erstellt.",
  },
  fr: {
    ai: "Certaines parties du contenu de ce site ont été créées avec l’aide de l’intelligence artificielle.",
  },
  es: {
    ai: "Parte del contenido de este sitio web se creó con ayuda de inteligencia artificial.",
  },
};

export default function GlobalUtilities() {
  const pathname = usePathname();
  const locale =
    locales.find(
      (candidate) =>
        candidate !== "en" &&
        (pathname === `/${candidate}` || pathname.startsWith(`/${candidate}/`)),
    ) ?? "en";

  return (
    <div className="border-t border-white/6 bg-[#11100e] px-5 py-5 text-center text-[#f5f2ec]">
      <p className="text-[0.65rem] leading-5 text-white/28">
        {copy[locale].ai}
      </p>
      <div className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2">
        <Link
          href={localePath(locale, "/impressum")}
          className="text-[0.6rem] uppercase tracking-[0.18em] text-white/30 transition-colors hover:text-white/60"
        >
          Legal Notice / Impressum
        </Link>
        <Link
          href={localePath(locale, "/datenschutz")}
          className="text-[0.6rem] uppercase tracking-[0.18em] text-white/30 transition-colors hover:text-white/60"
        >
          Privacy Policy / Datenschutz
        </Link>
      </div>
    </div>
  );
}
