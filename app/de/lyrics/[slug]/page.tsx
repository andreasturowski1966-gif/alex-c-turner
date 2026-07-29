import type { Metadata } from "next";
import { SongLyricsContent } from "../../../lyrics/[slug]/page";
import { getSong, songs } from "../../../lyrics/data";

export function generateStaticParams() {
  return songs.map((song) => ({ slug: song.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const song = getSong(slug, "de");
  return {
    title: song ? `${song.title} — Songtext & Geschichte | Alex C. Turner` : "Songs & Geschichten | Alex C. Turner",
    description: song ? `Lies den englischen Originaltext und die persönliche Geschichte hinter ${song.title}.` : "Songtexte und Geschichten von Alex C. Turner.",
    alternates: song ? { languages: { en: `/lyrics/${slug}`, de: `/de/lyrics/${slug}`, fr: `/fr/lyrics/${slug}`, es: `/es/lyrics/${slug}` } } : undefined,
  };
}

export default async function GermanSongPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <SongLyricsContent slug={slug} locale="de" />;
}
