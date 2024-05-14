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
import webflowIcon from "../../../public/assets/webflow-icon.png";
import img_1_about from "../../../public/assets/img_1_about.png";
import img_2_about from "../../../public/assets/img_2_about.png";
import img_3_about from "../../../public/assets/img_3_about.png";
import img_4_about from "../../../public/assets/img_4_about.png";
import img_5_about from "../../../public/assets/img_5_about.png";
import card_work from "../../../public/assets/card_work.png";
import card_services from "../../../public/assets/card_services.png";
import card_about from "../../../public/assets/card_about.png";
import card_plans from "../../../public/assets/card_plans.png";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import CircleOverlayWorkCard from "../components/CircleOverlayWorkCard";
import CircleOverlayServicesCard from "../components/CircleOverlayServicesCard";
import CircleOverlayAboutCard from "../components/CircleOverlayAboutCard";
import CircleOverlayPlansCard from "../components/CircleOverlayPlansCard";

export default function Home() {
  // ---------------- Hovered ---------------- //
  const [isCardWorkHovered, setIsCardWorkHovered] = useState(false);
  const [isCardServicesHovered, setIsCardServicesHovered] = useState(false);
  const [isCardAboutHovered, setIsCardAboutHovered] = useState(false);
  const [isCardPlansHovered, setIsCardPlansHovered] = useState(false);
  // ---------------- Clicked ---------------- //
  const [isCardWorkClicked, setIsCardWorkClicked] = useState(false);
  const [isCardServicesClicked, setIsCardServicesClicked] = useState(false);
  const [isCardAboutClicked, setIsCardAboutClicked] = useState(false);
  const [isCardPlansClicked, setIsCardPlansClicked] = useState(false);

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
      `.${styles.HeroSection} .${styles.hero_content} .${styles.hero_cards} .${styles.card}:nth-child(2)`
    );

    WorkCard.addEventListener("mouseover", () => {
      setIsCardWorkHovered(true);
    });

    WorkCard.addEventListener("mouseout", () => {
      setIsCardWorkHovered(false);
    });
    // ---------------- ServicesCard ---------------- //
    const ServicesCard = document.querySelector(
      `.${styles.HeroSection} .${styles.hero_content} .${styles.hero_cards} .${styles.card}:nth-child(3)`
    );

    ServicesCard.addEventListener("mouseover", () => {
      setIsCardServicesHovered(true);
    });

    ServicesCard.addEventListener("mouseout", () => {
      setIsCardServicesHovered(false);
    });
    // ---------------- AboutCard ---------------- //
    const AboutCard = document.querySelector(
      `.${styles.HeroSection} .${styles.hero_content} .${styles.hero_cards} .${styles.card}:nth-child(4)`
    );

    AboutCard.addEventListener("mouseover", () => {
      setIsCardAboutHovered(true);
    });

    AboutCard.addEventListener("mouseout", () => {
      setIsCardAboutHovered(false);
    });
    // ---------------- PlansCard ---------------- //
    const PlansCard = document.querySelector(
      `.${styles.HeroSection} .${styles.hero_content} .${styles.hero_cards} .${styles.card}:nth-child(5)`
    );

    PlansCard.addEventListener("mouseover", () => {
      setIsCardPlansHovered(true);
    });

    PlansCard.addEventListener("mouseout", () => {
      setIsCardPlansHovered(false);
    });
  });
  // ---------------- Click Work Card ---------------- //
  const handleCardWorkClick = () => {
    setIsCardWorkClicked(true);
  };
  const handleOverlayWorkClick = () => {
    setIsCardWorkClicked(false);
  };
  // ---------------- Click Services Card ---------------- //
  const handleCardServicesClick = () => {
    setIsCardServicesClicked(true);
  };
  const handleOverlayServicesClick = () => {
    setIsCardServicesClicked(false);
  };

  // ---------------- Click About Card ---------------- //
  const handleCardAboutClick = () => {
    setIsCardAboutClicked(true);
  };
  const handleOverlayAboutClick = () => {
    setIsCardAboutClicked(false);
  };

  // ---------------- Click Plans Card ---------------- //
  const handleCardPlansClick = () => {
    setIsCardPlansClicked(true);
  };
  const handleOverlayPlansClick = () => {
    setIsCardPlansClicked(false);
  };
  // -----------------------------------------------
  const handleContainerClick = (e) => {
    e.stopPropagation();
  };

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
              {/* ---------------- cardsPlansCard ---------------- */}
              <div
                className={`${styles.cardsPlansCard} ${
                  isCardPlansHovered ? styles.active : ""
                }`}
              >
                <div className={styles.plan_tag}>
                  <p>Project Based</p>
                </div>
                <div className={styles.plan_tag}>
                  <p>Webflow development: $2.990</p>
                </div>
                <div className={styles.plan_tag}>
                  <p>Flat monthly fee: $6.990</p>
                </div>
                <div className={styles.plan_tag}>
                  <p>Flat monthly fee: $6.990</p>
                </div>
              </div>
              <button onClick={handleCardWorkClick} className={styles.card}>
                <Image
                  src={card_work}
                  alt="Image Card Work"
                  width={100}
                  height={100}
                />
                <p>Work</p>
              </button>
              <button onClick={handleCardServicesClick} className={styles.card}>
                <Image
                  src={card_services}
                  alt="Image Card Services"
                  width={100}
                  height={100}
                />
                <p>Services</p>
              </button>
              <button onClick={handleCardAboutClick} className={styles.card}>
                <Image
                  src={card_about}
                  alt="Image Card About"
                  width={100}
                  height={100}
                />
                <p>About</p>
              </button>
              <button onClick={handleCardPlansClick} className={styles.card}>
                <Image
                  src={card_plans}
                  alt="Image Card Plans"
                  width={100}
                  height={100}
                />
                <p>Plans</p>
              </button>
            </div>
          </div>
          <Footer />
          {/* ---------------- Images Work Card ---------------- */}
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
          {/* ---------------- Cards Services Card ---------------- */}
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
              <Image src={img_1_services} alt="Image Services Card" />
            </div>
            <div className={styles.card}>
              <p>
                Website &
                <br />
                landing page design
              </p>
              <Image src={img_2_services} alt="Image Services Card" />
            </div>
            <div className={styles.card}>
              <p>
                Webflow
                <br />
                development
              </p>
              <Image src={img_3_services} alt="Image Services Card" />
              <Image src={webflowIcon} alt="webflowIcon" />
            </div>
          </div>
          {/* ---------------- Cards About Card ---------------- */}
          <div
            className={`${styles.cardsAboutCard} ${
              isCardAboutHovered ? styles.active : ""
            }`}
          >
            <div className={styles.image}>
              <Image src={img_1_about} alt="Image About Card" />
            </div>
            <div className={styles.image}>
              <Image src={img_2_about} alt="Image About Card" />
            </div>
            <div className={styles.image}>
              <Image src={img_3_about} alt="Image About Card" />
            </div>
            <div className={styles.image}>
              <Image src={img_4_about} alt="Image About Card" />
            </div>
            <div className={styles.image}>
              <Image src={img_5_about} alt="Image About Card" />
            </div>
          </div>
          {/* ---------------- Overlay Work Card ---------------- */}
          <div
            onClick={handleOverlayWorkClick}
            className={`${styles.overlayWorkCard} ${
              isCardWorkClicked ? styles.active : ""
            }`}
          >
            <CircleOverlayWorkCard />
            <div
              className={styles.contanier}
              onClick={handleContainerClick}
            ></div>
          </div>
          {/* ---------------- Overlay Services Card ---------------- */}
          <div
            onClick={handleOverlayServicesClick}
            className={`${styles.overlayServicesCard} ${
              isCardServicesClicked ? styles.active : ""
            }`}
          >
            <CircleOverlayServicesCard />
            <div
              className={styles.contanier}
              onClick={handleContainerClick}
            ></div>
          </div>
          {/* ---------------- Overlay About Card ---------------- */}
          <div
            onClick={handleOverlayAboutClick}
            className={`${styles.overlayAboutCard} ${
              isCardAboutClicked ? styles.active : ""
            }`}
          >
            <CircleOverlayAboutCard />
            <div
              className={styles.contanier}
              onClick={handleContainerClick}
            ></div>
          </div>
          {/* ---------------- Overlay Plans Card ---------------- */}
          <div
            onClick={handleOverlayPlansClick}
            className={`${styles.overlayPlansCard} ${
              isCardPlansClicked ? styles.active : ""
            }`}
          >
            <CircleOverlayPlansCard />
            <div
              className={styles.contanier}
              onClick={handleContainerClick}
            ></div>
          </div>
        </section>
      </main>
    </>
  );
}
