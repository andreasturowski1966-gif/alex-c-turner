import type { Metadata } from "next";
import { PrivacyPolicyContent } from "../../datenschutz/page";

export const metadata: Metadata = { title: "Política de privacidad | Alex C. Turner", robots: { index: false, follow: true } };
export default function Page() { return <PrivacyPolicyContent locale="es" />; }
