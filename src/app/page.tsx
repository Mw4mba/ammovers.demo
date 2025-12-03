import { Hero } from "@/components/sections/Hero"
import { ScrollAnimationSection } from "@/components/sections/ScrollAnimationSection"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { Testimonials } from "@/components/sections/Testimonials"
import { CallToAction } from "@/components/sections/CallToAction"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <ScrollAnimationSection />
      <ServicesGrid />
      <Testimonials />
      <CallToAction />
    </main>
  )
}
