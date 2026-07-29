import type { Metadata } from "next";
import { LyricsPageContent } from "../../lyrics/page";

export const metadata: Metadata = {
  title: "Songs & Geschichten | Alex C. Turner",
  description:
    "Lies Alex C. Turners Songtexte und entdecke die persönlichen Geschichten hinter den Songs.",
  alternates: { languages: { en: "/lyrics", de: "/de/lyrics", fr: "/fr/lyrics", es: "/es/lyrics" } },
};

export default function GermanLyricsPage() {
  return <LyricsPageContent locale="de" />;
}
