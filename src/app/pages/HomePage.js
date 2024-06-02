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
import LightningImg from "/public/assets/LightningImg.svg";
//
import CardInOverlayAbout from "/src/app/components/cardInOverlayAbout";
import Unlimited_Tasks from "/public/assets/Unlimited-Tasks.svg";
import Fast_Results from "/public/assets/Fast-Results.svg";
import Fixed_Monthly_Subscription from "/public/assets/Fixed-Monthly-Subscription.svg";
import Excellent_Design_Quality from "/public/assets/Excellent-Design-Quality.svg";
import Create_WOW from "/public/assets/Create-WOW.svg";
import Own_It from "/public/assets/Own-It.svg";
import imgInOverlayAbout from "/public/assets/imgInOverlayAbout.svg";
import starInOverlayAbout from "/public/assets/starInOverlayAbout.svg";
//
import card_work from "/public/assets/card_work.webp";
import card_services from "/public/assets/card_services.webp";
import card_about from "/public/assets/card_about.webp";
import card_plans from "/public/assets/card_plans.webp";
import Arrow from "/public/assets/Arrow.svg";
import Arrow_3 from "/public/assets/arrow_3.svg";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import CircleOverlayWorkCard from "../components/CircleOverlayWorkCard";
import CircleOverlayServicesCard from "../components/CircleOverlayServicesCard";
import CircleOverlayAboutCard from "../components/CircleOverlayAboutCard";
import CircleOverlayPlansCard from "../components/CircleOverlayPlansCard";
import Service from "../components/Service";
import Question from "../components/Question";
import gsap from "gsap";
import { getLangDir } from "rtl-detect";
import FooterStyles from "../components/styles/Footer.module.css";
import Link from "next/link";

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
  const [isCardPlansClicked, setIsCardPlansClicked] = useState(true);

  useEffect(() => {
    const Footer = document.querySelector(`.${FooterStyles.Footer}`);

    if (
      isCardWorkClicked ||
      isCardServicesClicked ||
      isCardAboutClicked ||
      isCardPlansClicked
    ) {
      Footer.style.gap = "1rem";
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
              <CardInOverlayAbout
                image={Unlimited_Tasks}
                title={overlayAboutCard("card_1_heading->p_1")}
                description={overlayAboutCard("card_1_heading->p_2")}
                initialActiveState={true}
              />
              <CardInOverlayAbout
                image={Create_WOW}
                title={overlayAboutCard("card_5_heading->p_1")}
                description={overlayAboutCard("card_5_heading->p_2")}
              />
              <CardInOverlayAbout
                image={Fixed_Monthly_Subscription}
                title={overlayAboutCard("card_3_heading->p_1")}
                description={overlayAboutCard("card_3_heading->p_2")}
              />
              <CardInOverlayAbout
                image={Excellent_Design_Quality}
                title={overlayAboutCard("card_4_heading->p_1")}
                description={overlayAboutCard("card_4_heading->p_2")}
              />
              <CardInOverlayAbout
                image={Fast_Results}
                title={overlayAboutCard("card_2_heading->p_1")}
                description={overlayAboutCard("card_2_heading->p_2")}
              />
              <CardInOverlayAbout
                image={Own_It}
                title={overlayAboutCard("card_6_heading->p_1")}
                description={overlayAboutCard("card_6_heading->p_2")}
              />
            </div>
            <div className={styles.mission}>
              <h2>Our Mission</h2>
              <p>
                <span>
                  Whether it&#39;s a landing page, a white paper, or a
                  presentation - good design has become indispensable in various
                  fields today.
                </span>
                <br />
                <span>
                  Besides communicating a company&#39;s image & brand, appealing
                  and user-friendly design ensures a positive customer journey.
                </span>
                <br />
                <span>
                  We know from our own experience how time-consuming, costly and
                  nerve-wracking it can be to build and sustainably scale a
                  design team.
                </span>
                <br />
                <span>
                  With LYERZ, we provide companies with a solution we have been
                  dreaming of ourselves.
                </span>
                <br />
                <span>
                  Unlimited Design, One Subscription: Effortless. Affordable.
                  Magical.
                </span>
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
                  <Image src={starInOverlayAbout} alt="starInOverlayAbout" />
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
                  <Image src={starInOverlayAbout} alt="" />
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
                  <Image src={starInOverlayAbout} alt="" />
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
                  <Image src={starInOverlayAbout} alt="" />
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
                  <Image src={starInOverlayAbout} alt="" />
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
            <p className={styles.headTitle}>
              Add a top designer to your team for a fixed monthly price.
            </p>
            <div className={styles.checkList}>
              <div className={styles.heading}>
                <p>Checklist</p>
              </div>
              <div className={styles.content}>
                <div className={styles.item}>
                  <Image
                    className={styles.imgAbout}
                    src={starInOverlayAbout}
                    alt="starInOverlayAbout"
                  />
                  <p>
                    You genuinely care about your product and how it impacts
                    your users
                  </p>
                </div>
                <div className={styles.item}>
                  <Image
                    className={styles.imgAbout}
                    src={starInOverlayAbout}
                    alt="starInOverlayAbout"
                  />
                  <p>
                    You’re in regular conversations with your users, and their
                    feedback directly shapes your product
                  </p>
                </div>
                <div className={styles.item}>
                  <Image
                    className={styles.imgAbout}
                    src={starInOverlayAbout}
                    alt="starInOverlayAbout"
                  />
                  <p>
                    Your goal isn’t to mimic your competition, you’re aiming for
                    something uniquely yours
                  </p>
                </div>
              </div>
            </div>
            <h2>{overlayPlansCard("h2")}</h2>
            <div className={styles.plans}>
              <div className={styles.plan}>
                <div className={styles.pricingTag}>
                  <div className={styles.live_indicator}>
                    <div className={styles.red_dot}></div>
                    <div className={`${styles.pulse} ${styles.one}`}></div>
                    <div className={`${styles.pulse} ${styles.tow}`}></div>
                  </div>
                  {overlayPlansCard("plans-plan_1->pricingTag")}
                </div>
                <div className={styles.pricingContent}>
                  <p>Join LYERZ</p>
                  <div className={styles.button}>
                    <div className={styles.texts}>
                      <h5>Book a 30-min intro call</h5>
                      <p>
                        Learn more about how LYERZ works and how it can help
                        you.
                      </p>
                    </div>
                    <Image src={Arrow_3} alt="Arrow_3" />
                  </div>
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
                  <Image src={LightningImg} alt="LightningImg" />
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
            <div className={styles.faq}>
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
                <p>{overlayPlansCard("faq->heading")}</p>
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
                <Question
                  initialActiveState={true}
                  question='What exactly does "Unlimited Design Tasks" mean?'
                  answer={
                    <>
                      At LYERZ, we do not charge by hours or projects.
                      <br />
                      <br />
                      Once you have chosen a design subscription, you can set as
                      many tasks as you like. These will be processed by your
                      personal designer one after the other.
                    </>
                  }
                />
                <Question
                  question="What counts as a Design Task?"
                  answer={
                    <>
                      Our team at LYERZ can handle any type of design job: big
                      or small. So, you might be wondering: What counts as one
                      design task? Need a presentation, flyer, landing page, or
                      some ads? Just tell us what you want through your personal
                      dashboard and we'll get it done in under 48 hours!
                      <br />
                      <br />
                      Have a bigger project, like a whole new website, an app,
                      or branding guidelines? These typically take more time and
                      planning, so we can break them down into smaller tasks and
                      make sure everything looks great. For example if we're
                      talking about Branding Guidelines, to achieve a result
                      that truly represents your brand and fits with your
                      vision, we deliver the guidelines step by step & one task
                      at a time with a turnaround of 48 hours as usual ( Logo,
                      Typography, Illustrations, etc. ).
                      <br />
                      <br />
                      Have more questions? Contact us at hi@lyerz.io. We can
                      make your design ideas a reality, big or small. Let's put
                      an end to design stress and create something magical
                      together!
                    </>
                  }
                />
                <Question
                  question="I am not satisfied with the design. How many revisions can I request?"
                  answer={
                    <>
                      The first priority for us is that you are satisfied with
                      the final design. Whether it's a display banner, an icon
                      set or newsletter graphics.
                      <br />
                      <br />
                      Therefore, you can request unlimited revisions and always
                      communicate your change requests to your designer.
                    </>
                  }
                />
                <Question
                  question="When do I receive the first drafts?"
                  answer="Most designs will be delivered in under 48h. More complex tasks such as a landing page design we divide into partial deliverables. We will always keep you updated on the progress."
                />
                <Question
                  question="What types of designs can you realize?"
                  answer={
                    <>
                      You can find the list of our design services{" "}
                      <Link href="" className={styles.link}>
                        here
                      </Link>
                      .
                    </>
                  }
                />
                <Question
                  question="What types of designs are not part of my subscription?"
                  answer={
                    <>
                      We do not (yet) cover the following design services:
                      <br />
                      <br />
                      - 3D Visualizations
                      <br />- Animations
                    </>
                  }
                />
                <Question
                  question="What tools do you use to create designs?"
                  answer={
                    <>
                      We use the following programs to create the designs:
                      <br />
                      <br />
                      - Figma
                      <br />- Adobe Illustrator
                      <br />- Adobe Photoshop
                      <br />- Adobe Indesign
                    </>
                  }
                />
                <Question
                  question="In which formats do I receive the finished designs?"
                  answer={
                    <>
                      We usually provide the following formats of the final
                      designs to download:
                      <br />
                      <br />
                      - .jpg
                      <br />
                      - .png
                      <br />
                      - .pdf
                      <br />
                      - .svg
                      <br />
                      <br />
                      In addition, you can request the raw files:
                      <br />
                      <br />
                      -.psd
                      <br />
                      -.fig
                      <br />
                      -.ai
                      <br />
                      -.indd
                    </>
                  }
                />
                <Question
                  question="I would like to sign up for a subscription. How does the onboarding process work?"
                  answer={
                    <>
                      After you have decided to subscribe, we will conduct an
                      onboarding call to better understand your business and
                      your design needs. During the call, we'll also explain the
                      design process and upload your brand assets together.
                      <br />
                      <br />
                      We'll then match you with a designer from our team and
                      you'll be given access to your design dashboard, where you
                      can get started right away with your first briefing.
                    </>
                  }
                />
                <Question
                  question="I am not satisfied with my designer. Can I switch to another designer?"
                  answer="Should it be the case that you're not happy with the style of your designer, you can always change your personal designer, without a hassle."
                />
                <Question
                  question="Is it possible to pause my subscription?"
                  answer="Yes, you can pause your subscription at any time for the following month."
                />
                <Question
                  question="Who creates the designs?"
                  answer={
                    <>
                      Our remote design team is located worldwide, as good
                      designers are not only found in the hot spots like Berlin,
                      London and Paris.
                      <br />
                      <br />
                      To ensure the highest quality standards, all designers
                      complete a 4-stage selection process, with 3% of
                      applicants being accepted at the end.
                    </>
                  }
                />
                <Question
                  question="Can I invite multiple team members to use LYERZ at the same time?"
                  answer="Yes, you can invite as many team members as you want. Team members can set individual tasks or work together on design tasks."
                />
                <Question
                  question="Can I cancel my subscription monthly?"
                  answer="Yes, we do not have long contract periods. Your subscription will be renewed every month and you can cancel it 7 days before the end of the payment cycle."
                />
                <Question
                  question="Which payment options do you offer?"
                  answer="You can pay LYERZ by credit card, PayPal, direct debit or bank transfer."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
