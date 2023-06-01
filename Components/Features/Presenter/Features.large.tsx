import styles from "@/styles/Features/features.large.module.scss";
import { inter } from "@/public/util/Fonts";
import { data } from "../data/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import { handleChangeContent } from "../utill/changeOnClick";

const imageLoader = (content: number) => {
  return `/image_${content}.webp`;
};

const getCounterClassName = (id: number, content: number): string => {
  if (content == id - 1) {
    return "features-large-counter-active";
  }
  return "features-large-counter-deactive";
};

const FeaturesLarge = () => {
  const [content, setContent]: [number, Function] = useState(0);

  useEffect(() => {
    handleChangeContent(setContent);
  }, []);

  return (
    <>
      <div
        className={`${styles["features-large-container"]} ${inter.className}`}
      >
        <div className={styles["features-large-title"]}>
          exprience our reach platforms
        </div>
        <div id="features-wrapper" className={styles["features-large-wrapper"]}>
          <div id="features-header" className={styles["features-large-header"]}>
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
          <div className={styles["features-large-content"]}>
            <div className={styles["features-large-image-container"]}>
              <Image
                src="/image_0.webp"
                className={styles["features-large-image"]}
                alt="features-large-image"
                loader={() => imageLoader(content)}
                width={500}
                height={500}
                quality={100}
              />
            </div>
            <div className={styles["features-large-explaination"]}>
              {data[content].content}
            </div>
            <div
              id="features-counter"
              className={styles["features-large-counter"]}
            >
              <div
                id="features-counter-1"
                className={getCounterClassName(1, content)}
              ></div>
              <div
                id="features-counter-2"
                className={getCounterClassName(2, content)}
              ></div>
              <div
                id="features-counter-3"
                className={getCounterClassName(3, content)}
              ></div>
              <div
                id="features-counter-4"
                className={getCounterClassName(4, content)}
              ></div>
              <div
                id="features-counter-5"
                className={getCounterClassName(5, content)}
              ></div>
              <div
                id="features-counter-6"
                className={getCounterClassName(6, content)}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesLarge;
