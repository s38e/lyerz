import Image from "next/image";
import React from "react";
import logo_2 from "../../../public/assets/logo_2.svg";
import styles from "./styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.Footer}>
      <button>
        <div className={styles.image}>
          <Image src={logo_2} alt="Lyerz Logo" width={100} height={100} />
        </div>
        <span>Menu</span>
      </button>
      <p>
        *Disclaimer: We design for your users,
        <br />
        not just for you.
      </p>
    </footer>
  );
}

export default Footer;
