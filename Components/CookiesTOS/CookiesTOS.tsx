import styles from "@/styles/CookiesTOS/cookiesTOS.module.scss";
import { inter } from "@/public/Fonts";

const CookiesTOS: React.FC = () => {
  return (
    <>
      <div className={`${styles["cookie-container"]} ${inter.className}`}>
        <div className={styles["cookie-header"]}>everyone loves a cookie</div>
        <div className={styles["cookie-body"]}>
          <div className={styles["cookie-text"]}>
            We use cookies and other tracking technologies to improve your
            browsing experience on our website, to show you personalized content
            and targeted ads, to analyze our website traffic, and to understand
            where our visitors are coming from.
          </div>
          <div className={styles["cookie-action"]}>
            <div>consent</div>
            <div>use minimum cookies</div>
            <div>don't use cookies</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiesTOS;
