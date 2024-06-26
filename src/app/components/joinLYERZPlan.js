import { useLocale, useTranslations } from "next-intl";
import React, { useEffect } from "react";
import styles from "./styles/joinLYERZPlan.module.css";
import Arrow_3 from "/public/assets/arrow_3.svg";
import Image from "next/image";
import LYERZText from "./LYERZText";
import { getLangDir } from "rtl-detect";
import { getCalApi } from "@calcom/embed-react";

const JoinLYERZPlan = () => {
  const overlayPlansCard = useTranslations("overlayPlansCard");
  // ---------------- Check the language to determine the style ---------------- //
  const locale = useLocale();
  const direction = getLangDir(locale);

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

  return (
    <div className={`${styles.plan} ${direction === "rtl" ? styles.ar : ""}`}>
      <div className={styles.pricingTag}>
        <div className={styles.live_indicator}>
          <div className={styles.red_dot}></div>
          <div className={`${styles.pulse} ${styles.one}`}></div>
          <div className={`${styles.pulse} ${styles.tow}`}></div>
        </div>
        {overlayPlansCard("plans-plan_1->pricingTag")}
      </div>
      <div className={styles.joinText}>
        <span>
          Join
          <LYERZText
            font_size_LYERZ="24px"
            font_size_TM="7px"
            font_weight_LYERZ="Demi"
          />
        </span>
      </div>
      <div
        className={styles.button}
        data-cal-namespace=""
        data-cal-link="lyerz/space"
        data-cal-config='{"layout":"month_view"}'
      >
        <div className={styles.texts}>
          <h5>Book a 30-min intro call</h5>
          <p>Learn more about how LYERZ works and how it can help you.</p>
        </div>
        <Image src={Arrow_3} alt="Arrow_3" />
      </div>
    </div>
  );
};

export default JoinLYERZPlan;
