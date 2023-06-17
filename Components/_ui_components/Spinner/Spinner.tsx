import styles from "@/styles/Spinner/spinner.module.scss";

const Spinner = () => {
  return (
    <>
      <div className={styles["spinner-wrapper"]}>
        <div className={styles["spinner-flex-container"]}>
          <div className={styles["spinner-item-container"]}>
            <div
              className={`${styles["spinner-item-1"]} ${styles["spinner-item"]}`}
            ></div>
            <div
              className={`${styles["spinner-item-2"]} ${styles["spinner-item"]}`}
            ></div>
            <div
              className={`${styles["spinner-item-3"]} ${styles["spinner-item"]}`}
            ></div>
            <div
              className={`${styles["spinner-item-4"]} ${styles["spinner-item"]}`}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spinner;
