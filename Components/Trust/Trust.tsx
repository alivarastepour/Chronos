import { inter } from "@/public/Fonts";
import styles from "@/styles/Trust/trust.module.scss";

const Trust = () => {
  return (
    <>
      <div className={styles["trust-container"]}>
        {/* <div cl></div> */}
        <div className={`${styles["trust-item"]} ${styles["grow-1"]}`}>1</div>
        <div className={`${styles["trust-item"]} ${styles["grow-2"]}`}>2</div>
        <div className={styles["trust-item"]}>3</div>
        <div className={`${styles["trust-item"]} ${styles["grow-4"]}`}>4</div>
        <div className={`${styles["trust-item"]} ${styles["grow-5"]}`}>5</div>
        <div className={`${styles["trust-item"]} ${styles["grow-6"]}`}>6</div>
        <div className={styles["trust-item"]}>7</div>
      </div>
    </>
  );
};

export default Trust;
