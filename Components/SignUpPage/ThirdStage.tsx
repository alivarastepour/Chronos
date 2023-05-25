import styles from "@/styles/SignUpPage/signUpPage.module.scss";

const ThirdStage = ({
  handleSignUpStageChange,
}: {
  handleSignUpStageChange: (
    state: "prev"
  ) => React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="login-username">password</label>
          <input type="password" id="login-username" />
          <p className={styles["login-username-error"]}>
            enter a valid password.
          </p>
        </div>
        <div>
          <label htmlFor="login-password">repeat password</label>
          <input type="password" id="login-password" />
          <p className={styles["login-password-error"]}>enter an email.</p>
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
