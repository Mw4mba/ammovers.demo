import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import Link from "next/link"

export function CallToAction() {
    return (
        <section className="py-24 bg-primary text-primary-foreground">
            <Container>
                <div className="flex flex-col items-center text-center space-y-8">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Ready to Make Your Move?
                    </h2>
                    <p className="text-xl text-primary-foreground/90 max-w-2xl">
                        Get a free, no-obligation quote today and experience the difference with AM Movers.
                    </p>
                    <Button asChild size="lg" variant="secondary" className="text-lg h-12 px-8">
                        <Link href="/quote">Get Your Quote Now</Link>
                    </Button>
                </div>
            </Container>
        </section>
    )
}
