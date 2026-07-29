import type { Metadata } from "next";
import { SongLyricsContent } from "../../../lyrics/[slug]/page";
import { getSong, songs } from "../../../lyrics/data";

export function generateStaticParams() {
  return songs.map((song) => ({ slug: song.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const song = getSong(slug, "es");
  return {
    title: song ? `${song.title} — Letra e historia | Alex C. Turner` : "Canciones e historias | Alex C. Turner",
    description: song ? `Lee la letra original en inglés y descubre la historia personal de «${song.title}».` : "Letras e historias de Alex C. Turner.",
    alternates: song ? { languages: { en: `/lyrics/${slug}`, de: `/de/lyrics/${slug}`, fr: `/fr/lyrics/${slug}`, es: `/es/lyrics/${slug}` } } : undefined,
  };
}

export default async function SpanishSongPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <SongLyricsContent slug={slug} locale="es" />;
}
