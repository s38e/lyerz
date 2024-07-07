"use client";
import { Metadata } from "next";
import Link from "next/link";
import styles from "./404.module.css";
import Error_404 from "../../public/assets/404-error.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://lyerz.com/"),
  title: "404 - Page Not Found",
  description:
    "The page you are looking for might have been removed or is temporarily unavailable.",
};

const Custom404 = () => {
  const [isHeroSectionAnimated, setIsHeroSectionAnimated] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsHeroSectionAnimated(true);
    }, 1);
  });
  return (
    <section
      className={`${styles.errorSection} ${
        isHeroSectionAnimated ? styles.animated : ""
      }`}
    >
      <Image src={Error_404} alt="Error_404" />
      <h1 className={styles.head}>Error 404 - Page Not Found</h1>
      <p className={styles.title}>
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <Link href="/">
        <p>Go back to home</p>
      </Link>
    </section>
  );
};

export default Custom404;
