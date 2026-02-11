import Container from "../ui/Container"

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <Container>
        <div className="py-8 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Business Name. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}
