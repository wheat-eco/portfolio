import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], display: "swap" })

// Define base URL for canonical links and absolute URLs
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://muiz.wheatchain.xyz"

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" }
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Muiz Adesope | Full-Stack Developer & Blockchain Innovator",
    template: "%s | Muiz Adesope"
  },
  description: "Portfolio of Muiz Adesope Ayomide, a Full-Stack Developer, Blockchain Innovator, and DeFi Architect specializing in Sui Blockchain development.",
  keywords: [
    "Muiz Adesope", 
    "Full-Stack Developer", 
    "Blockchain Developer", 
    "Sui Blockchain", 
    "DeFi Architect", 
    "Web3 Developer", 
    "JavaScript Developer", 
    "TypeScript Developer", 
    "React Developer", 
    "Next.js Developer"
  ],
  authors: [{ name: "Muiz Adesope", url: "https://github.com/Muiz-Dev" }],
  creator: "Muiz Adesope",
  publisher: "Muiz Adesope",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Technology",
  
  // Open Graph metadata
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Muiz Adesope | Full-Stack Developer & Blockchain Innovator",
    description: "Portfolio of Muiz Adesope Ayomide, a Full-Stack Developer, Blockchain Innovator, and DeFi Architect specializing in Sui Blockchain development.",
    siteName: "Muiz Adesope Portfolio",
    images: [
      {
        url: `${baseUrl}/profile.jpeg`,
        width: 1200,
        height: 630,
        alt: "Muiz Adesope - Full-Stack Developer & Blockchain Innovator",
      }
    ],
  },
  
  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    title: "Muiz Adesope | Full-Stack Developer & Blockchain Innovator",
    description: "Portfolio of Muiz Adesope Ayomide, a Full-Stack Developer, Blockchain Innovator, and DeFi Architect specializing in Sui Blockchain development.",
    creator: "@_kdev_io",
    images: [`${baseUrl}/profile.jpeg`],
  },
  
  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
    other: [
      {
        rel: "canonical",
        url: baseUrl,
      },
    ],
  },
  
  // Verification for search engines
  verification: {
    google: "google-site-verification-code", // Replace with your actual verification code
  },
  
  // Alternate pages
  alternates: {
    canonical: baseUrl,
    languages: {
      'en-US': `${baseUrl}/en-US`,
    },
  },
  
  // Social media profiles
  other: {
    "twitter:site": "@_kdev_io",
    "twitter:creator": "@_kdev_io",
    "linkedin:profile": "https://www.linkedin.com/in/adesopemuiz/",
    "github:profile": "https://github.com/Muiz-Dev",
  },
}

// JSON-LD structured data for better SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muiz Adesope",
  jobTitle: "Full-Stack Developer & Blockchain Innovator",
  description: "Portfolio of Muiz Adesope Ayomide, a Full-Stack Developer, Blockchain Innovator, and DeFi Architect specializing in Sui Blockchain development.",
  url: baseUrl,
  image: `${baseUrl}/profile.jpeg`,
  sameAs: [
    "https://x.com/Techque_tg",
    "https://www.linkedin.com/in/adesopemuiz/",
    "https://github.com/Muiz-Dev"
  ],
  knowsAbout: [
    "Full-Stack Development",
    "Blockchain Development",
    "Sui Blockchain",
    "DeFi Architecture",
    "Web3 Development",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={baseUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="Muiz Adesope Portfolio" />
        <meta name="twitter:site" content="@Techque_tg" />
        <meta name="twitter:creator" content="@Techque_tg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            {children}
            <footer className="mt-auto py-4 text-center text-sm text-muted-foreground">
              <div className="flex justify-center space-x-4 mb-2">
                <a href="https://x.com/_kdev_io" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile" className="hover:text-primary transition-colors">
                  Twitter
                </a>
                <a href="https://www.linkedin.com/in/adesopemuiz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com/Muiz-Dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="hover:text-primary transition-colors">
                  GitHub
                </a>
              </div>
              <p>© {new Date().getFullYear()} Muiz Adesope. All rights reserved.</p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}