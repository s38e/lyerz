import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./styles/cardInOverlayAbout.module.css";
import { isMobile } from "react-device-detect";
import { useLocale } from "next-intl";
import { getLangDir } from "rtl-detect";

const CardInOverlayAbout = ({
  image,
  title,
  description,
  initialActiveState = false,
}) => {
  const [isActive, setIsActive] = useState(initialActiveState);
  const [mobile, setMobile] = useState(false);
  const [cardHeight, setCardHeight] = useState(141);
  const cardRef = useRef(null);
  const descriptionRef = useRef(null);

  // console.log("Is Mobile: ", isMobile); // Debugging statement

  useEffect(() => {
    setMobile(isMobile);
  }, []);

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const cardElement = cardRef.current;
    const descriptionElement = descriptionRef.current;

    if (cardElement && descriptionElement) {
      if (mobile) {
        setCardHeight(cardElement.scrollHeight);
      } else {
        if (isActive) {
          setCardHeight(cardElement.scrollHeight);
        } else {
          setCardHeight(
            cardElement.scrollHeight - descriptionElement.scrollHeight
          );
        }
      }
    }
  }, [isActive, mobile]);
  // ---------------- Check the language to determine the style ---------------- //
  const locale = useLocale();
  const direction = getLangDir(locale);

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${isActive ? styles.active : ""} ${
        direction === "rtl" ? styles.ar : ""
      }`}
      onMouseEnter={!mobile ? handleMouseEnter : undefined}
      onMouseLeave={!mobile ? handleMouseLeave : undefined}
      style={{ height: `${cardHeight}px` }}
    >
      <Image src={image} alt={`${image}`} />
      <div className={styles.heading}>
        <p>{title}</p>
        <p ref={descriptionRef} className={mobile ? styles.mobile : ""}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardInOverlayAbout;
