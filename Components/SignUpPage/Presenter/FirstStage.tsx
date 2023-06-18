import styles from "@/styles/SignUpPage/signUpPage.module.scss";

import type { TfirstStage } from "../SignUpPage.types";

const FirstStage: React.FC<TfirstStage> = ({
  handleSignUpStageChange,
  setSignUpState,
  shouldStageChange,
  handleErrors,
  username,
  email,
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
          />
          <p id="signup-username-error" className="signup-username-error">
            enter a valid name.
          </p>
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
          />
          <p id="signup-email-error" className="signup-email-error">
            enter an email.
          </p>
        </div>
        <div>
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

export default FirstStage;
