import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./styles/TowPlans.module.css";
import { useTranslations } from "next-intl";
import LightningImg from "/public/assets/LightningImg.svg";
import Info from "/public/assets/info.svg";
import True from "/public/assets/true.svg";
import Infenity from "/public/assets/infenity.svg";

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

  const overlayPlansCard = useTranslations("overlayPlansCard");

  return (
    <div className={styles.twoPlan}>
      <div className={styles.choose_plan}>
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
          {overlayPlansCard("plans-plan_2->pricingTag")}
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
          {overlayPlansCard("plans-plan_3->pricingTag")}
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
            <span>
              {overlayPlansCard("plans-plan-pricingContent-p_2->span")}
            </span>
          </div>
          <p>
            <span>
              <span
                className={`${styles.one} ${showText ? styles.active : ""}`}
              >
                One
              </span>
              <span
                className={`${styles.Two} ${!showText ? styles.active : ""}`}
              >
                Two
              </span>
            </span>{" "}
            request at a time. Pause or cancel anytime.
          </p>
        </div>
        <div className={styles.hr}></div>
        <div className={styles.content}>
          <p>What&#39;s included</p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <Image src={Infenity} alt="Infenity" />
              <p>Unlimited Requests</p>
              <div className={styles.image}>
                <Image src={Info} alt="Info" />
                <div className={styles.hint}>
                  {showText ? "One" : "Two"} request at a time.
                </div>
              </div>
            </div>
            <div className={styles.feature}>
              <Image src={Infenity} alt="Infenity" />
              <p>Unlimited Revisions</p>
              <div className={styles.image}>
                <Image src={Info} alt="Info" />{" "}
                <div className={styles.hint}>
                  We iterate until you are satisfied 100%
                </div>
              </div>
            </div>
            <div className={styles.feature}>
              <Image src={True} alt="True" />
              <p>48h Processing Time</p>
            </div>
            <div className={styles.feature}>
              <Image src={True} alt="True" />
              <p>In-House Designers</p>
            </div>
            <div className={styles.feature}>
              <Image src={True} alt="True" />
              <p>LYERZ Space Access</p>
            </div>
            <div className={styles.feature}>
              <Image src={True} alt="True" />
              <p>Dedicated Project Manager</p>
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
            Get started
          </Link>
          <span>or</span>
          <p>
            <Link
              href=""
              data-cal-namespace=""
              data-cal-link="lyerz/space"
              data-cal-config='{"layout":"month_view"}'
            >
              book a call
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TowPlans;
