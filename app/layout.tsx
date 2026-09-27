import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "../styles/globals.css"
import PageLoader from "@/components/PageLoader"
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  title: {
    default: "M. Farhan Ramadhan | Portfolio",
    template: "%s | Farhan Portfolio",
  },
  description: "Personal portfolio of M. Farhan Ramadhan. Full-Stack Developer & AI Enthusiast specializing in React, Laravel, Python, and modern web development.",
  keywords: ["Farhan", "Portfolio", "Software Developer", "Full-Stack", "AI Enthusiast", "React", "Next.js", "Laravel", "Python"],
  authors: [{ name: "M. Farhan Ramadhan" }],
  creator: "M. Farhan Ramadhan",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    title: "M. Farhan Ramadhan | Portfolio",
    description: "Personal portfolio of M. Farhan Ramadhan. Full-Stack Developer & AI Enthusiast specializing in React, Laravel, Python, and modern web development.",
    siteName: "Farhan Portfolio",
    images: [
      {
        url: "/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Farhan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M. Farhan Ramadhan | Portfolio",
    description: "Personal portfolio of M. Farhan Ramadhan. Full-Stack Developer & AI Enthusiast specializing in React, Laravel, Python, and modern web development.",
    images: ["/profile.jpeg"],
    creator: "@farhanrmdh77",
  },
  icons: {
    icon: "/profile.jpeg",
    shortcut: "/profile.jpeg",
    apple: "/profile.jpeg",
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "ZbLhiilDbtLDyIx5eH6Jeoe1jPkXNKId-LhXG1HhLWA",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <PageLoader />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

