import Image from "next/image";
import styles from "./styles/NavBar.module.css";
import React, { useEffect } from "react";
import logo_4_round from "../../../public/assets/logo_4_round.svg";
import gsap from "gsap";
import Link from "next/link";

function NavBar() {
  useEffect(() => {
    // ---------------- Animation HeadTexts ---------------- //
    gsap.fromTo(
      `.${styles.NavBar} a`,
      { opacity: 0, y: -100 },
      { opacity: 1, delay: 0.3, y: 0, duration: 1.25, ease: "power4.out" }
    );
  }, []);

  return (
    <nav className={styles.NavBar}>
      <Link href="/">
        <Image src={logo_4_round} alt="Lyerz Logo" width={100} height={100} />
        <p>
          <span className={styles.span}>
            LYERZ<span>TM</span>
          </span>
        </p>
      </Link>
    </nav>
  );
}

export default NavBar;
