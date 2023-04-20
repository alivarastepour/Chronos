import Image from "next/image";

import styles from "@/styles/Overview/overview.module.scss";
import { inter } from "@/public/Fonts";

import HeroImage from "@/public/TrelloUICollage_4x.webp";

const Overview: React.FC = () => {
  return (
    <>
      <div className={styles["overview-container"]}>
        <div className={`${styles["left-overview"]} ${inter.className}`}>
          <div className={`${styles["landing-title"]} ${inter.className}`}>
            Chronos
          </div>
          <div className={`${styles["landing-subtitle"]} ${inter.className}`}>
            Manage Your Time Like You Are The God Of It
          </div>
        </div>
        <div className={styles["right-overview"]}>
          <Image
            src={HeroImage}
            width={630}
            height={560}
            quality={100}
            placeholder="blur"
            alt="managing tasks"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Overview;
