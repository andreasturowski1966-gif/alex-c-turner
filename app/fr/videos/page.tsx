import type { Metadata } from "next";
import { VideosContent } from "../../videos/page";

export const metadata: Metadata = {
  title: "Clips musicaux | Alex C. Turner",
  description: "Regardez les clips musicaux officiels en version intégrale de l’artiste country rock moderne Alex C. Turner.",
  alternates: { languages: { en: "/videos", de: "/de/videos", fr: "/fr/videos", es: "/es/videos" } },
};

export default function FrenchVideosPage() {
  return <VideosContent locale="fr" />;
}
