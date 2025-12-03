"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Building2, Package, Archive, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
    {
        id: "residential",
        title: "Residential Moving",
        description: "Stress-free home relocations tailored to your family's needs.",
        icon: Home,
        color: "text-primary"
    },
    {
        id: "office",
        title: "Office Relocation",
        description: "Efficient business moves with minimal downtime and disruption.",
        icon: Building2,
        color: "text-primary"
    },
    {
        id: "packing",
        title: "Packing Services",
        description: "Professional packing to ensure your valuables arrive safely.",
        icon: Package,
        color: "text-primary"
    },
    {
        id: "storage",
        title: "Storage Solutions",
        description: "Secure, climate-controlled short and long-term storage.",
        icon: Archive,
        color: "text-primary"
    },
]

export function ServicesMenu() {
    const [hoveredService, setHoveredService] = React.useState(services[0])

    return (
        <div className="flex w-full flex-col gap-8 p-4 md:flex-row md:p-6">
            {/* Left Column: Service List */}
            <div className="flex-1 space-y-2">
                {services.map((service) => (
                    <div
                        key={service.id}
                        onMouseEnter={() => setHoveredService(service)}
                        className={cn(
                            "group flex items-center justify-between rounded-xl p-3 transition-colors cursor-pointer",
                            hoveredService.id === service.id
                                ? "bg-muted"
                                : "hover:bg-muted/50"
                        )}
                    >
                        <div className="flex items-center gap-4">
                            <div className={cn(
                                "flex h-10 w-10 items-center justify-center rounded-lg border bg-background transition-colors",
                                hoveredService.id === service.id ? "border-primary/20" : "border-border"
                            )}>
                                <service.icon className={cn("h-5 w-5", service.color)} />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-foreground">{service.title}</h3>
                                <p className="text-xs text-muted-foreground line-clamp-1">{service.description}</p>
                            </div>
                        </div>
                        <ArrowRight className={cn(
                            "h-4 w-4 text-muted-foreground opacity-0 transition-all",
                            hoveredService.id === service.id && "opacity-100 translate-x-0"
                        )} />
                    </div>
                ))}
            </div>

            {/* Right Column: Preview Area */}
            <div className="hidden w-[300px] shrink-0 flex-col justify-between rounded-xl bg-muted/30 p-6 md:flex text-center">
                <div>
                    <div className="mb-6 flex h-32 w-32 items-center justify-center relative mx-auto">
                        {/* Orange Rounded Hexagon Background */}
                        <div
                            className="absolute inset-0 bg-[#F25C24] shadow-lg"
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
                        />
                        <hoveredService.icon className="h-14 w-14 text-white relative z-10" />
                    </div>
                    <h4 className="mb-2 text-lg font-semibold">{hoveredService.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {hoveredService.description}
                    </p>
                </div>
                <div className="mt-4">
                    <span className="text-xs font-medium text-[#F25C24] uppercase tracking-wider">Featured Service</span>
                </div>
            </div>
        </div>
    )
}
