import Image from "next/image";
import React from "react";
import beauty from "/public/assets/beauty.svg";
import styles from "./styles/ImageWorkCardOverlay.module.css";

function ImageWorkCardOverlay({ url, tag }) {
  return (
    <div className={styles.image}>
      <Image src={url} alt="A picture of our work" />
      <div className={styles.tag}>{tag}</div>
    </div>
  );
}

export default ImageWorkCardOverlay;
