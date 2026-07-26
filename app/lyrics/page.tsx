import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { album, songs } from "./data";

export const metadata: Metadata = {
  title: "Lyrics | Alex C. Turner",
  description: "Lyrics from Coming Home by Alex C. Turner.",
};

export default function LyricsPage() {
  return (
    <main className="min-h-screen bg-[#141312] text-[#f5f2ec]">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
          <Link
            href="/"
            className="font-serif text-lg tracking-[0.12em] transition-colors hover:text-[#d39a50]"
          >
            HOME
          </Link>
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-[0.2em] text-white/65 transition-colors hover:text-white"
          >
            Back home
          </Link>
        </div>
      </header>

      <section className="relative isolate overflow-hidden border-b border-white/10">
        <Image
          src="/images/live/alex-live-acoustic.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover object-[center_32%]"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(15,13,12,0.96)_0%,rgba(15,13,12,0.72)_52%,rgba(15,13,12,0.35)_100%)]" />
        <div className="mx-auto flex min-h-[58vh] max-w-7xl items-end px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#d39a50]">
              Words &amp; stories
            </p>
            <h1 className="mt-5 font-serif text-6xl leading-none tracking-[-0.04em] sm:text-8xl">
              Lyrics
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/72">
              Every song begins with a person, a memory, or a road worth
              following.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 border-b border-white/10 pb-12 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c78a3a]">
                Debut album
              </p>
              <p className="mt-3 text-sm text-white/45">Four songs available</p>
            </div>
            <div>
              <h2 className="font-serif text-5xl tracking-[-0.03em] sm:text-7xl">
                {album.title}
              </h2>
              <p className="mt-5 max-w-2xl font-serif text-2xl italic leading-9 text-[#d9c9b5]">
                “{album.theme}”
              </p>
            </div>
          </div>

          <div className="divide-y divide-white/10">
            {songs.map((song) => (
              <Link
                key={song.slug}
                href={`/lyrics/${song.slug}`}
                className="group grid gap-4 py-8 transition-colors hover:text-[#d39a50] sm:grid-cols-[4rem_1fr_auto] sm:items-center"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-white/35">
                  {song.number}
                </span>
                <span>
                  <span className="block font-serif text-3xl text-[#f5f2ec] transition-colors group-hover:text-[#d39a50] sm:text-4xl">
                    {song.title}
                  </span>
                  <span className="mt-2 block max-w-2xl text-sm leading-6 text-white/48">
                    {song.summary}
                  </span>
                </span>
                <span
                  className="text-2xl text-white/35 transition-transform group-hover:translate-x-1 group-hover:text-[#d39a50]"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
