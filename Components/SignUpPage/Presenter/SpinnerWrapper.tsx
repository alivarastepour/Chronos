import Spinner from "@/Components/_ui_components/Spinner/Spinner";
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
