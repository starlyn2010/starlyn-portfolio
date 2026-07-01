import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://starlyn-portfolio.vercel.app"),
  title: "Starlyn Rosario | Independent Researcher",
  description:
    "Portfolio of Starlyn Rosario (16), an independent researcher in Collatz Conjecture dynamics from Santo Domingo, DR. Three preprints on Zenodo.",
  alternates: {
    canonical: "https://starlyn-portfolio.vercel.app",
  },
  keywords: [
    "Starlyn Rosario",
    "Independent Researcher",
    "Collatz Conjecture",
    "2-adic valuation",
    "Nova AI",
    "Dominican Republic",
    "Liquid Neural Networks",
  ],
  authors: [{ name: "Starlyn Rosario" }],
  openGraph: {
    title: "Starlyn Rosario | Independent Researcher",
    description: "Preprints on Collatz dynamics and Edge AI fragility. Age 16, Santo Domingo, DR.",
    url: "https://starlyn-portfolio.vercel.app",
    siteName: "Starlyn Rosario",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Starlyn Rosario | Independent Researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Starlyn Rosario | Independent Researcher",
    description: "Preprints on Collatz dynamics and Edge AI fragility.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Starlyn Rosario",
    "url": "https://starlyn-portfolio.vercel.app",
    "jobTitle": "Independent Researcher",
    "knowsAbout": ["Number Theory", "Computer Science", "Collatz Conjecture"],
    "description": "16-year-old independent researcher from Santo Domingo, DR. Published preprints on Collatz dynamics and Edge AI fragility.",
    "sameAs": [
      "https://www.linkedin.com/in/starlyn-eliezer-rosario-2457033ab",
      "https://github.com/starlyn2010"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-black/10 selection:text-black text-zinc-900 bg-[#fdfdfd] dark:bg-[#0a0a0a] dark:text-zinc-100 transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
