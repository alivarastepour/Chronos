import Card from "../Card/Card";
import styles from "@/styles/Benefits/benefits.module.scss";
import { inter } from "@/public/Fonts";
const Benefits: React.FC = () => {
  return (
    <>
      <div className={`${styles["benefits-container"]} ${inter.className}`}>
        <div className={styles["benefits-title"]}>
          Lorem ipsum dolor sit, amet consectetur.
        </div>
        <div className={styles["benefits-content"]}>
          <div className={styles["x"]}>
            <div>
              1Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corrupti saepe excepturi inventore. Sed, adipisci reiciendis?
              Tempore, asperiores, nobis itaque totam quis possimus repellat
              alias quasi
            </div>
            <div>
              2Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corrupti saepe excepturi inventore. Sed, adipisci reiciendis?
              Tempore, asperiores, nobis itaque totam quis possimus repellat
              alias quasi
            </div>
            <div>
              3Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corrupti saepe excepturi inventore. Sed, adipisci reiciendis?
              Tempore, asperiores, nobis itaque totam quis possimus repellat
              alias quasi
            </div>
            <div>
              4Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corrupti saepe excepturi inventore. Sed, adipisci reiciendis?
              Tempore, asperiores, nobis itaque totam quis possimus repellat
              alias quasi
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Benefits;
