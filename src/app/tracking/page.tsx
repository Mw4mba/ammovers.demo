"use client"

import { useState } from "react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Package, MapPin, Calendar, Truck, CheckCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function TrackingPage() {
    const [trackingId, setTrackingId] = useState("")
    const [isSearching, setIsSearching] = useState(false)
    const [result, setResult] = useState<any>(null)

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (!trackingId) return

        setIsSearching(true)
        // Simulate API call
        setTimeout(() => {
            setResult({
                id: trackingId,
                status: "In Transit",
                origin: "Johannesburg",
                destination: "Cape Town",
                eta: "Dec 05, 2025",
                history: [
                    { date: "Dec 02, 14:30", status: "Departed Facility", location: "Johannesburg Hub" },
                    { date: "Dec 02, 09:15", status: "Picked Up", location: "Sender Address" },
                    { date: "Dec 01, 16:00", status: "Shipment Created", location: "Online" },
                ]
            })
            setIsSearching(false)
        }, 1500)
    }

    return (
        <div className="flex flex-col min-h-screen bg-muted/30">
            <section className="bg-primary py-20 text-primary-foreground">
                <Container>
                    <div className="max-w-2xl mx-auto text-center space-y-6">
                        <h1 className="text-3xl font-bold sm:text-4xl">Track Your Shipment</h1>
                        <p className="text-primary-foreground/80">
                            Enter your tracking number below to see the current status of your delivery.
                        </p>

                        <form onSubmit={handleSearch} className="flex gap-2 max-w-md mx-auto bg-background p-2 rounded-lg shadow-lg">
                            <Input
                                type="text"
                                placeholder="Enter Tracking ID (e.g., AM-12345)"
                                className="border-0 focus-visible:ring-0 text-foreground"
                                value={trackingId}
                                onChange={(e) => setTrackingId(e.target.value)}
                            />
                            <Button type="submit" disabled={isSearching}>
                                {isSearching ? "Searching..." : <Search className="h-4 w-4" />}
                            </Button>
                        </form>
                    </div>
                </Container>
            </section>

            <section className="py-12 flex-1">
                <Container>
                    <AnimatePresence mode="wait">
                        {result && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="max-w-3xl mx-auto"
                            >
                                <Card>
                                    <CardHeader className="border-b bg-muted/20">
                                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                            <div>
                                                <CardTitle className="text-xl flex items-center gap-2">
                                                    <Package className="h-5 w-5 text-primary" />
                                                    Shipment #{result.id}
                                                </CardTitle>
                                                <p className="text-sm text-muted-foreground mt-1">
                                                    Estimated Delivery: <span className="font-medium text-foreground">{result.eta}</span>
                                                </p>
                                            </div>
                                            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                                <Truck className="h-4 w-4" />
                                                {result.status}
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <div className="flex justify-between mb-8 relative">
                                            {/* Progress Line */}
                                            <div className="absolute top-3 left-4 right-4 h-0.5 bg-muted -z-10" />

                                            <div className="flex flex-col items-center gap-2 bg-background px-2">
                                                <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                                                    <CheckCircle className="h-4 w-4" />
                                                </div>
                                                <span className="text-xs font-medium">{result.origin}</span>
                                            </div>
                                            <div className="flex flex-col items-center gap-2 bg-background px-2">
                                                <div className="h-6 w-6 rounded-full border-2 border-primary bg-background" />
                                                <span className="text-xs font-medium text-muted-foreground">In Transit</span>
                                            </div>
                                            <div className="flex flex-col items-center gap-2 bg-background px-2">
                                                <div className="h-6 w-6 rounded-full border-2 border-muted bg-background" />
                                                <span className="text-xs font-medium text-muted-foreground">{result.destination}</span>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <h3 className="font-semibold text-lg">Tracking History</h3>
                                            <div className="relative border-l-2 border-muted ml-3 space-y-8 pb-2">
                                                {result.history.map((event: any, index: number) => (
                                                    <div key={index} className="relative pl-8">
                                                        <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary border-4 border-background" />
                                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                                                            <div>
                                                                <p className="font-medium">{event.status}</p>
                                                                <p className="text-sm text-muted-foreground">{event.location}</p>
                                                            </div>
                                                            <span className="text-xs text-muted-foreground font-mono bg-muted/50 px-2 py-1 rounded">
                                                                {event.date}
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Container>
            </section>
        </div>
    )
}
