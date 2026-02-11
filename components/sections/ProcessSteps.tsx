import Container from "../ui/Container"
import Section from "../ui/Section"
import type { Steps } from "@/types/templates"

export default function ProcessSteps({
  steps,
}: {
  steps: Steps[]
}) {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={i}>
              <p className="text-sm font-semibold">
                {step.label}
              </p>
              <p className="mt-2 text-gray-700">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
