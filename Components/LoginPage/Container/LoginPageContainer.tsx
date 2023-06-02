import { useState } from "react";
import LoginPagePresenter from "../Presenter/LoginPagePresenter";
import type { TloginState } from "../TloginState";

const LoginPageContainer = () => {
  const [loginState, setLoginState] = useState<TloginState>({
    username: "",
    password: "",
    saveLoginInfo: false,
  });
  return (
    <LoginPagePresenter loginState={loginState} setLoginState={setLoginState} />
  );
};

export default LoginPageContainer;
