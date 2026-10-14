"use client";

import Link from "next/link";
import { motion } from "motion/react";


export default function CallToAction({ href, text, icon, className }: { href: string, text: string, icon?: React.ReactNode, className?: string }) {
    return (
        <div className="text-center py-6 font-nunito text-xl">
            <motion.a
                href={href}
                className={`inline-flex items-center px-6 py-3 
                        bg-steel-blue-500 text-white font-bold rounded-full 
                        border-onyx-900 border shadow-[3px_3px_0_var(--color-onyx-900)] ${className || ""}`}
                whileHover={{ x: -2, y: -2, transition: { duration: 0.05 }, backgroundColor: "var(--color-rosy-copper-500)" }}
            >
                {icon && <span className="mr-2 h-full w-auto">{icon}</span>}
                {text}
            </motion.a>
        </div >
    )
}