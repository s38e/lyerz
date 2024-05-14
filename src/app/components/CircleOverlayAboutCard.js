import styles from "./styles/CircleOverlayAboutCard.module.css";
import stylesPage from "../page.module.css";
import { useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";
import gsap from "gsap";
import { useTranslations } from "next-intl";

const CircleOverlayAboutCard = () => {
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!isMobile) {
      const circle = circleRef.current;
      const text = textRef.current;

      // جعل العناصر غير مرئية في البداية
      // gsap.set([circle, text], { duration: "auto", scale: 0, opacity: 0 });

      const onMouseMove = (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const parentBounds = circle
          .closest(`.${stylesPage.HeroSection} .${stylesPage.overlayAboutCard}`)
          .getBoundingClientRect();
        const contanier = document
          .querySelector(
            `.${stylesPage.HeroSection} .${stylesPage.overlayAboutCard} .${stylesPage.contanier}`
          )
          .getBoundingClientRect();
        const circleWidth = circle.offsetWidth;
        const circleHeight = circle.offsetHeight;
        const textWidth = text.offsetWidth;
        const textHeight = text.offsetHeight;

        if (
          mouseX >= parentBounds.left &&
          mouseX <= parentBounds.right &&
          mouseY >= parentBounds.top &&
          mouseY <= parentBounds.bottom
        ) {
          // المؤشر داخل حدود السكشن
          gsap.to(circle, {
            duration: "auto",
            x: mouseX - circleWidth / 2,
            y: mouseY - circleHeight / 2,
          });

          gsap.to(text, {
            duration: "auto",
            x: mouseX - textWidth / 2,
            y: mouseY - textHeight / 2,
          });
          gsap.to([circle, text], {
            duration: "auto",
            scale: 1,
            opacity: 1,
          });
        } else {
          // المؤشر خارج حدود السكشن

          gsap.to([circle, text], {
            duration: "auto",
            scale: 0,
            opacity: 0,
          });
        }
        // --------------------------------------
        if (
          mouseX >= contanier.left &&
          mouseX <= contanier.right &&
          mouseY >= contanier.top &&
          mouseY <= contanier.bottom
        ) {
          gsap.to([circle, text], {
            duration: "auto",
            scale: 0,
            opacity: 0,
          });
        }
        // --------------------------------------
      };

      window.addEventListener("mousemove", onMouseMove);

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
      };
    }
  }, []);

  const t = useTranslations("movingCircle");

  return (
    <>
      <div ref={circleRef} className={styles.circle}></div>
      <div ref={textRef} className={styles.textInCircle}>
        {t("title")}
      </div>
    </>
  );
};

export default CircleOverlayAboutCard;
