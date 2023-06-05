import styles from "@/styles/SignUpPage/signUpPage.module.scss";
import { TsignUpState } from "./Container/SignUpPageContaienr";

interface IfirstStage {
  handleSignUpStageChange: (state: "next") => () => void;
  setSignUpState: React.Dispatch<React.SetStateAction<TsignUpState>>;
  username: string;
  email: string;
}

const FirstStage: React.FC<IfirstStage> = ({
  handleSignUpStageChange,
  setSignUpState,
  username,
  email,
}) => {
  console.log(username, email);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="signup-username">
            username
            <span>*</span>
          </label>
          <input
            type="text"
            name="signup-username"
            id="signup-username"
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
            // placeholder="This is the email we will use to recover your password"
          />
          <p className={styles["signup-password-error"]}>enter an email.</p>
        </div>
        <div>
          <button
            className={`${styles["signup-page-signup-button"]} ${styles["primary-signup-button"]}`}
            onClick={handleSignUpStageChange("next")}
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default FirstStage;
