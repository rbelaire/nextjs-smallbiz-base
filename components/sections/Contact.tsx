import Container from "../ui/Container"
import Section from "../ui/Section"

export default function Contact() {
  return (
    <Section id="contact" className="scroll-mt-24 bg-gray-50">
      <Container>
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-3 text-gray-600">
            Tell us a bit about your project and we will get back to you soon.
          </p>

          <form
            action="/api/contact"
            method="POST"
            className="mt-8 space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-gray-900"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                minLength={2}
                maxLength={100}
                className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm outline-none ring-black transition focus:ring-2"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-gray-900"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={254}
                className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm outline-none ring-black transition focus:ring-2"
                placeholder="jane@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-gray-900"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                maxLength={2000}
                rows={6}
                className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm outline-none ring-black transition focus:ring-2"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              className="inline-flex rounded-md bg-black px-6 py-3 text-sm font-semibold text-white transition hover:opacity-80"
            >
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </Section>
  )
}
