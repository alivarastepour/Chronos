import styles from "@/styles/SignUpPage/signUpPage.module.scss";
import type { TfirstStage } from "../SignUpPage.types";
import { FormEvent } from "react";

const FirstStage: React.FC<TfirstStage> = ({
  handleSignUpStageChange,
  setSignUpState,

  shouldStageChange,
  username,
  email,
}) => {
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
          <label htmlFor="signup-username">
            username
            <span>*</span>
          </label>
          <input
            type="text"
            name="signup-username"
            id="signup-username"
            value={username}
            onChange={(e) =>
              setSignUpState((prev) => ({ ...prev, username: e.target.value }))
            }
            // placeholder="Username should be between 8 to 20 alphabetical charachters"
          />
          <p className={styles["signup-username-error"]}>enter a valid name.</p>
        </div>
        <div>
          <label htmlFor="signup-email">
            email address
            <span>*</span>
          </label>
          <input
            type="email"
            autoComplete="username"
            name="signup-email"
            id="signup-email"
            value={email}
            onChange={(e) =>
              setSignUpState((prev) => ({ ...prev, email: e.target.value }))
            }
            // placeholder="This is the email we will use to recover your password"
          />
          <p className={styles["signup-password-error"]}>enter an email.</p>
        </div>
        <div>
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

export default FirstStage;
