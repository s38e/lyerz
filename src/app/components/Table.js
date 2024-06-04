import React from "react";
import styles from "./styles/Table.module.css";
import Logo from "/public/assets/logo_4_round.svg";
import True from "/public/assets/true_2.svg";
import Image from "next/image";

function Table() {
  return (
    <div className={styles.table}>
      <div className={styles.left}>
        <p style={{ opacity: 0 }}>space</p>
        <p>Pricing</p>
        <p>Unlimited tasks</p>
        <p>Unlimited revisions</p>
        <p>Pre-qualified designers</p>
        <p>Time to start</p>
        <p>Processing time</p>
      </div>
      <div className={styles.right}>
        <div className={styles.header}>
          <div className={styles.lyerz}>
            <p>
              LYERZ<span>TM</span>
            </p>
          </div>
          <h2>Freelancer</h2>
          <h2>Agencies</h2>
        </div>
        <div className={styles.cols}>
          <div className={styles.col}>
            <div>Fixed monthly price</div>
            <div>
              <Image src={True} alt="True" />
            </div>
            <div>
              <Image src={True} alt="True" />
            </div>
            <div>
              <Image src={True} alt="True" />
            </div>
            <div>2 days</div>
            <div>48h</div>
          </div>
          <div className={styles.col}>
            <div>Per task</div>
            <div>-</div>
            <div>-</div>
            <div>-</div>
            <div>2+ weeks</div>
            <div>Several weeks</div>
          </div>
          <div className={styles.col}>
            <div>Per task</div>
            <div>-</div>
            <div>-</div>
            <div>
              <Image src={True} alt="True" />
            </div>
            <div>4+ weeks</div>
            <div>Several weeks</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
