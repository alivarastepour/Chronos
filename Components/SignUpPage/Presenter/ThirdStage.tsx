import styles from "@/styles/SignUpPage/signUpPage.module.scss";
import { Tgender, TsignUpState } from "../SignUpPage.types";

interface IthirdStage {
  handleSignUpStageChange: (state: "prev") => () => void;
  setSignUpState: React.Dispatch<React.SetStateAction<TsignUpState>>;
  gender: Tgender;
  hasReadTOS: boolean;
  emailUpdates: boolean;
}

const ThirdStage: React.FC<IthirdStage> = ({
  handleSignUpStageChange,
  setSignUpState,
  gender,
  hasReadTOS,
  emailUpdates,
}) => {
  console.log(gender, hasReadTOS, emailUpdates);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="signup-gender">what is your gender?</label>
          <select name="signup-gender" id="signup-gender">
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="non-binary">non-binary</option>
            <option value="rather-not-say">i rather not say</option>
          </select>
          <p className={styles["signup-username-error"]}>
            enter a valid password.
          </p>
        </div>
        <div className={styles["signup-checkbox-container"]}>
          <label data-checkboxlabel="true" htmlFor="signup-tos">
            i agree to Chronos's terms of services
          </label>
          <input
            data-checkbox="true"
            type="checkbox"
            name="signup-tos"
            id="signup-tos"
          />
        </div>
        <div className={styles["signup-checkbox-container"]}>
          <label data-checkboxlabel="true" htmlFor="signup-updates">
            keep me inforemd of the latest updates
          </label>
          <input
            data-checkbox="true"
            defaultChecked
            type="checkbox"
            name="signup-updates"
            id="signup-updates"
          />
        </div>
        <div className={styles["signup-flex-action-container"]}>
          <button
            className={`${styles["signup-page-signup-button"]} ${styles["primary-signup-button"]}`}
            onClick={handleSignUpStageChange("prev")}
          >
            Previous
          </button>
          <button
            className={`${styles["signup-page-signup-button"]} ${styles["primary-signup-button"]}`}
            onClick={undefined}
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default ThirdStage;
