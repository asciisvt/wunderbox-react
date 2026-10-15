"use client";

import Link from "next/link";
import { motion } from "motion/react";


export default function CallToAction({ href, text, icon, buttonColor, textColor }: { href: string, text: string, icon?: React.ReactNode, buttonColor?: string, textColor?: string }) {
    const link = {
        base: {
            boxShadow: "3px 3px 0 var(--color-onyx-900)"
        },
        hover: {
            x: -2,
            y: -2,
            boxShadow: "5px 5px 0 var(--color-onyx-900)",
            transition: { duration: 0.05 }
        }
    }

    return (
        <div className="text-center py-6 font-nunito text-xl">
            <motion.a
                href={href}
                variants={link}
                whileHover="hover"
                className={`inline-flex items-center px-6 py-3 
                        ${buttonColor ?? "bg-rosy-copper-500"} ${textColor ?? "text-parchment-100"} font-bold rounded-full 
                        border-onyx-900 border shadow-[3px_3px_0_var(--color-onyx-900)]`}
            >
                {icon && <span className="mr-2 h-full w-auto">{icon}</span>}
                {text}
            </motion.a>
        </div >
    )
}