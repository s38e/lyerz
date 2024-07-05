import Image from "next/image";
import styles from "./styles/Service.module.css";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { getLangDir } from "rtl-detect";

const Service = ({ title, description, image, initialActiveState = false }) => {
  const [isServiceActive, setIsServiceActive] = useState(initialActiveState);
  const serviceRef = useRef(null);
  const topServiceRef = useRef(null);
  const bottomServiceRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      const topServiceHeight = topServiceRef.current.offsetHeight;
      if (isServiceActive) {
        const bottomServiceHeight = bottomServiceRef.current.offsetHeight;
        const newHeight = topServiceHeight + bottomServiceHeight;
        serviceRef.current.style.height = `${newHeight}px`;
      } else {
        serviceRef.current.style.height = `${topServiceHeight}px`;
      }
    };

    updateHeight();
  }, [isServiceActive]);

  const toggleService = () => {
    setIsServiceActive((prevState) => !prevState);
  };
  // ---------------- Check the language to determine the style ---------------- //
  const locale = useLocale();
  const direction = getLangDir(locale);

  return (
    <div
      ref={serviceRef}
      className={`${styles.service} ${isServiceActive ? styles.active : ""} ${
        direction === "rtl" ? styles.ar : ""
      }`}
      onClick={toggleService}
    >
      <div ref={topServiceRef} className={styles.top}>
        <p>{title}</p>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div ref={bottomServiceRef} className={styles.bottom}>
        <p>{description}</p>
        <div className={styles.image}>
          <Image src={image} alt="Service Image" />
        </div>
      </div>
    </div>
  );
};

export default Service;
