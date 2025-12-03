"use client"

import React, { useState } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { StepRoute } from "./StepRoute"
import { StepInventory } from "./StepInventory"
import { StepServices } from "./StepServices"
import { StepContact } from "./StepContact"
import { StepSummary } from "./StepSummary"
import { Check, ChevronLeft, ChevronRight, Loader2 } from "lucide-react"

// --- Zod Schema ---
const quoteSchema = z.object({
    // Step 1: Route
    fromLocation: z.string().min(2, "Please enter a pickup location"),
    toLocation: z.string().min(2, "Please enter a delivery location"),

    // Step 2: Inventory
    inventoryType: z.string().min(1, "Please select a home size"),

    // Step 3: Services (Optional booleans)
    needsPacking: z.boolean().optional(),
    needsInsurance: z.boolean().optional(),
    needsAssembly: z.boolean().optional(),

    // Step 4: Contact
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number is too short"),
    moveDate: z.string().min(1, "Please select a date"),
})

type QuoteFormData = z.infer<typeof quoteSchema>

const steps = [
    { id: "route", title: "Route", component: StepRoute, fields: ["fromLocation", "toLocation"] },
    { id: "inventory", title: "Inventory", component: StepInventory, fields: ["inventoryType"] },
    { id: "services", title: "Services", component: StepServices, fields: [] }, // No validation needed for optionals
    { id: "contact", title: "Contact", component: StepContact, fields: ["name", "email", "phone", "moveDate"] },
    { id: "summary", title: "Review", component: StepSummary, fields: [] },
]

export function QuoteWizard() {
    const [currentStep, setCurrentStep] = useState(0)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const methods = useForm<QuoteFormData>({
        resolver: zodResolver(quoteSchema),
        mode: "onChange",
        defaultValues: {
            needsPacking: false,
            needsInsurance: false,
            needsAssembly: false,
        }
    })

    const { trigger, handleSubmit } = methods

    const nextStep = async () => {
        const fields = steps[currentStep].fields
        const isValid = await trigger(fields as any)

        if (isValid) {
            setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
        }
    }

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0))
    }

    const onSubmit = async (data: QuoteFormData) => {
        setIsSubmitting(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log("Form Submitted:", data)
        setIsSubmitting(false)
        setIsSuccess(true)
    }

    const CurrentComponent = steps[currentStep].component

    if (isSuccess) {
        return (
            <div className="max-w-md mx-auto text-center space-y-4 py-12">
                <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <Check className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold">Quote Request Received!</h2>
                <p className="text-muted-foreground">
                    Thanks {methods.getValues("name")}. We're calculating your best price.
                    Expect a WhatsApp message from our team within 15 minutes.
                </p>
                <Button onClick={() => window.location.reload()} variant="outline">Start New Quote</Button>
            </div>
        )
    }

    return (
        <div className="space-y-8 py-8 px-4">
            {/* Progress Bar */}
            <div className="max-w-2xl mx-auto">
                <div className="relative flex justify-between">
                    {steps.map((step, index) => {
                        const isCompleted = index < currentStep
                        const isCurrent = index === currentStep
                        return (
                            <div key={step.id} className="flex flex-col items-center relative z-10">
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300
                    ${isCompleted || isCurrent ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}
                  `}
                                >
                                    {index + 1}
                                </div>
                                <span className={`text-xs mt-2 font-medium ${isCurrent ? "text-primary" : "text-muted-foreground"}`}>
                                    {step.title}
                                </span>
                            </div>
                        )
                    })}
                    {/* Connecting Line */}
                    <div className="absolute top-4 left-0 w-full h-[2px] bg-muted -z-0">
                        <div
                            className="h-full bg-primary transition-all duration-300"
                            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Step Content */}
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="min-h-[400px]">
                        <CurrentComponent />
                    </div>

                    {/* Navigation Buttons */}
                    <div className="max-w-2xl mx-auto flex justify-between mt-8">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={prevStep}
                            disabled={currentStep === 0 || isSubmitting}
                            className={currentStep === 0 ? "invisible" : ""}
                        >
                            <ChevronLeft className="mr-2 h-4 w-4" /> Back
                        </Button>

                        {currentStep === steps.length - 1 ? (
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                                    </>
                                ) : (
                                    <>Submit Request <Check className="ml-2 h-4 w-4" /></>
                                )}
                            </Button>
                        ) : (
                            <Button type="button" onClick={nextStep}>
                                Next <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                        )}
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}
