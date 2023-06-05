import styles from "@/styles/SignUpPage/signUpPage.module.scss";
import { TsignUpState } from "../SignUpPage.types";

interface IsecondStage {
  handleSignUpStageChange: (state: "next" | "prev") => () => void;
  setSignUpState: React.Dispatch<React.SetStateAction<TsignUpState>>;
  password: string;
  passwordR: string;
}

const SecondStage: React.FC<IsecondStage> = ({
  handleSignUpStageChange,
  setSignUpState,
  password,
  passwordR,
}) => {
  console.log(password, passwordR);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
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
            // placeholder="Password should be between 8 to 20 charachters"
          />
          <p className={styles["signup-username-error"]}>
            enter a valid password.
          </p>
        </div>
        <div>
          <label htmlFor="signup-password-repeat">
            repeat password
            <span>*</span>
          </label>
          <input
            type="password"
            autoComplete="new-password"
            name="signup-password-repeat"
            id="signup-password-repeat"
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

export default SecondStage;
