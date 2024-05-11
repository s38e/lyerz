"use client";
import Image from "next/image";
import styles from "../page.module.css";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

// export default function Home() {
//   return <main className={styles.main}></main>;
// }

export default function Home() {
  useEffect(() => {});
  const t = useTranslations("Index");
  return <main className={styles.page}>تيستتتتتتتتتتتتتتتتت</main>;
}
