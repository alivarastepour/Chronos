import styles from "@/styles/Card/card.module.scss";
import { inter } from "@/public/util/Fonts";

interface CardProps {
  children: React.ReactNode;
}

const CardHeader: React.FC<CardProps> = ({ children }) => {
  return (
    <>
      <div className={styles["card-header"]}>{children}</div>
    </>
  );
};
const CardExplaination: React.FC<CardProps> = ({ children }) => {
  return (
    <>
      <div className={styles["overlay"]}>
        <div className={styles["card-explaination"]}>
          <div className={styles["card-explaination-wrapper"]}>{children}</div>
        </div>
      </div>
    </>
  );
};

interface CardComposition {
  Explaination: typeof CardExplaination;
  Header: typeof CardHeader;
}

const Card: React.FC<CardProps> & CardComposition = ({ children }) => {
  return (
    <>
      <div className={`${styles["card-container"]} ${inter.className}`}>
        {children}
      </div>
    </>
  );
};

Card.Explaination = CardExplaination;
Card.Header = CardHeader;

export default Card;
