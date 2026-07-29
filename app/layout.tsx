import type { Metadata } from "next";
import GlobalUtilities from "./components/GlobalUtilities";
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
        <GlobalUtilities />
      </body>
    </html>
  );
}
