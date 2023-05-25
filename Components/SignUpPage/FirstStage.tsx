import styles from "@/styles/SignUpPage/signUpPage.module.scss";

const FirstStage = ({
  handleSignUpStageChange,
}: {
  handleSignUpStageChange: (
    state: "next"
  ) => React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="signup-fullname">full name</label>
          <input type="text" name="signup-fullname" id="signup-fullname" />
          <p className={styles["login-username-error"]}>enter a valid name.</p>
        </div>
        <div>
          <label htmlFor="signup-email">email address</label>
          <input type="email" name="signup-email" id="signup-email" />
          <p className={styles["login-password-error"]}>enter an email.</p>
        </div>
        <div>
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

export default FirstStage;
