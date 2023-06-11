import styles from "@/styles/Spinner/spinner.module.scss";

const Spinner = () => {
  return (
    <>
      <div className={styles["spinner-wrapper"]}>
        <div
          className={`${styles["spinner-item-1"]} ${styles["spinner-item"]}`}
        ></div>
        <div
          className={`${styles["spinner-item-2"]} ${styles["spinner-item"]}`}
        ></div>
      </div>
    </>
  );
};

export default Spinner;
