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
          <label htmlFor="signup-select-organization">
            what is your gender?
          </label>
          <select
            name="signup-select-organization"
            id="signup-select-organization"
          >
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="non-binary">non-binary</option>
            <option value="rather-not-say">i rather not say</option>
          </select>
          <p className={styles["login-username-error"]}>
            enter a valid password.
          </p>
        </div>
        <div className={styles["signup-checkbox-container"]}>
          <label data-checkboxlabel="true" htmlFor="login-password">
            i agree to Chronos's terms of services
          </label>
          <input data-checkbox="true" type="checkbox" id="login-password" />
        </div>
        <div className={styles["signup-checkbox-container"]}>
          <label data-checkboxlabel="true" htmlFor="login-password">
            keep me inforemd of the latest updates
          </label>
          <input
            data-checkbox="true"
            defaultChecked
            type="checkbox"
            id="login-password"
          />
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
