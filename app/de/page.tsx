import type { Metadata } from "next";
import { HomeContent } from "../page";

export const metadata: Metadata = {
  title: "Alex C. Turner | Moderner Country Rock",
  description:
    "Die offizielle Website von Alex C. Turner – moderner Country Rock, ehrliche Geschichten und der Weg, der immer wieder nach Hause führt.",
  alternates: { languages: { en: "/", de: "/de", fr: "/fr", es: "/es" } },
};

export default function GermanHomePage() {
  return <HomeContent locale="de" />;
}
