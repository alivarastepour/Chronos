import { inter } from "@/public/Fonts";
import styles from "@/styles/Trust/trust.module.scss";

const Trust = () => {
  return (
    <>
      <div className={styles["trust-wrapper"]}>
        <div className={`${styles["trust-container-1"]} ${inter.className}`}>
          <div className={`${styles["trust-item"]} ${styles["item-1"]}`}>
            <div className={styles["trust-content"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, quibusdam. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Odit atque dicta consequatur? Excepturi culpa,
              vel inventore odit amet voluptatibus repellat doloribus ab tempora
              similique id. Corrupti vero magni perspiciatis ut.
            </div>
            <div className={styles["trust-quote"]}>- neil patrick harris</div>
          </div>
          <div className={`${styles["trust-item"]} ${styles["item-2"]}`}>
            <div className={styles["trust-content"]}>
              dolor sit amet consectetur adipisicing elit. Nam et architecto
              fugit est voluptatum iure ducimus velit repellat incidunt
              reprehenderit.
            </div>
            <div className={styles["trust-quote"]}>- jason sagal</div>
          </div>
          <div className={`${styles["trust-item"]} ${styles["item-3"]}`}>
            <div className={styles["trust-content"]}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              excepturi nostrum assumenda odit fugit non! Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Nisi, possimus. Lorem ipsum
            </div>
            <div className={styles["trust-quote"]}>- rhea seahorn</div>
          </div>
        </div>
        <div className={`${styles["trust-item"]} ${styles["item-4"]}`}></div>
        <div className={`${styles["trust-item"]} ${styles["item-5"]}`}></div>
        <div className={`${styles["trust-item"]} ${styles["item-6"]}`}></div>
        <div className={`${styles["trust-item"]} ${styles["item-7"]}`}></div>
      </div>
    </>
  );
};

export default Trust;
