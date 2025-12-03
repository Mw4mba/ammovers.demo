"use client"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
    return (
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-16">
            {/* Background Image */}
            <div className="absolute inset-0 -z-20">
                <Image
                    src="/hero-image.png"
                    alt="Moving Truck"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Gradient overlay for text readability without darkening the whole image */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            </div>

            <Container className="relative z-10">
                <div className="mx-auto max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-md">
                            Your Partner in <span className="text-[#F25C24]">Global Logistics</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-100 sm:text-xl drop-shadow-sm">
                            Reliable, Efficient, and Seamless Shipping Solutions Tailored for Your <span className="text-[#F25C24] font-semibold">Business Needs</span>.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                    >
                        <Button asChild size="lg" className="w-full sm:w-auto text-lg h-12 px-8 bg-[#F25C24] hover:bg-[#D94510] text-white font-bold shadow-lg hover:shadow-xl transition-all border-none">
                            <Link href="/quote">Get a Free Quote</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-lg h-12 px-8 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#F25C24] transition-all">
                            <Link href="/services">Explore Services</Link>
                        </Button>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
