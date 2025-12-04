"use client"

import { Container } from "@/components/ui/container"
import { Truck, Home, Building2, Package } from "lucide-react"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

const services = [
    {
        title: "Household Removal",
        description: "Safe and secure moving services for your home. We handle your belongings with care.",
        icon: Home,
    },
    {
        title: "Office Relocation",
        description: "Efficient office moves to minimize downtime. Specialized handling for office furniture.",
        icon: Building2,
    },
    {
        title: "Rubble Removal",
        description: "Quick and clean disposal of debris and rubble from your property.",
        icon: Truck,
    },
    {
        title: "Storage Facilities",
        description: "Secure storage solutions for your goods, short-term or long-term.",
        icon: Package,
    },
]

export function ServicesGrid() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const rowsRef = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        if (!sectionRef.current) return

        const ctx = gsap.context(() => {
            rowsRef.current.forEach((row, index) => {
                if (!row) return

                const card = row.querySelector(".service-card")
                const text = row.querySelector(".service-text")
                const isEven = index % 2 === 0

                // Initial states
                if (index === 0) {
                    // First card is already there
                    gsap.set(card, { opacity: 1, y: 0 })
                    // Text starts behind card
                    gsap.set(text, {
                        xPercent: isEven ? -100 : 100,
                        opacity: 0
                    })
                } else {
                    // Other cards slide up
                    gsap.set(card, { opacity: 0, y: 100 })
                    gsap.set(text, {
                        xPercent: isEven ? -100 : 100,
                        opacity: 0
                    })
                }

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: row,
                        start: "top 80%", // Start animation when row is in view
                        toggleActions: "play none none reverse"
                    }
                })

                if (index === 0) {
                    // First item: Just slide text out
                    tl.to(text, {
                        xPercent: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power2.out"
                    })
                } else {
                    // Other items: Card enters, then text slides out
                    tl.to(card, {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: "power2.out"
                    })
                        .to(text, {
                            xPercent: 0,
                            opacity: 1,
                            duration: 0.8,
                            ease: "power2.out"
                        }, "-=0.2") // Overlap slightly
                }
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="py-24 bg-blue-950 relative overflow-hidden -mt-1">


            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:14px_24px]" />

            <Container className="relative z-20">
                <div className="text-center mb-24">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">Our Core Services</h2>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                        Comprehensive logistics solutions designed to make your move seamless.
                    </p>
                </div>

                <div className="flex flex-col gap-24 md:gap-32">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            ref={(el) => { rowsRef.current[index] = el }}
                            className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Hexagonal Card */}
                            <div className="service-card relative z-20 shrink-0">
                                <div
                                    className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] bg-[#F25C24] flex flex-col items-center justify-center p-8 text-white shadow-2xl transition-transform hover:scale-105 duration-300"
                                    style={{
                                        maskImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 5 C102 5, 184 52, 184 54 C186 55, 186 145, 184 146 C184 148, 102 195, 100 195 C98 195, 16 148, 16 146 C14 145, 14 55, 16 54 C16 52, 98 5, 100 5 Z' stroke='black' stroke-width='10' fill='black' stroke-linejoin='round' /%3E%3C/svg%3E")`,
                                        maskSize: "100% 100%",
                                        maskRepeat: "no-repeat",
                                        maskPosition: "center",
                                        WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 5 C102 5, 184 52, 184 54 C186 55, 186 145, 184 146 C184 148, 102 195, 100 195 C98 195, 16 148, 16 146 C14 145, 14 55, 16 54 C16 52, 98 5, 100 5 Z' stroke='black' stroke-width='10' fill='black' stroke-linejoin='round' /%3E%3C/svg%3E")`,
                                        WebkitMaskSize: "100% 100%",
                                        WebkitMaskRepeat: "no-repeat",
                                        WebkitMaskPosition: "center",
                                    }}
                                >
                                    <service.icon className="h-16 w-16 mb-6 text-white" />
                                    <h3 className="text-2xl font-bold text-center leading-tight">{service.title}</h3>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="service-text max-w-md text-center md:text-left z-10">
                                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
