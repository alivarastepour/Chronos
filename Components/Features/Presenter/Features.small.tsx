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
            {content.map((item) => {
              const { id, content } = item;
              return <div key={id}>{content}</div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesSmall;
