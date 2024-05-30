"use client";
import Image from "next/image";
import styles from "../page.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import img_1_work from "/public/assets/img_1_work.png";
import img_2_work from "/public/assets/img_2_work.webp";
import img_3_work from "/public/assets/img_3_work.webp";
import img_4_work from "/public/assets/img_4_work.webp";
import img_1_services from "/public/assets/img_1_services.png";
import img_2_services from "/public/assets/img_2_services.webp";
import img_3_services from "/public/assets/img_3_services.webp";
import webflowIcon from "/public/assets/webflow-icon.webp";
import img_1_about from "/public/assets/img_1_about.webp";
import img_2_about from "/public/assets/img_2_about.png";
import img_3_about from "/public/assets/img_3_about.webp";
import img_4_about from "/public/assets/img_4_about.webp";
import img_5_about from "/public/assets/img_5_about.webp";
import img_1_overlayWork from "/public/assets/img_1_overlayWork.webp";
import img_2_overlayWork from "/public/assets/img_2_overlayWork.png";
import img_3_overlayWork from "/public/assets/img_3_overlayWork.webp";
import img_4_overlayWork from "/public/assets/img_4_overlayWork.webp";
import img_5_overlayWork from "/public/assets/img_5_overlayWork.webp";
import img_6_overlayWork from "/public/assets/img_6_overlayWork.webp";
import img_7_overlayWork from "/public/assets/img_7_overlayWork.webp";
import img_8_overlayWork from "/public/assets/img_8_overlayWork.webp";
import img_9_overlayWork from "/public/assets/img_9_overlayWork.webp";
import img_10_overlayWork from "/public/assets/img_10_overlayWork.webp";
import img_11_overlayWork from "/public/assets/img_11_overlayWork.webp";
import img_12_overlayWork from "/public/assets/img_12_overlayWork.webp";
import img_13_overlayWork from "/public/assets/img_13_overlayWork.webp";
//
import Unlimited_Tasks from "/public/assets/Unlimited-Tasks.svg";
import Fast_Results from "/public/assets/Fast-Results.svg";
import Fixed_Monthly_Subscription from "/public/assets/Fixed-Monthly-Subscription.svg";
import Excellent_Design_Quality from "/public/assets/Excellent-Design-Quality.svg";
import imgInOverlayAbout from "/public/assets/imgInOverlayAbout.svg";
//
import card_work from "/public/assets/card_work.webp";
import card_services from "/public/assets/card_services.webp";
import card_about from "/public/assets/card_about.webp";
import card_plans from "/public/assets/card_plans.webp";
import Arrow from "/public/assets/Arrow.svg";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import CircleOverlayWorkCard from "../components/CircleOverlayWorkCard";
import CircleOverlayServicesCard from "../components/CircleOverlayServicesCard";
import CircleOverlayAboutCard from "../components/CircleOverlayAboutCard";
import CircleOverlayPlansCard from "../components/CircleOverlayPlansCard";
import Service from "../components/Service";
import gsap from "gsap";
import { getLangDir } from "rtl-detect";
import FooterStyles from "../components/styles/Footer.module.css";

function HomePage() {
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
    const Footer = document.querySelector(`.${FooterStyles.Footer}`);
    if (
      isCardWorkClicked ||
      isCardServicesClicked ||
      isCardAboutClicked ||
      isCardPlansClicked
    ) {
      Footer.style.gap = "2rem";
    } else {
      Footer.style.gap = "4rem";
    }
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
    const headTexts_P_1 = document.querySelector(
      `.${styles.HeroSection} .${styles.hero_content} .${styles.headTexts} div span:nth-child(1)`
    );
    const headTexts_P_2 = document.querySelector(
      `.${styles.HeroSection} .${styles.hero_content} .${styles.headTexts} div span:nth-child(2)`
    );

    WorkCard.addEventListener("mouseover", () => {
      setIsCardWorkHovered(true);
      headTexts_P_2.style.opacity = "1";
      headTexts_P_1.style.opacity = "0";
      //---------------------------------------
      headTexts_P_1.style.transitionDelay = "0s";
      headTexts_P_2.style.transitionDelay = "0.4s";
    });

    WorkCard.addEventListener("mouseout", () => {
      setIsCardWorkHovered(false);
      headTexts_P_2.style.opacity = "0";
      headTexts_P_1.style.opacity = "1";
      //---------------------------------------
      headTexts_P_1.style.transitionDelay = "0.4s";
      headTexts_P_2.style.transitionDelay = "0s";
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
  // ---------------- Animations ---------------- //
  useEffect(() => {
    // ---------------- Animation HeadTexts ---------------- //
    gsap.fromTo(
      `.${styles.HeroSection} .${styles.hero_content} .${styles.headTexts} h2`,
      { opacity: 0, y: 100 },
      { opacity: 1, delay: 0.4, y: 0, duration: 1.25, ease: "power4.out" }
    );
    gsap.fromTo(
      `.${styles.HeroSection} .${styles.hero_content} .${styles.headTexts} div`,
      { opacity: 0, y: 100 },
      { opacity: 1, delay: 0.5, y: 0, duration: 1.25, ease: "power4.out" }
    );
    // ---------------- Animation Cards ---------------- //
    gsap.fromTo(
      `.${styles.HeroSection} .${styles.hero_content} .${styles.hero_cards} .${styles.card}:nth-child(2)`,
      { opacity: 0, y: 100 },
      { opacity: 1, delay: 0.6, y: 0, duration: 1.25, ease: "power4.out" }
    );
    gsap.fromTo(
      `.${styles.HeroSection} .${styles.hero_content} .${styles.hero_cards} .${styles.card}:nth-child(3)`,
      { opacity: 0, y: 100 },
      { opacity: 1, delay: 0.7, y: 0, duration: 1.25, ease: "power4.out" }
    );
    gsap.fromTo(
      `.${styles.HeroSection} .${styles.hero_content} .${styles.hero_cards} .${styles.card}:nth-child(4)`,
      { opacity: 0, y: 100 },
      { opacity: 1, delay: 0.8, y: 0, duration: 1.25, ease: "power4.out" }
    );
    gsap.fromTo(
      `.${styles.HeroSection} .${styles.hero_content} .${styles.hero_cards} .${styles.card}:nth-child(5)`,
      { opacity: 0, y: 100 },
      { opacity: 1, delay: 0.9, y: 0, duration: 1.25, ease: "power4.out" }
    );
  }, []);

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

  // ---------------- Check the language to determine the style ---------------- //
  const locale = useLocale();
  const direction = getLangDir(locale);

  // ---------------- translate ---------------- //
  const t = useTranslations("Home");
  const tags = useTranslations("plan_tag");
  const ServicesCards = useTranslations("servicesCards");
  const overlayServicesCard = useTranslations("overlayServicesCard");
  const overlayAboutCard = useTranslations("overlayAboutCard");
  const overlayPlansCard = useTranslations("overlayPlansCard");

  return (
    <main className={styles.page}>
      <section
        className={`${styles.HeroSection} ${
          direction === "rtl" ? styles.ar : ""
        }`}
      >
        <NavBar />
        <div className={styles.hero_content}>
          <div className={styles.headTexts}>
            <h2>
              {t("header_1")}
              <br />
              <span>{t("header_2")}</span>
            </h2>
            <div>
              <span>
                {t("header_3")}
                <p>{t("absoluteTitle")}</p>
                <Image src={Arrow} alt="Arrow" />
              </span>
              <span>
                See our top projects and discover how we turn ideas into
                reality.
              </span>
            </div>
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
              <div className={styles.status}>
                <div className={styles.live_indicator}>
                  <div className={styles.red_dot}></div>
                  <div className={`${styles.pulse} ${styles.one}`}></div>
                  <div className={`${styles.pulse} ${styles.tow}`}></div>
                </div>
                <p>Slots available</p>
              </div>
            </button>
          </div>
        </div>
        <Footer />
        <div className={styles.substituteFooter}></div>
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
              <h2>{overlayServicesCard("head->h2")}</h2>
              <p>{overlayServicesCard("head->p")}</p>
              <ul role="list">
                <li>{overlayServicesCard("head->li_1")}</li>
                <li>{overlayServicesCard("head->li_2")}</li>
              </ul>
            </div>
            <div className={styles.services}>
              <Service
                title={overlayServicesCard("Service_1_Title")}
                description={overlayServicesCard("Service_1_Description")}
                image={img_1_services}
                initialActiveState={true}
              />
              <Service
                title={overlayServicesCard("Service_1_Title")}
                description={overlayServicesCard("Service_1_Description")}
                image={img_2_services}
                initialActiveState={false}
              />
              <Service
                title={overlayServicesCard("Service_1_Title")}
                description={overlayServicesCard("Service_1_Description")}
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
              <h2>{overlayAboutCard("headTexts->h2")}</h2>
              <p>{overlayAboutCard("headTexts->p")}</p>
            </div>
            <div className={styles.about_teamCards}>
              <div className={styles.card}>
                <Image src={Unlimited_Tasks} alt="Unlimited_Tasks" />
                <div className={styles.heading}>
                  <p>{overlayAboutCard("card_1_heading->p_1")}</p>
                  <p>{overlayAboutCard("card_1_heading->p_2")}</p>
                </div>
              </div>
              <div className={styles.card}>
                <Image src={Fast_Results} alt="Fast_Results" />
                <div className={styles.heading}>
                  <p>{overlayAboutCard("card_2_heading->p_1")}</p>
                  <p>{overlayAboutCard("card_2_heading->p_2")}</p>
                </div>
              </div>
              <div className={styles.card}>
                <Image
                  src={Fixed_Monthly_Subscription}
                  alt="Fixed_Monthly_Subscription"
                />
                <div className={styles.heading}>
                  <p>{overlayAboutCard("card_3_heading->p_1")}</p>
                  <p>{overlayAboutCard("card_3_heading->p_2")}</p>
                </div>
              </div>
              <div className={styles.card}>
                <Image
                  src={Excellent_Design_Quality}
                  alt="Excellent_Design_Quality"
                />
                <div className={styles.heading}>
                  <p>{overlayAboutCard("card_4_heading->p_1")}</p>
                  <p>{overlayAboutCard("card_4_heading->p_2")}</p>
                </div>
              </div>
              <div className={styles.card}>
                <Image src={Unlimited_Tasks} alt="Unlimited_Tasks" />
                <div className={styles.heading}>
                  <p>{overlayAboutCard("card_1_heading->p_1")}</p>
                  <p>{overlayAboutCard("card_1_heading->p_2")}</p>
                </div>
              </div>
              <div className={styles.card}>
                <Image src={Unlimited_Tasks} alt="Unlimited_Tasks" />
                <div className={styles.heading}>
                  <p>{overlayAboutCard("card_1_heading->p_1")}</p>
                  <p>{overlayAboutCard("card_1_heading->p_2")}</p>
                </div>
              </div>
            </div>
            <div className={styles.mission}>
              <h2>Our Mission</h2>
              <p>
                Whether it&#39;s a landing page, a white paper, or a presentation -
                good design has become indispensable in various fields today.
                <br />
                <br />
                Besides communicating a company&#39;s image & brand, appealing and
                user-friendly design ensures a positive customer journey.
                <br />
                <br />
                We know from our own experience how time-consuming, costly and
                nerve-wracking it can be to build and sustainably scale a design
                team.
                <br />
                <br />
                With LYERZ, we provide companies with a solution we have been
                dreaming of ourselves.
                <br />
                <br />
                Unlimited Design, One Subscription: Effortless. Affordable.
                Magical.
              </p>
            </div>
            <Image
              className={styles.imgAbout}
              src={imgInOverlayAbout}
              alt="img_4_about"
            />
            <div className={styles.about_summary}>
              <p className={styles.heading}>
                {overlayAboutCard("about_summary->heading")}
              </p>
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
                      fill="#0019FF"
                    />
                  </svg>

                  <div className={styles.texts}>
                    <p>
                      {overlayAboutCard(
                        "about_summary-content-item_1-texts->p_1"
                      )}
                    </p>
                    <p>
                      {overlayAboutCard(
                        "about_summary-content-item_1-texts->p_2"
                      )}
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
                      fill="#0019FF"
                    />
                  </svg>

                  <div className={styles.texts}>
                    <p>
                      {overlayAboutCard(
                        "about_summary-content-item_2-texts->p_1"
                      )}
                    </p>
                    <p>
                      {overlayAboutCard(
                        "about_summary-content-item_2-texts->p_2"
                      )}
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
                      fill="#0019FF"
                    />
                  </svg>

                  <div className={styles.texts}>
                    <p>
                      {overlayAboutCard(
                        "about_summary-content-item_3-texts->p_1"
                      )}
                    </p>
                    <p>
                      {overlayAboutCard(
                        "about_summary-content-item_3-texts->p_2"
                      )}
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
                      fill="#0019FF"
                    />
                  </svg>

                  <div className={styles.texts}>
                    <p>
                      {overlayAboutCard(
                        "about_summary-content-item_4-texts->p_1"
                      )}
                    </p>
                    <p>
                      {overlayAboutCard(
                        "about_summary-content-item_4-texts->p_2"
                      )}
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
                      fill="#0019FF"
                    />
                  </svg>

                  <div className={styles.texts}>
                    <p>
                      {overlayAboutCard(
                        "about_summary-content-item_5-texts->p_1"
                      )}
                    </p>
                    <p>
                      {overlayAboutCard(
                        "about_summary-content-item_5-texts->p_2"
                      )}
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
            <h2>{overlayPlansCard("h2")}</h2>
            <div className={styles.plans}>
              <div className={styles.plan}>
                <p className={styles.pricingTag}>
                  {overlayPlansCard("plans-plan_1->pricingTag")}
                </p>
                <div className={styles.pricingContent}>
                  <p>
                    {overlayPlansCard("plans-plan_1-pricingContent->p_1")}
                    <span>
                      {overlayPlansCard("plans-plan-pricingContent-p_2->span")}
                    </span>
                  </p>
                  <p>{overlayPlansCard("plans-plan_1-pricingContent->p_2")}</p>
                </div>
              </div>
              <div className={styles.plan}>
                <p className={styles.pricingTag}>
                  {overlayPlansCard("plans-plan_2->pricingTag")}
                </p>
                <div className={styles.pricingContent}>
                  <p>
                    {overlayPlansCard("plans-plan_2-pricingContent->p_1")}
                    <span>
                      {overlayPlansCard("plans-plan-pricingContent-p_2->span")}
                    </span>
                  </p>
                  <p>{overlayPlansCard("plans-plan_2-pricingContent->p_2")}</p>
                </div>
              </div>
              <div className={styles.plan}>
                <p className={styles.pricingTag}>
                  {overlayPlansCard("plans-plan_3->pricingTag")}
                </p>
                <div className={styles.pricingContent}>
                  <p>{overlayPlansCard("plans-plan_3-pricingContent->p_1")}</p>
                  <p>{overlayPlansCard("plans-plan_3-pricingContent->p_2")}</p>
                </div>
                <button>
                  <p>{overlayPlansCard("plans-plan_3-button->p")}</p>
                </button>
              </div>
            </div>
            <div className={styles.note}>
              <div className={styles.heading}>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 1.25C5.125 1.25 1.25 5.125 1.25 10C1.25 14.875 5.125 18.75 10 18.75C14.875 18.75 18.75 14.875 18.75 10C18.75 5.125 14.875 1.25 10 1.25ZM13.375 14.375L10 11L6.625 14.375L5.625 13.375L9 10L5.625 6.625L6.625 5.625L10 9L13.375 5.625L14.375 6.625L11 10L14.375 13.375L13.375 14.375Z"
                    fill="#727272"
                  ></path>
                </svg>
                <p>{overlayPlansCard("note->heading")}</p>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.3189 2.68129C17.2345 2.59733 17.128 2.53921 17.0117 2.51374C16.8955 2.48828 16.7743 2.49653 16.6626 2.53754L2.91262 7.53754C2.79404 7.58252 2.69195 7.66251 2.6199 7.76689C2.54786 7.87126 2.50928 7.99509 2.50928 8.12191C2.50928 8.24874 2.54786 8.37256 2.6199 8.47694C2.69195 8.58132 2.79404 8.66131 2.91262 8.70629L8.28137 10.85L12.2439 6.87504L13.1251 7.75629L9.14387 11.7375L11.2939 17.1063C11.3402 17.2226 11.4204 17.3223 11.524 17.3925C11.6276 17.4627 11.7499 17.5002 11.8751 17.5C12.0014 17.4974 12.124 17.4566 12.2266 17.383C12.3293 17.3094 12.4072 17.2064 12.4501 17.0875L17.4501 3.33754C17.4927 3.22696 17.503 3.10656 17.4797 2.99037C17.4565 2.87417 17.4007 2.76698 17.3189 2.68129Z"
                    fill="#727272"
                  ></path>
                </svg>
              </div>
              <div className={styles.content}>
                <p>
                  {overlayPlansCard("note-content->p_part_1")}
                  <br />
                  <br />
                  {overlayPlansCard("note-content->p_part_2")}
                  <br />
                  <br />
                  {overlayPlansCard("note-content->p_part_3")}
                  <br />
                  <br />
                  {overlayPlansCard("note-content->p_part_4")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
