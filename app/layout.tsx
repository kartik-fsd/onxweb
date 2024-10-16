import { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import "./globals.css";
import HeaderNavbar from "@/components/header";
import Footer from "@/components/footer";
import LenisScroll from "../lib/scroll";
import ScrollTopButton from "@/components/scrollUp";
import { Metadata } from "next";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.onxwork.com"),
  title: {
    default: "ONX - India's Leading B2B Field Service Marketplace",
    template: "%s | ONX",
  },
  description:
    "ONX is India's premier B2B service marketplace, offering scalable onboarding and installation solutions for businesses in retail, telecom, logistics, and more.",
  generator: "Next.js",
  applicationName: "ONX",
  referrer: "origin-when-cross-origin",
  keywords: [
    "B2B service marketplace",
    "field service management",
    "onboarding services",
    "installation services",
    "scalable workforce solutions",
    "business operations optimization",
    "technician deployment",
    "gig economy platform",
    "on-demand staffing",
    "B2B workforce management",
    "Indian business services",
    "enterprise installation solutions",
    "India installation services",
    "India onboarding services",
    "Onx",
    "onwork",
    "onxworks",
  ],
  authors: [{ name: "Kartik Shettar" }],
  creator: "Kartik Shettar",
  publisher: "ONX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.onxwork.com/",
    siteName: "OnxWork",
    title: "ONX - Leading B2B Field Service Marketplace",
    description:
      "ONX provides scalable onboarding and installation services for businesses across retail, telecom, and logistics industries in India.",
    images: [
      {
        url: "https://tm-integration-aws.s3.amazonaws.com/passbook.jpg",
        width: 1200,
        height: 675,
        alt: "ONX - B2B Service Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@onxwork",
    creator: "@KartikShettar",
    title: "ONX - Leading B2B Field Service Marketplace",
    description:
      "ONX provides scalable onboarding and installation services for businesses across retail, telecom, and logistics industries in India.",
    images: ["https://tm-integration-aws.s3.amazonaws.com/passbook.jpg"],
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
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/180.png", sizes: "180x180", type: "image/png" },
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <LenisScroll />
        <HeaderNavbar />
        <main>{children}</main>
        <ScrollTopButton />
        <Footer />
      </body>
    </html>
  );
}
