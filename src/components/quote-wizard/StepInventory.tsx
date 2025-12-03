import React from "react"
import { useFormContext } from "react-hook-form"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { Home, Building2, Warehouse, Box } from "lucide-react"

const inventoryOptions = [
    { id: "studio", label: "Studio / 1 Bed", icon: Home },
    { id: "2bed", label: "2 Bedroom", icon: Building2 },
    { id: "3bed", label: "3+ Bedroom", icon: Warehouse },
    { id: "small_load", label: "Small Load", icon: Box },
]

export function StepInventory() {
    const { register, watch, setValue, formState: { errors } } = useFormContext()
    const selectedInventory = watch("inventoryType")

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>What are you moving?</CardTitle>
                <CardDescription>Select the size of your home to estimate volume.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {inventoryOptions.map((option) => {
                        const Icon = option.icon
                        const isSelected = selectedInventory === option.id
                        return (
                            <div
                                key={option.id}
                                onClick={() => setValue("inventoryType", option.id, { shouldValidate: true })}
                                className={cn(
                                    "cursor-pointer rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground transition-all",
                                    isSelected && "border-primary bg-primary/5"
                                )}
                            >
                                <div className="flex flex-col items-center justify-center gap-2 text-center">
                                    <Icon className={cn("h-8 w-8", isSelected ? "text-primary" : "text-muted-foreground")} />
                                    <span className="text-sm font-medium">{option.label}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <input type="hidden" {...register("inventoryType")} />
                {errors.inventoryType && (
                    <p className="text-sm text-destructive text-center">{errors.inventoryType.message as string}</p>
                )}
            </CardContent>
        </Card>
    )
}
