import styles from "@/styles/Features/features.module.scss";
import { inter } from "@/public/Fonts";
const Features: React.FC = () => {
  return (
    <>
      <div className={`${styles["features-wrapper"]} ${inter.className}`}>
        <div className={styles["features-header"]}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </div>
        <div className={styles["features-content"]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          repudiandae harum repellendus perspiciatis veniam ea quas quaerat
          dignissimos eligendi ipsa consequatur, ratione doloribus commodi
          suscipit. Provident inventore illo officiis perspiciatis?
        </div>
      </div>
    </>
  );
};

export default Features;
