import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: "Portfolio Amadou GUISSE",
  description: "Portfolio professionnel de Amadou GUISSE, Développeur Web",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          defaultTheme="light" // Changed to 'light' as a valid default
          storageKey="my-portfolio-theme" // Optional: customize storage key
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
