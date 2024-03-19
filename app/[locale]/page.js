"use client";
import styles from "../page.module.css";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import Image from "next/image";
import NavBar from "./components/NavBar";
import Logo from "@/public/assets/logo.png";
import img01 from "@/public/assets/img01.jpg";
import img02 from "@/public/assets/img02.png";
import img03 from "@/public/assets/img03.webp";
import img04 from "@/public/assets/img04.webp";
import img05 from "@/public/assets/img05.webp";
import img06 from "@/public/assets/img06.jpg";
import img07 from "@/public/assets/img07.png";
import img08 from "@/public/assets/img08.webp";
import img09 from "@/public/assets/img09.webp";
import ImageCallCard from "@/public/assets/ImageCallCard.png";
import section_2ImageBall from "@/public/assets/section_2ImageBall.png";
import Footer from "./components/Footer";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { useEffect, useState } from "react";
import anime from "animejs/lib/anime.es.js";

gsap.registerPlugin(ScrollTrigger);

const locales = ["ar", "en"];
const { Link, useRouter, usePathname, redirect } =
  createSharedPathnamesNavigation({ locales });

// export async function generateMetadata() {
//   const t = await getTranslations("HomePage");
//   return {
//     title: t("tab-title-home"),
//   };
// }

export default function Home() {
  useEffect(() => {
    // document.title = t("tab-title-home");
    // ----------- Smooth Scroll ----------- //
    const lenis = new Lenis({
      duration: 1.2,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    // ----------- Transform Slider ----------- //
    gsap.to(`.${styles.recentWork}`, {
      x: 300,
      duration: 1,
      scrollTrigger: {
        trigger: `.${styles.sliders}`,
        scrub: 1,
        start: "top 60%",
        end: "bottom 0%",
        toggleActions: "play none none none",
        // markers: true,
      },
    });
    // ----------- Active Panel ----------- //
    const tab_1 = document.querySelector(`.${styles.switch}:nth-child(1)`);
    const tab_2 = document.querySelector(`.${styles.switch}:nth-child(2)`);
    const tab_3 = document.querySelector(`.${styles.switch}:nth-child(3)`);
    const panel_1 = document.querySelector(`.${styles.body}:nth-child(2)`);
    const panel_2 = document.querySelector(`.${styles.body}:nth-child(3)`);
    const panel_3 = document.querySelector(`.${styles.body}:nth-child(4)`);

    const fadeIn = anime({
      targets: [panel_1, panel_2, panel_3],
      opacity: [0, 1],
      duration: 500,
      easing: "easeInOutQuad",
      autoplay: false,
    });

    const fadeOut = anime({
      targets: [panel_1, panel_2, panel_3],
      opacity: 0,
      duration: 500,
      easing: "easeInOutQuad",
      autoplay: false,
      complete: function (anim) {
        if (anim.targets) {
          anim.targets.forEach((target) => {
            target.style.display = "none";
          });
        }
      },
    });

    panel_1.style.display = "flex";
    fadeIn.play();

    tab_1.addEventListener("click", () => {
      fadeOut.play();
      panel_1.style.display = "flex";
      panel_2.style.display = "none";
      panel_3.style.display = "none";
      fadeIn.play();
    });

    tab_2.addEventListener("click", () => {
      fadeOut.play();
      panel_1.style.display = "none";
      panel_2.style.display = "flex";
      panel_3.style.display = "none";
      fadeIn.play();
    });

    tab_3.addEventListener("click", () => {
      fadeOut.play();
      panel_1.style.display = "none";
      panel_2.style.display = "none";
      panel_3.style.display = "flex";
      fadeIn.play();
    });
  }, []);
  // ----------- Active Tab ----------- //

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    updateButtonStyles(tabIndex);
  };

  const updateButtonStyles = (activeIndex) => {
    const buttons = document.querySelectorAll(`.${styles.switch}`);
    buttons.forEach((button, index) => {
      if (index + 1 === activeIndex) {
        button.classList.add(styles.active);
      } else {
        button.classList.remove(styles.active);
      }
    });
  };
  // ----------- handleQuestionClick ----------- //
  const [activeIndex, setActiveIndex] = useState(null);
  const questions = [
    {
      question: "Why wouldn't I just hire a full-time designer?",
      answer: (
        <>
          Good question! For starters, the annual cost of a full-time
          senior-level designer now exceeds $100,000, plus benefits (and good
          luck finding one available). Aside from that, you may not always have
          enough work to keep them busy at all times, so you're stuck paying for
          time you aren't able to utilize.
          <br />
          <br />
          With the monthly plan, you can pause and resume your subscription as
          often as you need to ensure you're only paying your designer when you
          have work available for them.
        </>
      ),
    },
    {
      question: "Is there a limit to how many requests I can have?",
      answer:
        "Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one.",
    },
    {
      question: "How fast will I receive my designs?",
      answer:
        "On average, most requests are completed in just two days or less. However, more complex requests can take longer.",
    },
    {
      question: "Who are the designers?",
      answer:
        "You might be surprised to hear this, but Designjoy is actually an agency of one. This means you'll work directly with me, founder of Designjoy. However, power-ups requests such as animations or custom illustrations are provided by partner designers.",
    },
    {
      question: "How does the pause feature work?",
      answer: (
        <>
          We understand you may not have enough design work to fill up entire
          month. Perhaps you only have one or two design requests at the moment.
          That's where pausing your subscription comes in handy.
          <br />
          <br />
          Billing cycles are based on 31 day period. Let's say you sign up and
          use the service for 21 days, and then decide to pause your
          subscription. This means that the billing cycle will be paused and
          you'll have 10 days of service remaining to be used anytime in the
          future.
        </>
      ),
    },
    {
      question: "What programs do you design in?",
      answer: "Most requests are designed using Figma.",
    },
  ];
  const handleQuestionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const Points = (
    <>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
    </>
  );
  // const t = useTranslations("Heading");
  return (
    <>
      <NavBar />
      <page className={styles.page}>
        <section
          className={`${styles.heroSection} ${styles.section}`}
        ></section>
        <section className={`${styles.section_1} ${styles.section}`}>
          <div className={styles.heading}>
            <Image src={Logo} alt="logo" />
            <h1>Recent Work</h1>
          </div>
          <div className={styles.sliders}>
            <div className={styles.recentWork}>
              <div className={styles.recentWork_slide}>
                <Image src={img01} alt="img01" />
                <Image src={img02} alt="img02" />
                <Image src={img03} alt="img03" />
                <Image src={img04} alt="img04" />
                <Image src={img05} alt="img05" />
                <Image src={img06} alt="img06" />
                <Image src={img07} alt="img07" />
                <Image src={img08} alt="img08" />
                <Image src={img09} alt="img09" />
              </div>
              <div className={styles.recentWork_slide}>
                <Image src={img01} alt="img01" />
                <Image src={img02} alt="img02" />
                <Image src={img03} alt="img03" />
                <Image src={img04} alt="img04" />
                <Image src={img05} alt="img05" />
                <Image src={img06} alt="img06" />
                <Image src={img07} alt="img07" />
                <Image src={img08} alt="img08" />
                <Image src={img09} alt="img09" />
              </div>
              <div className={styles.recentWork_slide}>
                <Image src={img09} alt="img09" />
                <Image src={img08} alt="img08" />
                <Image src={img07} alt="img07" />
                <Image src={img06} alt="img06" />
                <Image src={img05} alt="img05" />
                <Image src={img04} alt="img04" />
                <Image src={img03} alt="img03" />
                <Image src={img02} alt="img02" />
                <Image src={img01} alt="img01" />
              </div>
            </div>
            <div className={styles.recentWork}>
              <div className={styles.recentWork_slide}>
                <Image src={img09} alt="img09" />
                <Image src={img08} alt="img08" />
                <Image src={img07} alt="img07" />
                <Image src={img06} alt="img06" />
                <Image src={img05} alt="img05" />
                <Image src={img04} alt="img04" />
                <Image src={img03} alt="img03" />
                <Image src={img02} alt="img02" />
                <Image src={img01} alt="img01" />
              </div>
              <div className={styles.recentWork_slide}>
                <Image src={img09} alt="img09" />
                <Image src={img08} alt="img08" />
                <Image src={img07} alt="img07" />
                <Image src={img06} alt="img06" />
                <Image src={img05} alt="img05" />
                <Image src={img04} alt="img04" />
                <Image src={img03} alt="img03" />
                <Image src={img02} alt="img02" />
                <Image src={img01} alt="img01" />
              </div>
              <div className={styles.recentWork_slide}>
                <Image src={img09} alt="img09" />
                <Image src={img08} alt="img08" />
                <Image src={img07} alt="img07" />
                <Image src={img06} alt="img06" />
                <Image src={img05} alt="img05" />
                <Image src={img04} alt="img04" />
                <Image src={img03} alt="img03" />
                <Image src={img02} alt="img02" />
                <Image src={img01} alt="img01" />
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.section_2} ${styles.section}`}>
          <h1 className={styles.heading}>
            Websites, Web apps, Webflow
            <br /> and ... you name it
          </h1>
          <div className={styles.sliderServices}>
            <div className={styles.your_business}>
              <div className={styles.Image}>
                <Image src={section_2ImageBall} alt="section_2ImageBall" />
                <p>Your business</p>
              </div>
              <div className={styles.slider_your_business}>
                <div className={styles.slide}>{Points}</div>
                <div className={styles.slide}>{Points}</div>
              </div>
            </div>
            <div className={styles.sliderServices_slide}>
              <div className={styles.logo}>
                <Image src={Logo} alt="logo" />
              </div>
              <div className={styles.backGround}>
                <div className={styles.slide}>
                  <p>Logos</p>
                  <span className={styles.dot}>•</span>
                  <p>Packaging</p>
                  <span className={styles.dot}>•</span>
                  <p>Social media</p>
                  <span className={styles.dot}>•</span>
                  <p>Mobile apps</p>
                  <span className={styles.dot}>•</span>
                  <p>Branding</p>
                  <span className={styles.dot}>•</span>
                  <p>Billboards</p>
                  <span className={styles.dot}>•</span>
                  <p>Logos</p>
                  <span className={styles.dot}>•</span>
                  <p>Packaging</p>
                  <span className={styles.dot}>•</span>
                  <p>Social media</p>
                  <span className={styles.dot}>•</span>
                  <p>Mobile apps</p>
                  <span className={styles.dot}>•</span>
                  <p>Branding</p>
                  <span className={styles.dot}>•</span>
                  <p>Billboards</p>
                  <span className={styles.dot}>•</span>
                </div>
                <div className={styles.slide}>
                  <p>Logos</p>
                  <span className={styles.dot}>•</span>
                  <p>Packaging</p>
                  <span className={styles.dot}>•</span>
                  <p>Social media</p>
                  <span className={styles.dot}>•</span>
                  <p>Mobile apps</p>
                  <span className={styles.dot}>•</span>
                  <p>Branding</p>
                  <span className={styles.dot}>•</span>
                  <p>Billboards</p>
                  <span className={styles.dot}>•</span>
                  <p>Logos</p>
                  <span className={styles.dot}>•</span>
                  <p>Packaging</p>
                  <span className={styles.dot}>•</span>
                  <p>Social media</p>
                  <span className={styles.dot}>•</span>
                  <p>Mobile apps</p>
                  <span className={styles.dot}>•</span>
                  <p>Branding</p>
                  <span className={styles.dot}>•</span>
                  <p>Billboards</p>
                  <span className={styles.dot}>•</span>
                </div>
                <div className={styles.slide}>
                  <p>Logos</p>
                  <span className={styles.dot}>•</span>
                  <p>Packaging</p>
                  <span className={styles.dot}>•</span>
                  <p>Social media</p>
                  <span className={styles.dot}>•</span>
                  <p>Mobile apps</p>
                  <span className={styles.dot}>•</span>
                  <p>Branding</p>
                  <span className={styles.dot}>•</span>
                  <p>Billboards</p>
                  <span className={styles.dot}>•</span>
                  <p>Logos</p>
                  <span className={styles.dot}>•</span>
                  <p>Packaging</p>
                  <span className={styles.dot}>•</span>
                  <p>Social media</p>
                  <span className={styles.dot}>•</span>
                  <p>Mobile apps</p>
                  <span className={styles.dot}>•</span>
                  <p>Branding</p>
                  <span className={styles.dot}>•</span>
                  <p>Billboards</p>
                  <span className={styles.dot}>•</span>
                </div>
                <div className={styles.slide}>
                  <p>Logos</p>
                  <span className={styles.dot}>•</span>
                  <p>Packaging</p>
                  <span className={styles.dot}>•</span>
                  <p>Social media</p>
                  <span className={styles.dot}>•</span>
                  <p>Mobile apps</p>
                  <span className={styles.dot}>•</span>
                  <p>Branding</p>
                  <span className={styles.dot}>•</span>
                  <p>Billboards</p>
                  <span className={styles.dot}>•</span>
                  <p>Logos</p>
                  <span className={styles.dot}>•</span>
                  <p>Packaging</p>
                  <span className={styles.dot}>•</span>
                  <p>Social media</p>
                  <span className={styles.dot}>•</span>
                  <p>Mobile apps</p>
                  <span className={styles.dot}>•</span>
                  <p>Branding</p>
                  <span className={styles.dot}>•</span>
                  <p>Billboards</p>
                  <span className={styles.dot}>•</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.section_3} ${styles.section}`}>
          <div className={styles.left}>
            {/* <Image src={Logo} alt="logo" className={styles.overlayImage} /> */}
            <div className={styles.top}>
              <div className={styles.available_bell}>
                <div className={styles.circle}></div>
                <p>Slots available</p>
              </div>
              <h1 className={styles.headText}>Join Lyerz</h1>
            </div>
            <div className={styles.bottom}>
              <div className={styles.btn}>
                <Link href="/">
                  <div className={styles.texts}>
                    <h5>Book a 15-min intro call</h5>
                    <p>
                      Learn more about how DesignJoy works and how it can help
                      you.
                    </p>
                  </div>
                  <svg
                    width="21"
                    height="17"
                    viewBox="0 0 21 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.08049 8.16093L20.9124 8.16093C17.342 8.16093 12.2414 6.1207 12.2414 0"
                      stroke="#FF90E7"
                      stroke-width="0.995828"
                    />
                    <path
                      d="M0.000167847 8.16084L20.9126 8.16084C17.3422 8.16084 12.2416 10.2011 12.2416 16.3218"
                      stroke="#FF90E7"
                      stroke-width="0.995828"
                    />
                  </svg>
                </Link>
              </div>
              <div className={styles.btn}>
                <Link href="/">
                  <div className={styles.texts}>
                    <h5>Refer a friend & earn</h5>
                    <p>
                      Earn 5% monthly recurring commissions for each referral.
                    </p>
                  </div>
                  <svg
                    width="21"
                    height="17"
                    viewBox="0 0 21 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.08049 8.16093L20.9124 8.16093C17.342 8.16093 12.2414 6.1207 12.2414 0"
                      stroke="#FF90E7"
                      stroke-width="0.995828"
                    />
                    <path
                      d="M0.000167847 8.16084L20.9126 8.16084C17.3422 8.16084 12.2416 10.2011 12.2416 16.3218"
                      stroke="#FF90E7"
                      stroke-width="0.995828"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.plan}>
              <div className={styles.head}>
                <h4>Membership</h4>
                <div
                  className={styles.switchs}
                  role="taplist"
                  aria-label="tabs"
                >
                  <button
                    role="tab"
                    aria-selected={activeTab === 1 ? "true" : "false"}
                    aria-controls="panel-1"
                    id="tab-1"
                    tabIndex="0"
                    className={`${styles.switch} ${
                      activeTab === 1 ? styles.active : ""
                    }`}
                    onClick={() => handleTabClick(1)}
                  >
                    Go
                  </button>
                  <button
                    role="tab"
                    aria-selected={activeTab === 2 ? "true" : "false"}
                    aria-controls="panel-2"
                    id="tab-2"
                    tabIndex="-1"
                    className={`${styles.switch} ${
                      activeTab === 2 ? styles.active : ""
                    }`}
                    onClick={() => handleTabClick(2)}
                  >
                    Startup
                  </button>
                  <button
                    role="tab"
                    aria-selected={activeTab === 3 ? "true" : "false"}
                    aria-controls="panel-3"
                    id="tab-3"
                    tabIndex="-1"
                    className={`${styles.switch} ${
                      activeTab === 3 ? styles.active : ""
                    }`}
                    onClick={() => handleTabClick(3)}
                  >
                    Pro
                  </button>
                </div>
              </div>
              <div className={styles.body} role="tabpanel" id={styles.panel_1}>
                <div className={styles.saliry}>
                  <h5>
                    $XXXX<span>/m</span>
                  </h5>
                  <p>
                    <span>one request at a time.</span> pause or cancel anytime.
                  </p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.bottom}>
                  <h5>What&apos;s included</h5>
                  <div className={styles.advantages}>
                    <p>▪ one request at a time</p>
                    <p>▪ average 3 days delivery</p>
                    <p>▪ unlimited brands</p>
                    <p>▪ unlimited users</p>
                    <p>▪ dashboard or slack</p>
                    <p>▪ easy credit-card payments</p>
                    <p>▪ pause or cancel anytime</p>
                  </div>
                  <button className={styles.btn}>Get started</button>
                </div>
              </div>
              <div className={styles.body} role="tabpanel" id={styles.panel_2}>
                <div className={styles.saliry}>
                  <h5>
                    $XXXX<span>/m</span>
                  </h5>
                  <p>
                    <span>2 requests at a time.</span> pause or cancel anytime.
                  </p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.bottom}>
                  <h5>What&apos;s included</h5>
                  <div className={styles.advantages}>
                    <p>▪ two requests at a time</p>
                    <p>▪ average 48 hour delivery</p>
                    <p>▪ unlimited brands</p>
                    <p>▪ unlimited users</p>
                    <p>▪ dashboard or slack</p>
                    <p>▪ easy credit-card payments</p>
                    <p>▪ pause or cancel anytime</p>
                  </div>
                  <button className={styles.btn}>Get started</button>
                </div>
              </div>
              <div className={styles.body} role="tabpanel" id={styles.panel_3}>
                <div className={styles.saliry}>
                  <h5>
                    $XXXX<span>/m</span>
                  </h5>
                  <p>
                    <span>3 requests at a time.</span> pause or cancel anytime.
                  </p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.bottom}>
                  <h5>What&apos;s included</h5>
                  <div className={styles.advantages}>
                    <p>▪ 3 requests at a time</p>
                    <p>▪ average 48 hour delivery</p>
                    <p>▪ unlimited brands</p>
                    <p>▪ unlimited users</p>
                    <p>▪ dashboard or slack</p>
                    <p>▪ easy credit-card payments</p>
                    <p>▪ pause or cancel anytime</p>
                  </div>
                  <button className={styles.btn}>Get started</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.section_4} ${styles.section}`}>
          <div className={styles.left}>
            <h1 className={styles.head}>Commonly asked questions</h1>
            <div className={styles.questions}>
              {questions.map((item, index) => (
                <button
                  key={index}
                  className={`${styles.question_item} ${
                    activeIndex === index ? styles.active : ""
                  }`}
                  onClick={() => handleQuestionClick(index)}
                >
                  <div className={styles.question_head}>
                    <h5 className={styles.question}>{item.question}</h5>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_18_34026)">
                        <path
                          d="M6 9.75017C5.65 9.75017 5.35 9.60017 5.15 9.35017L0.200001 3.75017C-0.15 3.35017 -0.0999985 2.75017 0.300001 2.45017C0.700001 2.15017 1.25 2.15017 1.6 2.55017L5.9 7.45017C5.95 7.50017 6 7.50017 6.1 7.45017L10.4 2.55017C10.75 2.15017 11.35 2.15017 11.7 2.50017C12.05 2.85017 12.1 3.40017 11.8 3.80017L6.9 9.40017C6.65 9.60017 6.35 9.75017 6 9.75017Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_18_34026">
                          <rect
                            width="12"
                            height="12"
                            fill="white"
                            transform="translate(12) rotate(90)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className={styles.question_answer}>
                    <p>{item.answer}</p>
                  </div>
                  {/* <div className={styles.line}></div> */}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <Image src={ImageCallCard} alt="ImageCallCard" />
            <h4>Book a 15-minute intro call</h4>
            <button className={styles.btn}>Schedule now</button>
          </div>
        </section>
      </page>
      <Footer />
    </>
  );
}
