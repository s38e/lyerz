"use client";
import Image from "next/image";
import styles from "../page.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
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
                  src="/assets/card_work.png"
                  alt="Image Card Work"
                  width={100}
                  height={100}
                />
                <p>Work</p>
              </div>
              <div className={styles.card}>
                <Image
                  src="/assets/card_services.png"
                  alt="Image Card Services"
                  width={100}
                  height={100}
                />
                <p>Services</p>
              </div>
              <div className={styles.card}>
                <Image
                  src="/assets/card_about.png"
                  alt="Image Card About"
                  width={100}
                  height={100}
                />
                <p>About</p>
              </div>
              <div className={styles.card}>
                <Image
                  src="/assets/card_plans.png"
                  alt="Image Card Plans"
                  width={100}
                  height={100}
                />
                <p>Plans</p>
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </>
  );
}
