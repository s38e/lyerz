import styles from "./styles/navbar.module.css";
import Logo from "@/public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={Logo} alt="logo" />
      </div>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          About
        </Link>
        <Link href="/" className={styles.link}>
          Portfolio
        </Link>
        <Link href="/" className={styles.link}>
          Content
        </Link>
        <Link href="/" className={styles.btn}>
          Book a demo
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
