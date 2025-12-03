import React from "react"
import { useFormContext } from "react-hook-form"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator" // Need to create this or just use hr
import { MapPin, Home, Package, Shield, Wrench, User, Calendar } from "lucide-react"

export function StepSummary() {
    const { watch } = useFormContext()
    const values = watch()

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Review Your Quote</CardTitle>
                <CardDescription>Please double-check your details before submitting.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">

                <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2"><MapPin className="h-4 w-4" /> Route</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <span className="text-muted-foreground">From:</span>
                            <p className="font-medium">{values.fromLocation}</p>
                        </div>
                        <div>
                            <span className="text-muted-foreground">To:</span>
                            <p className="font-medium">{values.toLocation}</p>
                        </div>
                    </div>
                </div>

                <hr className="border-muted" />

                <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2"><Home className="h-4 w-4" /> Inventory</h4>
                    <p className="text-sm font-medium capitalize">{values.inventoryType?.replace("_", " ")}</p>
                </div>

                <hr className="border-muted" />

                <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2"><Package className="h-4 w-4" /> Services</h4>
                    <ul className="text-sm space-y-1">
                        {values.needsPacking && <li className="flex items-center gap-2"><Package className="h-3 w-3 text-primary" /> Professional Packing</li>}
                        {values.needsInsurance && <li className="flex items-center gap-2"><Shield className="h-3 w-3 text-primary" /> All-Risk Insurance</li>}
                        {values.needsAssembly && <li className="flex items-center gap-2"><Wrench className="h-3 w-3 text-primary" /> Dismantling & Assembly</li>}
                        {!values.needsPacking && !values.needsInsurance && !values.needsAssembly && <li className="text-muted-foreground italic">No extra services selected</li>}
                    </ul>
                </div>

                <hr className="border-muted" />

                <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2"><User className="h-4 w-4" /> Contact Details</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <span className="text-muted-foreground">Name:</span>
                            <p className="font-medium">{values.name}</p>
                        </div>
                        <div>
                            <span className="text-muted-foreground">Phone:</span>
                            <p className="font-medium">{values.phone}</p>
                        </div>
                        <div>
                            <span className="text-muted-foreground">Email:</span>
                            <p className="font-medium">{values.email}</p>
                        </div>
                        <div>
                            <span className="text-muted-foreground">Date:</span>
                            <p className="font-medium flex items-center gap-1"><Calendar className="h-3 w-3" /> {values.moveDate}</p>
                        </div>
                    </div>
                </div>

            </CardContent>
        </Card>
    )
}
