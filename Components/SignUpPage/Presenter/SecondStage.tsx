import styles from "@/styles/SignUpPage/secondStage.module.scss";
import commonStyles from "@/styles/SignUpPage/shared.module.scss";

import PasswordInput from "@/Components/_ui_components/PasswordInput/PasswordInput";

import type { TsecondStage, TsignUpState } from "../SignUpPage.types";

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
          <PasswordInput<TsignUpState>
            password={password}
            setState={setSignUpState}
            label="password"
            autoComplete="new-password"
            id="signup-password"
            name="signup-password"
            htmlFor="signup-password"
          />
          <p id="signup-password-error" className="signup-password-error">
            enter a valid password.
          </p>
        </div>
        <div>
          <PasswordInput<TsignUpState>
            password={passwordR}
            setState={setSignUpState}
            label="repeat password"
            autoComplete="new-password"
            id="signup-passwordR"
            name="signup-passwordR"
            htmlFor="signup-passwordR"
          />
          <p id="signup-passwordR-error" className="signup-passwordR-error">
            passwords dont match
          </p>
        </div>
        <div className={styles["signup-flex-action-container"]}>
          <button
            className={`${commonStyles["signup-page-signup-button"]} ${commonStyles["primary-signup-button"]}`}
            onClick={handleSignUpStageChange("prev")}
          >
            Previous
          </button>
          <button
            type="submit"
            className={`${commonStyles["signup-page-signup-button"]} ${commonStyles["primary-signup-button"]}`}
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default SecondStage;
