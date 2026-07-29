import type { Metadata } from "next";
import { LyricsPageContent } from "../../lyrics/page";

export const metadata: Metadata = {
  title: "Chansons & histoires | Alex C. Turner",
  description:
    "Lisez les paroles d’Alex C. Turner et découvrez les histoires personnelles qui se cachent derrière les chansons.",
  alternates: { languages: { en: "/lyrics", de: "/de/lyrics", fr: "/fr/lyrics", es: "/es/lyrics" } },
};

export default function FrenchLyricsPage() {
  return <LyricsPageContent locale="fr" />;
}
