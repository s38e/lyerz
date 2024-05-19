import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Lyerz - Desgin Studio",
    template: "%s | Lyerz - Desgin Studio",
  },
  description: "Dev with Lyerz by Saeed Khaled",
  openGraph: {
    title: "Lyerz - Desgin Studio",
    description: "Dev with Lyerz by Saeed Khaled",
    images: {
      url: "../../assets/Opengraph-Image.png",
      width: 1200,
      height: 630,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Lyerz - Desgin Studio",
    description: "Dev with Lyerz by Saeed Khaled",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
