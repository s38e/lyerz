import React from "react";
import styles from "./styles/Table.module.css";
import True from "/public/assets/true_2.svg";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { getLangDir } from "rtl-detect";

function Table() {
  const table = useTranslations("table");

  // ---------------- Check the language to determine the style ---------------- //
  const locale = useLocale();
  const direction = getLangDir(locale);

  return (
    <div className={`${styles.table} ${direction === "rtl" ? styles.ar : ""}`}>
      <div className={styles.header}>
        <div></div>
        <div className={styles.lyerz}>
          <p>
            LYERZ<span>TM</span>
          </p>
        </div>
        <h2>{table("Freelancer")}</h2>
        <h2>{table("Agencies")}</h2>
      </div>
      <p className={styles.heading}>{table("Pricing")}</p>
      <div className={styles.row}>
        <p>{table("Pricing")}</p>
        <div>{table("row_monthly_price")}</div>
        <div>{table("row_Per_task")}</div>
        <div>{table("row_Per_task")}</div>
      </div>
      <p className={styles.heading}>{table("Unlimited_tasks")}</p>
      <div className={styles.row}>
        <p>{table("Unlimited_tasks")}</p>
        <div>
          <Image src={True} alt="True" />
        </div>
        <div>-</div>
        <div>-</div>
      </div>
      <p className={styles.heading}>{table("Unlimited_revisions")}</p>
      <div className={styles.row}>
        <p>{table("Unlimited_revisions")}</p>
        <div>
          <Image src={True} alt="True" />
        </div>
        <div>-</div>
        <div>-</div>
      </div>
      <p className={styles.heading}>{table("Pre_qualified_designers")}</p>
      <div className={styles.row}>
        <p>{table("Pre_qualified_designers")}</p>
        <div>
          <Image src={True} alt="True" />
        </div>
        <div>-</div>
        <div>
          <Image src={True} alt="True" />
        </div>
      </div>
      <p className={styles.heading}>{table("Time_to_start")}</p>
      <div className={styles.row}>
        <p>{table("Time_to_start")}</p>
        <div>{table("row_2_days")}</div>
        <div>{table("row_2+_weeks")}</div>
        <div>{table("row_4+_weeks")}</div>
      </div>
      <p className={styles.heading}>{table("Processing_time")}</p>
      <div className={styles.row}>
        <p>{table("Processing_time")}</p>
        <div>{table("row_48h")}</div>
        <div>{table("row_Several_weeks")}</div>
        <div>{table("row_Several_weeks")}</div>
      </div>
    </div>
  );
}

export default Table;
