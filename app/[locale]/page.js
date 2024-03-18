"use client";
import styles from "../page.module.css";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import Image from "next/image";
import NavBar from "./components/NavBar";
import Logo from "@/public/assets/logo.png";
import img01 from "@/public/assets/img01.jpg";
import img02 from "@/public/assets/img02.png";
import img03 from "@/public/assets/img03.webp";
import img04 from "@/public/assets/img04.webp";
import img05 from "@/public/assets/img05.webp";
import img06 from "@/public/assets/img06.jpg";
import img07 from "@/public/assets/img07.png";
import img08 from "@/public/assets/img08.webp";
import img09 from "@/public/assets/img09.webp";
import Footer from "./components/Footer";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const locales = ["ar", "en"];
const { Link, useRouter, usePathname, redirect } =
  createSharedPathnamesNavigation({ locales });

// export async function generateMetadata() {
//   const t = await getTranslations("HomePage");
//   return {
//     title: t("tab-title-home"),
//   };
// }

export default function Home() {
  useEffect(() => {
    // document.title = t("tab-title-home");
    // ----------- Smooth Scroll ----------- //
    const lenis = new Lenis({
      duration: 1.2,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
  }, []);
  // const t = useTranslations("Heading");
  return (
    <>
      <NavBar />
      <page className={styles.page}>
        <section
          className={`${styles.heroSection} ${styles.section}`}
        ></section>
        <section className={`${styles.section_1} ${styles.section}`}>
          <div className={styles.heading}>
            <Image src={Logo} alt="logo" />
            <h1>Recent Work</h1>
          </div>
          <div className={styles.sliders}>
            <div className={styles.recentWork}>
              <div className={styles.recentWork_slide}>
                <Image src={img01} alt="img01" />
                <Image src={img02} alt="img02" />
                <Image src={img03} alt="img03" />
                <Image src={img04} alt="img04" />
                <Image src={img05} alt="img05" />
                <Image src={img06} alt="img06" />
                <Image src={img07} alt="img07" />
                <Image src={img08} alt="img08" />
                <Image src={img09} alt="img09" />
              </div>
              <div className={styles.recentWork_slide}>
                <Image src={img01} alt="img01" />
                <Image src={img02} alt="img02" />
                <Image src={img03} alt="img03" />
                <Image src={img04} alt="img04" />
                <Image src={img05} alt="img05" />
                <Image src={img06} alt="img06" />
                <Image src={img07} alt="img07" />
                <Image src={img08} alt="img08" />
                <Image src={img09} alt="img09" />
              </div>
            </div>
            <div className={styles.recentWork}>
              <div className={styles.recentWork_slide}>
                <Image src={img09} alt="img09" />
                <Image src={img08} alt="img08" />
                <Image src={img07} alt="img07" />
                <Image src={img06} alt="img06" />
                <Image src={img05} alt="img05" />
                <Image src={img04} alt="img04" />
                <Image src={img03} alt="img03" />
                <Image src={img02} alt="img02" />
                <Image src={img01} alt="img01" />
              </div>
              <div className={styles.recentWork_slide}>
                <Image src={img09} alt="img09" />
                <Image src={img08} alt="img08" />
                <Image src={img07} alt="img07" />
                <Image src={img06} alt="img06" />
                <Image src={img05} alt="img05" />
                <Image src={img04} alt="img04" />
                <Image src={img03} alt="img03" />
                <Image src={img02} alt="img02" />
                <Image src={img01} alt="img01" />
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.section_2} ${styles.section}`}>
          <h1 className={styles.heading}>
            Websites, Web apps, Webflow
            <br /> and ... you name it
          </h1>
          <div className={styles.sliderServices}>
            {/*  */}
            <div></div>
            {/*  */}
            <div className={styles.sliderServices_slide}>
              <div className={styles.logo}>
                <Image src={Logo} alt="logo" />
              </div>
              <div className={styles.backGround}>
                <div className={styles.slide}>
                  <p>Logos</p>
                  <span className={styles.dot}>•</span>
                  <p>Packaging</p>
                  <span className={styles.dot}>•</span>
                  <p>Social media</p>
                  <span className={styles.dot}>•</span>
                  <p>Mobile apps</p>
                  <span className={styles.dot}>•</span>
                  <p>Branding</p>
                  <span className={styles.dot}>•</span>
                  <p>Billboards</p>
                  <span className={styles.dot}>•</span>
                  <p>Logos</p>
                  <span className={styles.dot}>•</span>
                  <p>Packaging</p>
                  <span className={styles.dot}>•</span>
                  <p>Social media</p>
                  <span className={styles.dot}>•</span>
                  <p>Mobile apps</p>
                  <span className={styles.dot}>•</span>
                  <p>Branding</p>
                  <span className={styles.dot}>•</span>
                  <p>Billboards</p>
                  <span className={styles.dot}>•</span>
                </div>
                <div className={styles.slide}>
                  <p>Logos</p>
                  <span className={styles.dot}>•</span>
                  <p>Packaging</p>
                  <span className={styles.dot}>•</span>
                  <p>Social media</p>
                  <span className={styles.dot}>•</span>
                  <p>Mobile apps</p>
                  <span className={styles.dot}>•</span>
                  <p>Branding</p>
                  <span className={styles.dot}>•</span>
                  <p>Billboards</p>
                  <span className={styles.dot}>•</span>
                  <p>Logos</p>
                  <span className={styles.dot}>•</span>
                  <p>Packaging</p>
                  <span className={styles.dot}>•</span>
                  <p>Social media</p>
                  <span className={styles.dot}>•</span>
                  <p>Mobile apps</p>
                  <span className={styles.dot}>•</span>
                  <p>Branding</p>
                  <span className={styles.dot}>•</span>
                  <p>Billboards</p>
                  <span className={styles.dot}>•</span>
                </div>
                <div className={styles.slide}>
                  <p>Logos</p>
                  <span className={styles.dot}>•</span>
                  <p>Packaging</p>
                  <span className={styles.dot}>•</span>
                  <p>Social media</p>
                  <span className={styles.dot}>•</span>
                  <p>Mobile apps</p>
                  <span className={styles.dot}>•</span>
                  <p>Branding</p>
                  <span className={styles.dot}>•</span>
                  <p>Billboards</p>
                  <span className={styles.dot}>•</span>
                  <p>Logos</p>
                  <span className={styles.dot}>•</span>
                  <p>Packaging</p>
                  <span className={styles.dot}>•</span>
                  <p>Social media</p>
                  <span className={styles.dot}>•</span>
                  <p>Mobile apps</p>
                  <span className={styles.dot}>•</span>
                  <p>Branding</p>
                  <span className={styles.dot}>•</span>
                  <p>Billboards</p>
                  <span className={styles.dot}>•</span>
                </div>
                <div className={styles.slide}>
                  <p>Logos</p>
                  <span className={styles.dot}>•</span>
                  <p>Packaging</p>
                  <span className={styles.dot}>•</span>
                  <p>Social media</p>
                  <span className={styles.dot}>•</span>
                  <p>Mobile apps</p>
                  <span className={styles.dot}>•</span>
                  <p>Branding</p>
                  <span className={styles.dot}>•</span>
                  <p>Billboards</p>
                  <span className={styles.dot}>•</span>
                  <p>Logos</p>
                  <span className={styles.dot}>•</span>
                  <p>Packaging</p>
                  <span className={styles.dot}>•</span>
                  <p>Social media</p>
                  <span className={styles.dot}>•</span>
                  <p>Mobile apps</p>
                  <span className={styles.dot}>•</span>
                  <p>Branding</p>
                  <span className={styles.dot}>•</span>
                  <p>Billboards</p>
                  <span className={styles.dot}>•</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </page>
      <Footer />
    </>
  );
}
