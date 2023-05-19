import styles from "@/styles/LoginPage/loginPage.module.scss";
import { inter } from "@/public/Fonts";

const LoginPage: React.FC = () => {
  return (
    <>
      <div className={`${styles["login-page-wrapper"]} ${inter.className}`}>
        <h1 className={styles["login-title"]}>login to your account</h1>
        <main className={styles["login-page-login-form-container"]}>
          <form>
            <div>
              <label htmlFor="login-username">username</label>
              <input type="text" id="login-username" />
              <p className={styles["login-username-error"]}>
                enter a username.
              </p>
            </div>
            <div>
              <label htmlFor="login-password">password</label>
              <input type="text" id="login-password" />
              <p className={styles["login-password-error"]}>
                enter a password.
              </p>
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default LoginPage;
