import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/question.module.css";
import Arrow from "/public/assets/Arrow_4.svg";
import Image from "next/image";

const Question = ({ question, answer, initialActiveState = false }) => {
  const [isQuestionActive, setIsQuestionActive] = useState(initialActiveState);
  const questionRef = useRef(null);
  const topQuestionRef = useRef(null);
  const bottomQuestionRef = useRef(null);

  const updateHeight = () => {
    let topQuestionHeight = topQuestionRef.current.offsetHeight;
    if (window.innerWidth <= 768) {
      topQuestionHeight += 36;
    } else {
      topQuestionHeight += 44;
    }
    if (isQuestionActive) {
      const bottomQuestionHeight = bottomQuestionRef.current.offsetHeight;
      const newHeight = topQuestionHeight + bottomQuestionHeight + 16;
      questionRef.current.style.height = `${newHeight}px`;
    } else {
      questionRef.current.style.height = `${topQuestionHeight}px`;
    }
  };

  useEffect(() => {
    // Use requestAnimationFrame to ensure all DOM updates are completed
    const handleResize = () => requestAnimationFrame(updateHeight);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isQuestionActive]);

  const toggleService = () => {
    setIsQuestionActive((prevState) => !prevState);
  };

  return (
    <div
      className={`${styles.container} ${isQuestionActive ? styles.active : ""}`}
      ref={questionRef}
      onClick={toggleService}
    >
      <div className={styles.question} ref={topQuestionRef}>
        <h4>{question}</h4>
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
      <p ref={bottomQuestionRef}>{answer}</p>
    </div>
  );
};

export default Question;
