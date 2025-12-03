"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, Users, Award, Globe } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
    { label: "Years Experience", value: "10+", icon: Award },
    { label: "Successful Moves", value: "5k+", icon: Truck },
    { label: "Happy Clients", value: "98%", icon: Users },
    { label: "Locations Covered", value: "National", icon: Globe },
]

const values = [
    {
        title: "Reliability",
        description: "We show up on time, every time. You can count on us to handle your belongings with the utmost care and professionalism."
    },
    {
        title: "Transparency",
        description: "No hidden fees or surprises. We provide clear, upfront quotes and keep you informed throughout the entire moving process."
    },
    {
        title: "Efficiency",
        description: "Our experienced team and modern fleet ensure your move is completed quickly and safely, minimizing downtime."
    },
]

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="bg-primary/5 py-20">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                            Moving You Forward Since 2015
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            AM Movers Company is a premier logistics provider dedicated to making your household and office relocations seamless and stress-free.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Stats */}
            <section className="py-12 border-b">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="flex justify-center mb-4">
                                    <stat.icon className="h-8 w-8 text-secondary" />
                                </div>
                                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Story & Values */}
            <section className="py-20">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    Founded with a single truck and a vision to transform the moving industry, AM Movers has grown into a trusted logistics partner for thousands of South African families and businesses.
                                </p>
                                <p>
                                    We recognized that moving is often one of life's most stressful events. Our mission was simple: to provide a service that not only moves boxes but also delivers peace of mind.
                                </p>
                                <p>
                                    Today, we operate a modern fleet of vehicles and employ a dedicated team of professionals who share our commitment to excellence. Whether it's a small apartment move or a large corporate relocation, we bring the same level of care and attention to detail to every job.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[400px] bg-muted rounded-2xl overflow-hidden">
                            {/* Placeholder for Team/Truck Image */}
                            <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                                <Truck className="h-24 w-24 text-primary/20" />
                            </div>
                        </div>
                    </div>

                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            These principles guide every interaction and decision we make.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <Card key={index} className="bg-muted/30 border-none">
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    )
}
