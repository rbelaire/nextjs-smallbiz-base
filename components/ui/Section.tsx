type Props = React.ComponentPropsWithoutRef<"section">

export default function Section({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <section className={`py-16 lg:py-24 ${className}`} {...props}>
      {children}
    </section>
  )
}
