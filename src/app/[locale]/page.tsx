import React from "react";
import HomePage from "../pages/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://lyerz.com/"),
  // title: "LYERZ | Design Subscription for Scale-Ups",
  description: "Hire Your Whole Design Team With a Few Clicks.",
  openGraph: {
    url: "https://lyerz.com/",
    siteName: "LYERZ | Design Subscription for Scale-Ups",
    title: "LYERZ | Design Subscription for Scale-Ups",
    description: "Hire Your Whole Design Team With a Few Clicks.",
    images: {
      url: "/assets/Opengraph-Image.png",
      width: 1200,
      height: 630,
      alt: "LYERZ | Design Subscription for Scale-Ups",
    },
  },
};

export default function Home() {
  return <HomePage />;
}
