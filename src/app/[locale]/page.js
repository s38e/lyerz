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
import img_1_overlayAbout from "../../../public/assets/img_1_overlayAbout.png";
import img_2_overlayAbout from "../../../public/assets/img_2_overlayAbout.png";
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
                  life—whether it&#39;s a simple landing page, a complete
                  website, or mobile and web apps.
                </p>
                <ul role="list" class="list">
                  <li>No template work</li>
                  <li>Deep-dive into your product and ideas</li>
                </ul>
              </div>
              <div className={styles.services}>
                <Service
                  title="Mobile & desktop app design"
                  description="Whether it&#39;s starting fresh or brushing up what you already have. We&#39;ve worked on simple habit trackers to full-scale trading platforms."
                  image={img_1_services}
                  initialActiveState={true}
                />
                <Service
                  title="Mobile & desktop app design"
                  description="Whether it&#39;s starting fresh or brushing up what you already have. We&#39;ve worked on simple habit trackers to full-scale trading platforms."
                  image={img_2_services}
                  initialActiveState={false}
                />
                <Service
                  title="Mobile & desktop app design"
                  description="Whether it&#39;s starting fresh or brushing up what you already have. We&#39;ve worked on simple habit trackers to full-scale trading platforms."
                  image={img_3_services}
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
            <div className={styles.contanier} onClick={handleContainerClick}>
              <div className={styles.headTexts}>
                <h2>About</h2>
                <p>
                  We're a two-person team with a thing for startups. Between us,
                  we've spent 15 years diving into the startup world.
                </p>
              </div>
              <div className={styles.about_teamCards}>
                <div className={styles.card}>
                  <Image src={img_1_overlayAbout} alt="img_1_overlayAbout" />
                  <div className={styles.heading}>
                    <p>Dragana D.</p>
                    <p>Product Designer</p>
                  </div>
                  <div className={styles.country_flag}>
                    <p>🇩🇪</p>
                    <p>Germany</p>
                  </div>
                </div>
                <div className={styles.card}>
                  <Image src={img_2_overlayAbout} alt="img_2_overlayAbout" />
                  <div className={styles.heading}>
                    <p>Peter K.</p>
                    <p>Webflow Developer</p>
                  </div>
                  <div className={styles.country_flag}>
                    <p>🇺🇸</p>
                    <p>USA</p>
                  </div>
                </div>
              </div>
              <p className={styles.text}>
                We've been in the trenches, working side by side with founders
                and teams. We know what it's like. Startups need growth, and
                we're here to make sure your design pulls its weight.
              </p>
              <div className={styles.about_summary}>
                <p className={styles.heading}>Summary</p>
                <div className={styles.content}>
                  <div className={styles.item}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.13876 17.2754C6.57769 18.2368 8.26942 18.75 10 18.75C12.3198 18.7474 14.5439 17.8247 16.1843 16.1843C17.8247 14.5439 18.7474 12.3198 18.75 10C18.75 8.26942 18.2368 6.57769 17.2754 5.13876C16.3139 3.69983 14.9473 2.57832 13.3485 1.91606C11.7496 1.25379 9.9903 1.08051 8.29296 1.41813C6.59563 1.75575 5.03653 2.58911 3.81282 3.81282C2.58911 5.03653 1.75575 6.59563 1.41813 8.29296C1.08051 9.9903 1.25379 11.7496 1.91606 13.3485C2.57832 14.9473 3.69983 16.3139 5.13876 17.2754ZM5.83323 3.76398C7.0666 2.93987 8.51664 2.5 10 2.5C11.9884 2.50227 13.8948 3.29317 15.3008 4.69921C16.7068 6.10524 17.4977 8.01158 17.5 10C17.5 11.4834 17.0601 12.9334 16.236 14.1668C15.4119 15.4001 14.2406 16.3614 12.8701 16.9291C11.4997 17.4968 9.99168 17.6453 8.53683 17.3559C7.08197 17.0665 5.7456 16.3522 4.6967 15.3033C3.64781 14.2544 2.9335 12.918 2.64411 11.4632C2.35473 10.0083 2.50325 8.50032 3.07091 7.12988C3.63856 5.75943 4.59986 4.58809 5.83323 3.76398ZM16.25 10C16.25 13.4518 13.4518 16.25 10 16.25C6.54822 16.25 3.75 13.4518 3.75 10C3.75 6.54822 6.54822 3.75 10 3.75C13.4518 3.75 16.25 6.54822 16.25 10Z"
                        fill="#4B8DF3"
                      ></path>
                    </svg>
                    <div className={styles.texts}>
                      <p>At our core, we're product people</p>
                      <p>
                        This means we don't just design; we craft products with
                        a keen eye on user experience and market fit
                      </p>
                    </div>
                  </div>
                  <div className={styles.item}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.13876 17.2754C6.57769 18.2368 8.26942 18.75 10 18.75C12.3198 18.7474 14.5439 17.8247 16.1843 16.1843C17.8247 14.5439 18.7474 12.3198 18.75 10C18.75 8.26942 18.2368 6.57769 17.2754 5.13876C16.3139 3.69983 14.9473 2.57832 13.3485 1.91606C11.7496 1.25379 9.9903 1.08051 8.29296 1.41813C6.59563 1.75575 5.03653 2.58911 3.81282 3.81282C2.58911 5.03653 1.75575 6.59563 1.41813 8.29296C1.08051 9.9903 1.25379 11.7496 1.91606 13.3485C2.57832 14.9473 3.69983 16.3139 5.13876 17.2754ZM5.83323 3.76398C7.0666 2.93987 8.51664 2.5 10 2.5C11.9884 2.50227 13.8948 3.29317 15.3008 4.69921C16.7068 6.10524 17.4977 8.01158 17.5 10C17.5 11.4834 17.0601 12.9334 16.236 14.1668C15.4119 15.4001 14.2406 16.3614 12.8701 16.9291C11.4997 17.4968 9.99168 17.6453 8.53683 17.3559C7.08197 17.0665 5.7456 16.3522 4.6967 15.3033C3.64781 14.2544 2.9335 12.918 2.64411 11.4632C2.35473 10.0083 2.50325 8.50032 3.07091 7.12988C3.63856 5.75943 4.59986 4.58809 5.83323 3.76398ZM16.25 10C16.25 13.4518 13.4518 16.25 10 16.25C6.54822 16.25 3.75 13.4518 3.75 10C3.75 6.54822 6.54822 3.75 10 3.75C13.4518 3.75 16.25 6.54822 16.25 10Z"
                        fill="#4B8DF3"
                      ></path>
                    </svg>
                    <div className={styles.texts}>
                      <p>At our core, we're product people</p>
                      <p>
                        This means we don't just design; we craft products with
                        a keen eye on user experience and market fit
                      </p>
                    </div>
                  </div>
                  <div className={styles.item}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.13876 17.2754C6.57769 18.2368 8.26942 18.75 10 18.75C12.3198 18.7474 14.5439 17.8247 16.1843 16.1843C17.8247 14.5439 18.7474 12.3198 18.75 10C18.75 8.26942 18.2368 6.57769 17.2754 5.13876C16.3139 3.69983 14.9473 2.57832 13.3485 1.91606C11.7496 1.25379 9.9903 1.08051 8.29296 1.41813C6.59563 1.75575 5.03653 2.58911 3.81282 3.81282C2.58911 5.03653 1.75575 6.59563 1.41813 8.29296C1.08051 9.9903 1.25379 11.7496 1.91606 13.3485C2.57832 14.9473 3.69983 16.3139 5.13876 17.2754ZM5.83323 3.76398C7.0666 2.93987 8.51664 2.5 10 2.5C11.9884 2.50227 13.8948 3.29317 15.3008 4.69921C16.7068 6.10524 17.4977 8.01158 17.5 10C17.5 11.4834 17.0601 12.9334 16.236 14.1668C15.4119 15.4001 14.2406 16.3614 12.8701 16.9291C11.4997 17.4968 9.99168 17.6453 8.53683 17.3559C7.08197 17.0665 5.7456 16.3522 4.6967 15.3033C3.64781 14.2544 2.9335 12.918 2.64411 11.4632C2.35473 10.0083 2.50325 8.50032 3.07091 7.12988C3.63856 5.75943 4.59986 4.58809 5.83323 3.76398ZM16.25 10C16.25 13.4518 13.4518 16.25 10 16.25C6.54822 16.25 3.75 13.4518 3.75 10C3.75 6.54822 6.54822 3.75 10 3.75C13.4518 3.75 16.25 6.54822 16.25 10Z"
                        fill="#4B8DF3"
                      ></path>
                    </svg>
                    <div className={styles.texts}>
                      <p>At our core, we're product people</p>
                      <p>
                        This means we don't just design; we craft products with
                        a keen eye on user experience and market fit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------- Overlay Plans Card ---------------- */}
          <div
            onClick={handleOverlayPlansClick}
            className={`${styles.overlayPlansCard} ${
              isCardPlansClicked ? styles.active : ""
            }`}
          >
            <CircleOverlayPlansCard />
            <div className={styles.contanier} onClick={handleContainerClick}>
              <h2>Pricing</h2>
              <div className={styles.plans}>
                <div className={styles.plan}>
                  <p className={styles.pricingTag}>Flat monthly fee</p>
                  <div className={styles.pricingContent}>
                    <p>
                      $6,990
                      <span>/month</span>
                    </p>
                    <p>
                      Best if you’re looking for steady and ongoing design work.
                    </p>
                  </div>
                </div>
                <div className={styles.plan}>
                  <p className={styles.pricingTag}>Webflow development</p>
                  <div className={styles.pricingContent}>
                    <p>
                      $2,990
                      <span>/month</span>
                    </p>
                    <p>
                      For ongoing support and consistent updates to your
                      existing Webflow site.
                    </p>
                  </div>
                </div>
                <div className={styles.plan}>
                  <p className={styles.pricingTag}>Project based</p>
                  <div className={styles.pricingContent}>
                    <p>Custom</p>
                    <p>Perfect for a bigger one-time thing.</p>
                  </div>
                  <button> Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
