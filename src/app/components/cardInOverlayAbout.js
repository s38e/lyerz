import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./styles/cardInOverlayAbout.module.css";

const CardInOverlayAbout = ({ image, title, description }) => {
  const [isActive, setIsActive] = useState(false);
  const [cardHeight, setCardHeight] = useState(0);
  const cardRef = useRef(null);
  const descriptionRef = useRef(null);

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
      if (isActive) {
        setCardHeight(cardElement.scrollHeight);
      } else {
        setCardHeight(cardElement.scrollHeight - descriptionElement.scrollHeight);
      }
    }
  }, [isActive]);

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${isActive ? styles.active : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ height: `${cardHeight}px` }}
    >
      <Image src={image} alt={`${image}`} />
      <div className={styles.heading}>
        <p>{title}</p>
        <p ref={descriptionRef}>{description}</p>
      </div>
    </div>
  );
};

export default CardInOverlayAbout;
