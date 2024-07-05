import Image from "next/image";
import React, { useState } from "react";
import beauty from "/public/assets/beauty.svg";
import styles from "./styles/ImageWorkCardOverlay.module.css";
import { useLocale } from "next-intl";
import { getLangDir } from "rtl-detect";

function ImageWorkCardOverlay({ url, tag, initialActiveState = false }) {
  const [isNotAvailable, setIsNotAvailable] = useState(initialActiveState);

  // ---------------- Check the language to determine the style ---------------- //
  const locale = useLocale();
  const direction = getLangDir(locale);

  return (
    <div className={`${styles.image} ${direction === "rtl" ? styles.ar : ""}`}>
      <Image src={url} alt="A picture of our work" />
      <div
        className={`${styles.tag} ${isNotAvailable ? styles.notAvailable : ""}`}
      >
        {tag}
      </div>
    </div>
  );
}

export default ImageWorkCardOverlay;
