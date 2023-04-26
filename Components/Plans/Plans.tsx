import styles from "@/styles/Plans/plans.module.scss";
import Card from "../Card/Card";
import { inter } from "@/public/Fonts";

const Plans: React.FC = () => {
  return (
    <>
      <div className={styles["plans-wrapper"]}>
        <div className={`${styles["plans-header"]} ${inter.className}`}>
          Add <span>Chronos</span> To Your Workflow <span>NOW</span>
        </div>
        <div className={styles["plans-container"]}>
          <Card>
            <Card.Header>
              <div className={styles["plan-header-title"]}>free trial</div>
              <div className={styles["plan-header-explaination"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                alias.
              </div>
            </Card.Header>

            <Card.Explaination>
              <div className={styles["plan-detail-explaination"]}></div>
              aspernatur reprehenderit iure dolorum sit hic autem numquam nam
              laboriosam quia! Pariatur amet voluptates debitis voluptatum
              magnam tempora, quam, qui sapiente, totam iusto dolore
              necessitatibus dolorum aperiam error. At velit natus consequatur
              enim totam omnis iste, ducimus nemo quasi id? Id. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Itaque
              <div className={styles["plan-more-button"]}></div>
            </Card.Explaination>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Plans;
