import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics/>
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
    images: ["/archive/pyca_banner_OLD.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pyca Ireland",
    description: "Empowering youth education through innovation",
    images: ["/archive/pyca_banner_OLD.png"],
  },
}