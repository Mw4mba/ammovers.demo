"use client"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

            <Container className="relative z-10">
                <div className="mx-auto max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                            Move with <span className="text-primary">Confidence</span>
                            <br />
                            Move with <span className="text-secondary">AM Movers</span>
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
                            Professional household and office furniture removal services.
                            Reliable, efficient, and stress-free logistics solutions tailored to your needs.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                    >
                        <Button asChild size="lg" className="w-full sm:w-auto text-lg h-12 px-8">
                            <Link href="/quote">Get a Free Quote</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-lg h-12 px-8">
                            <Link href="/services">Explore Services</Link>
                        </Button>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
