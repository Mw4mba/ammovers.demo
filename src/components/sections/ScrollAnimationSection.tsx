"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

export function ScrollAnimationSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const triggerRef = useRef<HTMLDivElement>(null)
    const truckRef = useRef<HTMLDivElement>(null)
    const text1Ref = useRef<HTMLDivElement>(null)
    const text2Ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!sectionRef.current || !triggerRef.current || !truckRef.current || !text1Ref.current || !text2Ref.current) return

        const ctx = gsap.context(() => {
            // Set initial states
            gsap.set(truckRef.current, { xPercent: -100 }) // Truck starts off-screen left
            gsap.set(text1Ref.current, { xPercent: 100, opacity: 0 }) // Text 1 starts off-screen right
            gsap.set(text2Ref.current, { xPercent: -100, opacity: 0 }) // Text 2 starts off-screen left

            // Create the main timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "+=350%", // Total scroll distance for the animation
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                }
            })

            // Phase 1: Truck enters from left to center-left position (0% - 20%)
            tl.to(truckRef.current, {
                xPercent: -25, // Truck more towards center (was -50)
                ease: "none",
                duration: 0.8
            })

                // Slight pause when truck is positioned (20% - 25%)
                .to({}, { duration: 0.2 })

                // Phase 2: Text 1 slides in from right closer to center (25% - 40%)
                .to(text1Ref.current, {
                    xPercent: -20, // Text closer to center (was 0)
                    opacity: 1,
                    ease: "power2.out",
                    duration: 0.6
                })

                // Hold phase - pause for reading (40% - 50%)
                .to({}, { duration: 0.4 })

                // Phase 3: Text 1 exits back to the right (50% - 60%)
                .to(text1Ref.current, {
                    xPercent: 100,
                    opacity: 0,
                    ease: "power2.in",
                    duration: 0.5
                })

                // Phase 4: Truck continues moving to the right side of screen (60% - 75%)
                .to(truckRef.current, {
                    xPercent: 50, // Truck on right side of screen
                    ease: "none",
                    duration: 0.6
                })

                // Phase 5: Text 2 slides in from left (75% - 85%) - positioned on left side, away from truck
                .to(text2Ref.current, {
                    xPercent: 0,
                    opacity: 1,
                    ease: "power2.out",
                    duration: 0.5
                })

                // Hold phase - pause for reading (85% - 90%)
                .to({}, { duration: 0.2 })

                // Phase 6: Truck exits right, Text 2 exits back to left (90% - 100%)
                .to(truckRef.current, {
                    xPercent: 120,
                    ease: "power1.in",
                    duration: 0.5
                }, "exit")
                .to(text2Ref.current, {
                    xPercent: -100,
                    opacity: 0,
                    ease: "power1.in",
                    duration: 0.4
                }, "exit")
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="relative">
            {/* Trigger wrapper - this gets pinned */}
            <div
                ref={triggerRef}
                className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-muted/20 to-muted/40"
            >
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

                {/* Truck Container */}
                <div
                    ref={truckRef}
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[120vw] max-w-[1600px] min-w-[500px] z-10 will-change-transform"
                >
                    <Image
                        src="/truck-2.png"
                        alt="AM Movers Truck"
                        width={1600}
                        height={800}
                        className="w-full h-auto object-contain drop-shadow-2xl"
                        priority
                    />
                </div>

                {/* Text Block 1 - Right side (enters from right, exits to right) */}
                <div
                    ref={text1Ref}
                    className="absolute right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 w-[95vw] max-w-2xl md:max-w-3xl p-20 md:p-24 lg:p-28 bg-[#F25C24] text-white shadow-2xl z-20 will-change-transform flex flex-col justify-center items-center text-center"
                    style={{
                        maskImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 0 L186.6 50 V150 L100 200 L13.4 150 V50 Z' fill='black' stroke='none' stroke-linejoin='round' stroke-width='20' transform='scale(0.9)' transform-origin='center' /%3E%3C/svg%3E")`,
                        maskSize: "100% 100%",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 5 C102 5, 184 52, 184 54 C186 55, 186 145, 184 146 C184 148, 102 195, 100 195 C98 195, 16 148, 16 146 C14 145, 14 55, 16 54 C16 52, 98 5, 100 5 Z' stroke='black' stroke-width='10' fill='black' stroke-linejoin='round' /%3E%3C/svg%3E")`,
                        WebkitMaskSize: "100% 100%",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                    }}
                >
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 text-white">
                        We Keep Moving
                    </h3>
                    <div className="max-w-[186px] md:max-w-[260px] lg:max-w-[298px] min-h-[80px] md:min-h-[100px] lg:min-h-[120px] mx-auto flex items-center">
                        <p className="text-xs md:text-sm lg:text-base text-white/90 leading-relaxed">
                            From the moment we arrive, our team is dedicated to efficiency.
                            We handle the heavy lifting so you don&apos;t have to.
                        </p>
                    </div>
                </div>

                {/* Text Block 2 - Left side (enters from left, exits to left) */}
                <div
                    ref={text2Ref}
                    className="absolute left-8 md:left-16 lg:left-24 top-1/2 -translate-y-1/2 w-[95vw] max-w-2xl md:max-w-3xl p-20 md:p-24 lg:p-28 bg-[#F25C24] text-white shadow-2xl z-20 will-change-transform flex flex-col justify-center items-center text-center"
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
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 text-white">
                        Arriving Safely
                    </h3>
                    <div className="max-w-[186px] md:max-w-[260px] lg:max-w-[298px] min-h-[80px] md:min-h-[100px] lg:min-h-[120px] mx-auto flex items-center">
                        <p className="text-xs md:text-sm lg:text-base text-white/90 leading-relaxed">
                            Your belongings are our priority. We ensure everything arrives
                            at your new destination exactly as it left.
                        </p>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/60 animate-bounce">
                    <span className="text-sm font-medium">Scroll</span>
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>
        </section>
    )
}
