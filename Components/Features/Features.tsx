import styles from "@/styles/Features/features.module.scss";
import { inter } from "@/public/Fonts";
import { data } from "./data/data";
import { useEffect, useState } from "react";
import { changeOnClick } from "./utill/changeOnClick";
const Features: React.FC = () => {
  const [content, setContent] = useState(0);
  useEffect(() => {
    changeOnClick(setContent);
  }, []);
  return (
    <>
      <div className={`${styles["features-container"]} ${inter.className}`}>
        <div className={styles["features-title"]}>
          exprience our reach platforms
        </div>
        <div className={styles["features-wrapper"]}>
          <div id="features-header" className={styles["features-header"]}>
            {data.map((item) => {
              return (
                <div
                  className={item.className}
                  id={`feature-header-${item.id}`}
                  key={item.id}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className={styles["features-content"]}>
            {data[content].content}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
