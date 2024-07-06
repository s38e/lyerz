import React from "react";
import HomePage from "../pages/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://lyerz.vercel.app"),
  // title: "LYERZ | Design Subscription for Scale-Ups",
  description:
    "Experience the future of design with LYERZ! We bring a streamlined design service directly to your team, connecting you with elite designers and a dedicated project manager tailored to your needs. With LYERZ, enjoy the clarity of a fixed monthly subscription with no hidden fees or surprises. We are committed to enhancing your creative capabilities and delivering consistent, exceptional results with every project.",
  openGraph: {
    url: "https://lyerz.vercel.app/",
    siteName: "LYERZ | Design Subscription for Scale-Ups",
    title: "LYERZ | Design Subscription for Scale-Ups",
    description:
      "Experience the future of design with LYERZ! We bring a streamlined design service directly to your team, connecting you with elite designers and a dedicated project manager tailored to your needs. With LYERZ, enjoy the clarity of a fixed monthly subscription with no hidden fees or surprises. We are committed to enhancing your creative capabilities and delivering consistent, exceptional results with every project.",
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
