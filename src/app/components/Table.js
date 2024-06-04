import React from "react";
import styles from "./styles/Table.module.css";
import Logo from "/public/assets/logo_4_round.svg";
import True from "/public/assets/true_2.svg";
import Image from "next/image";

function Table() {
  return (
    <div className={styles.table}>
      <div className={styles.header}>
        <div></div>
        <div className={styles.lyerz}>
          <p>
            LYERZ<span>TM</span>
          </p>
        </div>
        <h2>Freelancer</h2>
        <h2>Agencies</h2>
      </div>
      <div className={styles.row}>
        <p>Pricing</p>
        <div>monthly price</div>
        <div>Per task</div>
        <div>Per task</div>
      </div>
      <div className={styles.row}>
        <p>Unlimited tasks</p>
        <div>
          <Image src={True} alt="True" />
        </div>
        <div>-</div>
        <div>-</div>
      </div>
      <div className={styles.row}>
        <p>Unlimited revisions</p>
        <div>
          <Image src={True} alt="True" />
        </div>
        <div>-</div>
        <div>-</div>
      </div>
      <div className={styles.row}>
        <p>Pre-qualified designers</p>
        <div>
          <Image src={True} alt="True" />
        </div>
        <div>-</div>
        <div>
          <Image src={True} alt="True" />
        </div>
      </div>
      <div className={styles.row}>
        <p>Time to start</p>
        <div>2 days</div>
        <div>2+ weeks</div>
        <div>4+ weeks</div>
      </div>
      <div className={styles.row}>
        <p>Processing time</p>
        <div>48h</div>
        <div>Several weeks</div>
        <div>Several weeks</div>
      </div>
    </div>
  );
}

export default Table;
