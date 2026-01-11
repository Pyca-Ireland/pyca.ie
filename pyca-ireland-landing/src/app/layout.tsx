import "./globals.css"
import type { Metadata } from "next"

export default function ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "Pyca Ireland",
  description: "Empowering youth education through innovation",
  openGraph: {
    title: "Pyca Ireland",
    description: "Empowering youth education through innovation",
    images: ["/pyca_banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pyca Ireland",
    description: "Empowering youth education through innovation",
    images: ["/pyca_banner.png"],
  },
}