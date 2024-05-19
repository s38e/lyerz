import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./styles/Footer.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";
import gsap from "gsap";

function Footer() {
  const [isActive, setIsActive] = useState(false);
  const [menuHeight, setMenuHeight] = useState(56);
  const [linkHovered, setLinkHovered] = useState(null);
  const { locale } = useTranslations();

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  const handleButtonMouseLeave = () => {
    setIsActive(false);
  };

  const handleLinkHover = (index) => {
    setLinkHovered(index);
  };

  const handleLinkLeave = () => {
    setLinkHovered(null);
  };

  useEffect(() => {
    // ---------------- Backgound Links ---------------- //
    const links = document.querySelectorAll(`.${styles.menu} .${styles.link}`);
    const backGroundLink = document.querySelector(
      `.${styles.menu} .${styles.backGroundLink}`
    );

    const linkHeight = links[0].offsetHeight;
    const newMenuHeight = linkHeight * links.length + 16;
    backGroundLink.style.height = `${linkHeight}px`;
    setMenuHeight(newMenuHeight);
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
  // const pathName = window.location.pathname;
  // const isArabic = pathName.includes("/ar");

  return (
    <footer className={`${styles.Footer} `}>
      <button
        className={isActive ? styles.active : ""}
        onClick={handleButtonClick}
        onMouseLeave={handleButtonMouseLeave}
      >
        <menu
          className={styles.menu}
          style={{ height: isActive ? `${menuHeight}px` : 56 }}
        >
          <div
            className={`${styles.backGroundLink} ${
              linkHovered !== null ? styles[`link_${linkHovered + 1}`] : ""
            }`}
          ></div>
          <Link
            className={styles.link}
            href=""
            onMouseEnter={() => handleLinkHover(0)}
            onMouseLeave={handleLinkLeave}
          >
            {t("btn_1")}
          </Link>
          <Link
            className={styles.link}
            href=""
            onMouseEnter={() => handleLinkHover(1)}
            onMouseLeave={handleLinkLeave}
          >
            {t("btn_2")}
          </Link>
          <Link
            className={styles.link}
            href=""
            onMouseEnter={() => handleLinkHover(2)}
            onMouseLeave={handleLinkLeave}
          >
            {t("btn_3")}
          </Link>
          <Link
            className={styles.link}
            href=""
            onMouseEnter={() => handleLinkHover(3)}
            onMouseLeave={handleLinkLeave}
          >
            {t("btn_4")}
          </Link>
          <Link
            className={styles.link}
            href=""
            onMouseEnter={() => handleLinkHover(4)}
            onMouseLeave={handleLinkLeave}
          >
            {t("language")}
          </Link>
          <Link
            className={styles.link}
            href=""
            onMouseEnter={() => handleLinkHover(5)}
            onMouseLeave={handleLinkLeave}
          >
            {t("btn_5")}
          </Link>
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
