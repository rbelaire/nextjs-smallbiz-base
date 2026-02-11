import Hero from "@/components/sections/Hero"
import ServiceGrid from "@/components/sections/ServiceGrid"
import ProcessSteps from "@/components/sections/ProcessSteps"
import Testimonials from "@/components/sections/Testimonials"

import * as content from "@/content/local-service"

export default function LocalServiceTemplate() {
  return (
    <>
      <Hero {...content.hero} />
      <ServiceGrid services={content.services} />
      <ProcessSteps steps={content.steps} />
      <Testimonials testimonials={content.testimonials} />
    </>
  )
}
