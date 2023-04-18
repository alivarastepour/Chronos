import styles from "@/styles/LandingPage/landingPage.module.scss";
import { Inter } from "@next/font/google";
import Benefits from "../Benefits/Benefits";
import { NextFont } from "@next/font";

const inter: NextFont = Inter({ subsets: ["latin"], weight: ["300"] });

const LandingPage: React.FC = () => {
  return (
    <>
      <div className={`${styles["landing-title-container"]} `}>
        <div className={`${styles["landing-title"]} ${inter.className}`}>
          Chronos
        </div>
      </div>
      <div className={styles["landing-subtitle-container"]}>
        <div className={`${styles["landing-subtitle"]} ${inter.className}`}>
          Manage Your Time Like You Are The God Of It
        </div>
      </div>
      <div className={styles["benefits-container"]}>
        <Benefits />
      </div>
    </>
  );
};
export default LandingPage;
