import type { Metadata } from "next";
import { PrivacyPolicyContent } from "../../datenschutz/page";

export const metadata: Metadata = { title: "Politique de confidentialité | Alex C. Turner", robots: { index: false, follow: true } };
export default function Page() { return <PrivacyPolicyContent locale="fr" />; }
