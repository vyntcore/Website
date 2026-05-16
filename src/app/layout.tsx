import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vyntcore.online"),
  title: {
    default: "VyntCore – Premium Web Development Agency | SEO, AEO & Hosting",
    template: "%s | VyntCore",
  },
  description:
    "VyntCore is a premium web development agency helping small and medium businesses build high-converting websites with expert SEO, AEO, and reliable hosting. Book a free strategy call today.",
  keywords: [
    "web development agency",
    "premium website design",
    "SEO services",
    "AEO optimization",
    "web hosting",
    "small business website",
    "Next.js development",
    "conversion-focused websites",
    "SMB digital agency",
    "VyntCore",
  ],
  authors: [{ name: "VyntCore" }],
  creator: "VyntCore",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vyntcore.online",
    siteName: "VyntCore",
    title: "VyntCore – Premium Web Development Agency",
    description:
      "We help ambitious brands dominate their market with high-end, conversion-focused websites and powerful SEO.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VyntCore – Premium Web Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VyntCore – Premium Web Development Agency",
    description:
      "We help ambitious brands dominate their market with high-end, conversion-focused websites and powerful SEO.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
