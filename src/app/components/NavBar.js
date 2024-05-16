import Image from "next/image";
import styles from "./styles/NavBar.module.css";
import React from "react";
import logo_4_round from "../../../public/assets/logo_4_round.svg";

function NavBar() {
  return (
    <nav className={styles.NavBar}>
      <Image src={logo_4_round} alt="Lyerz Logo" width={100} height={100} />
    </nav>
  );
}

export default NavBar;
