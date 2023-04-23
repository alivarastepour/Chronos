import { useEffect } from "react";

import styles from "@/styles/Benefits/benefits.module.scss";
import { inter } from "@/public/Fonts";

import { intersectionHandler } from "./utill/transformHandler";

const Benefits: React.FC = () => {
  useEffect(() => {
    // return;
    const target: Element | null = document.querySelector("#benefit-container");
    if (target !== null) {
      const options: IntersectionObserverInit = {
        root: null,
        threshold: 1.0,
        rootMargin: "0px",
      };
      const intersectionOberver: IntersectionObserver =
        new IntersectionObserver(intersectionHandler, options);
      intersectionOberver.observe(target);
      () => {
        intersectionOberver.disconnect();
      };
    }
  }, []);

  return (
    <>
      <div
        id="benefit-container"
        className={`${styles["benefits-wrapper"]} ${inter.className}`}
      >
        <div className={styles["benefits-container"]}>
          <div className={styles["benefits-title"]}>
            <div
              id="benefits-title-container"
              className={styles["benefits-title-container"]}
            >
              <div id="current-title">
                1Lorem ipsum dolor sit, amet consectetur.
              </div>
              <div id="next-title">
                2Lorem ipsum dolor sit, amet consectetur.
              </div>
              <div>3Lorem ipsum dolor sit, amet consectetur.</div>
              <div>4Lorem ipsum dolor sit, amet consectetur.</div>
              <div>5Lorem ipsum dolor sit, amet consectetur.</div>
              <div>6Lorem ipsum dolor sit, amet consectetur.</div>
              <div>7Lorem ipsum dolor sit, amet consectetur.</div>
              <div>8Lorem ipsum dolor sit, amet consectetur.</div>
              <div>9Lorem ipsum dolor sit, amet consectetur.</div>
              <div>10Lorem ipsum dolor sit, amet consectetur.</div>
            </div>
          </div>
          <div className={styles["benefits-content"]}>
            <div
              id="benefits-content-container"
              className={styles["benefits-content-container"]}
            >
              <div id="current-content">
                1Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti saepe excepturi inventore. Sed, adipisci reiciendis?
                Tempore, asperiores, nobis itaque totam quis possimus repellat
                alias quasi
              </div>
              <div id="next-content">
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
              <div>
                5Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti saepe excepturi inventore. Sed, adipisci reiciendis?
                Tempore, asperiores, nobis itaque totam quis possimus repellat
                alias quasi
              </div>
              <div>
                6Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti saepe excepturi inventore. Sed, adipisci reiciendis?
                Tempore, asperiores, nobis itaque totam quis possimus repellat
                alias quasi
              </div>
              <div>
                7Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti saepe excepturi inventore. Sed, adipisci reiciendis?
                Tempore, asperiores, nobis itaque totam quis possimus repellat
                alias quasi
              </div>
              <div>
                8Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti saepe excepturi inventore. Sed, adipisci reiciendis?
                Tempore, asperiores, nobis itaque totam quis possimus repellat
                alias quasi
              </div>
              <div>
                9Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti saepe excepturi inventore. Sed, adipisci reiciendis?
                Tempore, asperiores, nobis itaque totam quis possimus repellat
                alias quasi
              </div>
              <div>
                10Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti saepe excepturi inventore. Sed, adipisci reiciendis?
                Tempore, asperiores, nobis itaque totam quis possimus repellat
                alias quasi
              </div>
            </div>
          </div>
        </div>
        <div className={styles["benefits-counter"]}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};
export default Benefits;
