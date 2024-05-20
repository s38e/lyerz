import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./styles/Footer.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";
import gsap from "gsap";

function Footer() {
  const [isActive, setIsActive] = useState(false);
  const [menuHeight, setMenuHeight] = useState(56);
  const [menuWidth, setMenuWidth] = useState();
  const [linkHovered, setLinkHovered] = useState(null);
  const { locale } = useTranslations();

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  const handleButtonMouseLeave = () => {
    // setIsActive(false);
  };

  useEffect(() => {
    // ---------------- Backgound Links ---------------- //
    // const links = document.querySelectorAll(`.${styles.menu} .${styles.link}`);
    // const socialLink_1 = document.querySelector(
    //   `.${styles.menu} .${styles.socialLinks} a:nth-child(1)`
    // );
    // const socialLink_2 = document.querySelector(
    //   `.${styles.menu} .${styles.socialLinks} a:nth-child(1)`
    // );
    // const socialLink_1Width = socialLink_1.offsetWidth;
    // const socialLink_2Width = socialLink_2.offsetWidth;
    // const newMenuWidth = socialLink_1Width + socialLink_2Width;
    // const linkHeight = links[0].offsetHeight;
    // const newMenuHeight = linkHeight * 3 + 16 + linkHeight;
    // setMenuHeight(newMenuHeight);
    // // setMenuWidth(newMenuWidth);
  }, []);
  useEffect(() => {
    // ---------------- Animation HeadTexts ---------------- //
    gsap.fromTo(
      `.${styles.Footer} button`,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.25, ease: "power4.out" }
    );
    gsap.fromTo(
      `.${styles.Footer} p`,
      { opacity: 0, y: 100 },
      { opacity: 1, delay: 0.3, y: 0, duration: 1.25, ease: "power4.out" }
    );
  }, []);

  const t = useTranslations("Footer");

  // ---------------- Check the language to determine the style ---------------- //
  const pathName = window.location.pathname;
  const isArabic = pathName.includes("/ar");

  return (
    <footer className={`${styles.Footer} ${isArabic ? styles.ar : ""}`}>
      <button
        className={isActive ? styles.active : ""}
        onClick={handleButtonClick}
        onMouseLeave={handleButtonMouseLeave}
      >
        <menu
          className={styles.menu}
          style={
            {
              // height: isActive ? `${menuHeight}px` : 56,
              // width: isActive ? `${menuWidth}px` : "auto",
            }
          }
        >
          <Link className={styles.link} href="">
            <span>LYERZ</span> Space
          </Link>
          <Link className={styles.link} href="">
            Book a Demo
          </Link>
          <div className={styles.socialLinks}>
            <Link href="">INSTAGRAM</Link>
            <Link href="">LINKINDIN</Link>
          </div>
        </menu>
        <div className={styles.defultBtn}>
          <div className={styles.menuIcon}>
            <div></div>
            <div></div>
          </div>
          <span>{t("btnMenu")}</span>
        </div>
      </button>
      <p>
        {t("notePart1")}
        <br />
        {t("notePart2")}
      </p>
    </footer>
  );
}

export default Footer;
