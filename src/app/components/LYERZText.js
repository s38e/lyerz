import React from "react";
import styles from "./styles/LYERZText.module.css";

function LYERZText({
  font_size_LYERZ,
  font_weight_LYERZ,
  font_size_TM,
  Color,
}) {
  return (
    <p
      className={styles.lyerz}
      data-font-size={font_size_LYERZ}
      data-font-weight={font_weight_LYERZ}
      data-color={Color}
    >
      LYERZ
      <span
        className={styles.tm}
        data-font-size={font_size_TM}
        data-color={Color}
      >
        TM
      </span>
    </p>
  );
}

export default LYERZText;
