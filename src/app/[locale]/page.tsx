import React from "react";
import HomePage from "../pages/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://lyerz.vercel.app"),
  title: "Lyerz - Desgin Studio",
  description: "Dev with Lyerz by Saeed Khaled",
  openGraph: {
    url: "https://lyerz.vercel.app/",
    siteName: "Lyerz - Desgin Studio",
    title: "Lyerz - Desgin Studio",
    description: "Dev with Lyerz by Saeed Khaled",
    images: {
      url: "/assets/Opengraph-Image.png",
      width: 1200,
      height: 630,
      alt: "Lyerz - Design Studio",
    },
  },
};

export default function Home() {
  return <HomePage />;
}
