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
                            className="flex flex-col p-6 bg-card rounded-xl border shadow-sm"
                        >
                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-secondary fill-secondary" />
                                ))}
                            </div>
                            <p className="flex-1 text-muted-foreground mb-6">
                                &quot;{testimonial.content}&quot;
                            </p>
                            <div className="mt-auto">
                                <p className="font-semibold">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
