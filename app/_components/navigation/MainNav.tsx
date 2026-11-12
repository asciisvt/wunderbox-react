"use client";

import { Icon } from "@iconify-icon/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import WunderLogo from "../WunderLogo";

const navItems = [
  { href: "/software", label: "software" },
  { href: "/blog", label: "blog" },
  { href: "/#about", label: "about" },
  { href: "/contact", label: "contact" },
];

export default function MainNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="font-fredoka text-onyx-900 sticky top-0 z-50 px-4 pt-3 pb-4 sm:px-8"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }}
    >
      <div className="after:bg-rosy-copper-500 relative isolate">
        <div className="border-onyx-900 bg-parchment-100 flex min-h-16 items-stretch border-2 shadow-[5px_5px_0_var(--color-onyx-900)]">
          <Link
            href="/"
            aria-label="Wunderbox home"
            onClick={() => setMenuOpen(false)}
            className="bg-onyx-900 text-parchment-100 hover:text-banana-cream-400 focus-visible:outline-banana-cream-400 flex shrink-0 items-center px-4 transition-colors focus-visible:outline-4 focus-visible:outline-offset-[-4px] sm:px-6"
          >
            <WunderLogo className="h-10 w-auto" />
          </Link>

          <div className="flex flex-1 items-center justify-end px-4 md:hidden">
            <button
              ref={menuButtonRef}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="main-nav-links"
              onClick={() => setMenuOpen(!menuOpen)}
              className="border-onyx-900 bg-banana-cream-400 focus-visible:outline-rosy-copper-500 flex items-center gap-2 border-1 px-3 py-2 text-sm font-semibold shadow-[3px_3px_0_var(--color-onyx-900)] transition-transform hover:-translate-y-0.5 focus-visible:outline-4 focus-visible:outline-offset-4"
            >
              {menuOpen ? "close" : "menu"}
              <span aria-hidden="true" className="text-xl leading-none">
                {menuOpen ? "×" : "☰"}
              </span>
            </button>
          </div>

          <div
            id="main-nav-links"
            className={`${menuOpen ? "flex" : "hidden"} border-onyx-900 bg-parchment-100 absolute top-full right-0 left-0 flex-col border-b-2 shadow-[0_4px_0_var(--color-rosy-copper-500)] md:static md:flex md:flex-1 md:flex-row md:items-stretch md:border-0 md:shadow-none`}
          >
            <ul className="flex flex-col md:flex-1 md:flex-row">
              {navItems.map((item) => {
                const isActive =
                  !item.href.includes("#") &&
                  (pathname === item.href ||
                    pathname.startsWith(`${item.href}/`));

                return (
                  <li key={item.href} className="flex">
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                      className={`border-onyx-900 focus-visible:outline-rosy-copper-500 flex w-full items-center border-b-2 px-6 py-3 text-lg font-semibold transition-colors focus-visible:relative focus-visible:z-10 focus-visible:outline-4 focus-visible:outline-offset-[-4px] md:border-r-2 md:border-b-0 md:px-4 lg:px-6 ${
                        isActive
                          ? "bg-rosy-copper-500 text-white"
                          : "hover:bg-banana-cream-400"
                      }`}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`ml-auto pl-4 md:hidden ${isActive ? "text-white" : "text-rosy-copper-500"}`}
                      >
                        ↗
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <a
              href="https://github.com/asciisvt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (opens in a new tab)"
              onClick={() => setMenuOpen(false)}
              className="hover:bg-banana-cream-400 focus-visible:outline-rosy-copper-500 md:border-onyx-900 flex items-center gap-3 px-6 py-4 font-semibold transition-colors focus-visible:outline-4 focus-visible:outline-offset-[-4px] md:border-l-2 md:px-5"
            >
              <Icon icon="bi:github" aria-hidden="true" className="text-2xl" />
              <span className="md:sr-only">github ↗</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
