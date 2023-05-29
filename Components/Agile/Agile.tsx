import styles from "@/styles/Agile/agile.module.scss";
import { inter } from "@/public/util/Fonts";
const Agile: React.FC = () => {
  return (
    <>
      <div className={`${styles["agile-wrapper"]} ${inter.className}`}>
        <div className={styles["agile-header"]}>
          Chronos uses <span>Agile</span> methodology
        </div>
        <div className={styles["agile-details"]}>
          <div className={styles["agile-details-explaination"]}>
            The Agile methodology is a way to manage a project by breaking it up
            into several phases. It involves constant collaboration with
            stakeholders and continuous improvement at every stage. Once the
            work begins, teams cycle through a process of planning, executing,
            and evaluating. Continuous collaboration is vital, both with team
            members and project stakeholders.
          </div>
        </div>
      </div>
    </>
  );
};

export default Agile;
