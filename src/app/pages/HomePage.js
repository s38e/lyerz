"use client";
import Image from "next/image";
import styles from "../page.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import img_1_work from "/public/assets/img_1_work.webp";
import img_2_work from "/public/assets/img_2_work.webp";
import img_3_work from "/public/assets/img_3_work.webp";
import img_4_work from "/public/assets/img_4_work.webp";
import SERVICES_Branding from "/public/assets/SERVICES-Branding.png";
import SERVICES_Graphic from "/public/assets/SERVICES-Graphic.png";
import SERVICES_Ui from "/public/assets/SERVICES-Ui.png";
import webflowIcon from "/public/assets/webflow-icon.webp";
import img_1_about from "/public/assets/img_1_about.webp";
import img_2_about from "/public/assets/img_2_about.webp";
import img_3_about from "/public/assets/img_3_about.webp";
import img_4_about from "/public/assets/img_4_about.webp";
import img_5_about from "/public/assets/img_5_about.webp";
import Work_01 from "/public/assets/1. Branding.png";
import Work_02 from "/public/assets/2. Branding.png";
import Work_03 from "/public/assets/9. Branding.png";
import Work_04 from "/public/assets/10. Branding.png";
import Work_05 from "/public/assets/11. Branding.png";
import Work_06 from "/public/assets/17 .Branding.png";
import Work_07 from "/public/assets/7. Branding - Stratgy.png";
import Work_08 from "/public/assets/3. Branding - Social Media Design.png";
import Work_09 from "/public/assets/12. User Interface.png";
import Work_10 from "/public/assets/16. User Interface.png";
import Work_11 from "/public/assets/13. User Interface - Branding.png";
import Work_12 from "/public/assets/14. User Interface - Branding.png";
import Work_13 from "/public/assets/15. User Interface - Branding.png";
import Work_14 from "/public/assets/4. User Interface - Branding - Stratgy.png";
import Work_15 from "/public/assets/5. User Interface - Branding - Stratgy.png";
import Work_16 from "/public/assets/6. User Interface - Branding - Stratgy.png";
import Work_17 from "/public/assets/8. Game Design - User Interface - Branding.png";
import Work_LAST from "/public/assets/18. LAST.png";
import CardInOverlayAbout from "/src/app/components/cardInOverlayAbout";
import Unlimited_Tasks from "/public/assets/Unlimited-Tasks.svg";
import Fast_Results from "/public/assets/Fast-Results.svg";
import Fixed_Monthly_Subscription from "/public/assets/Fixed-Monthly-Subscription.svg";
import Excellent_Design_Quality from "/public/assets/Excellent-Design-Quality.svg";
import Create_WOW from "/public/assets/Create-WOW.svg";
import Own_It from "/public/assets/Own-It.svg";
import imgInOverlayAbout from "/public/assets/imgInOverlayAbout.svg";
import starInOverlayAbout from "/public/assets/starInOverlayAbout.svg";
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
import Question from "../components/Question";
import InfiniteScroll from "../components/InfiniteScroll";
import JoinLYERZPlan from "../components/joinLYERZPlan";
import Table from "../components/Table";
import TowPlans from "../components/TowPlans";
import LyerzSpace from "../components/LyerzSpace";
import ImageWorkCardOverlay from "../components/ImageWorkCardOverlay";
import gsap from "gsap";
import { getLangDir } from "rtl-detect";
import FooterStyles from "../components/styles/Footer.module.css";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import anime from "animejs/lib/anime.es.js";
import { getCalApi } from "@calcom/embed-react";

function HomePage() {
  const [isCloseAnyOverlayActive, setIsCloseAnyOverlayActive] = useState(false);
  const [isLyerzSpaceActive, setIsLyerzSpaceActive] = useState(false);
  const [isChoice_1_Active, setIsChoice_1_Active] = useState(true);
  const [isChoice_2_Active, setIsChoice_2_Active] = useState(false);
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
  //
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  //
  useEffect(() => {
    const Footer = document.querySelector(`.${FooterStyles.Footer}`);
    if (!isMobile) {
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
    }
    if (isMobile) {
      if (
        isCardWorkClicked ||
        isCardServicesClicked ||
        isCardAboutClicked ||
        isCardPlansClicked
      ) {
        Footer.style.gap = "0rem";
      } else {
        Footer.style.gap = "1rem";
      }
    }
    if (
      isCardWorkClicked ||
      isCardServicesClicked ||
      isCardAboutClicked ||
      isCardPlansClicked
    ) {
      setIsCloseAnyOverlayActive(true);
    } else {
      setIsCloseAnyOverlayActive(false);
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
    const headTexts_h2_1 = document.querySelector(
      `.${styles.HeroSection} .${styles.hero_content} .${styles.headTexts} .${styles.heading} h2:nth-child(1)`
    );
    const headTexts_h2_2 = document.querySelector(
      `.${styles.HeroSection} .${styles.hero_content} .${styles.headTexts} .${styles.heading} h2:nth-child(2)`
    );
    const headTexts_P_1 = document.querySelector(
      `.${styles.HeroSection} .${styles.hero_content} .${styles.headTexts} .${styles.title} span:nth-child(1)`
    );
    const OurPartners = document.querySelector(
      `.${styles.HeroSection} .${styles.hero_content} .${styles.headTexts} .${styles.title} .${styles.ourPartners}`
    );

    WorkCard.addEventListener("mouseover", () => {
      setIsCardWorkHovered(true);
      //---------------------------------------
      OurPartners.style.opacity = "1";
      headTexts_P_1.style.opacity = "0";
      headTexts_h2_2.style.opacity = "1";
      headTexts_h2_1.style.opacity = "0";
      //---------------------------------------
      headTexts_P_1.style.transitionDelay = "0s";
      OurPartners.style.transitionDelay = "0.3s";
      headTexts_h2_1.style.transitionDelay = "0s";
      headTexts_h2_2.style.transitionDelay = "0.3s";
    });

    WorkCard.addEventListener("mouseout", () => {
      setIsCardWorkHovered(false);
      //---------------------------------------
      OurPartners.style.opacity = "0";
      headTexts_P_1.style.opacity = "1";
      headTexts_h2_2.style.opacity = "0";
      headTexts_h2_1.style.opacity = "1";
      //---------------------------------------
      headTexts_P_1.style.transitionDelay = "0.3s";
      OurPartners.style.transitionDelay = "0s";
      headTexts_h2_1.style.transitionDelay = "0.3s";
      headTexts_h2_2.style.transitionDelay = "0s";
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
  }, [
    isCardWorkClicked,
    isCardServicesClicked,
    isCardAboutClicked,
    isCardPlansClicked,
  ]);
  // ---------------- Animations ---------------- //
  useEffect(() => {
    // ---------------- Animation HeadTexts ---------------- //
    gsap.fromTo(
      `.${styles.HeroSection} .${styles.hero_content} .${styles.headTexts} .${styles.heading}`,
      { opacity: 0, y: 100 },
      { opacity: 1, delay: 0.4, y: 0, duration: 1.25, ease: "power4.out" }
    );
    gsap.fromTo(
      `.${styles.HeroSection} .${styles.hero_content} .${styles.headTexts} .${styles.title}`,
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
    // ---------------- Click Choice ---------------- //
    //   const plan_1 = document.querySelector(
    //     `.${styles.twoPlan} .${styles.plan_1}`
    //   );
    //   const plan_2 = document.querySelector(
    //     `.${styles.twoPlan} .${styles.plan_2}`
    //   );

    //   const fadeIn = anime({
    //     targets: [plan_1, plan_2],
    //     opacity: [0, 1],
    //     duration: 250,
    //     easing: "easeInOutQuad",
    //     autoplay: false,
    //   });

    //   const fadeOut = anime({
    //     targets: [plan_1, plan_2],
    //     opacity: 0,
    //     duration: 250,
    //     easing: "easeInOutQuad",
    //     autoplay: false,
    //     complete: function (anim) {
    //       if (anim.targets) {
    //         anim.targets.forEach((target) => {
    //           target.style.display = "none";
    //         });
    //       }
    //     },
    //   });

    //   plan_1.style.display = "flex";
    //   plan_2.style.display = "none";
    //   fadeIn.play();

    //   const handleChoice_1_Click = () => {
    //     setIsChoice_1_Active(true);
    //     setIsChoice_2_Active(false);
    //     fadeOut.restart();
    //     fadeOut.finished.then(() => {
    //       plan_1.style.display = "flex";
    //       plan_2.style.display = "none";
    //       fadeIn.restart();
    //     });
    //   };

    //   const handleChoice_2_Click = () => {
    //     setIsChoice_1_Active(false);
    //     setIsChoice_2_Active(true);
    //     fadeOut.restart();
    //     fadeOut.finished.then(() => {
    //       plan_1.style.display = "none";
    //       plan_2.style.display = "flex";
    //       fadeIn.restart();
    //     });
    //   };

    //   window.handleChoice_1_Click = handleChoice_1_Click;
    //   window.handleChoice_2_Click = handleChoice_2_Click;
  }, []);

  // ---------------- Click Work Card ---------------- //
  const CloseAnyOverlay = () => {
    if (
      isCardWorkClicked ||
      isCardServicesClicked ||
      isCardAboutClicked ||
      isCardPlansClicked
    ) {
      setIsCardWorkClicked(false);
      setIsCardServicesClicked(false);
      setIsCardAboutClicked(false);
      setIsCardPlansClicked(false);
    }
  };

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
            <div className={styles.heading}>
              <h2>
                {t("header_1")} <br />
                <span>{t("header_2")}</span>
              </h2>
              <h2>
                {t("our_partners_part_1")}{" "}
                <span className={styles.lineThroughSpan}>
                  {t("our_partners_span_1")}
                </span>
                <br />
                <span>{t("our_partners_span_2")}</span>{" "}
                {t("our_partners_part_2")}
              </h2>
            </div>
            <div className={styles.title}>
              <span>
                {t("header_3")}
                <p>{t("absoluteTitle")}</p>
                <Image src={Arrow} alt="Arrow" />
              </span>
              <div className={styles.ourPartners}>
                <InfiniteScroll />
                <div className={styles.plus}>YOU!</div>
                <div className={styles.hint}>
                  <p>
                    Extend your team with a<br />
                    top designer today.
                  </p>
                  <Image src={Arrow} alt="Arrow" />
                </div>
              </div>
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
            </div>
            <button onClick={handleCardWorkClick} className={styles.card}>
              <Image src={card_work} alt="Image Card Work" />
              <p>{t("card_1")}</p>
            </button>
            <button onClick={handleCardServicesClick} className={styles.card}>
              <Image src={card_services} alt="Image Card Services" />
              <p>{t("card_2")}</p>
            </button>
            <button onClick={handleCardAboutClick} className={styles.card}>
              <Image src={card_about} alt="Image Card About" />
              <p>{t("card_3")}</p>
            </button>
            <button onClick={handleCardPlansClick} className={styles.card}>
              <Image src={card_plans} alt="Image Card Plans" />
              <p>{t("card_4")}</p>
              <div className={styles.status}>
                <div className={styles.live_indicator}>
                  <div className={styles.red_dot}></div>
                  <div className={`${styles.pulse} ${styles.one}`}></div>
                  <div className={`${styles.pulse} ${styles.tow}`}></div>
                </div>
                <p>{t("slots_available")}</p>
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
          {/* SERVICES_Branding SERVICES_Graphic SERVICES_Ui */}
          <div className={styles.card}>
            <p>
              {ServicesCards("card_1_part1")}
              <br />
              {ServicesCards("card_1_part2")}
            </p>
            <Image src={SERVICES_Branding} alt="Image Services Card" />
          </div>
          <div className={styles.card}>
            <p>
              {ServicesCards("card_2_part1")}
              <br />
              {ServicesCards("card_2_part2")}
            </p>
            <Image src={SERVICES_Graphic} alt="Image Services Card" />
          </div>
          <div className={styles.card}>
            <p>
              {ServicesCards("card_3_part1")} <br />
              {ServicesCards("card_3_part2")}
            </p>
            <Image src={SERVICES_Ui} alt="Image Services Card" />
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
          <div className={styles.container} onClick={handleContainerClick}>
            <ImageWorkCardOverlay url={Work_01} tag="Branding" />
            <ImageWorkCardOverlay url={Work_02} tag="Branding" />
            <ImageWorkCardOverlay url={Work_03} tag="Branding" />
            <ImageWorkCardOverlay url={Work_04} tag="Branding" />
            <ImageWorkCardOverlay url={Work_05} tag="Branding" />
            <ImageWorkCardOverlay url={Work_06} tag="Branding" />
            <ImageWorkCardOverlay url={Work_07} tag="Branding - Stratgy" />
            <ImageWorkCardOverlay
              url={Work_08}
              tag="Branding - Social Media Design"
            />
            <ImageWorkCardOverlay url={Work_09} tag="User Interface" />
            <ImageWorkCardOverlay url={Work_10} tag="User Interface" />
            <ImageWorkCardOverlay
              url={Work_11}
              tag="User Interface - Branding"
            />
            <ImageWorkCardOverlay
              url={Work_12}
              tag="User Interface - Branding"
            />
            <ImageWorkCardOverlay
              url={Work_13}
              tag="User Interface - Branding"
            />
            <ImageWorkCardOverlay
              url={Work_14}
              tag="User Interface - Branding - Stratgy"
            />
            <ImageWorkCardOverlay
              url={Work_15}
              tag="User Interface - Branding - Stratgy"
            />
            <ImageWorkCardOverlay
              url={Work_16}
              tag="User Interface - Branding - Stratgy"
            />
            <ImageWorkCardOverlay
              url={Work_17}
              tag="Game Design - User Interface - Branding"
            />
            <ImageWorkCardOverlay url={Work_LAST} tag="------ Finally ------" />
            <div></div>
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
          <div className={styles.container} onClick={handleContainerClick}>
            <div className={styles.head}>
              <h2>{overlayServicesCard("head->h2")}</h2>
              <p>{overlayServicesCard("head->p")}</p>
              <ul role="list">
                <li>{overlayServicesCard("head->li_1")}</li>
                <li>{overlayServicesCard("head->li_2")}</li>
              </ul>
            </div>
            <div className={styles.services}>
              {/*  */}
              <Service
                title={overlayServicesCard("Service_1_Title")}
                description={overlayServicesCard("Service_1_Description")}
                image={SERVICES_Ui}
                initialActiveState={true}
              />
              <Service
                title={overlayServicesCard("Service_2_Title")}
                description={overlayServicesCard("Service_2_Description")}
                image={SERVICES_Graphic}
                initialActiveState={false}
              />
              <Service
                title={overlayServicesCard("Service_3_Title")}
                description={overlayServicesCard("Service_3_Description")}
                image={SERVICES_Branding}
                initialActiveState={false}
              />
              {/*  */}
            </div>
            <Table />
            <JoinLYERZPlan />
            <div></div>
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
          <div className={styles.container} onClick={handleContainerClick}>
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
            <JoinLYERZPlan />
            <div></div>
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
          <div className={styles.container} onClick={handleContainerClick}>
            <div className={styles.headText}>
              <p>
                One Subscription.
                <br />
                All design needs
              </p>
              <p>Add a top designer to your team for a fixed monthly price.</p>
            </div>
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
                    You&#39;re in regular conversations with your users, and
                    their feedback directly shapes your product
                  </p>
                </div>
                <div className={styles.item}>
                  <Image
                    className={styles.imgAbout}
                    src={starInOverlayAbout}
                    alt="starInOverlayAbout"
                  />
                  <p>
                    Your goal isn&#39;t to mimic your competition, you&#39;re
                    aiming for something uniquely yours
                  </p>
                </div>
              </div>
            </div>
            <h2>{overlayPlansCard("h2")}</h2>
            <div className={styles.plans}>
              <div className={styles.joinLYERZPlan}>
                <JoinLYERZPlan />
              </div>
              <div className={styles.twoPlan}>
                <TowPlans />
              </div>
              <div className={styles.customPlan}>
                <span className={styles.tag}>Project based</span>
                <div className={styles.head}>
                  <h2>Custom</h2>
                  <p>Perfect for a bigger one-time thing.</p>
                </div>
                <div
                  className={styles.btn}
                  data-cal-namespace=""
                  data-cal-link="lyerz/space"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Book a coll
                </div>
              </div>
            </div>
            <div className={styles.faq}>
              <p className={styles.heading}>
                {overlayPlansCard("faq->heading")}
              </p>
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
                      dashboard and we&#39;ll get it done in under 48 hours!
                      <br />
                      <br />
                      Have a bigger project, like a whole new website, an app,
                      or branding guidelines? These typically take more time and
                      planning, so we can break them down into smaller tasks and
                      make sure everything looks great. For example if we&#39;re
                      talking about Branding Guidelines, to achieve a result
                      that truly represents your brand and fits with your
                      vision, we deliver the guidelines step by step & one task
                      at a time with a turnaround of 48 hours as usual ( Logo,
                      Typography, Illustrations, etc. ).
                      <br />
                      <br />
                      Have more questions? Contact us at hi@lyerz.com. We can
                      make your design ideas a reality, big or small. Let&#39;s
                      put an end to design stress and create something magical
                      together!
                    </>
                  }
                />
                <Question
                  question="I am not satisfied with the design. How many revisions can I request?"
                  answer={
                    <>
                      The first priority for us is that you are satisfied with
                      the final design. Whether it&#39;s a display banner, an
                      icon set or newsletter graphics.
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
                      your design needs. During the call, we&#39;ll also explain
                      the design process and upload your brand assets together.
                      <br />
                      <br />
                      We&#39;ll then match you with a designer from our team and
                      you&#39;ll be given access to your design dashboard, where
                      you can get started right away with your first briefing.
                    </>
                  }
                />
                <Question
                  question="I am not satisfied with my designer. Can I switch to another designer?"
                  answer={
                    <>
                      Should it be the case that you&#39;re not happy with the
                      style of your designer, you can always change your
                      personal designer, without a hassle.
                    </>
                  }
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
            <div></div>
          </div>
        </div>
        <div
          className={`${styles.btnCloseAnyOverlay} ${
            isCloseAnyOverlayActive ? styles.active : ""
          }`}
          onClick={CloseAnyOverlay}
        >
          Close
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </section>
      <div
        className={`${styles.lyerzSpace} ${
          isLyerzSpaceActive ? styles.active : ""
        }`}
      >
        <div
          className={styles.closeBtn}
          onClick={() => setIsLyerzSpaceActive(false)}
        >
          Close
        </div>
        <LyerzSpace />
      </div>
    </main>
  );
}

export default HomePage;
