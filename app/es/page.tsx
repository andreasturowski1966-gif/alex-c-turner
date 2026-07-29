import type { Metadata } from "next";
import { HomeContent } from "../page";

export const metadata: Metadata = {
  title: "Alex C. Turner | Country Rock moderno",
  description:
    "La web oficial de Alex C. Turner: country rock moderno, historias sinceras y el camino que siempre lleva de vuelta a casa.",
  alternates: { languages: { en: "/", de: "/de", fr: "/fr", es: "/es" } },
};

export default function SpanishHomePage() {
  return <HomeContent locale="es" />;
}
