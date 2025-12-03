import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import Link from "next/link"

export function CallToAction() {
    return (
        <section className="py-24 bg-[#F25C24]">
            <Container>
                <div className="flex flex-col items-center text-center space-y-8">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white drop-shadow-sm">
                        Ready to Make Your Move?
                    </h2>
                    <p className="text-xl text-white/90 max-w-2xl font-medium">
                        Get a free, no-obligation quote today and experience the difference with AM Movers.
                    </p>
                    <Button asChild size="lg" className="bg-white text-[#F25C24] hover:bg-[#FFF5F0] text-lg h-14 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 font-bold">
                        <Link href="/quote">Get Your Quote Now</Link>
                    </Button>
                </div>
            </Container>
        </section>
    )
}
