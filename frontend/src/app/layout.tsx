import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConfigProvider from "@/provider/ConfigProvider";
import { montserrat, openSans, poppins } from "../../public/font";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inquir | Connect with Quality Feedback Providers",
  description:
    "A platform connecting companies with freelance feedback providers for websites, games, and software. Get high-quality feedback before launch with our coin-based system.",
  keywords:
    "feedback marketplace, user testing, product feedback, website feedback, game testing, software testing, freelance feedback, upwork alternative",
  authors: [{ name: "Abhay Mishra", url: "https://abhaymishra.in" }],
  creator: "Abhay Mishra",
  publisher: "Abhay Mishra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://inquir.vercel.app",
    title: "Inquir | Quality Product Feedback",
    description:
      "Connect with experienced freelancers to get quality feedback for your websites, games, and software products before launch.",
    siteName: "Inquir",
    images: [
      {
        url: "/assets/common/logo-dark.png",
        width: 1200,
        height: 630,
        alt: "Inquir - Feedback Provider Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inquir | Quality Product Feedback",
    description:
      "Connect with experienced freelancers to get quality feedback for your websites, games, and software products before launch.",
    images: ["/assets/common/logo-dark.png"],
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
    canonical: "https://inquir.vercel.app",
  },
  verification: {
    google: "OXAsGF11gjk-xBpdKYTUUxWhz-xahTi4nsVEV2vp73E",
  },
  applicationName: "Inquir",
  category: "Feedback Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${openSans.variable} ${poppins.variable}`}
      >
        <ConfigProvider>{children}</ConfigProvider>
      </body>
    </html>
  );
}
