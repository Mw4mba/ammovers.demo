"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { ServicesMenu } from "./ServicesMenu"

const navigation = [
    { name: "Home", href: "/" },
    { name: "Tracking", href: "/tracking" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [activeMenu, setActiveMenu] = React.useState<string | null>(null)

    return (
        <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            <motion.nav
                layout
                className={cn(
                    "relative flex flex-col overflow-hidden bg-white shadow-lg transition-colors",
                    "w-full max-w-5xl rounded-[2rem]" // Increased border radius for pill shape
                )}
                onMouseLeave={() => setActiveMenu(null)}
                transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            >
                <div className="flex h-16 items-center justify-between px-6">
                    {/* Logo */}
                    <Link href="/" className="flex items-center mr-8 shrink-0">
                        <div className="relative h-10 w-32 overflow-hidden">
                            <Image
                                src="/new-logo.png"
                                alt="AM Movers"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-1 flex-1 justify-center">
                        <Link
                            href="/"
                            className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-full hover:bg-muted/50"
                            onMouseEnter={() => setActiveMenu(null)}
                        >
                            Home
                        </Link>

                        <button
                            className={cn(
                                "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-muted/50 outline-none",
                                activeMenu === "Services" ? "text-primary bg-muted/50" : "text-foreground/80 hover:text-primary"
                            )}
                            onMouseEnter={() => setActiveMenu("Services")}
                        >
                            Services
                            <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", activeMenu === "Services" && "rotate-180")} />
                        </button>

                        {navigation.slice(1).map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-full hover:bg-muted/50"
                                onMouseEnter={() => setActiveMenu(null)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA & Mobile Menu Button */}
                    <div className="flex items-center gap-2 ml-auto shrink-0">
                        <Button asChild size="sm" className="rounded-full px-6 bg-[#F25C24] hover:bg-[#D94510] text-white font-bold shadow-md transition-all">
                            <Link href="/quote">Get a Quote</Link>
                        </Button>

                        <div className="md:hidden">
                            <button
                                type="button"
                                className="p-2 text-foreground"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? (
                                    <X className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                    <Menu className="h-5 w-5" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Expanding Content Area */}
                <AnimatePresence>
                    {activeMenu === "Services" && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white"
                        >
                            <ServicesMenu />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Mobile Menu Overlay (Inside the pill for consistent look) */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden border-t"
                        >
                            <div className="p-4 space-y-4">
                                <Link href="/" className="block text-base font-medium text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
                                    Home
                                </Link>
                                <div className="space-y-2 pl-4 border-l-2 border-muted">
                                    <p className="text-sm font-semibold text-muted-foreground mb-2">Services</p>
                                    <Link href="/services/residential" className="block text-sm text-foreground/80 hover:text-primary" onClick={() => setIsOpen(false)}>Residential Moving</Link>
                                    <Link href="/services/office" className="block text-sm text-foreground/80 hover:text-primary" onClick={() => setIsOpen(false)}>Office Relocation</Link>
                                    <Link href="/services/packing" className="block text-sm text-foreground/80 hover:text-primary" onClick={() => setIsOpen(false)}>Packing Services</Link>
                                    <Link href="/services/storage" className="block text-sm text-foreground/80 hover:text-primary" onClick={() => setIsOpen(false)}>Storage Solutions</Link>
                                </div>
                                {navigation.slice(1).map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="block text-base font-medium text-foreground hover:text-primary"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </header>
    )
}
