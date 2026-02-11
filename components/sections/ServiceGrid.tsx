import Container from "../ui/Container"
import Section from "../ui/Section"

type Service = {
  title: string
  description: string
}

export default function ServiceGrid({
  services,
}: {
  services: Service[]
}) {
  return (
    <Section id="services" className="scroll-mt-24">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div key={i} className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
