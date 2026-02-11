import type { Metadata } from "next"

type SeoInput = {
  title: string
  description: string
  imageUrl: string
  canonicalUrl: string
}

export function buildSeoMetadata({
  title,
  description,
  imageUrl,
  canonicalUrl,
}: SeoInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: title,
      type: "website",
      images: [
        {
          url: imageUrl,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  }
}
