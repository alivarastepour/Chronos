import styles from "@/styles/SignUpPage/signUpPage.module.scss";
import type { Tgender, TthirdStage } from "../SignUpPage.types";

const ThirdStage: React.FC<TthirdStage> = ({
  handleSignUpStageChange,
  setSignUpState,
  shouldStageChange,
  gender,
  hasReadTOS,
  emailUpdates,
}) => {
  console.log(gender, hasReadTOS, emailUpdates);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const res = shouldStageChange(e);
          // if (res) handleSignUpStageChange("submit")();
        }}
      >
        <div>
          <label htmlFor="signup-gender">what is your gender?</label>
          <select
            name="signup-gender"
            id="signup-gender"
            value={gender}
            onChange={(e) =>
              setSignUpState((prev) => ({
                ...prev,
                gender: e.target.value as Tgender,
              }))
            }
          >
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="non-binary">non-binary</option>
            <option value="unknown">i rather not say</option>
          </select>
          <p className={styles["signup-username-error"]}>
            enter a valid password.
          </p>
        </div>
        <div className={styles["signup-checkbox-container"]}>
          <label data-checkboxlabel="true" htmlFor="signup-checkbox-tos">
            i agree to Chronos's terms of services
          </label>
          <input
            data-checkbox="true"
            type="checkbox"
            name="signup-checkbox-tos"
            id="signup-tos"
            checked={hasReadTOS}
            onChange={(e) =>
              setSignUpState((prev) => ({
                ...prev,
                hasReadTOS: e.target.checked,
              }))
            }
          />
        </div>
        <div className={styles["signup-checkbox-container"]}>
          <label data-checkboxlabel="true" htmlFor="signup-checkbox-updates">
            keep me inforemd of the latest updates
          </label>
          <input
            data-checkbox="true"
            type="checkbox"
            name="signup-checkbox-updates"
            id="signup-updates"
            checked={emailUpdates}
            onChange={(e) =>
              setSignUpState((prev) => ({
                ...prev,
                emailUpdates: e.target.checked,
              }))
            }
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
            type="submit"
            disabled={!hasReadTOS}
            className={`${styles["signup-page-signup-button"]} ${styles["primary-signup-button"]}`}
            // onClick={undefined}
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default ThirdStage;
