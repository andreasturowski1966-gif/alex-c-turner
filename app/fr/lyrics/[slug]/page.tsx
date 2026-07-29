import type { Metadata } from "next";
import { SongLyricsContent } from "../../../lyrics/[slug]/page";
import { getSong, songs } from "../../../lyrics/data";

export function generateStaticParams() {
  return songs.map((song) => ({ slug: song.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const song = getSong(slug, "fr");
  return {
    title: song ? `${song.title} — Paroles & histoire | Alex C. Turner` : "Chansons & histoires | Alex C. Turner",
    description: song ? `Lisez les paroles originales en anglais et découvrez l’histoire personnelle de « ${song.title} ».` : "Paroles et histoires d’Alex C. Turner.",
    alternates: song ? { languages: { en: `/lyrics/${slug}`, de: `/de/lyrics/${slug}`, fr: `/fr/lyrics/${slug}`, es: `/es/lyrics/${slug}` } } : undefined,
  };
}

export default async function FrenchSongPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <SongLyricsContent slug={slug} locale="fr" />;
}
