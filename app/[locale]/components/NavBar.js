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
          Home
        </Link>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/" className={styles.btn}>
          Demo
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
