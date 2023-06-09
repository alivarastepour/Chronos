import styles from "@/styles/LoginPage/loginPage.module.scss";
import { inter } from "@/public/util/Fonts";
import Image from "next/image";
import logo from "@/public/logo.png";
import graphic from "@/public/register.svg";
import SecondaryFooter from "../../SecondaryFooter/SecondaryFooter";
import Link from "next/link";
import { TloginState } from "../TloginState";
import { blurCheck, submitCheck } from "../util/checkForm";
import { useState } from "react";
import PasswordInput from "@/Components/_ui_components/PasswordInput/PasswordInput";

interface IloginPagePresenter {
  loginState: TloginState;
  setLoginState: React.Dispatch<React.SetStateAction<TloginState>>;
  signIn: Function;
}

const LoginPagePresenter = ({
  loginState,
  setLoginState,
  signIn,
}: IloginPagePresenter) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className={`${styles["login-page-wrapper"]} ${inter.className}`}>
        <div className={styles["login-page-flex-wrapper"]}>
          <div className={styles["login-page-logo-wrapper"]}>
            <Image
              priority
              src={logo}
              alt="Chronos logo"
              className={styles["login-page-logo"]}
            />
            <div className={styles["login-page-logo-subtitle"]}>
              manage your time like you are the god of it
            </div>
            <div className={styles["login-graphic"]}>
              {/* <Image src={graphic} alt="login-graphic" priority /> */}
            </div>
          </div>
          <main className={styles["login-page-login-form-container"]}>
            <h1 className={styles["login-title"]}>login to your account</h1>
            <form
              name="login-form"
              onSubmit={(e) => submitCheck(e, loginState)}
            >
              <div>
                <label htmlFor="login-username">
                  username
                  <span>*</span>
                </label>
                <input
                  type="text"
                  id="login-username"
                  name="login-username"
                  value={loginState.username}
                  autoComplete="username"
                  onChange={(event) =>
                    setLoginState((prev) => ({
                      ...prev,
                      username: event.target.value,
                    }))
                  }
                  // onBlur={() => blurCheck("username")(loginState.username)}
                />
                <p
                  id="login-username-error"
                  className={`${styles["login-username-error"]} login-username-error`}
                ></p>
              </div>
              <div>
                {/* <label
                  htmlFor="login-password"
                  className={styles["login-flex-label-password"]}
                >
                  <div>
                    password
                    <span>*</span>
                  </div>
                  <div>
                    <svg
                      width="30px"
                      height="30px"
                      version="1.1"
                      viewBox="0 0 700 700"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      onClick={() => setShowPassword((prev: boolean) => !prev)}
                    >
                      <defs>
                        <symbol id="n" overflow="visible">
                          <path d="m29.312-1.75c-1.5117 0.78125-3.0898 1.3711-4.7344 1.7656-1.6367 0.40625-3.3398 0.60938-5.1094 0.60938-5.3125 0-9.5273-1.4844-12.641-4.4531-3.1055-2.9688-4.6562-7-4.6562-12.094s1.5508-9.125 4.6562-12.094c3.1133-2.9688 7.3281-4.4531 12.641-4.4531 1.7695 0 3.4727 0.19922 5.1094 0.59375 1.6445 0.39844 3.2227 0.99219 4.7344 1.7812v6.5938c-1.5312-1.0391-3.0391-1.8008-4.5156-2.2812-1.4805-0.48828-3.0391-0.73438-4.6719-0.73438-2.9375 0-5.2461 0.94531-6.9219 2.8281-1.6797 1.875-2.5156 4.4648-2.5156 7.7656 0 3.293 0.83594 5.8828 2.5156 7.7656 1.6758 1.875 3.9844 2.8125 6.9219 2.8125 1.6328 0 3.1914-0.23828 4.6719-0.71875 1.4766-0.48828 2.9844-1.2539 4.5156-2.2969z" />
                        </symbol>
                        <symbol id="b" overflow="visible">
                          <path d="m21.453-17.406c-0.67969-0.3125-1.3516-0.53906-2.0156-0.6875-0.65625-0.15625-1.3203-0.23438-1.9844-0.23438-1.9688 0-3.4844 0.63281-4.5469 1.8906-1.0547 1.2617-1.5781 3.0703-1.5781 5.4219v11.016h-7.6562v-23.922h7.6562v3.9219c0.97656-1.5625 2.1016-2.7031 3.375-3.4219 1.2812-0.71875 2.8125-1.0781 4.5938-1.0781 0.25 0 0.52344 0.011719 0.82812 0.03125 0.30078 0.023438 0.73438 0.070312 1.2969 0.14062z" />
                        </symbol>
                        <symbol id="a" overflow="visible">
                          <path d="m27.562-12.031v2.1875h-17.891c0.1875 1.793 0.83203 3.1367 1.9375 4.0312 1.1133 0.89844 2.6719 1.3438 4.6719 1.3438 1.6016 0 3.25-0.23438 4.9375-0.70312 1.6875-0.47656 3.4219-1.2031 5.2031-2.1719v5.8906c-1.8047 0.6875-3.6094 1.2031-5.4219 1.5469-1.8125 0.35156-3.6211 0.53125-5.4219 0.53125-4.3359 0-7.7031-1.0977-10.109-3.2969-2.3984-2.207-3.5938-5.2969-3.5938-9.2656 0-3.9062 1.1758-6.9727 3.5312-9.2031 2.3633-2.2383 5.6094-3.3594 9.7344-3.3594 3.7578 0 6.7695 1.1367 9.0312 3.4062 2.2578 2.2617 3.3906 5.2812 3.3906 9.0625zm-7.8594-2.5312c0-1.457-0.42969-2.6289-1.2812-3.5156-0.84375-0.89453-1.9492-1.3438-3.3125-1.3438-1.4922 0-2.6992 0.41797-3.625 1.25-0.91797 0.83594-1.4922 2.0391-1.7188 3.6094z" />
                        </symbol>
                        <symbol id="d" overflow="visible">
                          <path d="m14.391-10.766c-1.5938 0-2.793 0.27344-3.5938 0.8125-0.80469 0.54297-1.2031 1.3398-1.2031 2.3906 0 0.96875 0.32031 1.7305 0.96875 2.2812 0.64453 0.54297 1.5469 0.8125 2.7031 0.8125 1.4375 0 2.6445-0.51562 3.625-1.5469 0.98828-1.0312 1.4844-2.3203 1.4844-3.875v-0.875zm11.688-2.8906v13.656h-7.7031v-3.5469c-1.0312 1.4492-2.1875 2.5078-3.4688 3.1719s-2.8398 1-4.6719 1c-2.4805 0-4.4961-0.72266-6.0469-2.1719-1.543-1.4453-2.3125-3.3203-2.3125-5.625 0-2.8125 0.96094-4.8672 2.8906-6.1719 1.9375-1.3125 4.9688-1.9688 9.0938-1.9688h4.5156v-0.60938c0-1.207-0.48047-2.0938-1.4375-2.6562-0.94922-0.5625-2.4375-0.84375-4.4688-0.84375-1.6367 0-3.1562 0.16797-4.5625 0.5-1.4062 0.32422-2.7188 0.8125-3.9375 1.4688v-5.8281c1.6445-0.40625 3.2891-0.70703 4.9375-0.90625 1.6562-0.20703 3.3047-0.3125 4.9531-0.3125 4.3203 0 7.4375 0.85547 9.3438 2.5625 1.9141 1.6992 2.875 4.4609 2.875 8.2812z" />
                        </symbol>
                        <symbol id="h" overflow="visible">
                          <path d="m12.031-30.719v6.7969h7.875v5.4688h-7.875v10.141c0 1.1172 0.21875 1.8711 0.65625 2.2656 0.4375 0.38672 1.3125 0.57812 2.625 0.57812h3.9375v5.4688h-6.5625c-3.0234 0-5.1641-0.62891-6.4219-1.8906-1.2617-1.2578-1.8906-3.3984-1.8906-6.4219v-10.141h-3.7969v-5.4688h3.7969v-6.7969z" />
                        </symbol>
                        <symbol id="c" overflow="visible">
                          <path d="m19.953-20.422v-12.812h7.6875v33.234h-7.6875v-3.4531c-1.0547 1.4062-2.2148 2.4375-3.4844 3.0938-1.2734 0.65625-2.7422 0.98438-4.4062 0.98438-2.9492 0-5.3711-1.1719-7.2656-3.5156-1.8867-2.3438-2.8281-5.3594-2.8281-9.0469s0.94141-6.7031 2.8281-9.0469c1.8945-2.3438 4.3164-3.5156 7.2656-3.5156 1.6562 0 3.1172 0.33594 4.3906 1 1.2812 0.65625 2.4453 1.6836 3.5 3.0781zm-5.0469 15.484c1.6445 0 2.8945-0.59766 3.75-1.7969 0.86328-1.1953 1.2969-2.9297 1.2969-5.2031 0-2.2812-0.43359-4.0195-1.2969-5.2188-0.85547-1.1953-2.1055-1.7969-3.75-1.7969-1.625 0-2.8711 0.60156-3.7344 1.7969-0.85547 1.1992-1.2812 2.9375-1.2812 5.2188 0 2.2734 0.42578 4.0078 1.2812 5.2031 0.86328 1.1992 2.1094 1.7969 3.7344 1.7969z" />
                        </symbol>
                        <symbol id="g" overflow="visible">
                          <path d="m16.406-4.9375c1.6328 0 2.8828-0.59766 3.75-1.7969 0.86328-1.1953 1.2969-2.9297 1.2969-5.2031 0-2.2812-0.43359-4.0195-1.2969-5.2188-0.86719-1.1953-2.1172-1.7969-3.75-1.7969-1.6367 0-2.8906 0.60547-3.7656 1.8125-0.875 1.1992-1.3125 2.9336-1.3125 5.2031 0 2.2617 0.4375 3.9961 1.3125 5.2031 0.875 1.1992 2.1289 1.7969 3.7656 1.7969zm-5.0781-15.484c1.0508-1.3945 2.2188-2.4219 3.5-3.0781 1.2812-0.66406 2.7539-1 4.4219-1 2.9453 0 5.3672 1.1719 7.2656 3.5156 1.8945 2.3438 2.8438 5.3594 2.8438 9.0469s-0.94922 6.7031-2.8438 9.0469c-1.8984 2.3438-4.3203 3.5156-7.2656 3.5156-1.668 0-3.1406-0.33594-4.4219-1s-2.4492-1.6914-3.5-3.0781v3.4531h-7.6562v-33.234h7.6562z" />
                        </symbol>
                        <symbol id="f" overflow="visible">
                          <path d="m0.53125-23.922h7.6562l6.4219 16.234 5.4688-16.234h7.6562l-10.062 26.188c-1.0117 2.6641-2.1953 4.5234-3.5469 5.5781-1.3438 1.0625-3.1211 1.5938-5.3281 1.5938h-4.4219v-5.0156h2.3906c1.3008 0 2.2422-0.21094 2.8281-0.625 0.59375-0.40625 1.0547-1.1484 1.3906-2.2188l0.20312-0.65625z" />
                        </symbol>
                        <symbol id="e" overflow="visible">
                          <path d="m23.375-5.8125h-12.859l-2.0312 5.8125h-8.2656l11.812-31.891h9.7969l11.812 31.891h-8.2656zm-10.812-5.9219h8.7344l-4.3594-12.688z" />
                        </symbol>
                        <symbol id="m" overflow="visible">
                          <path d="m3.6719-33.234h7.6562v33.234h-7.6562z" />
                        </symbol>
                        <symbol id="l" overflow="visible">
                          <path d="m9.7188-12.234-8.625-11.688h8.0938l4.8906 7.0938 4.9531-7.0938h8.0938l-8.625 11.641 9.0625 12.281h-8.0938l-5.3906-7.5625-5.3125 7.5625h-8.1094z" />
                        </symbol>
                        <symbol id="k" overflow="visible">
                          <path d="m27.734-14.562v14.562h-7.7031v-11.156c0-2.0625-0.046875-3.4844-0.14062-4.2656-0.085937-0.78125-0.24219-1.3594-0.46875-1.7344-0.30469-0.5-0.71094-0.88281-1.2188-1.1562-0.51172-0.28125-1.0938-0.42188-1.75-0.42188-1.5938 0-2.8516 0.61719-3.7656 1.8438-0.90625 1.2305-1.3594 2.9375-1.3594 5.125v11.766h-7.6562v-23.922h7.6562v3.5c1.1445-1.3945 2.3633-2.4219 3.6562-3.0781 1.3008-0.66406 2.7383-1 4.3125-1 2.7578 0 4.8516 0.85156 6.2812 2.5469 1.4375 1.6875 2.1562 4.1523 2.1562 7.3906z" />
                        </symbol>
                        <symbol id="j" overflow="visible">
                          <path d="m-0.42188-31.891h8.9844l7.2656 11.359 7.2656-11.359h9.0156l-12.156 18.453v13.438h-8.2188v-13.438z" />
                        </symbol>
                        <symbol id="i" overflow="visible">
                          <path d="m15.062-19.031c-1.6992 0-2.9961 0.60938-3.8906 1.8281-0.88672 1.2188-1.3281 2.9766-1.3281 5.2656 0 2.293 0.44141 4.0469 1.3281 5.2656 0.89453 1.2188 2.1914 1.8281 3.8906 1.8281 1.6641 0 2.9375-0.60938 3.8125-1.8281 0.88281-1.2188 1.3281-2.9727 1.3281-5.2656 0-2.2891-0.44531-4.0469-1.3281-5.2656-0.875-1.2188-2.1484-1.8281-3.8125-1.8281zm0-5.4688c4.1133 0 7.3281 1.1094 9.6406 3.3281s3.4688 5.2969 3.4688 9.2344c0 3.9297-1.1562 7.0078-3.4688 9.2344-2.3125 2.2188-5.5273 3.3281-9.6406 3.3281-4.1367 0-7.3711-1.1094-9.7031-3.3281-2.3242-2.2266-3.4844-5.3047-3.4844-9.2344 0-3.9375 1.1602-7.0156 3.4844-9.2344 2.332-2.2188 5.5664-3.3281 9.7031-3.3281z" />
                        </symbol>
                      </defs>
                      <g>
                        <path d="m537.69 323.75c-3.7617-0.011719-7.418-1.2383-10.426-3.4922-3.0117-2.2539-5.2148-5.4141-6.2852-9.0195-1.2266-3.7617-31.5-95.812-170.98-95.812s-169.75 92.051-170.98 96.25c-1.8125 5.9844-6.6797 10.551-12.773 11.973-6.0898 1.4219-12.477-0.51172-16.754-5.0742s-5.7969-11.062-3.9844-17.051c1.4883-5.25 38.238-121.1 204.49-121.1s203 115.85 204.49 120.84c1.3242 4.4805 0.80078 9.3008-1.4531 13.395-2.25 4.0898-6.043 7.1133-10.535 8.3945-1.5703 0.42578-3.1875 0.66016-4.8125 0.69922zm-101.24-4.375c0.023437-22.934-9.0664-44.934-25.27-61.164-16.199-16.23-38.188-25.359-61.121-25.375-22.934-0.015626-44.934 9.082-61.156 25.293-16.227 16.207-25.344 38.195-25.352 61.129-0.007812 22.934 9.0977 44.93 25.309 61.148 16.215 16.219 38.207 25.332 61.141 25.332 22.906-0.023437 44.867-9.1289 61.074-25.316 16.203-16.188 25.328-38.141 25.375-61.047zm-35 0c0 13.645-5.418 26.73-15.07 36.379-9.6484 9.6523-22.734 15.07-36.379 15.07s-26.73-5.418-36.379-15.07c-9.6523-9.6484-15.07-22.734-15.07-36.379s5.418-26.73 15.07-36.379c9.6484-9.6523 22.734-15.07 36.379-15.07s26.73 5.418 36.379 15.07c9.6523 9.6484 15.07 22.734 15.07 36.379z" />
                      </g>
                    </svg>
                  </div>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="login-password"
                  value={loginState.password}
                  autoComplete="current-password"
                  onChange={(event) =>
                    setLoginState((prev) => ({
                      ...prev,
                      password: event.target.value,
                    }))
                  }
                  // onBlur={() => blurCheck("password")(loginState.password)}
                /> */}
                <PasswordInput<TloginState>
                  autoComplete="current-password"
                  htmlFor="login-password"
                  id="login-password"
                  label="password"
                  name="login-password"
                  password={loginState.password}
                  setState={setLoginState}
                />
                <div className={styles["password-util"]}>
                  <div>
                    <div>
                      <label
                        className={styles["login-remember-label"]}
                        htmlFor="login-remember"
                      >
                        remember me
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className={styles["login-remember-checkbox"]}
                        name="remember"
                        id="login-remember"
                        checked={loginState.saveLoginInfo}
                        onChange={(event) =>
                          setLoginState((prev) => ({
                            ...prev,
                            saveLoginInfo: event.target.checked,
                          }))
                        }
                      />
                    </div>
                  </div>
                  <div>i forgot my password</div>
                </div>
                <p
                  id="login-password-error"
                  className={`${styles["login-password-error"]} login-password-error`}
                ></p>
              </div>
              <div>
                <button
                  className={`${styles["login-page-login-button"]} ${styles["primary-login-button"]}`}
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
            <div className={styles["secondary-login-container"]}>
              <button
                onClick={async () => await signIn("github")}
                className={`${styles["primary-login-button"]} ${styles["secondary-login-button"]}`}
              >
                <div
                  className={`${styles["login-button-flex"]} ${styles["login-button-google"]}`}
                >
                  <div>
                    <svg
                      x="0px"
                      y="0px"
                      width="25"
                      height="25"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                      />
                    </svg>
                  </div>
                  <div>login with github</div>
                </div>
              </button>
            </div>
            <div className={styles["secondary-login-container"]}>
              <button
                className={`${styles["primary-login-button"]} ${styles["secondary-login-button"]}`}
              >
                <div
                  className={`${styles["login-button-flex"]} ${styles["login-button-outlook"]}`}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="25"
                      height="25"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#ff5722"
                        d="M6 6H22V22H6z"
                        transform="rotate(-180 14 14)"
                      ></path>
                      <path
                        fill="#4caf50"
                        d="M26 6H42V22H26z"
                        transform="rotate(-180 34 14)"
                      ></path>
                      <path
                        fill="#ffc107"
                        d="M26 26H42V42H26z"
                        transform="rotate(-180 34 34)"
                      ></path>
                      <path
                        fill="#03a9f4"
                        d="M6 26H22V42H6z"
                        transform="rotate(-180 14 34)"
                      ></path>
                    </svg>
                  </div>
                  <div>login with outlook</div>
                </div>
              </button>
            </div>
            <div className={styles["secondary-login-container"]}>
              <button
                className={`${styles["primary-login-button"]} ${styles["secondary-login-button"]}`}
              >
                <div
                  className={`${styles["login-button-flex"]} ${styles["login-button-linkedin"]}`}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="25"
                      height="25"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#0078d4"
                        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
                      ></path>
                      <path
                        d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                        opacity=".05"
                      ></path>
                      <path
                        d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                        opacity=".07"
                      ></path>
                      <path
                        fill="#fff"
                        d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                      ></path>
                    </svg>
                  </div>
                  <div>login with linkedin</div>
                </div>
              </button>
            </div>
            <p className={styles["login-signup-referrer-container"]}>
              don't have an account?
              <Link href={"signup"}>join us know</Link>
            </p>
          </main>
        </div>
        <footer>
          <SecondaryFooter />
        </footer>
      </div>
    </>
  );
};

export default LoginPagePresenter;
