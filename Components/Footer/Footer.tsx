import styles from "@/styles/Footer/footer.module.scss";
import { inter } from "@/public/Fonts";

import MainFooter from "../MainFooter/MainFooter";
import SecondaryFooter from "../SecondaryFooter/SecondaryFooter";

const Footer: React.FC = () => {
  return (
    <>
      <div className={`${styles["footer-wrapper"]} ${inter.className}`}>
        <MainFooter />
        <SecondaryFooter />
      </div>
    </>
  );
};

export default Footer;
