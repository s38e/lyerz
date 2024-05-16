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
import img_1_overlayWork from "../../../public/assets/img_1_overlayWork.png";
import img_2_overlayWork from "../../../public/assets/img_2_overlayWork.png";
import img_3_overlayWork from "../../../public/assets/img_3_overlayWork.png";
import img_4_overlayWork from "../../../public/assets/img_4_overlayWork.png";
import img_5_overlayWork from "../../../public/assets/img_5_overlayWork.png";
import img_6_overlayWork from "../../../public/assets/img_6_overlayWork.png";
import img_7_overlayWork from "../../../public/assets/img_7_overlayWork.png";
import img_8_overlayWork from "../../../public/assets/img_8_overlayWork.png";
import img_9_overlayWork from "../../../public/assets/img_9_overlayWork.png";
import img_10_overlayWork from "../../../public/assets/img_10_overlayWork.png";
import img_11_overlayWork from "../../../public/assets/img_11_overlayWork.png";
import img_12_overlayWork from "../../../public/assets/img_12_overlayWork.png";
import img_13_overlayWork from "../../../public/assets/img_13_overlayWork.png";
import card_work from "../../../public/assets/card_work.png";
import card_services from "../../../public/assets/card_services.png";
import card_about from "../../../public/assets/card_about.png";
import card_plans from "../../../public/assets/card_plans.png";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import CircleOverlayWorkCard from "../components/CircleOverlayWorkCard";
import CircleOverlayServicesCard from "../components/CircleOverlayServicesCard";
import CircleOverlayAboutCard from "../components/CircleOverlayAboutCard";
import CircleOverlayPlansCard from "../components/CircleOverlayPlansCard";
import Service from "../components/Service";

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
  // ---------------- Services States ---------------- //
  const [isServiceActive, setIsServiceActive] = useState(false);

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
  //
  const handleActiveService_1 = () => {
    setisService_1_Active(true);
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

  // ---------------- Check the language to determine the style ---------------- //
  const pathName = window.location.pathname;
  const isArabic = pathName.includes("/ar");

  const t = useTranslations("Home");
  const tags = useTranslations("plan_tag");
  const ServicesCards = useTranslations("servicesCards");

  return (
    <>
      <main className={styles.page}>
        <section
          className={`${styles.HeroSection} ${isArabic ? styles.ar : ""}`}
        >
          <NavBar />
          <div className={styles.hero_content}>
            <div className={styles.headTexts}>
              <h2>
                {t("header_1")}
                <br />
                <span>{t("header_2")}</span>
              </h2>
              <p>{t("header_3")}</p>
            </div>
            <div className={styles.hero_cards}>
              {/* ---------------- cardsPlansCard ---------------- */}
              <div
                className={`${styles.cardsPlansCard} ${
                  isCardPlansHovered ? styles.active : ""
                }`}
              >
                <div className={styles.plan_tag}>
                  <p>{tags("tag_1")}</p>
                </div>
                <div className={styles.plan_tag}>
                  <p>{tags("tag_2")}</p>
                </div>
                <div className={styles.plan_tag}>
                  <p>{tags("tag_3")}</p>
                </div>
                <div className={styles.plan_tag}>
                  <p>{tags("tag_3")}</p>
                </div>
              </div>
              <button onClick={handleCardWorkClick} className={styles.card}>
                <Image
                  src={card_work}
                  alt="Image Card Work"
                  width={100}
                  height={100}
                />
                <p>{t("card_1")}</p>
              </button>
              <button onClick={handleCardServicesClick} className={styles.card}>
                <Image
                  src={card_services}
                  alt="Image Card Services"
                  width={100}
                  height={100}
                />
                <p>{t("card_2")}</p>
              </button>
              <button onClick={handleCardAboutClick} className={styles.card}>
                <Image
                  src={card_about}
                  alt="Image Card About"
                  width={100}
                  height={100}
                />
                <p>{t("card_3")}</p>
              </button>
              <button onClick={handleCardPlansClick} className={styles.card}>
                <Image
                  src={card_plans}
                  alt="Image Card Plans"
                  width={100}
                  height={100}
                />
                <p>{t("card_4")}</p>
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
                {ServicesCards("card_1_part1")}
                <br />
                {ServicesCards("card_1_part2")}
              </p>
              <Image src={img_1_services} alt="Image Services Card" />
            </div>
            <div className={styles.card}>
              <p>
                {ServicesCards("card_2_part1")}
                <br />
                {ServicesCards("card_2_part2")}
              </p>
              <Image src={img_2_services} alt="Image Services Card" />
            </div>
            <div className={styles.card}>
              <p>
                {ServicesCards("card_3_part1")} <br />
                {ServicesCards("card_3_part2")}
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
            <div className={styles.contanier} onClick={handleContainerClick}>
              <Image src={img_1_overlayWork} alt="img_1_overlayWork" />
              <Image src={img_2_overlayWork} alt="img_2_overlayWork" />
              <Image src={img_3_overlayWork} alt="img_3_overlayWork" />
              <Image src={img_4_overlayWork} alt="img_4_overlayWork" />
              <Image src={img_5_overlayWork} alt="img_5_overlayWork" />
              <Image src={img_6_overlayWork} alt="img_6_overlayWork" />
              <Image src={img_7_overlayWork} alt="img_7_overlayWork" />
              <Image src={img_8_overlayWork} alt="img_8_overlayWork" />
              <Image src={img_9_overlayWork} alt="img_9_overlayWork" />
              <Image src={img_10_overlayWork} alt="img_10_overlayWork" />
              <Image src={img_11_overlayWork} alt="img_11_overlayWork" />
              <Image src={img_12_overlayWork} alt="img_12_overlayWork" />
              <Image src={img_13_overlayWork} alt="img_13_overlayWork" />
            </div>
          </div>
          {/* ---------------- Overlay Services Card ---------------- */}
          <div
            onClick={handleOverlayServicesClick}
            className={`${styles.overlayServicesCard} ${
              isCardServicesClicked ? styles.active : ""
            }`}
          >
            <CircleOverlayServicesCard />
            <div className={styles.contanier} onClick={handleContainerClick}>
              <div className={styles.head}>
                <h2>Services</h2>
                <p>
                  We team up with founders and startups to bring their ideas to
                  life—whether it's a simple landing page, a complete website,
                  or mobile and web apps.
                </p>
                <ul role="list" class="list">
                  <li>No template work</li>
                  <li>Deep-dive into your product and ideas</li>
                </ul>
              </div>
              <div className={styles.services}>
                <Service
                  title="Mobile & desktop app design"
                  description="Whether it's starting fresh or brushing up what you already have. We've worked on simple habit trackers to full-scale trading platforms."
                  image={img_1_services}
                  initialActiveState={true}
                />
                <Service
                  title="Mobile & desktop app design"
                  description="Whether it's starting fresh or brushing up what you already have. We've worked on simple habit trackers to full-scale trading platforms."
                  image={img_1_services}
                  initialActiveState={false}
                />
                <Service
                  title="Mobile & desktop app design"
                  description="Whether it's starting fresh or brushing up what you already have. We've worked on simple habit trackers to full-scale trading platforms."
                  image={img_1_services}
                  initialActiveState={false}
                />
              </div>
            </div>
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
