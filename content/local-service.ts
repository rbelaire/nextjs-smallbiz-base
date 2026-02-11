import type {
  Contact,
  Hero,
  Services,
  Steps,
  Testimonials,
} from "@/types/templates"

export const hero: Hero = {
  title: "Professional Home Services You Can Trust",
  subtitle: "Fast response. Transparent pricing. Work done right the first time.",
  primaryCta: "Request a Quote",
}

export const services: Services[] = [
  {
    title: "General Repairs",
    description: "Reliable and efficient repair services for your home.",
  },
  {
    title: "Installations",
    description: "Professional installation with attention to detail.",
  },
]

export const steps: Steps[] = [
  {
    label: "Step 1",
    text: "Submit your request online.",
  },
  {
    label: "Step 2",
    text: "We review and confirm details.",
  },
  {
    label: "Step 3",
    text: "We complete the work professionally.",
  },
]

export const testimonials: Testimonials[] = [
  {
    quote: "They were fast and professional.",
    name: "Sarah M.",
  },
]

export const contact: Contact = {
  title: "Contact Us",
  description: "Tell us a bit about your project and we will get back to you soon.",
  submitLabel: "Send Message",
}
