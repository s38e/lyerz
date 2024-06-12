import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./styles/Footer.module.css";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import gsap from "gsap";
import smallLogo from "/public/assets/smallLogo.svg";
import Arrow from "/public/assets/Arrow_2.svg";
import flagUSA from "/public/assets/flagUSA.svg";
import flagSaudiArabia from "/public/assets/flagSaudiArabia.svg";
import flagEgypt from "/public/assets/flagEgypt.svg";
import { getLangDir } from "rtl-detect";
import { isMobile } from "react-device-detect";
import LYERZText from "./LYERZText";
import { getCalApi } from "@calcom/embed-react";

function Footer() {
  const [isNotMobile, setIsNotMobile] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [menuWidth, setMenuWidth] = useState(0);
  const [buttonWidth, setButtonWidth] = useState(121);
  const [menuHeight, setMenuHeight] = useState(0);
  const [buttonHeight, setButtonHeight] = useState(46);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isContactContainerActive, setIsContactContainerActive] =
    useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  const handleButtonMouseLeave = () => {
    // setIsActive(false); // -----------> Close Menu On Mouse Leave
  };

  const handleButtonClick = () => {
    setIsActive(!isActive);
    setIsMenuActive(!isActive);
  };

  const handleContactClick = () => {
    setIsMenuActive(false);
    setIsContactContainerActive(true);
  };

  const handleButtonClickToBack = () => {
    setIsContactContainerActive(false);
    setIsMenuActive(true);
  };

  useEffect(() => {
    if (!isMobile) {
      setIsNotMobile(true);
    } else {
      setIsNotMobile(false);
    }
    const defultBtn = document.querySelector(`.${styles.defultBtn}`);
    const Menu = document.querySelector(`.${styles.menu}`);
    const contactContainer = document.querySelector(
      `.${styles.contactContainer}`
    );

    const updateDimensions = () => {
      if (defultBtn && Menu && contactContainer) {
        const defultBtnWidth = defultBtn.offsetWidth;
        const MenuWidth = Menu.offsetWidth;
        const defultBtnHeight = defultBtn.offsetHeight;
        const MenuHeight = defultBtnHeight + Menu.offsetHeight;
        setButtonWidth(defultBtnWidth);
        setMenuWidth(MenuWidth);
        setButtonHeight(defultBtnHeight);
        setMenuHeight(MenuHeight);

        if (isContactContainerActive) {
          Menu.style.visibility = "hidden";
          Menu.style.opacity = "0";
          Menu.style.transition = "visibility 0.5s 0.5s, opacity 0.5s 0s";
          contactContainer.style.visibility = "visible";
          contactContainer.style.opacity = "1";
          contactContainer.style.transition =
            "visibility 0.5s 0s, opacity 0.5s 0.5s";
          const contactContainerHeight = contactContainer.offsetHeight;
          const newMenuHeight = defultBtnHeight + contactContainerHeight;
          setMenuHeight(newMenuHeight);
        }
        if (isMenuActive) {
          Menu.style.visibility = "visible";
          Menu.style.opacity = "1";
          Menu.style.transition = "visibility 0.5s 0s, opacity 0.5s 0.9s";
          contactContainer.style.visibility = "hidden";
          contactContainer.style.opacity = "0";
          contactContainer.style.transition =
            "visibility 0.5s 0.5s, opacity 0.5s 0s";
        }
        if (!isMenuActive) {
          Menu.style.visibility = "hidden";
          Menu.style.opacity = "0";
          Menu.style.transition = "visibility 0.5s 1.4s, opacity 0.5s 1.4s";
        }
      }
    };

    window.onload = updateDimensions;
    updateDimensions();

    // Update dimensions on window resize
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [isContactContainerActive, isMenuActive]);

  useEffect(() => {
    gsap.fromTo(
      `.${styles.Footer} button`,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.25, ease: "power4.out" }
    );
    gsap.fromTo(
      `.${styles.Footer} p`,
      { opacity: 0, y: 100 },
      { opacity: 1, delay: 0.2, y: 0, duration: 1.25, ease: "power4.out" }
    );
  }, []);

  const t = useTranslations("Footer");

  // ---------------- Check the language to determine the style ---------------- //
  const locale = useLocale();
  const direction = getLangDir(locale);

  return (
    <footer
      className={`${styles.Footer} ${direction === "rtl" ? styles.ar : ""}`}
    >
      <button
        className={isActive ? styles.active : ""}
        onMouseLeave={handleButtonMouseLeave}
        style={{
          width: isActive ? `${menuWidth}px` : `${buttonWidth}px`,
          height: isActive ? `${menuHeight}px` : `${buttonHeight}px`,
        }}
      >
        <menu className={styles.menu}>
          <Link className={styles.link} href="">
            <span className={styles.span}>
              <LYERZText
                font_size_LYERZ="16px"
                font_size_TM="5px"
                font_weight_LYERZ="Medium"
                Color="white"
              />
              <span>{t("btn_1_part_1")}</span>
              <Image className={styles.Arrow} src={Arrow} alt="Arrow" />
            </span>
          </Link>
          <Link
            className={styles.link}
            href=""
            data-cal-namespace=""
            data-cal-link="lyerz/space"
            data-cal-config='{"layout":"month_view"}'
          >
            <span className={styles.span}>
              {t("btn_2")}
              <Image className={styles.Arrow} src={Arrow} alt="Arrow" />
            </span>
          </Link>
          <div className={styles.link} onClick={handleContactClick}>
            <span className={styles.span}>
              {t("btn_3")}
              <svg
                className={styles.Arrow}
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.24264 0.999974L5.48528 5.24261L1.24264 9.48526"
                  stroke="#414141"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          {/* <Link
            className={styles.link}
            href={direction === "rtl" ? "/en" : "/ar"}
          >
            <span>{t("language")}</span>
            <Image className={styles.Arrow} src={Arrow} alt="Arrow" />
          </Link> */}
          <div className={styles.socialLinks}>
            <Link href="">{t("socialInstagram")}</Link>
            <Link href="">{t("socialLinkedin")}</Link>
          </div>
          <div className={styles.line}></div>
          <span className={styles.copyright}>{t("copyright")} </span>
        </menu>
        <div className={styles.contactContainer}>
          <div className={styles.heading}>{t("btn_3")}</div>
          <Link className={styles.email} href="mailto:hi@lyerz.com">
            hi@lyerz.com
          </Link>
          <div className={styles.locations}>
            <div className={styles.location}>
              <Image src={flagUSA} alt="flagUSA" />
              <p>
                30 N GOULD, ST STE R SHERIDAN
                <br />
                WY 82801
              </p>
            </div>
            <div className={styles.location}>
              <Image src={flagSaudiArabia} alt="flagSaudiArabia" />
              <p>
                King Abdulaziz, Al Raed,
                <br />
                Riyadh 12354
              </p>
            </div>
            <div className={styles.location}>
              <Image src={flagEgypt} alt="flagEgypt" />
              <p>
                6, 5, 273,
                <br />
                Maadi, Cairo 11757
              </p>
            </div>
          </div>
          <div className={styles.line}></div>
          <span className={styles.copyright}>{t("copyright")} </span>
        </div>
        <div
          className={`${styles.defultBtn} ${
            isNotMobile ? styles.notMobile : ""
          }`}
          onClick={
            isContactContainerActive
              ? handleButtonClickToBack
              : handleButtonClick
          }
        >
          <div
            className={`${styles.menuIcon} ${
              isContactContainerActive ? styles.ContainerActive : ""
            }`}
          >
            <div className={styles.spanIcon}></div>
            <div className={styles.spanIcon}></div>
          </div>
          <span>{t("btnMenu")}</span>
        </div>
      </button>
      <p>{t("notePart1")}</p>
      <div
        className={styles.closeMenuIfOpen}
        onClick={
          isContactContainerActive ? handleButtonClickToBack : handleButtonClick
        }
        style={{ display: isActive ? "block" : "none" }}
      ></div>
    </footer>
  );
}

export default Footer;
