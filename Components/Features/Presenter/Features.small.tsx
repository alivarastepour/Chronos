import { inter } from "@/public/util/Fonts";
import styles from "@/styles/Features/features.small.module.scss";
import Image from "next/image";
import image_0 from "@/public/image_0.webp";
import image_1 from "@/public/image_1.webp";
import image_2 from "@/public/image_2.webp";
import image_3 from "@/public/image_3.webp";
import image_4 from "@/public/image_4.webp";
import image_5 from "@/public/image_5.webp";
import { data, getData } from "../data/data";
const FeaturesSmall = () => {
  const images = [
    { src: image_0, id: "0", alt: "task management image" },
    { src: image_1, id: "1", alt: "project management image" },
    { src: image_2, id: "2", alt: "meetings image" },
    { src: image_3, id: "3", alt: "on boarding image" },
    { src: image_4, id: "4", alt: "shared resources image" },
    { src: image_5, id: "5", alt: "brainstorming image" },
  ];

  const content = getData(["id", "content"]);

  return (
    <>
      <div
        className={`${styles["features-small-container"]} ${inter.className}`}
      >
        <div className={styles["features-small-title"]}>
          exprience our reach platforms
        </div>
        <div className={styles["features-small-wrapper"]}>
          <div className={styles["features-small-image-wrapper"]}>
            {images.map((image) => {
              const { src, id, alt } = image;
              return (
                <div key={id}>
                  <Image src={src} alt={alt} />
                </div>
              );
            })}
          </div>
          <div className={styles["features-small-content-wrapper"]}>
            <div className={styles["features-small-arrow-rotate"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 11 20"
                className={styles["svg-arrow"]}
              >
                <path
                  fill="currentColor"
                  d="M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413"
                ></path>
              </svg>
            </div>
            <div className={styles["features-small-content-container"]}>
              {content.map((item) => {
                const { id, content } = item;
                return <div key={id}>{content}</div>;
              })}
            </div>
            <div className={styles["features-small-arrow-norotate"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 11 20"
                className={styles["svg-arrow"]}
              >
                <path
                  fill="currentColor"
                  d="M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesSmall;
