import { useEffect } from "react";
import styles from "./styles/InfiniteScroll.module.css";
import Image from "next/image";
import plusStyle from "../page.module.css";
import Partner_01 from "/public/assets/partners/Asset_01.png";
import Partner_02 from "/public/assets/partners/Asset_02.png";
import Partner_03 from "/public/assets/partners/Asset_03.png";
import Partner_04 from "/public/assets/partners/Asset_04.png";
import Partner_05 from "/public/assets/partners/Asset_05.png";
import Partner_06 from "/public/assets/partners/Asset_06.png";
import Partner_07 from "/public/assets/partners/Asset_07.png";
import Partner_08 from "/public/assets/partners/Asset_08.png";
import Partner_09 from "/public/assets/partners/Asset_09.png";
import Partner_10 from "/public/assets/partners/Asset_10.png";
import Partner_11 from "/public/assets/partners/Asset_11.png";
import Partner_12 from "/public/assets/partners/Asset_12.png";
import Partner_13 from "/public/assets/partners/Asset_13.png";
import Partner_14 from "/public/assets/partners/Asset_14.png";
import Partner_15 from "/public/assets/partners/Asset_15.png";
import Partner_16 from "/public/assets/partners/Asset_16.png";
import Partner_17 from "/public/assets/partners/Asset_17.png";

const InfiniteScroll = () => {
  useEffect(() => {
    // ---------------------------------------------------------------- //
    const infiniteScroll = document.querySelector(`.${styles.infiniteScroll}`);
    const ourPartnersPlus = document.querySelector(
      `.${plusStyle.title} .${plusStyle.ourPartners} .${plusStyle.plus}`
    );

    const infiniteScrollWidth = 41.5 * 16 - 8;
    const newWidth = infiniteScrollWidth - ourPartnersPlus.offsetWidth;
    infiniteScroll.style.width = `${newWidth}px`;

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
        data-speed="slow"
      >
        <div className={styles.scroller__inner}>
          <Image
            src={Partner_01}
            alt="Partner"
            style={{ width: "auto", height: "50px" }}
          />
          <Image
            src={Partner_02}
            alt="Partner"
            style={{ width: "auto", height: "50px" }}
          />
          <Image src={Partner_03} alt="Partner" />
          <Image src={Partner_04} alt="Partner" />
          <Image src={Partner_05} alt="Partner" />
          <Image src={Partner_06} alt="Partner" />
          <Image
            src={Partner_07}
            alt="Partner"
            style={{ width: "auto", height: "30px" }}
          />
          <Image
            src={Partner_08}
            alt="Partner"
            style={{ width: "auto", height: "30px" }}
          />
          <Image
            src={Partner_09}
            alt="Partner"
            style={{ width: "auto", height: "30px" }}
          />
          <Image
            src={Partner_10}
            alt="Partner"
            style={{ width: "auto", height: "35px" }}
          />
          <Image
            src={Partner_11}
            alt="Partner"
            style={{ width: "auto", height: "30px" }}
          />
          <Image
            src={Partner_12}
            alt="Partner"
            style={{ width: "auto", height: "30px" }}
          />
          <Image
            src={Partner_13}
            alt="Partner"
            style={{ width: "auto", height: "30px" }}
          />
          <Image
            src={Partner_14}
            alt="Partner"
            style={{ width: "auto", height: "45px" }}
          />
          <Image
            src={Partner_15}
            alt="Partner"
            style={{ width: "auto", height: "20px" }}
          />
          <Image
            src={Partner_16}
            alt="Partner"
            style={{ width: "auto", height: "30px" }}
          />
          <Image
            src={Partner_17}
            alt="Partner"
            style={{ width: "auto", height: "25px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
