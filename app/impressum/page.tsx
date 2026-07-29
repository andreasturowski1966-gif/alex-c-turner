import type { Metadata } from "next";
import Link from "next/link";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { localePath, type Locale } from "../i18n";

export const metadata: Metadata = {
  title: "Legal Notice | Alex C. Turner",
  robots: { index: false, follow: true },
};

const copy = {
  en: { back: "Back home", eyebrow: "Legal notice", title: "Legal Notice / Impressum", info: "Information pursuant to Section 5 DDG and Section 18(1) MStV", owner: "Proprietor", country: "Germany", contact: "Contact", email: "Email" },
  de: { back: "Zur Startseite", eyebrow: "Rechtliche Hinweise", title: "Impressum", info: "Angaben gemäß § 5 DDG und § 18 Abs. 1 MStV", owner: "Inhaber", country: "Deutschland", contact: "Kontakt", email: "E-Mail" },
  fr: { back: "Retour à l’accueil", eyebrow: "Informations légales", title: "Mentions légales / Impressum", info: "Informations conformément à l’article 5 DDG et à l’article 18, paragraphe 1, MStV", owner: "Propriétaire", country: "Allemagne", contact: "Contact", email: "E-mail" },
  es: { back: "Volver al inicio", eyebrow: "Información legal", title: "Aviso legal / Impressum", info: "Información conforme al artículo 5 DDG y al artículo 18, apartado 1, MStV", owner: "Titular", country: "Alemania", contact: "Contacto", email: "Correo electrónico" },
} as const;

export function LegalNoticeContent({ locale }: { locale: Locale }) {
  const text = copy[locale];
  return (
    <main className="min-h-screen bg-[#11100e] px-5 py-16 text-[#f5f2ec] sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center justify-between gap-5">
          <Link href={localePath(locale, "/")} className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#c78a3a] transition-colors hover:text-[#dca45c]">← {text.back}</Link>
          <LanguageSwitcher currentLocale={locale} />
        </div>
        <header className="mt-12 border-b border-white/10 pb-10">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#c78a3a]">{text.eyebrow}</p>
          <h1 className="mt-4 font-serif text-5xl tracking-[-0.04em] sm:text-7xl">{text.title}</h1>
        </header>
        <div className="mt-12 space-y-10 text-sm leading-7 text-white/65 sm:text-base">
          <section>
            <h2 className="font-serif text-2xl text-[#f5f2ec]">{text.info}</h2>
            <address className="mt-4 not-italic">
              Alex Turow Records<br />{text.owner}: Andreas Turowski<br />Meinrad-Miltenberger-Weg 1<br />58313 Herdecke<br />{text.country}
            </address>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-[#f5f2ec]">{text.contact}</h2>
            <p className="mt-4">{text.email}:{" "}<a href="mailto:andreas.turowski1966@gmail.com" className="text-[#c78a3a] underline decoration-[#c78a3a]/35 underline-offset-4 transition-colors hover:text-[#dca45c]">andreas.turowski1966@gmail.com</a></p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default function LegalNoticePage() {
  return <LegalNoticeContent locale="en" />;
}
