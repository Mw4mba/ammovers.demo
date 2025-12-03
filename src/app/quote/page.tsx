import { QuoteWizard } from "@/components/quote-wizard/QuoteWizard"

export default function QuotePage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <div className="container mx-auto py-10">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Get Your Moving Quote</h1>
                    <p className="mt-4 text-lg text-slate-600">Tell us about your move and get an estimated price in minutes.</p>
                </div>
                <QuoteWizard />
            </div>
        </main>
    )
}
