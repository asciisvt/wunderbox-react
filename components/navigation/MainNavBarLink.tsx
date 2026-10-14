"use client";
import { motion } from "motion/react";

export default function MainNavBarLink({ href, text, active, barHovered, fontColor }: { href: string; text: string; active?: boolean; barHovered: boolean; fontColor?: string }) {
    return (
        <motion.a
            whileTap={{ scale: 0.95 }}
            animate={{ opacity: barHovered && !active ? 0.4 : 1 }}
            href={href}
            className={`${active ? fontColor : "text-onyx-700"} transition-colors relative z-10 font-fredoka font-medium text-lg m-0 flex items-center px-5 py-3`}>
            {text}
        </motion.a>
    );
}