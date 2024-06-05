import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://lyerz.vercel.app"),
  title: {
    default: "LYERZ | Design Subscription for Scale-Ups",
    template: "%s | LYERZ | Design Subscription for Scale-Ups",
  },
  description: "Dev with Lyerz by Saeed Khaled",
  openGraph: {
    title: "LYERZ | Design Subscription for Scale-Ups",
    description: "Dev with Lyerz by Saeed Khaled",
    images: {
      url: "/assets/Opengraph-Image.png",
      width: 1200,
      height: 630,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "LYERZ | Design Subscription for Scale-Ups",
    description: "Dev with Lyerz by Saeed Khaled",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
