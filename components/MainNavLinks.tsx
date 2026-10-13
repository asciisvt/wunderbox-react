"use client";
import { useState } from "react";
import { AnimatePresence, color, motion } from "motion/react";
import MainNavBarLink from "./MainNavBarLink";

const links = [
    { href: "/games", text: "games", color: "bg-steel-blue-500", fontColor: "text-parchment-100" },
    { href: "/blog", text: "blog", color: "bg-rosy-copper-500", fontColor: "text-parchment-100" },
    { href: "/about", text: "about", color: "bg-banana-cream-500", fontColor: "text-onyx-700" },
    { href: "/contact", text: "contact", color: "bg-onyx-500", fontColor: "text-parchment-100" },
];

export default function MainNavLinks() {
    const [hovered, setHovered] = useState<string | null>(null);
    const [barHovered, setBarHovered] = useState(false);

    return (
        <ul
            className="flex flex-row items-center border border-onyx-900 rounded-full p-0.5 overflow-hidden shadow-[3px_3px_0_var(--color-onyx-900)]"
            onMouseLeave={() => { setHovered(null); setBarHovered(false); }}
        >
            {links.map(({ href, text, color, fontColor }) => (
                <li key={href} className="relative" onMouseEnter={() => { setHovered(href); setBarHovered(true); }}>
                    <AnimatePresence>
                        {hovered === href && (
                            <motion.span
                                layoutId="nav-pill"
                                className={`absolute inset-0 rounded-full border ${color}`}
                                initial={{ opacity: 0, scale: 1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.8 }}
                                transition={{ type: "spring", stiffness: 500, damping: 35 }}
                            />
                        )}
                    </AnimatePresence>
                    <MainNavBarLink href={href} text={text} active={hovered === href} barHovered={barHovered} fontColor={fontColor} />
                </li>
            ))}
        </ul>
    );
}
