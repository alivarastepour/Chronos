import styles from "@/styles/SignUpPage/signUpPage.module.scss";
import type { TsecondStage } from "../SignUpPage.types";

const SecondStage: React.FC<TsecondStage> = ({
  handleSignUpStageChange,
  setSignUpState,
  shouldStageChange,
  password,
  passwordR,
}) => {
  console.log(password);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const res = shouldStageChange(e);
          if (res) handleSignUpStageChange("next")();
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
            // placeholder="Password should be between 8 to 20 charachters"
          />
          <p className={styles["signup-username-error"]}>
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
            // placeholder="Just to be sure, enter your password again"
          />
          <p className={styles["signup-password-error"]}>
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
            // onClick={handleSignUpStageChange("next")}
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default SecondStage;
