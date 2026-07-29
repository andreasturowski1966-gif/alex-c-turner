import type { Metadata } from "next";
import { HomeContent } from "../page";

export const metadata: Metadata = {
  title: "Alex C. Turner | Country Rock moderne",
  description:
    "Le site officiel d’Alex C. Turner : du Country Rock moderne, des histoires sincères et cette route qui ramène toujours chez soi.",
  alternates: { languages: { en: "/", de: "/de", fr: "/fr", es: "/es" } },
};

export default function FrenchHomePage() {
  return <HomeContent locale="fr" />;
}
