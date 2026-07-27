import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex C. Turner | Modern Country Rock",
  description:
    "The official home of Alex C. Turner — honest stories, modern country rock, and the road that always leads home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <div className="border-t border-white/6 bg-[#11100e] px-5 py-5 text-center text-[#f5f2ec]">
          <p className="text-[0.65rem] leading-5 text-white/28">
            Portions of this website&apos;s content were created with the
            assistance of artificial intelligence.
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2">
            <Link
              href="/impressum"
              className="text-[0.6rem] uppercase tracking-[0.18em] text-white/30 transition-colors hover:text-white/60"
            >
              Legal Notice / Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-[0.6rem] uppercase tracking-[0.18em] text-white/30 transition-colors hover:text-white/60"
            >
              Privacy Policy / Datenschutz
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
