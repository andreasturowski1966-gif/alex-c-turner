import type { Metadata } from "next";
import { VideosContent } from "../../videos/page";

export const metadata: Metadata = {
  title: "Vídeos musicales | Alex C. Turner",
  description: "Disfruta de los vídeos musicales oficiales completos del artista de country rock moderno Alex C. Turner.",
  alternates: { languages: { en: "/videos", de: "/de/videos", fr: "/fr/videos", es: "/es/videos" } },
};

export default function SpanishVideosPage() {
  return <VideosContent locale="es" />;
}
