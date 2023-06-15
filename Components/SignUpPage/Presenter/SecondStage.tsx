import styles from "@/styles/SignUpPage/signUpPage.module.scss";

import type { TsecondStage } from "../SignUpPage.types";

const SecondStage: React.FC<TsecondStage> = ({
  handleSignUpStageChange,
  setSignUpState,
  shouldStageChange,
  handleErrors,
  password,
  passwordR,
}) => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const { shouldStageChange: stc, errors } = shouldStageChange(e);
          if (stc) handleSignUpStageChange("next")();
          else handleErrors(errors);
        }}
      >
        <div>
          <input type="text" autoComplete="username" hidden name="" id="" />
          <label htmlFor="signup-password">
            password
            <span>*</span>
          </label>
          <input
            type="password"
            autoComplete="new-password"
            name="signup-password"
            id="signup-password"
            value={password}
            onChange={(e) =>
              setSignUpState((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          <p
            id="signup-password-error"
            className={`${styles["signup-password-error"]} signup-password-error`}
          >
            enter a valid password.
          </p>
        </div>
        <div>
          <label htmlFor="signup-passwordR">
            repeat password
            <span>*</span>
          </label>
          <input
            type="password"
            autoComplete="new-password"
            name="signup-passwordR"
            id="signup-passwordR"
            value={passwordR}
            onChange={(e) =>
              setSignUpState((prev) => ({ ...prev, passwordR: e.target.value }))
            }
          />
          <p
            id="signup-passwordR-error"
            className={`${styles["signup-passwordR-error"]} signup-passwordR-error`}
          >
            passwords dont match
          </p>
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
            className={`${styles["signup-page-signup-button"]} ${styles["primary-signup-button"]}`}
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default SecondStage;
