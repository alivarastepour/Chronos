import styles from "@/styles/Features/features.module.scss";
import { inter } from "@/public/Fonts";
import { data } from "./data/data";
import { useEffect, useState } from "react";
import { changeOnClick } from "./utill/changeOnClick";
import Image from "next/image";

const imageLoader = (content: number) => {
  return `/image_${content}.webp`;
};

const Features: React.FC = () => {
  const [content, setContent]: [number, Function] = useState(0);

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
            <div className={styles["features-image-container"]}>
              <Image
                src="/image_0.webp"
                className={styles["features-image"]}
                alt="features-image"
                loader={() => imageLoader(content)}
                width={500}
                height={500}
                quality={100}
              />
            </div>
            <div className={styles["features-explaination"]}>
              {data[content].content}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
