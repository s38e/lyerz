import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://lyerz.com/"),
  title: "LYERZ | Design Subscription for Scale-Ups",
  description: "Hire Your Whole Design Team With a Few Clicks.",
  openGraph: {
    url: "https://lyerz.com/",
    siteName: "LYERZ | Design Subscription for Scale-Ups",
    title: "LYERZ | Design Subscription for Scale-Ups",
    description: "Hire Your Whole Design Team With a Few Clicks.",
    images: {
      url: "/assets/og.png",
      width: 1200,
      height: 630,
      alt: "LYERZ | Design Subscription for Scale-Ups",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "LYERZ | Design Subscription for Scale-Ups",
    description: "Hire Your Whole Design Team With a Few Clicks.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
