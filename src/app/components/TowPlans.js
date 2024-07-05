import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./styles/TowPlans.module.css";
import { useLocale, useTranslations } from "next-intl";
import LightningImg from "/public/assets/LightningImg.svg";
import Info from "/public/assets/info.svg";
import True from "/public/assets/true.svg";
import Infenity from "/public/assets/infenity.svg";
import { getLangDir } from "rtl-detect";

function TowPlans() {
  const [isChoice_1_Active, setIsChoice_1_Active] = useState(true);
  const [isChoice_2_Active, setIsChoice_2_Active] = useState(false);
  const [number, setNumber] = useState(2199);
  const [showText, setShowText] = useState(true);

  const toggleOne = () => {
    setShowText(true);
  };

  const toggleTwo = () => {
    setShowText(false);
  };

  const propsNum = useSpring({
    from: { number: 2199 },
    number: number,
    delay: 100,
    config: { duration: 1000 },
  });

  useEffect(() => {
    const backGround = document.querySelector(`.${styles.backGround}`);
    const choice = document.querySelector(`.${styles.choice}`);

    const choiceWidth = choice.offsetWidth;

    backGround.style.width = `${choiceWidth}px`;
  }, []);

  const overlayPlansCard = useTranslations("overlayPlansCard");
  // ---------------- Check the language to determine the style ---------------- //
  const locale = useLocale();
  const direction = getLangDir(locale);

  return (
    <div
      className={`${styles.twoPlan} ${direction === "rtl" ? styles.ar : ""}`}
    >
      <div className={styles.choose_plan}>
        <div
          className={`${styles.backGround} ${
            isChoice_1_Active ? styles.left : ""
          }`}
        ></div>
        <div
          className={`${styles.choice} ${
            isChoice_1_Active ? styles.active : ""
          }`}
          onClick={() => {
            setNumber(2199);
            setIsChoice_1_Active(true);
            setIsChoice_2_Active(false);
            toggleOne();
          }}
        >
          {overlayPlansCard("Startup")}
        </div>
        <div
          className={`${styles.choice} ${
            isChoice_2_Active ? styles.active : ""
          }`}
          onClick={() => {
            setNumber(3999);
            setIsChoice_1_Active(false);
            setIsChoice_2_Active(true);
            toggleTwo();
          }}
        >
          <Image src={LightningImg} alt="LightningImg" />
          {overlayPlansCard("Pro")}
        </div>
      </div>
      <div
        className={`${styles.plan} ${isChoice_1_Active ? styles.active : ""}`}
      >
        <div className={styles.head}>
          <div className={styles.p}>
            <animated.div>
              {propsNum.number.to((n) => `$${n.toFixed(0)}`)}
            </animated.div>
            <span>{overlayPlansCard("Monthly")}</span>
          </div>
          <p>
            <span>
              <span
                className={`${styles.one} ${showText ? styles.active : ""}`}
              >
                {overlayPlansCard("One")}
              </span>
              <span
                className={`${styles.Two} ${!showText ? styles.active : ""}`}
              >
                {overlayPlansCard("Two")}
              </span>
            </span>{" "}
            {overlayPlansCard("head_p")}
          </p>
        </div>
        <div className={styles.hr}></div>
        <div className={styles.content}>
          <p>{overlayPlansCard("What_is_included")}</p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <Image src={Infenity} alt="Infenity" />
              <p>{overlayPlansCard("Unlimited_Requests")}</p>
              <div className={styles.image}>
                <Image src={Info} alt="Info" />
                <div className={styles.hint}>
                  {showText
                    ? `${overlayPlansCard("One")}`
                    : `${overlayPlansCard("Two")}`}{" "}
                  {overlayPlansCard("hint_request")}
                </div>
              </div>
            </div>
            <div className={styles.feature}>
              <Image src={Infenity} alt="Infenity" />
              <p>{overlayPlansCard("Unlimited_Revisions")}</p>
              <div className={styles.image}>
                <Image src={Info} alt="Info" />{" "}
                <div className={styles.hint}>
                  {overlayPlansCard("hint_iterate")}
                </div>
              </div>
            </div>
            <div className={styles.feature}>
              <Image src={True} alt="True" />
              <p>{overlayPlansCard("48h_Processing_Time")}</p>
            </div>
            <div className={styles.feature}>
              <Image src={True} alt="True" />
              <p>{overlayPlansCard("In-House_Designers")}</p>
            </div>
            <div className={styles.feature}>
              <Image src={True} alt="True" />
              <p>{overlayPlansCard("LYERZ_Space_Access")}</p>
            </div>
            <div className={styles.feature}>
              <Image src={True} alt="True" />
              <p>{overlayPlansCard("Dedicated_Project_Manager")}</p>
            </div>
          </div>
        </div>
        <div className={styles.btns}>
          <Link
            className={styles.btn}
            href={
              showText
                ? "https://breeew.com/api/stripe/checkout-session-link/space.lyerz.com?prices=price_1PTYTwDBePX8B1X6Hb357FAS"
                : "https://breeew.com/api/stripe/checkout-session-link/space.lyerz.com?prices=price_1PTYXDDBePX8B1X6POKz7iPb"
            }
          >
            {overlayPlansCard("Get_started")}
          </Link>
          <span>{overlayPlansCard("or")}</span>
          <p>
            <Link
              href=""
              data-cal-namespace=""
              data-cal-link="lyerz/space"
              data-cal-config='{"layout":"month_view"}'
            >
              {overlayPlansCard("book_a_call")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TowPlans;
