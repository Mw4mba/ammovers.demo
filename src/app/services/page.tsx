"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Home, Building2, Package, CheckCircle2, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const services = [
    {
        id: "household",
        title: "Household Removal",
        icon: Home,
        description: "Comprehensive moving solutions for your home. Whether you're moving down the street or across the country, we ensure your belongings arrive safely.",
        benefits: [
            "Professional packing and wrapping",
            "Safe handling of fragile items",
            "Disassembly and reassembly of furniture",
            "Insurance coverage options"
        ]
    },
    {
        id: "office",
        title: "Office Relocation",
        icon: Building2,
        description: "Minimize downtime with our efficient office moving services. We handle everything from desks and chairs to sensitive IT equipment.",
        benefits: [
            "After-hours and weekend moves",
            "IT equipment handling expertise",
            "File and document organization",
            "Project management support"
        ]
    },
    {
        id: "rubble",
        title: "Rubble Removal",
        icon: Truck,
        description: "Fast and reliable removal of building rubble, garden waste, and general debris. We ensure responsible disposal.",
        benefits: [
            "Site clearing and cleaning",
            "Construction debris removal",
            "Garden waste disposal",
            "Eco-friendly disposal methods"
        ]
    },
    {
        id: "storage",
        title: "Storage Facilities",
        icon: Package,
        description: "Secure, clean, and accessible storage units for your short-term or long-term needs.",
        benefits: [
            "24/7 Security surveillance",
            "Climate-controlled units",
            "Flexible rental terms",
            "Easy access to your goods"
        ]
    }
]

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-primary/5 py-16 md:py-24">
                <Container>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                            Our Logistics <span className="text-primary">Services</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Tailored solutions for every move. From residential relocations to commercial logistics, we have the expertise to handle it all.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Services List */}
            <section className="py-16">
                <Container>
                    <div className="grid gap-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                id={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="overflow-hidden">
                                    <div className="grid md:grid-cols-[1fr_2fr] gap-6">
                                        <div className="bg-muted/30 p-8 flex flex-col items-center justify-center text-center border-r-0 md:border-r border-b md:border-b-0">
                                            <div className="p-4 bg-primary/10 rounded-full mb-4">
                                                <service.icon className="h-10 w-10 text-primary" />
                                            </div>
                                            <CardTitle className="text-2xl">{service.title}</CardTitle>
                                        </div>

                                        <div className="p-6 md:p-8 flex flex-col justify-center">
                                            <p className="text-lg text-muted-foreground mb-6">
                                                {service.description}
                                            </p>

                                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                                {service.benefits.map((benefit, i) => (
                                                    <div key={i} className="flex items-center gap-2">
                                                        <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                                                        <span className="text-sm">{benefit}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <Button asChild className="w-fit">
                                                <Link href={`/quote?service=${service.id}`}>
                                                    Get a Quote for {service.title} <ArrowRight className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-muted">
                <Container>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-primary text-primary-foreground p-8 md:p-12 rounded-2xl">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">Need a custom solution?</h2>
                            <p className="text-primary-foreground/80">Contact our team to discuss your specific requirements.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild variant="secondary" size="lg">
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                                <Link href="/quote">Request Quote</Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}
