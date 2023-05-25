import styles from "@/styles/SignUpPage/signUpPage.module.scss";

const SecondStage = ({
  handleSignUpStageChange,
}: {
  handleSignUpStageChange: (
    state: "next" | "prev"
  ) => React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="signup-password">password</label>
          <input type="password" name="signup-password" id="signup-password" />
          <p className={styles["login-username-error"]}>
            enter a valid password.
          </p>
        </div>
        <div>
          <label htmlFor="signup-password-repeat">repeat password</label>
          <input
            type="password"
            name="signup-password-repeat"
            id="signup-password-repeat"
          />
          <p className={styles["login-password-error"]}>passwords dont match</p>
        </div>
        <div className={styles["signup-flex-action-container"]}>
          <button
            className={`${styles["login-page-login-button"]} ${styles["primary-login-button"]}`}
            onClick={handleSignUpStageChange("prev")}
          >
            Previous
          </button>
          <button
            className={`${styles["login-page-login-button"]} ${styles["primary-login-button"]}`}
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
