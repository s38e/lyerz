import Image from "next/image";
import styles from "./styles/NavBar.module.css";
import React from "react";
import logo_1 from "../../../public/assets/logo_1.svg";

function NavBar() {
  return (
    <nav className={styles.NavBar}>
      <Image src={logo_1} alt="Lyerz Logo" width={100} height={100} />
    </nav>
  );
}

export default NavBar;
