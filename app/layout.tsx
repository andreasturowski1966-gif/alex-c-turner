import type { Metadata } from "next";
import GlobalUtilities from "./components/GlobalUtilities";
import "./globals.css";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Alex C. Turner | Modern Country Rock",
  description:
    "The official home of Alex C. Turner — honest stories, modern country rock, and the road that always leads home.",
  openGraph: {
    title: "Alex C. Turner | Modern Country Rock",
    description:
      "Honest stories, modern country rock, and the road that always leads home.",
    type: "website",
    siteName: "Alex C. Turner",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex C. Turner | Modern Country Rock",
    description:
      "Honest stories, modern country rock, and the road that always leads home.",
  },
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
        <GlobalUtilities />
      </body>
    </html>
  );
}
