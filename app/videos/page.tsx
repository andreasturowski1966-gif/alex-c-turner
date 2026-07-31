import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ExternalEmbed from "../components/ExternalEmbed";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { localePath, type Locale } from "../i18n";

export const metadata: Metadata = {
  title: "Music Videos | Alex C. Turner",
  description:
    "Watch the official long-form music videos by modern country-rock artist Alex C. Turner.",
  alternates: {
    languages: {
      en: "/videos",
      de: "/de/videos",
      fr: "/fr/videos",
      es: "/es/videos",
    },
  },
};

const channelUrl = "https://www.youtube.com/@AlexC.Turner-CountryRock";
const video = { id: "wFlogpcg8Ug", title: "I Wanna Be Free" };

const videoCopy = {
  en: {
    home: "HOME", songs: "Songs & Stories", channel: "YouTube Channel",
    eyebrow: "On film", title: "Music", titleAccent: "Videos",
    intro: "Country-rock stories carried by open roads, quiet choices, and landscapes that stretch beyond the song.",
    first: "The first official video",
    videoText: "A cinematic road trip from Virginia to California—and a story about the difference between dreaming of freedom and walking away from the people who depend on you.",
    journey: "Virginia to California", journeyTitle: "A westbound dream.",
    journeyText: "I Wanna Be Free follows the pull of the open road across America. Yet beneath the mountains, highways, and endless horizon lies a quieter question: what does freedom really mean when you have promises to keep?",
    official: "Official music video", visit: "Visit the YouTube channel", back: "Back home",
  },
  de: {
    home: "STARTSEITE", songs: "Songs & Geschichten", channel: "YouTube-Kanal",
    eyebrow: "Im Film", title: "Musik", titleAccent: "Videos",
    intro: "Country-Rock-Geschichten, getragen von offenen Straßen, stillen Entscheidungen und Landschaften, die über den Song hinausreichen.",
    first: "Das erste offizielle Video",
    videoText: "Ein filmischer Roadtrip von Virginia bis Kalifornien – und eine Geschichte über den Unterschied zwischen dem Traum von Freiheit und dem Davonlaufen vor den Menschen, die auf dich zählen.",
    journey: "Von Virginia nach Kalifornien", journeyTitle: "Ein Traum Richtung Westen.",
    journeyText: "I Wanna Be Free folgt dem Ruf der offenen Straße quer durch Amerika. Doch unter den Bergen, Highways und dem endlosen Horizont liegt eine leisere Frage: Was bedeutet Freiheit wirklich, wenn man Versprechen gegeben hat?",
    official: "Offizielles Musikvideo", visit: "Zum YouTube-Kanal", back: "Zur Startseite",
  },
  fr: {
    home: "ACCUEIL", songs: "Chansons & histoires", channel: "Chaîne YouTube",
    eyebrow: "À l’écran", title: "Clips", titleAccent: "Musicaux",
    intro: "Des récits country rock portés par les grands espaces, les choix silencieux et des paysages qui prolongent la chanson.",
    first: "Le premier clip officiel",
    videoText: "Un road trip cinématographique de la Virginie à la Californie, et une histoire sur la différence entre rêver de liberté et abandonner ceux qui comptent sur vous.",
    journey: "De la Virginie à la Californie", journeyTitle: "Un rêve tourné vers l’Ouest.",
    journeyText: "I Wanna Be Free suit l’appel de la route à travers l’Amérique. Mais derrière les montagnes, les highways et l’horizon sans fin se cache une question plus intime : que signifie vraiment la liberté lorsque l’on a fait des promesses ?",
    official: "Clip musical officiel", visit: "Voir la chaîne YouTube", back: "Retour à l’accueil",
  },
  es: {
    home: "INICIO", songs: "Canciones e historias", channel: "Canal de YouTube",
    eyebrow: "En imágenes", title: "Vídeos", titleAccent: "Musicales",
    intro: "Historias de country rock impulsadas por carreteras abiertas, decisiones silenciosas y paisajes que llevan la canción más lejos.",
    first: "El primer vídeo oficial",
    videoText: "Un viaje cinematográfico por carretera desde Virginia hasta California y una historia sobre la diferencia entre soñar con la libertad y abandonar a quienes cuentan contigo.",
    journey: "De Virginia a California", journeyTitle: "Un sueño rumbo al oeste.",
    journeyText: "I Wanna Be Free sigue la llamada de la carretera a través de Estados Unidos. Pero bajo las montañas, las autopistas y el horizonte infinito se esconde una pregunta más íntima: ¿qué significa realmente la libertad cuando has dado tu palabra?",
    official: "Vídeo musical oficial", visit: "Visitar el canal de YouTube", back: "Volver al inicio",
  },
} as const;

function VideoPlayer({ locale }: { locale: Locale }) {
  return (
    <div className="overflow-hidden bg-black shadow-2xl shadow-black/35">
      <ExternalEmbed
        provider="YouTube"
        locale={locale}
        src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`}
        title={`${video.title} — Alex C. Turner`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        containerClassName="aspect-video"
      />
    </div>
  );
}

export function VideosContent({ locale }: { locale: Locale }) {
  const copy = videoCopy[locale];

  return (
    <main className="min-h-screen bg-[#141312] text-[#f5f2ec]">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
          <Link href={localePath(locale, "/")} className="font-serif text-lg tracking-[0.12em] transition-colors hover:text-[#d39a50]">
            {copy.home}
          </Link>
          <nav className="flex items-center gap-5 sm:gap-8">
            <Link href={localePath(locale, "/lyrics")} className="hidden text-xs font-bold uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white sm:block">
              {copy.songs}
            </Link>
            <a href={channelUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-[0.2em] text-[#d39a50] transition-colors hover:text-[#e7b36f]">
              {copy.channel}
            </a>
            <LanguageSwitcher currentLocale={locale} />
          </nav>
        </div>
      </header>

      <section className="relative isolate overflow-hidden border-b border-white/10">
        <Image src="/images/gallery/alex-motorcycle.png" alt="" fill priority sizes="100vw" className="-z-30 object-cover object-center" />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(10,8,7,0.97)_0%,rgba(10,8,7,0.78)_48%,rgba(10,8,7,0.34)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#141312] via-transparent to-black/45" />
        <div className="mx-auto flex min-h-[72vh] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20">
          <div className="max-w-3xl">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.32em] text-[#d39a50]">
              <span className="h-px w-9 bg-current" aria-hidden="true" />{copy.eyebrow}
            </p>
            <h1 className="mt-6 font-serif text-6xl leading-[0.88] tracking-[-0.045em] sm:text-8xl">
              {copy.title}<span className="block italic text-[#d9c9b5]">{copy.titleAccent}</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/68 sm:text-lg">{copy.intro}</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c78a3a]">{copy.first}</p>
              <h2 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl">{video.title}</h2>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-[#c78a3a]">{copy.official}</p>
            </div>
            <p className="max-w-xl text-base leading-8 text-white/55 lg:justify-self-end">{copy.videoText}</p>
          </div>
          <div className="mt-12 sm:mt-16"><VideoPlayer locale={locale} /></div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#1b1917] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative min-h-[52vh] overflow-hidden">
            <Image src="/images/about/alex-mountain-trail.png" alt="" fill sizes="(max-width: 1024px) 100vw, 52vw" className="object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c78a3a]">{copy.journey}</p>
            <h2 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl">{copy.journeyTitle}</h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/58">{copy.journeyText}</p>
            <a href={`${channelUrl}/videos`} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex min-h-12 items-center justify-center bg-[#a9692f] px-7 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#c17e3c]">
              {copy.visit}
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-14 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-3xl">Alex C. Turner</p>
          <div className="flex flex-wrap gap-7 text-xs font-bold uppercase tracking-[0.2em] text-white/55">
            <a href={channelUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#d39a50]">YouTube</a>
            <Link href={localePath(locale, "/lyrics")} className="transition-colors hover:text-[#d39a50]">{copy.songs}</Link>
            <Link href={localePath(locale, "/")} className="transition-colors hover:text-[#d39a50]">{copy.back}</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default function VideosPage() {
  return <VideosContent locale="en" />;
}
