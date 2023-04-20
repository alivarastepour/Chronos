import styles from "@/styles/Overview/overview.module.scss";
import { inter } from "@/public/Fonts";
import HeroImage from "@/public/TrelloUICollage_4x.webp";
import Image from "next/image";
const Overview: React.FC = () => {
  return (
    <>
      <div className={styles["overview-container"]}>
        <div className={`${styles["left-overview"]} ${inter.className}`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt impedit
          dolorem, perferendis nam dolorum fuga velit! Nisi, corrupti? Est,
          minus!
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
