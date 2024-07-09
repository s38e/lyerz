"use client";
import Image from "next/image";
import styles from "../page.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import img_3_work from "/public/assets/img_3_work.webp";
import SERVICES_Branding from "/public/assets/SERVICES-Branding.png";
import SERVICES_Graphic from "/public/assets/SERVICES-Graphic.png";
import SERVICES_Ui from "/public/assets/SERVICES-Ui.png";
import webflowIcon from "/public/assets/webflow-icon.webp";
import About_1 from "/public/assets/About_1.jpg";
import About_2 from "/public/assets/About_2.jpg";
import About_3 from "/public/assets/About_3.jpg";
import About_4 from "/public/assets/About_4.jpg";
import About_5 from "/public/assets/About_5.jpg";
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
  const t = useTranslations("HomeCards");
  const tags = useTranslations("plan_tag");
  const ServicesCards = useTranslations("servicesCards");
  const overlayWorkCard = useTranslations("overlayWorkCard");
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
                </span>{" "}
                <br />
                <span>{t("our_partners_span_2")}</span>{" "}
                {t("our_partners_part_2")}
              </h2>
            </div>
            <div className={styles.title}>
              <span>
                {t("header_3")}
                <p>{t("absoluteTitle_1")}</p>
                <Image src={Arrow} alt="Arrow" />
              </span>
              <div className={styles.ourPartners}>
                <InfiniteScroll />
                <div className={styles.plus}>{t("you")}</div>
                <div className={styles.hint}>
                  <p>
                    {t("absoluteTitle_2_part_1")}
                    <br />
                    {t("absoluteTitle_2_part_2")}
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
            <Image src={Work_13} alt="Image Work Card" />
          </div>
          <div className={styles.image}>
            <div className={styles.overlay}></div>
            <Image src={Work_03} alt="Image Work Card" />
          </div>
          <div className={styles.image}>
            <div className={styles.overlay}></div>
            <Image src={img_3_work} alt="Image Work Card" />
          </div>
          <div className={styles.image}>
            <div className={styles.overlay}></div>
            <Image src={Work_14} alt="Image Work Card" />
          </div>
        </div>
        {/* ---------------- Cards Services Card ---------------- */}
        <div
          className={`${styles.cardsServicesCard} ${
            isCardServicesHovered ? styles.active : ""
          }`}
        >
          <div className={styles.card}>
            <p>{ServicesCards("card_1")}</p>
            <Image src={SERVICES_Branding} alt="Image Services Card" />
          </div>
          <div className={styles.card}>
            <p>{ServicesCards("card_2")}</p>
            <Image src={SERVICES_Graphic} alt="Image Services Card" />
          </div>
          <div className={styles.card}>
            <p>{ServicesCards("card_3")}</p>
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
            <Image src={About_1} alt="Image About Card" />
          </div>
          <div className={styles.image}>
            <Image src={About_2} alt="Image About Card" />
          </div>
          <div className={styles.image}>
            <Image src={About_3} alt="Image About Card" />
          </div>
          <div className={styles.image}>
            <Image src={About_4} alt="Image About Card" />
          </div>
          <div className={styles.image}>
            <Image src={About_5} alt="Image About Card" />
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
            <ImageWorkCardOverlay
              url={Work_01}
              tag={overlayWorkCard("Branding")}
            />
            <ImageWorkCardOverlay
              url={Work_02}
              tag={overlayWorkCard("Branding")}
            />
            <ImageWorkCardOverlay
              url={Work_03}
              tag={overlayWorkCard("Branding")}
            />
            <ImageWorkCardOverlay
              url={Work_04}
              tag={overlayWorkCard("Branding")}
            />
            <ImageWorkCardOverlay
              url={Work_05}
              tag={overlayWorkCard("Branding")}
            />
            <ImageWorkCardOverlay
              url={Work_06}
              tag={overlayWorkCard("Branding")}
            />
            <ImageWorkCardOverlay
              url={Work_07}
              tag={overlayWorkCard("Branding_Stratgy")}
            />
            <ImageWorkCardOverlay
              url={Work_08}
              tag={overlayWorkCard("Branding_Social")}
            />
            <ImageWorkCardOverlay
              url={Work_09}
              tag={overlayWorkCard("User_Interface")}
            />
            <ImageWorkCardOverlay
              url={Work_10}
              tag={overlayWorkCard("User_Interface")}
            />
            <ImageWorkCardOverlay
              url={Work_11}
              tag={overlayWorkCard("User_Interface_Branding")}
            />
            <ImageWorkCardOverlay
              url={Work_12}
              tag={overlayWorkCard("User_Interface_Branding")}
            />
            <ImageWorkCardOverlay
              url={Work_13}
              tag={overlayWorkCard("User_Interface_Branding")}
            />
            <ImageWorkCardOverlay
              url={Work_14}
              tag={overlayWorkCard("User_Interface_Branding_Stratgy")}
            />
            <ImageWorkCardOverlay
              url={Work_15}
              tag={overlayWorkCard("User_Interface_Branding_Stratgy")}
            />
            <ImageWorkCardOverlay
              url={Work_16}
              tag={overlayWorkCard("User_Interface_Branding_Stratgy")}
            />
            <ImageWorkCardOverlay
              url={Work_17}
              tag={overlayWorkCard("Game_Design_User_Interface_Branding")}
            />
            <ImageWorkCardOverlay url={Work_LAST} initialActiveState={true} />
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
              <h2>{overlayAboutCard("Our_Mission")}</h2>
              <p>
                <span>{overlayAboutCard("Our_Mission_p_1")}</span>
                <br />
                <span>{overlayAboutCard("Our_Mission_p_2")}</span>
                <br />
                <span>{overlayAboutCard("Our_Mission_p_3")}</span>
                <br />
                <span>{overlayAboutCard("Our_Mission_p_4")}</span>
                <br />
                <span>{overlayAboutCard("Our_Mission_p_5")}</span>
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
                {overlayPlansCard("One_Subscription")}
                <br />
                {overlayPlansCard("All_design_needs")}
              </p>
              <p>{overlayPlansCard("headText_p")}</p>
            </div>
            <div className={styles.checkList}>
              <div className={styles.heading}>
                <p>{overlayPlansCard("Checklist")}</p>
              </div>
              <div className={styles.content}>
                <div className={styles.item}>
                  <Image
                    className={styles.imgAbout}
                    src={starInOverlayAbout}
                    alt="starInOverlayAbout"
                  />
                  <p>{overlayPlansCard("Checklist_item_p_1")}</p>
                </div>
                <div className={styles.item}>
                  <Image
                    className={styles.imgAbout}
                    src={starInOverlayAbout}
                    alt="starInOverlayAbout"
                  />
                  <p>{overlayPlansCard("Checklist_item_p_2")}</p>
                </div>
                <div className={styles.item}>
                  <Image
                    className={styles.imgAbout}
                    src={starInOverlayAbout}
                    alt="starInOverlayAbout"
                  />
                  <p>{overlayPlansCard("Checklist_item_p_3")}</p>
                </div>
              </div>
            </div>
            <h2>{overlayPlansCard("Membership")}</h2>
            <div className={styles.plans}>
              <div className={styles.joinLYERZPlan}>
                <JoinLYERZPlan />
              </div>
              <TowPlans />
              <div className={styles.customPlan}>
                <span className={styles.tag}>
                  {overlayPlansCard("customPlan_tag")}
                </span>
                <div className={styles.head}>
                  <h2>{overlayPlansCard("customPlan_Custom")}</h2>
                  <p>{overlayPlansCard("customPlan_p")}</p>
                </div>
                <div
                  className={styles.btn}
                  data-cal-namespace=""
                  data-cal-link="lyerz/space"
                  data-cal-config='{"layout":"month_view"}'
                >
                  {overlayPlansCard("Book_a_coll")}
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
                  question={overlayPlansCard("Question_1_question")}
                  answer={
                    <>
                      {overlayPlansCard("Question_1_answer_part_1")}
                      <br />
                      <br />
                      {overlayPlansCard("Question_1_answer_part_2")}
                    </>
                  }
                />
                <Question
                  question={overlayPlansCard("Question_2_question")}
                  answer={
                    <>
                      {overlayPlansCard("Question_2_answer_part_1")}
                      <br />
                      <br />
                      {overlayPlansCard("Question_2_answer_part_2")}
                      <br />
                      <br />
                      {overlayPlansCard("Question_2_answer_part_3")}
                    </>
                  }
                />
                <Question
                  question={overlayPlansCard("Question_3_question")}
                  answer={
                    <>
                      {overlayPlansCard("Question_3_answer_part_1")}
                      <br />
                      <br />
                      {overlayPlansCard("Question_3_answer_part_2")}
                    </>
                  }
                />
                <Question
                  question={overlayPlansCard("Question_4_question")}
                  answer={overlayPlansCard("Question_4_answer")}
                />
                <Question
                  question={overlayPlansCard("Question_5_question")}
                  answer={
                    <>
                      {overlayPlansCard("Question_5_answer_part_1")}{" "}
                      <Link href="" className={styles.link}>
                        {overlayPlansCard("Question_5_answer_part_2")}
                      </Link>
                    </>
                  }
                />
                <Question
                  question={overlayPlansCard("Question_6_question")}
                  answer={
                    <>
                      {overlayPlansCard("Question_6_answer_part_1")}
                      <br />
                      <br />
                      {overlayPlansCard("Question_6_answer_part_2")}
                      <br />
                      {overlayPlansCard("Question_6_answer_part_3")}
                    </>
                  }
                />
                <Question
                  question={overlayPlansCard("Question_7_question")}
                  answer={
                    <>
                      {overlayPlansCard("Question_7_answer_part_1")}
                      <br />
                      <br />
                      {overlayPlansCard("Question_7_answer_part_2")}
                      <br />
                      {overlayPlansCard("Question_7_answer_part_3")}
                      <br />
                      {overlayPlansCard("Question_7_answer_part_4")}
                      <br />
                      {overlayPlansCard("Question_7_answer_part_5")}
                    </>
                  }
                />
                <Question
                  question={overlayPlansCard("Question_8_question")}
                  answer={
                    <>
                      {overlayPlansCard("Question_8_answer_part_1")}
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
                      {overlayPlansCard("Question_8_answer_part_2")}
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
                  question={overlayPlansCard("Question_9_question")}
                  answer={
                    <>
                      {overlayPlansCard("Question_9_answer_part_1")}
                      <br />
                      <br />
                      {overlayPlansCard("Question_9_answer_part_2")}
                    </>
                  }
                />
                <Question
                  question={overlayPlansCard("Question_10_question")}
                  answer={overlayPlansCard("Question_10_answer")}
                />
                <Question
                  question={overlayPlansCard("Question_11_question")}
                  answer={overlayPlansCard("Question_11_answer")}
                />
                <Question
                  question={overlayPlansCard("Question_12_question")}
                  answer={
                    <>
                      {overlayPlansCard("Question_12_answer_part_1")}
                      <br />
                      <br />
                      {overlayPlansCard("Question_12_answer_part_2")}
                    </>
                  }
                />
                <Question
                  question={overlayPlansCard("Question_13_question")}
                  answer={overlayPlansCard("Question_13_answer")}
                />
                <Question
                  question={overlayPlansCard("Question_14_question")}
                  answer={overlayPlansCard("Question_14_answer")}
                />
                <Question
                  question={overlayPlansCard("Question_15_question")}
                  answer={overlayPlansCard("Question_15_answer")}
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
          {t("Close")}
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
    </main>
  );
}

export default HomePage;
