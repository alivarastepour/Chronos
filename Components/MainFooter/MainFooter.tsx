import styles from "@/styles/MainFooter/mainFooter.module.scss";
import logo from "@/public/logo.png";
import Image from "next/image";

const MainFooter = () => {
  return (
    <>
      <div className={styles["footer-main-container"]}>
        <div className={styles["footer-first-col"]}>
          <ul className={styles["footer-col-ul"]}>
            <li className={`${styles["li-header"]} ${styles["li-image"]}`}>
              <Image alt="Chronos logo" src={logo} width={150} height={30} />
            </li>
            <li>
              <a href="">pricing</a>
            </li>
            <li>
              <a href="">contact us</a>
            </li>
            <li>
              <a href="">templates</a>
            </li>
            <li>
              <a href="">SMB</a>
            </li>
            <li>
              <a href="">enterprise</a>
            </li>
            <li>
              <a href="">nonprofits</a>
            </li>
            <li>
              <a href="">apps marketplace</a>
            </li>
            <li>
              <a href="">24/7 support</a>
            </li>
          </ul>
        </div>
        <div className={styles["footer-second-col"]}>
          <ul className={styles["footer-col-ul"]}>
            <li className={styles["li-header"]}>Features</li>
            <li>
              <a href="">docs</a>
            </li>
            <li>
              <a href="">integrations</a>
            </li>
            <li>
              <a href="">automanation</a>
            </li>
            <li>
              <a href="">files</a>
            </li>
            <li>
              <a href="">dashboards</a>
            </li>
            <li>
              <a href="">lorem2</a>
            </li>
          </ul>
        </div>
        <div className={styles["footer-third-col"]}>
          <ul className={styles["footer-col-ul"]}>
            <li className={styles["li-header"]}>use cases</li>
            <li>
              <a href="">marketing</a>
            </li>
            <li>
              <a href="">management</a>
            </li>
            <li>
              <a href="">sales</a>
            </li>
            <li>
              <a href="">developers</a>
            </li>
            <li>
              <a href="">HR</a>
            </li>
            <li>
              <a href="">IT</a>
            </li>
            <li>
              <a href="">operations</a>
            </li>
            <li>
              <a href="">constructions</a>
            </li>
          </ul>
        </div>
        <div className={styles["footer-fourth-col"]}>
          <ul className={styles["footer-col-ul"]}>
            <li className={styles["li-header"]}>Company</li>
            <li>
              <a href="">about us</a>
            </li>
            <li>
              <a href="">careers</a>
            </li>
            <li>
              <a href="">press</a>
            </li>
            <li>
              <a href="">customer stories</a>
            </li>
            <li>
              <a href="">become a partner</a>
            </li>
            <li>
              <a href="">investor relations</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainFooter;
