import type { Metadata } from "next";
import { VideosContent } from "../../videos/page";

export const metadata: Metadata = {
  title: "Musikvideos | Alex C. Turner",
  description: "Sieh dir die offiziellen Musikvideos des modernen Country-Rock-Künstlers Alex C. Turner in voller Länge an.",
  alternates: { languages: { en: "/videos", de: "/de/videos", fr: "/fr/videos", es: "/es/videos" } },
};

export default function GermanVideosPage() {
  return <VideosContent locale="de" />;
}
