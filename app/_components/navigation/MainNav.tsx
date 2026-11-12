"use client";
import { useState, useRef, useEffect } from "react";
import WunderLogo from "../WunderLogo";
import NavItem from "./NavItem";
import { Icon } from "@iconify-icon/react";

const navItems = [
  {
    href: "/software",
    label: "software",
    icon: "mdi-light:gamepad",
  },
  {
    href: "/blog",
    label: "blog",
    icon: "dashicons:welcome-write-blog",
  },
  {
    href: "/#about",
    label: "about",
    icon: "fluent:card-ui-info-20-filled",
  },
  {
    href: "/contact",
    label: "contact",
    icon: "famicons:mail",
  },
];

export default function MainNav() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <nav
      className="bg-onyx-900 border-parchment-100 sticky top-0 z-50 flex h-16"
    >
      <a href="/">
        <WunderLogo className="text-parchment-100 h-full w-auto px-8 py-3" />
      </a>
      <div className="bg-parchment-100 text-onyx-900 font-fredoka flex flex-1 flex-row  pl-4 font-medium">
        <ul className="flex h-full flex-2 flex-row items-center">
          {navItems.map((item) => (
            <li
              key={item.label}
              className={`nav-item ${activeItem === item.label ? "active" : ""}`}
              onMouseEnter={() => {
                setActiveItem(item.label);
              }}
              onMouseLeave={() => {
                setActiveItem(null);
              }}
            >
              <NavItem key={item.label} href={item.href}>
                {item.label}
              </NavItem>
            </li>
          ))}
        </ul>
        <ul className="flex h-full flex-1 flex-row items-center justify-end pr-8">
          <li>
            <a
              href="https://github.com/asciisvt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="bi:github" className="align-middle text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
