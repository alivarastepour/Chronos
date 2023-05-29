import { inter } from "@/public/util/Fonts";
import styles from "@/styles/Trust/trust.module.scss";
import { handleHoverStyles } from "./util/hoverStyles";
import { createRef, useEffect } from "react";
import useRadialGradientOnHover from "../Hooks/useRadialGrediantOnHover";

const Trust = () => {
  const refs = Array.from({ length: 5 }, () => createRef<any>());

  useRadialGradientOnHover({
    elements: refs,
    colorShade: {
      dark: "#424059, #191825e6, #191825e6, #191825e6",
      light: "#ffe5e51a, #ffe5e5, #ffe5e5, #ffe5e5",
    },
  });

  useEffect(() => {
    handleHoverStyles();
  }, []);
  return (
    <>
      <div className={styles["trust-wrapper"]}>
        <div
          className={`${styles["quote-item-wrapper"]} ${styles["quote-item-start"]}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"
            />
          </svg>
        </div>
        <div
          className={`${styles["trust-container"]} ${styles["trust-container-1"]} ${inter.className}`}
        >
          <div
            ref={refs[0]}
            id="trust-item-1"
            className={`trust-default-theme ${styles["trust-item"]} ${styles["item-1"]}`}
          >
            <div className={styles["trust-content"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, quibusdam. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Odit atque dicta consequatur? Excepturi culpa,
              vel inventore odit amet voluptatibus repellat doloribus ab tempora
              similique id. Corrupti vero magni perspiciatis ut.
            </div>
            <div className={styles["trust-quote"]}>- neil patrick harris</div>
          </div>
          <div
            id="trust-item-2"
            ref={refs[1]}
            className={`trust-default-theme ${styles["trust-item"]} ${styles["item-2"]}`}
          >
            <div className={styles["trust-content"]}>
              dolor sit amet consectetur adipisicing elit. Nam et architecto
              fugit est voluptatum iure ducimus velit repellat incidunt
              reprehenderit.
            </div>
            <div className={styles["trust-quote"]}>- jason sagal</div>
          </div>
          <div
            id="trust-item-3"
            ref={refs[2]}
            className={`trust-default-theme ${styles["trust-item"]} ${styles["item-3"]}`}
          >
            <div className={styles["trust-content"]}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              excepturi nostrum assumenda odit fugit non! Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Nisi, possimus. Lorem ipsum
            </div>
            <div className={styles["trust-quote"]}>- rhea seahorn</div>
          </div>
        </div>
        <div
          className={`${styles["trust-container"]} ${styles["trust-container-2"]} ${inter.className}`}
        >
          <div
            id="trust-item-4"
            ref={refs[3]}
            className={`trust-default-theme ${styles["trust-item"]} ${styles["item-4"]}`}
          >
            <div className={styles["trust-content"]}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium iure ex optio error similique accusamus, deleniti
              repellat. A, laboriosam laborum.
            </div>
            <div className={styles["trust-quote"]}>- rhea seahorn</div>
          </div>
          <div
            id="trust-item-5"
            ref={refs[4]}
            className={`trust-default-theme ${styles["trust-item"]} ${styles["item-5"]}`}
          >
            <div className={styles["trust-content"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              temporibus magni deserunt impedit. Facere veniam harum enim magnam
              at in quisquam possimus unde fugiat corporis. Qui molestias nemo
              neque. Assumenda dicta nisi laudantium quisquam voluptatum quia
              adipisci accusamus quam ipsam tempora? Laborum inventore nulla
              quam perspiciatis deleniti, accusamus ducimus ullam placeat esse
              maiores doloremque consequatur similique iste! Consequuntur, ipsam
              sapiente!``
            </div>
            <div className={styles["trust-quote"]}>- rhea seahorn</div>
          </div>
        </div>
        <div
          className={`${styles["quote-item-wrapper"]} ${styles["quote-item-end"]}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Trust;
