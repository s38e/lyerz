import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://lyerz.com/"),
  title: {
    default: "LYERZ | Design Subscription for Scale-Ups",
    template: "%s | LYERZ | Design Subscription for Scale-Ups",
  },
  description: "Hire Your Whole Design Team With a Few Clicks.",
  openGraph: {
    title: "LYERZ | Design Subscription for Scale-Ups",
    description: "Hire Your Whole Design Team With a Few Clicks.",
    images: {
      url: "/assets/og.png",
      width: 1200,
      height: 630,
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
