import styles from "@/styles/LandingPage/landingPage.module.scss";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["200"] });

const LandingPage = () => {
  return (
    <>
      <div
        className={`${styles["landing-title-container"]} ${inter.className}`}
      >
        <div className={styles["landing-title"]}>Chronos</div>
      </div>
    </>
  );
};
export default LandingPage;
