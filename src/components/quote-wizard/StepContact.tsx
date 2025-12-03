import React from "react"
import { useFormContext } from "react-hook-form"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { User, Mail, Phone, Calendar } from "lucide-react"

export function StepContact() {
    const { register, formState: { errors } } = useFormContext()

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Final Details</CardTitle>
                <CardDescription>Where should we send your quote?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <div className="relative">
                            <User className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input id="name" placeholder="John Doe" className="pl-9" {...register("name")} />
                        </div>
                        {errors.name && <p className="text-sm text-destructive">{errors.name.message as string}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <div className="relative">
                            <Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input id="email" type="email" placeholder="john@example.com" className="pl-9" {...register("email")} />
                        </div>
                        {errors.email && <p className="text-sm text-destructive">{errors.email.message as string}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="relative">
                            <Phone className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input id="phone" placeholder="082 123 4567" className="pl-9" {...register("phone")} />
                        </div>
                        {errors.phone && <p className="text-sm text-destructive">{errors.phone.message as string}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="moveDate">Preferred Date</Label>
                        <div className="relative">
                            <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input id="moveDate" type="date" className="pl-9" {...register("moveDate")} />
                        </div>
                        {errors.moveDate && <p className="text-sm text-destructive">{errors.moveDate.message as string}</p>}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
