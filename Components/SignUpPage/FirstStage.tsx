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
          <label htmlFor="login-username">full name</label>
          <input type="text" id="login-username" />
          <p className={styles["login-username-error"]}>enter a valid name.</p>
        </div>
        <div>
          <label htmlFor="login-password">email address</label>
          <input type="email" id="login-password" />
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
