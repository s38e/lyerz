import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/question.module.css";
import Arrow from "/public/assets/Arrow_4.svg";
import Image from "next/image";

const Question = ({ question, answer, initialActiveState = false }) => {
  const [isQuestionActive, setIsQuestionActive] = useState(initialActiveState);
  const questionRef = useRef(null);
  const topQuestionRef = useRef(null);
  const bottomQuestionRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      const topQuestionHeight = topQuestionRef.current.offsetHeight + 16;
      if (isQuestionActive) {
        const bottomQuestionHeight = bottomQuestionRef.current.offsetHeight;
        console.log(bottomQuestionHeight);
        const newHeight = topQuestionHeight + bottomQuestionHeight + 33;
        questionRef.current.style.height = `${newHeight}px`;
      } else {
        questionRef.current.style.height = `${topQuestionHeight}px`;
      }
    };

    updateHeight();
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
        <h4>{question}</h4> <Image src={Arrow} alt="Arrow" />
      </div>
      <div className={styles.hr}></div>
      <p ref={bottomQuestionRef}>{answer}</p>
    </div>
  );
};

export default Question;
