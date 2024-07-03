import Image from "next/image";
import React, { useState } from "react";
import beauty from "/public/assets/beauty.svg";
import styles from "./styles/ImageWorkCardOverlay.module.css";

function ImageWorkCardOverlay({ url, tag, initialActiveState = false }) {
  const [isNotAvailable, setIsNotAvailable] = useState(initialActiveState);
  return (
    <div className={styles.image}>
      <Image src={url} alt="A picture of our work" />
      <div className={`${styles.tag} ${isNotAvailable ? styles.notAvailable : ""}`}>{tag}</div>
    </div>
  );
}

export default ImageWorkCardOverlay;
