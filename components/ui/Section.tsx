type Props = {
  id?: string
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
  contentClassName?: string
}

export default function Section({
  id,
  title,
  description,
  children,
  className = "",
  contentClassName = "",
}: Props) {
  const headingId = id ? `${id}-title` : undefined
  const descriptionId = id ? `${id}-description` : undefined

  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      aria-describedby={description ? descriptionId : undefined}
      className={`py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        {(title || description) && (
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            {title && (
              <h2
                id={headingId}
                className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                id={descriptionId}
                className="mt-3 text-base text-gray-600 sm:text-lg"
              >
                {description}
              </p>
            )}
          </div>
        )}

        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  )
}
