"use client";
import Image from "next/image";
import styles from "../page.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import img_1_work from "../../../public/assets/img_1_work.png";
import img_2_work from "../../../public/assets/img_2_work.png";
import img_3_work from "../../../public/assets/img_3_work.png";
import img_4_work from "../../../public/assets/img_4_work.png";
import img_1_services from "../../../public/assets/img_1_services.png";
import img_2_services from "../../../public/assets/img_2_services.png";
import img_3_services from "../../../public/assets/img_3_services.png";
import card_work from "../../../public/assets/card_work.png";
import card_services from "../../../public/assets/card_services.png";
import card_about from "../../../public/assets/card_about.png";
import card_plans from "../../../public/assets/card_plans.png";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function Home() {
  const [isCardWorkHovered, setIsCardWorkHovered] = useState(false);
  const [isCardServicesHovered, setIsCardServicesHovered] = useState(false);
  const [isCardAboutHovered, setIsCardAboutHovered] = useState(false);
  const [isCardPlansHovered, setIsCardPlansHovered] = useState(false);

  useEffect(() => {
    // ---------------- hover effect on cards ---------------- //
    const cards = document.querySelectorAll(
      ` .${styles.HeroSection} .${styles.hero_content} .${styles.hero_cards} .${styles.card}`
    );

    cards.forEach((card, index) => {
      card.addEventListener("mouseover", () => {
        for (let i = 0; i < cards.length; i++) {
          if (i !== index) {
            cards[i].style.filter = "grayscale(100%)";
            cards[i].style.opacity = "0.5";
          }
        }
      });

      card.addEventListener("mouseout", () => {
        cards.forEach((card) => {
          card.style.filter = "none";
          card.style.opacity = "1";
        });
      });
    });
    // ---------------- WorkCard ---------------- //
    const WorkCard = document.querySelector(
      `.${styles.HeroSection} .${styles.hero_content} .${styles.hero_cards} .${styles.card}:nth-child(1)`
    );

    WorkCard.addEventListener("mouseover", () => {
      setIsCardWorkHovered(true); // الماوس فوق البطاقة
    });

    WorkCard.addEventListener("mouseout", () => {
      setIsCardWorkHovered(false); // الماوس لم يعد فوق البطاقة
    }); // ---------------- WorkCard ---------------- //
    const ServicesCard = document.querySelector(
      `.${styles.HeroSection} .${styles.hero_content} .${styles.hero_cards} .${styles.card}:nth-child(2)`
    );

    ServicesCard.addEventListener("mouseover", () => {
      setIsCardServicesHovered(true); // الماوس فوق البطاقة
    });

    ServicesCard.addEventListener("mouseout", () => {
      setIsCardServicesHovered(false); // الماوس لم يعد فوق البطاقة
    });
  });
  const t = useTranslations("Index");
  return (
    <>
      <main className={styles.page}>
        <section className={styles.HeroSection}>
          <NavBar />
          <div className={styles.hero_content}>
            <h2>
              Design partner for
              <br />
              <span>product-led founders</span>
            </h2>
            <div className={styles.hero_cards}>
              <div className={styles.card}>
                <Image
                  src={card_work}
                  alt="Image Card Work"
                  width={100}
                  height={100}
                />
                <p>Work</p>
              </div>
              <div className={styles.card}>
                <Image
                  src={card_services}
                  alt="Image Card Services"
                  width={100}
                  height={100}
                />
                <p>Services</p>
              </div>
              <div className={styles.card}>
                <Image
                  src={card_about}
                  alt="Image Card About"
                  width={100}
                  height={100}
                />
                <p>About</p>
              </div>
              <div className={styles.card}>
                <Image
                  src={card_plans}
                  alt="Image Card Plans"
                  width={100}
                  height={100}
                />
                <p>Plans</p>
              </div>
            </div>
          </div>
          <Footer />
          <div
            className={`${styles.imagesWorkCard} ${
              isCardWorkHovered ? styles.active : ""
            }`}
          >
            <div className={styles.image}>
              <div className={styles.overlay}></div>
              <Image src={img_1_work} alt="Image Work Card" />
            </div>
            <div className={styles.image}>
              <div className={styles.overlay}></div>
              <Image src={img_2_work} alt="Image Work Card" />
            </div>
            <div className={styles.image}>
              <div className={styles.overlay}></div>
              <Image src={img_3_work} alt="Image Work Card" />
            </div>
            <div className={styles.image}>
              <div className={styles.overlay}></div>
              <Image src={img_4_work} alt="Image Work Card" />
            </div>
          </div>
          <div
            className={`${styles.cardsServicesCard} ${
              isCardServicesHovered ? styles.active : ""
            }`}
          >
            <div className={styles.card}>
              <p>
                Mobile &
                <br />
                desktop design
              </p>
              <Image src={img_1_services} alt="Image Work Card" />
            </div>
            <div className={styles.card}>
              <p>
                Website &
                <br />
                landing page design
              </p>
              <Image src={img_2_services} alt="Image Work Card" />
            </div>
            <div className={styles.card}>
              <p>
                Webflow
                <br />
                development
              </p>
              <Image src={img_3_services} alt="Image Work Card" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
