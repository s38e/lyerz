import React from "react";
import HomePage from "../pages/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  openGraph: {
    title: "Lyerz - Desgin Studio",
    description: "Dev with Lyerz by Saeed Khaled",
    images: [
      {
        url: "../../../assets/Opengraph-Image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};
export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
