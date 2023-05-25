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
          <input type="text" autoComplete="username" hidden name="" id="" />
          <label htmlFor="signup-password">password</label>
          <input
            type="password"
            autoComplete="new-password"
            name="signup-password"
            id="signup-password"
          />
          <p className={styles["signup-username-error"]}>
            enter a valid password.
          </p>
        </div>
        <div>
          <label htmlFor="signup-password-repeat">repeat password</label>
          <input
            type="password"
            autoComplete="new-password"
            name="signup-password-repeat"
            id="signup-password-repeat"
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
