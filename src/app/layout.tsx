import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { ThemeProvider } from "@/theme/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { GoogleTagManager } from '@next/third-parties/google'
import Schema from "@/schema/schema";
import { keywords } from "@/schema/keywords";

// Font configuration remains the same
const satoshi = localFont({
  src: [
    { path: '../../public/fonts/Satoshi-Variable.ttf', style: 'normal' },
    { path: '../../public/fonts/Satoshi-VariableItalic.ttf', style: 'italic' },
  ],
  variable: '--font-satoshi',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: 'Arial',
})

export const metadata: Metadata = {
  // Updated Domain
  metadataBase: new URL('https://visions.services'), 
  
  title: {
    default: "visions.services - Clarity + Intelligence + Automation",
    template: "%s | visions.services",
  },
  description: "The operating system for customer intelligence. Unify streams and deploy AI agents that see the full picture.",
  keywords: keywords,
  
  // Legal Entity remains GETIT EXPRESS
  authors: [{ name: "GETIT EXPRESS PRIVATE LIMITED", url: "https://getit.express" }],
  creator: "GETIT EXPRESS PRIVATE LIMITED",
  publisher: "GETIT EXPRESS PRIVATE LIMITED",
  
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Updated OpenGraph
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://visions.services",
    title: "visions.services - Clarity + Intelligence + Automation",
    description: "The operating system for customer intelligence. Unify streams and deploy AI agents that see the full picture.",
    siteName: "visions.services",
    images: [
      {
        url: "https://visions.services/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "visions.services - AI-powered customer intelligence platform",
        type: "image/png",
      },
    ],
  },
  
  // Updated Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "visions.services - Clarity + Intelligence + Automation",
    description: "The operating system for customer intelligence. Unify streams and deploy AI agents that see the full picture.",
    creator: "@visions_services", // Updated handle placeholder
    site: "@visions_services",
    images: [
      {
        url: "https://visions.services/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "visions.services - AI-powered customer intelligence platform",
      },
    ],
  },
  
  // Updated Icons - Make sure to rename your files in /public folder
  icons: {
    icon: [
      { url: "/visions-icon.png", sizes: "any" },
      { url: "/visions-icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/visions-icon.png",
    apple: [
      { url: "/visions-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Schema />
      </head>
      <body className={`${satoshi.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors closeButton />
        </ThemeProvider>
        {/* Update your GTM ID if you have created a new container */}
        <GoogleTagManager gtmId="GTM-XYZ" />
      </body>
    </html>
  );
}