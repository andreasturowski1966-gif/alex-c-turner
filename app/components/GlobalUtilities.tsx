"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localePath, type Locale } from "../i18n";

const copy: Record<Locale, { ai: string }> = {
  en: {
    ai: "Alex C. Turner is a fictional music and storytelling project created with the assistance of artificial intelligence. At its heart, the lyrics and stories are rooted in genuine human creativity and lived experience. Portions of this website’s content were also created with the assistance of artificial intelligence.",
  },
  de: {
    ai: "Alex C. Turner ist ein fiktives Musik- und Erzählprojekt, das mit Unterstützung künstlicher Intelligenz geschaffen wurde. Im Kern beruhen die Songtexte und Geschichten auf echter menschlicher Kreativität und gelebten Erfahrungen. Auch Teile der Inhalte dieser Website wurden mithilfe künstlicher Intelligenz erstellt.",
  },
  fr: {
    ai: "Alex C. Turner est un projet fictif de musique et de narration créé avec l’aide de l’intelligence artificielle. Au cœur du projet, les paroles et les histoires s’enracinent dans une créativité profondément humaine et des expériences vécues. Certaines parties du contenu de ce site ont également été créées avec l’aide de l’intelligence artificielle.",
  },
  es: {
    ai: "Alex C. Turner es un proyecto ficticio de música y narrativa creado con ayuda de inteligencia artificial. En esencia, las letras y las historias nacen de una creatividad genuinamente humana y de experiencias vividas. Parte del contenido de este sitio web también se creó con ayuda de inteligencia artificial.",
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
