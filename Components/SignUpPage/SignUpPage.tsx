import styles from "@/styles/SignUpPage/signUpPage.module.scss";
import Image from "next/image";
import logo from "@/public/logo.png";
import { inter } from "@/public/Fonts";
import Link from "next/link";
import SecondaryFooter from "../SecondaryFooter/SecondaryFooter";
import { MouseEventHandler, useState } from "react";
import FirstStage from "./FirstStage";
import SecondStage from "./SecondStage";
import ThirdStage from "./ThirdStage";

const SignUpPage: React.FC = () => {
  const [signUpStage, setSignUpStage] = useState(1);

  const prevStage: React.MouseEventHandler<HTMLButtonElement> = () => {
    setSignUpStage((prev) => --prev);
  };

  const nextStage: React.MouseEventHandler<HTMLButtonElement> = () => {
    setSignUpStage((prev) => ++prev);
  };

  const handleSignUpStageChange = (state: "next" | "prev") => {
    return state === "next" ? nextStage : prevStage;
  };

  const getCurrentStageForm = () => {
    if (signUpStage == 1) {
      return <FirstStage handleSignUpStageChange={handleSignUpStageChange} />;
    } else if (signUpStage == 2) {
      return <SecondStage handleSignUpStageChange={handleSignUpStageChange} />;
    } else if (signUpStage == 3) {
      return <ThirdStage handleSignUpStageChange={handleSignUpStageChange} />;
    } else {
      return <div>error bitch</div>;
    }
  };

  const getStageHolderClassName = (state: number) => {
    return state === signUpStage
      ? "signup-stage-active"
      : "signup-stage-deactive";
  };

  return (
    <>
      <div className={`${styles["login-page-wrapper"]} ${inter.className}`}>
        {/* <div className={styles["login-page-logo"]}>Chronos</div> */}
        <div className={styles["login-page-flex-wrapper"]}>
          <div className={styles["login-page-logo-wrapper"]}>
            <Image
              src={logo}
              alt="Chronos logo"
              className={styles["login-page-logo"]}
            />
            <div className={styles["login-page-logo-subtitle"]}>
              manage your time like you are the god of it
            </div>
          </div>
          <main className={styles["login-page-login-form-container"]}>
            <div className={styles["signup-header-wrapper"]}>
              <h1 className={styles["login-title"]}>Create your account</h1>
              <div className={styles["signup-stage-holder"]}>
                <div data-current={1} className={getStageHolderClassName(1)}>
                  1
                </div>
                <div data-current={2} className={getStageHolderClassName(2)}>
                  2
                </div>
                <div data-current={3} className={getStageHolderClassName(3)}>
                  3
                </div>
              </div>
            </div>
            {getCurrentStageForm()}
            <div className={styles["secondary-login-container"]}>
              <button
                className={`${styles["primary-login-button"]} ${styles["secondary-login-button"]}`}
              >
                <div
                  className={`${styles["login-button-flex"]} ${styles["login-button-google"]}`}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      preserveAspectRatio="xMidYMid"
                      viewBox="0 0 256 262"
                      id="google"
                    >
                      <path
                        fill="#4285F4"
                        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                      ></path>
                      <path
                        fill="#34A853"
                        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                      ></path>
                      <path
                        fill="#FBBC05"
                        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                      ></path>
                      <path
                        fill="#EB4335"
                        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                      ></path>
                    </svg>
                  </div>
                  <div>login with google</div>
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
              <Link href="/">join us know</Link>
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

export default SignUpPage;
