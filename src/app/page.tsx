import { Hero } from "@/components/sections/Hero"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { Testimonials } from "@/components/sections/Testimonials"
import { CallToAction } from "@/components/sections/CallToAction"

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <ServicesGrid />
      <Testimonials />
      <CallToAction />
    </div>
  )
}
