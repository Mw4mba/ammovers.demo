"use client"

import { Container } from "@/components/ui/container"
import { Card } from "@/components/ui/card" // Need to create Card component first, will do in next step or assume standard shadcn structure
import { Truck, Home, Building2, Package } from "lucide-react"
import { motion } from "framer-motion"

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
    return (
        <section className="py-24 bg-muted/50">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Core Services</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive logistics solutions designed to make your move seamless.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-sm border hover:shadow-md transition-shadow h-full">
                                <div className="p-3 bg-primary/10 rounded-full mb-4">
                                    <service.icon className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-muted-foreground">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
