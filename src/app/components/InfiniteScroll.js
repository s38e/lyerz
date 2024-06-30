import { useEffect } from "react";
import styles from "./styles/InfiniteScroll.module.css";
import Image from "next/image";
import card_about from "/public/assets/card_about.webp";
import card_plans from "/public/assets/card_plans.webp";
import card_work from "/public/assets/card_work.webp";
import card_services from "/public/assets/card_services.webp";
import plusStyle from "../page.module.css";

const InfiniteScroll = () => {
  useEffect(() => {
    // ---------------------------------------------------------------- //
    const infiniteScroll = document.querySelector(`.${styles.infiniteScroll}`);
    const ourPartnersPlus = document.querySelector(
      `.${plusStyle.title} .${plusStyle.ourPartners} .${plusStyle.plus}`
    );

    const infiniteScrollWidth = infiniteScroll.offsetWidth - 8;

    setTimeout(() => {
      const newWidth = infiniteScrollWidth - ourPartnersPlus.offsetWidth;
      infiniteScroll.style.width = `${newWidth}px`;
      console.log(newWidth);
    }, 10);

    // ---------------------------------------------------------------- //

    const scrollers = document.querySelectorAll(`.${styles.scroller}`);

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(
          `.${styles.scroller__inner}`
        );
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div className={styles.infiniteScroll}>
      <div
        className={`${styles.scroller} ${styles.fast}`}
        data-direction="left"
        data-speed="fast"
      >
        <div className={styles.scroller__inner}>
          <Image src={card_about} alt="Image" />
          <Image src={card_plans} alt="Image" />
          <Image src={card_work} alt="Image" />
          <Image src={card_services} alt="Image" />
          <Image src={card_about} alt="Image" />
          <Image src={card_plans} alt="Image" />
          <Image src={card_work} alt="Image" />
          <Image src={card_services} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
