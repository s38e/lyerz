import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo_2 from "../../../public/assets/logo_2.svg";
import styles from "./styles/Footer.module.css";
import Link from "next/link";

function Footer() {
  const [isActive, setIsActive] = useState(false);
  const [menuHeight, setMenuHeight] = useState(56);
  const [linkHovered, setLinkHovered] = useState(null);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  const handleButtonMouseLeave = () => {
    setIsActive(false);
  };

  const handleLinkHover = (index) => {
    setLinkHovered(index);
  };

  const handleLinkLeave = () => {
    setLinkHovered(null);
  };

  useEffect(() => {
    const links = document.querySelectorAll(`.${styles.menu} .${styles.link}`);
    const linkHeight = links[0].offsetHeight;
    const newMenuHeight = linkHeight * links.length + 32;
    setMenuHeight(newMenuHeight);
  }, []);

  return (
    <footer className={styles.Footer}>
      <button
        className={isActive ? styles.active : ""}
        onClick={handleButtonClick}
        onMouseLeave={handleButtonMouseLeave}
      >
        <menu
          className={styles.menu}
          style={{ height: isActive ? `${menuHeight}px` : 56 }}
        >
          <div
            className={`${styles.backGroundLink} ${
              linkHovered !== null ? styles[`link${linkHovered + 1}`] : ""
            }`}
          ></div>
          <Link
            className={styles.link}
            href=""
            onMouseEnter={() => handleLinkHover(0)}
            onMouseLeave={handleLinkLeave}
          >
            Work
          </Link>
          <Link
            className={styles.link}
            href=""
            onMouseEnter={() => handleLinkHover(1)}
            onMouseLeave={handleLinkLeave}
          >
            Services
          </Link>
          <Link
            className={styles.link}
            href=""
            onMouseEnter={() => handleLinkHover(2)}
            onMouseLeave={handleLinkLeave}
          >
            About
          </Link>
          <Link
            className={styles.link}
            href=""
            onMouseEnter={() => handleLinkHover(3)}
            onMouseLeave={handleLinkLeave}
          >
            Plans
          </Link>
          <Link
            className={styles.link}
            href=""
            onMouseEnter={() => handleLinkHover(4)}
            onMouseLeave={handleLinkLeave}
          >
            Login
          </Link>
        </menu>
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
