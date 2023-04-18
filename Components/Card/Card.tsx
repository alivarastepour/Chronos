import styles from "@/styles/Card/card.module.scss";
import { NextFont } from "@next/font";
import { Inter } from "@next/font/google";
const inter: NextFont = Inter({ subsets: ["latin"], weight: ["200", "500"] });

interface CardProps {
  header: string;
  explaination: string;
}

const Card: React.FC<CardProps> = ({ header, explaination }) => {
  return (
    <>
      <div
        tabIndex={1}
        className={`${styles["card-container"]} ${inter.className}`}
      >
        <div className={styles["card-header"]}>{header}</div>
        <div className={styles["overlay"]}>
          <div className={styles["card-explaination"]}>
            <div className={styles["card-explaination-wrapper"]}>
              {explaination}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
