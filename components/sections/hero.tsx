import Container from "../ui/Container"
import Section from "../ui/Section"
import Button from "../ui/Button"

type Props = {
  title: string
  subtitle: string
  primaryCta: string
}

export default function Hero({ title, subtitle, primaryCta }: Props) {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            {subtitle}
          </p>
          <div className="mt-8">
            <Button>{primaryCta}</Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}

