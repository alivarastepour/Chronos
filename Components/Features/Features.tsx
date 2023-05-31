import styles from "@/styles/Features/features.module.scss";
import { inter } from "@/public/util/Fonts";
import { data } from "./data/data";
import { useEffect, useState } from "react";
import { handleChangeContent } from "./utill/changeOnClick";
import Image from "next/image";
import useMediaQuery from "../Hooks/useMediaQuery";

const imageLoader = (content: number) => {
  return `/image_${content}.webp`;
};

const getCounterClassName = (id: number, content: number): string => {
  if (content == id - 1) {
    return "features-counter-active";
  }
  return "features-counter-deactive";
};

const Features: React.FC = () => {
  const [content, setContent]: [number, Function] = useState(0);

  useEffect(() => {
    handleChangeContent(setContent);
  }, []);
  return (
    <>
      <div className={`${styles["features-container"]} ${inter.className}`}>
        <div className={styles["features-title"]}>
          exprience our reach platforms
        </div>
        <div id="features-wrapper" className={styles["features-wrapper"]}>
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
            <div id="features-counter" className={styles["features-counter"]}>
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

export default Features;
