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
  title: "Starlyn Rosario | AI Researcher & Software Engineer | MIT Candidate",
  description:
    "Official portfolio of Starlyn Rosario (16), an independent researcher in Collatz Conjecture dynamics and Agentic AI Architecture. Candidate for MIT EECS Course 6-4.",
  alternates: {
    canonical: "https://starlyn-portfolio.vercel.app",
  },
  keywords: [
    "Starlyn Rosario",
    "AI Researcher",
    "Software Engineer",
    "MIT EECS",
    "Course 6-4",
    "Collatz Conjecture research",
    "2-adic valuation dynamics",
    "Agentic AI",
    "Nova AI",
    "Dominican Republic AI",
    "Independent Researcher"
  ],
  authors: [{ name: "Starlyn Rosario" }],
  openGraph: {
    title: "Starlyn Rosario | AI Researcher & Software Engineer",
    description: "Theoretical frameworks for dynamical systems and agentic AI architectures.",
    url: "https://starlyn-portfolio.vercel.app",
    siteName: "Starlyn Rosario Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Starlyn Rosario | AI Researcher & Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Starlyn Rosario | AI Researcher",
    description: "Independent research in number theory and software architecture.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "KUjlMLyh7UWTnS-4ExpUEok7Gmxk_ZHPnJLrlDMZRNs",
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
    "jobTitle": "Independent AI Researcher & Software Engineer",
    "knowsAbout": ["Artificial Intelligence", "Number Theory", "Dynamical Systems", "Software Engineering"],
    "description": "Independendent researcher focused on the intersection of dynamical systems and artificial intelligence.",
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
