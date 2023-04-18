import styles from "@/styles/Card/card.module.scss";
import { NextFont } from "@next/font";
import { Inter } from "@next/font/google";
const inter: NextFont = Inter({ subsets: ["latin"], weight: ["300"] });

interface CardProps {
  header: string;
  explaination: string;
}

const Card: React.FC<CardProps> = ({ header, explaination }) => {
  return (
    <>
      <div className={`${styles["card-container"]} ${inter.className}`}>
        <div className={styles["card-header"]}>{header}</div>
        <div className={styles["card-explaination"]}>{explaination}</div>
        <div className={styles["card-show-more-container"]}>
          <div className={styles["show-more-button"]}>Read More</div>
        </div>
      </div>
    </>
  );
};
export default Card;
