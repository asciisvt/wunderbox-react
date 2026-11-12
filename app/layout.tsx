import type { Metadata } from "next";
import { Fredoka, Nunito, Oswald } from "next/font/google";
import Footer from "./_components/Footer";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "wunderbox.games",
  description: "wunderbox.games - Indie games, blog, and developer content.",
  keywords: ["wunderbox", "games", "indie", "blog", "developer", "nextjs"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="bg-onyx-900 flex min-h-screen flex-col">
        <div className="grain-overlay"></div>
        <div className="grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
