"use client"

import { Container } from "@/components/ui/container"
import { Star } from "lucide-react"

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Homeowner",
        content: "AM Movers made our house move completely stress-free. The team was professional, punctual, and handled our furniture with great care.",
        rating: 5,
    },
    {
        name: "David Chen",
        role: "Office Manager",
        content: "We moved our entire office over the weekend. AM Movers were efficient and organized. We were up and running by Monday morning.",
        rating: 5,
    },
    {
        name: "Lerato M.",
        role: "Business Owner",
        content: "Excellent service for rubble removal. They left the site spotless. Highly recommended for their reliability and fair pricing.",
        rating: 5,
    },
]

export function Testimonials() {
    return (
        <section className="py-24 bg-background">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What Our Clients Say</h2>
                    <p className="text-lg text-muted-foreground">
                        Trusted by homeowners and businesses across the region.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex flex-col p-6 bg-blue-900/90 text-white rounded-xl shadow-lg backdrop-blur-sm border-none"
                        >
                            <div className="flex mb-4 gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                                ))}
                            </div>
                            <blockquote className="flex-1 text-blue-50 mb-6 text-lg leading-relaxed">
                                &quot;{testimonial.content}&quot;
                            </blockquote>
                            <div className="mt-auto flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold bg-white/10">
                                    {testimonial.name[0]}
                                </div>
                                <div>
                                    <p className="font-semibold">{testimonial.name}</p>
                                    <p className="text-sm text-blue-200">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
