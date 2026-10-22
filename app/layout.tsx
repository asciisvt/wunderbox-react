import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
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
      className={`${fredoka.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-parchment-100 text-onyx-950">
        {children}
        <footer className="flex flex-row justify-between px-8 py-4 bg-parchment-100 border-t border-onyx-900 text-rosy-copper-500">
          <p className="font-fredoka font-medium">wunderbox.games</p>
          <p className="font-nunito font-semibold">&copy; 2024 Wunderbox</p>
        </footer>
        <div className="grain-overlay"></div>
      </body>
    </html>
  );
}
