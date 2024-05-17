import Image from "next/image";
import styles from "./styles/NavBar.module.css";
import React, { useEffect } from "react";
import logo_4_round from "../../../public/assets/logo_4_round.svg";
import gsap from "gsap";

function NavBar() {
  useEffect(() => {
    // ---------------- Animation HeadTexts ---------------- //
    gsap.fromTo(
      `.${styles.NavBar} img`,
      { opacity: 0, y: -100 },
      { opacity: 1, delay: 0.5, y: 0, duration: 1.25, ease: "power4.out" }
    );
  }, []);

  return (
    <nav className={styles.NavBar}>
      <Image src={logo_4_round} alt="Lyerz Logo" width={100} height={100} />
    </nav>
  );
}

export default NavBar;
