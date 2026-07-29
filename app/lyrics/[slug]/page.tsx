import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { localePath, type Locale } from "../../i18n";
import { album, getSong, getSongs, songs } from "../data";

export function generateStaticParams() {
  return songs.map((song) => ({ slug: song.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const song = getSong(slug);
  return {
    title: song
      ? `${song.title} — Lyrics & Story | Alex C. Turner`
      : "Songs & Stories | Alex C. Turner",
    description: song
      ? `Read the original lyrics and the story behind ${song.title} by Alex C. Turner.`
      : "Lyrics and stories by Alex C. Turner.",
    alternates: song
      ? {
          languages: {
            en: `/lyrics/${slug}`,
            de: `/de/lyrics/${slug}`,
            fr: `/fr/lyrics/${slug}`,
            es: `/es/lyrics/${slug}`,
          },
        }
      : undefined,
  };
}

const copy = {
  en: { home: "HOME", back: "Back to Coming Home", all: "All songs", track: "Track", behind: "Behind the song", lyrics: "Original lyrics", previous: "Previous song", next: "Next song", more: "More songs" },
  de: { home: "STARTSEITE", back: "Zurück zu Coming Home", all: "Alle Songs", track: "Song", behind: "Die Geschichte hinter dem Song", lyrics: "Englischer Originaltext", previous: "Vorheriger Song", next: "Nächster Song", more: "Weitere Songs" },
  fr: { home: "ACCUEIL", back: "Retour à Coming Home", all: "Toutes les chansons", track: "Chanson", behind: "L’histoire de la chanson", lyrics: "Paroles originales en anglais", previous: "Chanson précédente", next: "Chanson suivante", more: "Autres chansons" },
  es: { home: "INICIO", back: "Volver a Coming Home", all: "Todas las canciones", track: "Canción", behind: "La historia detrás de la canción", lyrics: "Letra original en inglés", previous: "Canción anterior", next: "Canción siguiente", more: "Más canciones" },
} as const;

function SongNavigation({
  locale,
  previousSong,
  nextSong,
}: {
  locale: Locale;
  previousSong: ReturnType<typeof getSong>;
  nextSong: ReturnType<typeof getSong>;
}) {
  const text = copy[locale];
  return (
    <nav className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2" aria-label={text.more}>
      {previousSong ? (
        <Link href={localePath(locale, `/lyrics/${previousSong.slug}`)} className="bg-[#191715] p-6 transition-colors hover:bg-[#211e1a]">
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/38">{text.previous}</span>
          <span className="mt-2 block font-serif text-xl">← {previousSong.title}</span>
        </Link>
      ) : <span className="hidden bg-[#191715] sm:block" />}
      {nextSong ? (
        <Link href={localePath(locale, `/lyrics/${nextSong.slug}`)} className="bg-[#191715] p-6 text-right transition-colors hover:bg-[#211e1a]">
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/38">{text.next}</span>
          <span className="mt-2 block font-serif text-xl">{nextSong.title} →</span>
        </Link>
      ) : <span className="hidden bg-[#191715] sm:block" />}
    </nav>
  );
}

export function SongLyricsContent({
  slug,
  locale,
}: {
  slug: string;
  locale: Locale;
}) {
  const text = copy[locale];
  const localizedSongs = getSongs(locale);
  const song = getSong(slug, locale);
  if (!song) notFound();

  const index = localizedSongs.findIndex((item) => item.slug === slug);
  const previousSong = localizedSongs[index - 1];
  const nextSong = localizedSongs[index + 1];

  return (
    <main className="min-h-screen bg-[#141312] text-[#f5f2ec]">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#141312]/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link href={localePath(locale, "/")} className="font-serif text-lg tracking-[0.12em] transition-colors hover:text-[#d39a50]">{text.home}</Link>
          <nav className="flex items-center gap-3 sm:gap-6" aria-label={text.more}>
            <Link href={localePath(locale, "/#music")} className="hidden text-xs font-bold uppercase tracking-[0.18em] text-[#d39a50] transition-colors hover:text-[#e0ad6b] md:block">{text.back}</Link>
            <Link href={localePath(locale, "/lyrics")} className="hidden text-xs font-bold uppercase tracking-[0.2em] text-white/55 transition-colors hover:text-white sm:block">{text.all}</Link>
            <LanguageSwitcher currentLocale={locale} />
          </nav>
        </div>
      </header>

      <article className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c78a3a]">
            <Link href={localePath(locale, "/#music")} className="transition-colors hover:text-[#e0ad6b]">{album.title}</Link>{" "}· {text.track} {song.number}
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl">{song.title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/52">{song.summary}</p>

          <section className="mt-14 border-y border-[#d39a50]/20 bg-[#1b1917] px-6 py-10 sm:px-10 sm:py-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c78a3a]">{text.behind}</p>
            <p className="mt-5 font-serif text-2xl italic leading-9 text-[#d9c9b5] sm:text-3xl sm:leading-10">{song.story.teaser}</p>
            <div className="mt-8 space-y-5 text-base leading-8 text-white/64 sm:text-lg">
              {song.story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <p className="mt-8 text-right font-serif text-xl italic text-[#d39a50]">— Alex</p>
          </section>

          <div className="mt-12"><SongNavigation locale={locale} previousSong={previousSong} nextSong={nextSong} /></div>

          <div className="mt-16 border-t border-white/10 pt-12">
            <p className="mb-10 text-xs font-bold uppercase tracking-[0.3em] text-[#c78a3a]">{text.lyrics}</p>
            {song.sections.map((section, index) => (
              <section key={`${section.label}-${index}`} className="mb-12 grid gap-5 sm:grid-cols-[9rem_1fr]">
                <h2 className="pt-1 text-[0.68rem] font-bold uppercase tracking-[0.25em] text-[#c78a3a]">{section.label}</h2>
                <p className="font-serif text-xl leading-8 text-[#eee9df] sm:text-2xl sm:leading-9">
                  {section.lines.map((line, lineIndex) => <span key={lineIndex} className="block min-h-[1em]">{line || "\u00a0"}</span>)}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-20"><SongNavigation locale={locale} previousSong={previousSong} nextSong={nextSong} /></div>
        </div>
      </article>
    </main>
  );
}

export default async function SongLyricsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <SongLyricsContent slug={slug} locale="en" />;
}
