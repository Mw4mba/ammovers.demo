import React from "react"
import { useFormContext } from "react-hook-form"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox" // We need to create this or use native input for now
import { Shield, Package, Wrench } from "lucide-react"

// Simple native checkbox wrapper for now to avoid creating another component file if not strictly needed, 
// but for "Premium" feel let's style it a bit.
function ServiceOption({ id, label, description, icon: Icon, register }: any) {
    return (
        <div className="flex items-start space-x-3 space-y-0 rounded-md border p-4 hover:bg-accent hover:text-accent-foreground transition-colors">
            <input type="checkbox" id={id} className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" {...register(id)} />
            <div className="flex-1 space-y-1">
                <Label htmlFor={id} className="font-medium cursor-pointer flex items-center gap-2">
                    <Icon className="h-4 w-4 text-primary" />
                    {label}
                </Label>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </div>
    )
}

export function StepServices() {
    const { register } = useFormContext()

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Additional Services</CardTitle>
                <CardDescription>Customize your move with these premium add-ons.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <ServiceOption
                    id="needsPacking"
                    label="Professional Packing"
                    description="We bring the boxes and wrap everything for you."
                    icon={Package}
                    register={register}
                />
                <ServiceOption
                    id="needsInsurance"
                    label="All-Risk Insurance"
                    description="Full coverage for peace of mind during transit."
                    icon={Shield}
                    register={register}
                />
                <ServiceOption
                    id="needsAssembly"
                    label="Dismantling & Assembly"
                    description="We take apart beds/tables and reassemble them."
                    icon={Wrench}
                    register={register}
                />
            </CardContent>
        </Card>
    )
}
