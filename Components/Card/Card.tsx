import styles from "@/styles/Card/card.module.scss";
import { inter } from "@/public/Fonts";

interface CardProps {
  // header: string;
  explaination: string;
}

const Card: React.FC<CardProps> = ({ explaination }) => {
  return (
    <>
      <div className={`${styles["card-container"]} ${inter.className}`}>
        {/* <div className={styles["card-header"]}>{header}</div> */}
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
