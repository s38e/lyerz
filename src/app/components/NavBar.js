import Image from "next/image";
import styles from "./styles/NavBar.module.css";
import React from "react";

function NavBar() {
  return (
    <nav className={styles.NavBar}>
      <Image src="/assets/logo.png" alt="Lyerz Logo" width={100} height={100} />
    </nav>
  );
}

export default NavBar;
