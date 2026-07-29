import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { localePath, type Locale } from "../i18n";
import { album, getSongs } from "./data";

export const metadata: Metadata = {
  title: "Songs & Stories | Alex C. Turner",
  description:
    "Read Alex C. Turner's lyrics and discover the stories behind the songs.",
  alternates: {
    languages: {
      en: "/lyrics",
      de: "/de/lyrics",
      fr: "/fr/lyrics",
      es: "/es/lyrics",
    },
  },
};

const copy = {
  en: {
    home: "HOME",
    back: "Back to music",
    eyebrow: "Words, memories & roads",
    title: "Songs & Stories",
    intro:
      "Read the original lyrics and hear Alex tell the people, choices, and memories behind every song.",
    album: "Upcoming debut album",
    available: "Four songs available",
    theme: album.theme,
    open: "Open song and story",
  },
  de: {
    home: "STARTSEITE",
    back: "Zurück zur Musik",
    eyebrow: "Worte, Erinnerungen & Wege",
    title: "Songs & Geschichten",
    intro:
      "Lies die englischen Originaltexte und erfahre von Alex, welche Menschen, Entscheidungen und Erinnerungen hinter den Songs stehen.",
    album: "Kommendes Debütalbum",
    available: "Vier Songs verfügbar",
    theme: "Zuhause ist kein Ort. Es sind die Menschen, zu denen man zurückkehrt.",
    open: "Song und Geschichte öffnen",
  },
  fr: {
    home: "ACCUEIL",
    back: "Retour à la musique",
    eyebrow: "Des mots, des souvenirs & des routes",
    title: "Chansons & histoires",
    intro:
      "Lisez les paroles originales en anglais et découvrez les personnes, les choix et les souvenirs qui se cachent derrière chaque chanson.",
    album: "Premier album à venir",
    available: "Quatre chansons disponibles",
    theme:
      "Le foyer n’est pas un lieu. Il est fait des personnes vers lesquelles on revient.",
    open: "Ouvrir la chanson et son histoire",
  },
  es: {
    home: "INICIO",
    back: "Volver a la música",
    eyebrow: "Palabras, recuerdos y caminos",
    title: "Canciones e historias",
    intro:
      "Lee las letras originales en inglés y descubre las personas, decisiones y recuerdos que hay detrás de cada canción.",
    album: "Próximo álbum de debut",
    available: "Cuatro canciones disponibles",
    theme:
      "El hogar no es un lugar. Son las personas a las que siempre regresas.",
    open: "Abrir canción e historia",
  },
} as const;

export function LyricsPageContent({ locale }: { locale: Locale }) {
  const text = copy[locale];
  const songs = getSongs(locale);

  return (
    <main className="min-h-screen bg-[#141312] text-[#f5f2ec]">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-6 sm:px-8">
          <Link href={localePath(locale, "/")} className="font-serif text-lg tracking-[0.12em] transition-colors hover:text-[#d39a50]">
            {text.home}
          </Link>
          <div className="flex items-center gap-3 sm:gap-5">
            <Link href={localePath(locale, "/#music")} className="hidden text-xs font-bold uppercase tracking-[0.2em] text-white/65 transition-colors hover:text-white sm:block">
              {text.back}
            </Link>
            <LanguageSwitcher currentLocale={locale} />
          </div>
        </div>
      </header>

      <section className="relative isolate overflow-hidden border-b border-white/10">
        <Image src="/images/live/alex-live-acoustic.png" alt="" fill priority sizes="100vw" className="-z-30 object-cover object-[center_32%]" />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(15,13,12,0.96)_0%,rgba(15,13,12,0.72)_52%,rgba(15,13,12,0.35)_100%)]" />
        <div className="mx-auto flex min-h-[58vh] max-w-7xl items-end px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#d39a50]">{text.eyebrow}</p>
            <h1 className="mt-5 font-serif text-6xl leading-none tracking-[-0.04em] sm:text-8xl">{text.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">{text.intro}</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 border-b border-white/10 pb-12 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c78a3a]">{text.album}</p>
              <p className="mt-3 text-sm text-white/45">{text.available}</p>
            </div>
            <div>
              <h2 className="font-serif text-5xl tracking-[-0.03em] sm:text-7xl">{album.title}</h2>
              <p className="mt-5 max-w-2xl font-serif text-2xl italic leading-9 text-[#d9c9b5]">“{text.theme}”</p>
            </div>
          </div>

          <div className="divide-y divide-white/10">
            {songs.map((song) => (
              <Link key={song.slug} href={localePath(locale, `/lyrics/${song.slug}`)} aria-label={`${text.open}: ${song.title}`} className="group grid gap-4 py-8 transition-colors hover:text-[#d39a50] sm:grid-cols-[4rem_1fr_auto] sm:items-center">
                <span className="text-xs font-bold tracking-[0.2em] text-white/35">{song.number}</span>
                <span>
                  <span className="block font-serif text-3xl text-[#f5f2ec] transition-colors group-hover:text-[#d39a50] sm:text-4xl">{song.title}</span>
                  <span className="mt-2 block max-w-2xl text-sm leading-6 text-white/48">{song.story.teaser}</span>
                </span>
                <span className="text-2xl text-white/35 transition-transform group-hover:translate-x-1 group-hover:text-[#d39a50]" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function LyricsPage() {
  return <LyricsPageContent locale="en" />;
}
