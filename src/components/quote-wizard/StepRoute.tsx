import React from "react"
import { useFormContext } from "react-hook-form"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { MapPin } from "lucide-react"

export function StepRoute() {
    const { register, formState: { errors } } = useFormContext()

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Where are you moving?</CardTitle>
                <CardDescription>Let's calculate the distance for your quote.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="fromLocation">Moving From</Label>
                        <div className="relative">
                            <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="fromLocation"
                                placeholder="e.g. Sandton, Johannesburg"
                                className="pl-9"
                                {...register("fromLocation")}
                            />
                        </div>
                        {errors.fromLocation && (
                            <p className="text-sm text-destructive">{errors.fromLocation.message as string}</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="toLocation">Moving To</Label>
                        <div className="relative">
                            <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="toLocation"
                                placeholder="e.g. Sea Point, Cape Town"
                                className="pl-9"
                                {...register("toLocation")}
                            />
                        </div>
                        {errors.toLocation && (
                            <p className="text-sm text-destructive">{errors.toLocation.message as string}</p>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
