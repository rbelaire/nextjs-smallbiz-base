import Container from "../ui/Container"
import Section from "../ui/Section"

export default function ProcessSteps({
  steps,
}: {
  steps: string[]
}) {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={i}>
              <p className="text-sm font-semibold">
                Step {i + 1}
              </p>
              <p className="mt-2 text-gray-700">
                {step}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
