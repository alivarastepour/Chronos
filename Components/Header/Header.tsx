import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Header/header.module.scss";
import { inter } from "@/public/Fonts";
import logo from "@/public/monday-logo-x2.png";

const Header: React.FC = () => {
  return (
    <>
      <div className={styles["header-container"]}>
        <div className={styles["header-left-container"]}>
          <div className={styles["header-logo"]}>
            <Link href={"/"}>
              <Image src={logo} width={200} height={50} alt="logo of Chronos" />
            </Link>
          </div>
          <div className={`${styles["header-content"]} ${inter.className}`}>
            <div>
              <Link href={"/"}>
                <div className={styles["header-content-item"]}>features</div>
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <div className={styles["header-content-item"]}>plans</div>
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <div className={styles["header-content-item"]}>try a demo</div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles["header-entry"]}>
          <div className={styles["header-button"]}>
            <div
              className={`${styles["header-button-text"]} ${inter.className}`}
            >
              Start Now
            </div>
            <div className={styles["header-button-arrow"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
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
export default Header;
