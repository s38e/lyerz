import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./styles/Footer.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import smallLogo from "/public/assets/smallLogo.svg";
import Arrow from "/public/assets/Arrow_2.svg";

function Footer() {
  const [isActive, setIsActive] = useState(false);
  const [menuWidth, setMenuWidth] = useState(0);
  const [buttonWidth, setButtonWidth] = useState(133);
  const [menuHeight, setmenuHeight] = useState(0);
  const [buttonHeight, setButtonHeight] = useState(46);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  const handleButtonMouseLeave = () => {
    // setIsActive(false); // -----------> Close Menu On Mouse Leave
  };

  useEffect(() => {
    const defultBtn = document.querySelector(`.${styles.defultBtn}`);
    const Menu = document.querySelector(`.${styles.menu}`);

    const updateDimensions = () => {
      if (defultBtn && Menu) {
        const defultBtnWidth = defultBtn.offsetWidth;
        const MenuWidth = Menu.offsetWidth;
        const defultBtnHeight = defultBtn.offsetHeight;
        const MenuHeight = defultBtn.offsetHeight + Menu.offsetHeight;
        setButtonWidth(defultBtnWidth);
        setMenuWidth(MenuWidth);
        setButtonHeight(defultBtnHeight);
        setmenuHeight(MenuHeight);
      }
    };

    window.onload = updateDimensions;
    updateDimensions();

    // Update dimensions on window resize
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
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

  const pathName = window.location.pathname;
  const isArabic = pathName.includes("/ar");

  return (
    <footer className={`${styles.Footer} ${isArabic ? styles.ar : ""}`}>
      <button
        className={isActive ? styles.active : ""}
        onClick={handleButtonClick}
        onMouseLeave={handleButtonMouseLeave}
        style={{
          width: isActive ? `${menuWidth}px` : `${buttonWidth}px`,
          height: isActive ? `${menuHeight}px` : `${buttonHeight}px`,
        }}
      >
        <menu className={styles.menu}>
          <Link className={styles.link} href="">
            <span>
              <Image src={smallLogo} alt="smallLogo" /> LYERZ Space
            </span>
            <Image className={styles.Arrow} src={Arrow} alt="Arrow" />
          </Link>
          <Link className={styles.link} href="">
            <div>Book a Demo</div>
            <div>Book a Demo</div>
          </Link>
          <Link className={styles.link} href="">
            <span>Contact</span>
          </Link>
          <div className={styles.socialLinks}>
            <Link href="">Instagram</Link>
            <Link href="">Linkedin</Link>
          </div>
          <div className={styles.line}></div>
          <span className={styles.copyright}>
            2024 © LYERZ LLC. All rights reserved
          </span>
        </menu>
        <div className={styles.defultBtn}>
          <div className={styles.menuIcon}>
            <div className={styles.spanIcon}></div>
            <div className={styles.spanIcon}></div>
          </div>
          <span>{t("btnMenu")}</span>
        </div>
      </button>
      <p>{t("notePart1")}</p>
    </footer>
  );
}

export default Footer;
