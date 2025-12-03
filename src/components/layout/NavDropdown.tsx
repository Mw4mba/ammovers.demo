"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

interface NavDropdownProps {
    label: string
    items: { title: string; href: string; description: string }[]
}

export function NavDropdown({ label, items }: NavDropdownProps) {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
                    isOpen ? "text-primary" : "text-foreground/80"
                )}
            >
                {label}
                <ChevronDown
                    className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 top-full mt-2 w-[400px] -translate-x-1/2 rounded-xl border bg-popover p-4 shadow-lg ring-1 ring-black/5"
                    >
                        <div className="grid gap-2">
                            {items.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                    <div className="text-sm font-medium leading-none">{item.title}</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                        {item.description}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
