import Container from "../ui/Container"
import Section from "../ui/Section"

type Testimonial = {
  quote: string
  name: string
}

export default function Testimonials({
  testimonials,
}: {
  testimonials: Testimonial[]
}) {
  return (
    <Section>
      <Container>
        <div className="space-y-8">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="border-l-4 border-black pl-6"
            >
              <p className="text-lg italic">
                "{t.quote}"
              </p>
              <p className="mt-2 text-sm font-semibold">
                {t.name}
              </p>
            </blockquote>
          ))}
        </div>
      </Container>
    </Section>
  )
}
