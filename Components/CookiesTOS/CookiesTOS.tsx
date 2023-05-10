import styles from "@/styles/CookiesTOS/cookiesTOS.module.scss";
import { inter } from "@/public/Fonts";
import { useEffect, useState } from "react";
import { cookiesTOS_actions } from "./utill/cookiesTOS_actions";

const CookiesTOS: React.FC = () => {
  useEffect(() => {
    cookiesTOS_actions();
  }, []);

  return (
    <>
      <div
        id="cookie-container"
        className={`${styles["cookie-container"]} ${inter.className}`}
      >
        <div className={styles["cookie-header"]}>
          <div>everyone loves a cookie</div>
          <div>
            <svg
              className={styles["close-btn"]}
              id="close-btn-cookie"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50"
              fill="currentColor"
            >
              <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
            </svg>
          </div>
        </div>
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
