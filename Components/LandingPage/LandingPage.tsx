import styles from "@/styles/LandingPage/landingPage.module.scss";
import { inter } from "@/public/Fonts";

import Benefits from "../Benefits/Benefits";
import Overview from "../Overview/Overview";

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
      <Overview />

      <Benefits />
    </>
  );
};
export default LandingPage;
