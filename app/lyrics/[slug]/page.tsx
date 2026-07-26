import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { album, getSong, songs } from "../data";

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

  if (!song) {
    return { title: "Lyrics | Alex C. Turner" };
  }

  return {
    title: `${song.title} Lyrics | Alex C. Turner`,
    description: `Read the lyrics to ${song.title} from ${album.title} by Alex C. Turner.`,
  };
}

export default async function SongLyricsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const song = getSong(slug);

  if (!song) {
    notFound();
  }

  const songIndex = songs.findIndex((item) => item.slug === slug);
  const previousSong = songs[songIndex - 1];
  const nextSong = songs[songIndex + 1];

  return (
    <main className="min-h-screen bg-[#141312] text-[#f5f2ec]">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#141312]/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <Link
            href="/"
            className="font-serif text-lg tracking-[0.12em] transition-colors hover:text-[#d39a50]"
          >
            HOME
          </Link>
          <nav
            className="flex items-center gap-5 sm:gap-7"
            aria-label="Song navigation"
          >
            <Link
              href="/#music"
              className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#d39a50] transition-colors hover:text-[#e0ad6b] sm:text-xs"
            >
              Back to Coming Home
            </Link>
            <Link
              href="/lyrics"
              className="hidden text-xs font-bold uppercase tracking-[0.2em] text-white/55 transition-colors hover:text-white sm:block"
            >
              All lyrics
            </Link>
          </nav>
        </div>
      </header>

      <article className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c78a3a]">
            <Link
              href="/#music"
              className="transition-colors hover:text-[#e0ad6b]"
            >
              {album.title}
            </Link>{" "}
            · Track {song.number}
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl">
            {song.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/52">
            {song.summary}
          </p>

          <div className="mt-16 border-t border-white/10 pt-12">
            {song.sections.map((section, index) => (
              <section
                key={`${section.label}-${index}`}
                className="mb-12 grid gap-5 sm:grid-cols-[9rem_1fr]"
              >
                <h2 className="pt-1 text-[0.68rem] font-bold uppercase tracking-[0.25em] text-[#c78a3a]">
                  {section.label}
                </h2>
                <p className="font-serif text-xl leading-8 text-[#eee9df] sm:text-2xl sm:leading-9">
                  {section.lines.map((line, lineIndex) => (
                    <span key={lineIndex} className="block min-h-[1em]">
                      {line || "\u00a0"}
                    </span>
                  ))}
                </p>
              </section>
            ))}
          </div>

          <nav
            className="mt-20 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2"
            aria-label="More songs"
          >
            {previousSong ? (
              <Link
                href={`/lyrics/${previousSong.slug}`}
                className="bg-[#191715] p-6 transition-colors hover:bg-[#211e1a]"
              >
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/38">
                  Previous song
                </span>
                <span className="mt-2 block font-serif text-xl">
                  ← {previousSong.title}
                </span>
              </Link>
            ) : (
              <span className="hidden bg-[#191715] sm:block" />
            )}
            {nextSong ? (
              <Link
                href={`/lyrics/${nextSong.slug}`}
                className="bg-[#191715] p-6 text-right transition-colors hover:bg-[#211e1a]"
              >
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/38">
                  Next song
                </span>
                <span className="mt-2 block font-serif text-xl">
                  {nextSong.title} →
                </span>
              </Link>
            ) : (
              <span className="hidden bg-[#191715] sm:block" />
            )}
          </nav>
        </div>
      </article>
    </main>
  );
}
