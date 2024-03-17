import styles from "../page.module.css";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import Image from "next/image";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const locales = ["en", "de"];
const { Link, useRouter, usePathname, redirect } =
  createSharedPathnamesNavigation({ locales });

export async function generateMetadata() {
  const t = await getTranslations("HomePage");
  return {
    title: t("tab-title-home"),
  };
}

export default function Home() {
  // const t = useTranslations("Heading");
  return (
    <>
      <NavBar />
      <page className={styles.page}></page>
      <Footer />
    </>
  );
}
