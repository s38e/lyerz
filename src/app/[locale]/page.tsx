import React from "react";
import HomePage from "../pages/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://lyerz.vercel.app"),
  // title: "LYERZ | Design Subscription for Scale-Ups",
  description:
    "Hire Your Whole Design Team With a Few Clicks.",
  openGraph: {
    url: "https://lyerz.vercel.app/",
    siteName: "LYERZ | Design Subscription for Scale-Ups",
    title: "LYERZ | Design Subscription for Scale-Ups",
    description:
      "Hire Your Whole Design Team With a Few Clicks.",
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
