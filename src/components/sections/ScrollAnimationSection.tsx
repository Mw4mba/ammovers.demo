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

        const mm = gsap.matchMedia()

        const ctx = gsap.context(() => {
            // Desktop Animation (Horizontal Scroll)
            mm.add("(min-width: 768px)", () => {
                // Set initial states for desktop
                gsap.set(truckRef.current, { xPercent: -100, clearProps: "all" })
                gsap.set(truckRef.current, { xPercent: -100 })
                gsap.set(text1Ref.current, { xPercent: 100, opacity: 0, clearProps: "all" })
                gsap.set(text1Ref.current, { xPercent: 100, opacity: 0 })
                gsap.set(text2Ref.current, { xPercent: -100, opacity: 0, clearProps: "all" })
                gsap.set(text2Ref.current, { xPercent: -100, opacity: 0 })

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: "top top",
                        end: "+=350%",
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    }
                })

                // Phase 1: Simultaneous Entry
                tl.to(truckRef.current, {
                    xPercent: -25,
                    ease: "none",
                    duration: 1
                }, "entry")
                    .to(text1Ref.current, {
                        xPercent: -20,
                        opacity: 1,
                        ease: "power2.out",
                        duration: 1
                    }, "entry")

                    // Phase 2: Hold
                    .to({}, { duration: 0.5 })

                    // Phase 3: Synchronized Transition
                    .to(truckRef.current, {
                        xPercent: 50,
                        ease: "none",
                        duration: 1
                    }, "transition")
                    .to(text1Ref.current, {
                        xPercent: 100,
                        opacity: 0,
                        ease: "power2.in",
                        duration: 1
                    }, "transition")
                    .to(text2Ref.current, {
                        xPercent: 0,
                        opacity: 1,
                        ease: "power2.out",
                        duration: 1
                    }, "transition")

                    // Phase 4: Final Hold
                    .to({}, { duration: 0.5 })
            })

            // Mobile Animation (Vertical Scroll)
            mm.add("(max-width: 767px)", () => {
                // Reset any GSAP props that might interfere
                gsap.set([truckRef.current, text1Ref.current, text2Ref.current], { clearProps: "all" })

                // Initial states for mobile
                gsap.set(text2Ref.current, { opacity: 0, y: 20 })
                gsap.set(text1Ref.current, { opacity: 1, y: 0 })

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: "top top",
                        end: "+=200%", // Shorter scroll distance for mobile
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    }
                })

                // Animation Sequence
                tl
                    // Hold initial state briefly
                    .to({}, { duration: 0.2 })

                    // Transition: Text 1 fades out, Truck moves slightly
                    .to(text1Ref.current, {
                        opacity: 0,
                        y: -20,
                        duration: 0.5,
                        ease: "power2.in"
                    }, "switch")
                    .to(truckRef.current, {
                        y: -10, // Slight movement for dynamism
                        duration: 0.5,
                        ease: "power1.inOut"
                    }, "switch")

                    // Text 2 fades in
                    .to(text2Ref.current, {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power2.out"
                    }, ">-0.1") // Overlap slightly

                    // Hold final state
                    .to({}, { duration: 0.5 })
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="relative">
            {/* Trigger wrapper */}
            <div
                ref={triggerRef}
                className="relative w-full overflow-hidden bg-gradient-to-b from-muted/20 to-muted/40 flex flex-col items-center justify-center h-screen md:block md:py-0"
            >
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

                {/* Truck Container */}
                <div
                    ref={truckRef}
                    className="relative w-full max-w-[500px] z-10 order-2 md:order-none md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:w-[120vw] md:max-w-[1600px] md:min-w-[500px] md:mb-0 will-change-transform"
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

                {/* Text Block 1 */}
                <div
                    ref={text1Ref}
                    className="relative w-[90vw] max-w-md p-8 bg-transparent text-foreground z-20 flex flex-col justify-center items-center text-center order-1 mb-4 md:order-none md:mb-0 md:absolute md:right-8 md:md:right-16 md:lg:right-24 md:top-1/2 md:-translate-y-1/2 md:w-[95vw] md:max-w-2xl md:md:max-w-3xl md:p-20 md:md:p-24 md:lg:p-28 will-change-transform"
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
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 text-foreground">
                        We Keep Moving
                    </h3>
                    <div className="max-w-[186px] md:max-w-[260px] lg:max-w-[298px] min-h-[60px] md:min-h-[100px] lg:min-h-[120px] mx-auto flex items-center justify-center">
                        <p className="text-xs md:text-sm lg:text-base text-foreground/90 leading-relaxed">
                            From the moment we arrive, our team is dedicated to efficiency.
                            We handle the heavy lifting so you don&apos;t have to.
                        </p>
                    </div>
                </div>

                {/* Text Block 2 */}
                <div
                    ref={text2Ref}
                    className="relative w-[90vw] max-w-md p-8 bg-transparent text-foreground z-20 flex flex-col justify-center items-center text-center order-3 mt-4 md:order-none md:mt-0 md:absolute md:left-8 md:md:left-16 md:lg:left-24 md:top-1/2 md:-translate-y-1/2 md:w-[95vw] md:max-w-2xl md:md:max-w-3xl md:p-20 md:md:p-24 md:lg:p-28 will-change-transform"
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
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 text-foreground">
                        Arriving Safely
                    </h3>
                    <div className="max-w-[186px] md:max-w-[260px] lg:max-w-[298px] min-h-[60px] md:min-h-[100px] lg:min-h-[120px] mx-auto flex items-center justify-center">
                        <p className="text-xs md:text-sm lg:text-base text-foreground/90 leading-relaxed">
                            Your belongings are our priority. We ensure everything arrives
                            at your new destination exactly as it left.
                        </p>
                    </div>
                </div>

                {/* Scroll indicator - Hide on mobile */}
                <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground/60 animate-bounce z-20">
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
