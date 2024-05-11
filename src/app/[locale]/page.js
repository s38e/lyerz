"use client";
import Image from "next/image";
import styles from "../page.module.css";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";

// export default function Home() {
//   return <main className={styles.main}></main>;
// }

export default function Home() {
  useEffect(() => {});
  const t = useTranslations("Index");
  return (
    <>
      <NextSeo
        title="Lyerz - Branding Agency"
        description="تاب يستخدم لعرض الصفحة الرئيسية للموقع، حيث يتم استيراد العديد من المكتبات مثل 'use client' و 'next/image' و 'next-intl'، وتعريف العناصر الرئيسية للصفحة مثل 'main' و 'styles' و 'useTranslations'. تم تعليق الدالة الرئيسية وإعادة تعريفها باستخدام 'useEffect' و 'useTranslations' لإعداد بعض العمليات اللازمة لعرض المحتوى بشكل صحيح."
      />
      <main className={styles.page}></main>;
    </>
  );
}
