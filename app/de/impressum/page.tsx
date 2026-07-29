import type { Metadata } from "next";
import { LegalNoticeContent } from "../../impressum/page";

export const metadata: Metadata = { title: "Impressum | Alex C. Turner", robots: { index: false, follow: true } };
export default function Page() { return <LegalNoticeContent locale="de" />; }
