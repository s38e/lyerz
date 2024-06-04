import { useTranslations } from "next-intl";
import React from "react";
import styles from "./styles/joinLYERZPlan.module.css";
import Arrow_3 from "/public/assets/arrow_3.svg";
import Image from "next/image";

const JoinLYERZPlan = () => {
  const overlayPlansCard = useTranslations("overlayPlansCard");

  return (
    <div className={styles.plan}>
      <div className={styles.pricingTag}>
        <div className={styles.live_indicator}>
          <div className={styles.red_dot}></div>
          <div className={`${styles.pulse} ${styles.one}`}></div>
          <div className={`${styles.pulse} ${styles.tow}`}></div>
        </div>
        {overlayPlansCard("plans-plan_1->pricingTag")}
      </div>
      <div className={styles.pricingContent}>
        <p>Join LYERZ</p>
        <div className={styles.button}>
          <div className={styles.texts}>
            <h5>Book a 30-min intro call</h5>
            <p>Learn more about how LYERZ works and how it can help you.</p>
          </div>
          <Image src={Arrow_3} alt="Arrow_3" />
        </div>
      </div>
    </div>
  );
};

export default JoinLYERZPlan;
