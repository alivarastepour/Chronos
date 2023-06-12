import Spinner from "@/Components/Spinner/Spinner";
import styles from "@/styles/SignUpPage/spinnerWrapper.module.scss";
const SpinnerWrapper: React.FC = () => {
  return (
    <>
      <div className={styles["spinner-container"]}>
        <div className={styles["spinner-wrapper"]}>
          <Spinner />
        </div>
      </div>
    </>
  );
};

export default SpinnerWrapper;
