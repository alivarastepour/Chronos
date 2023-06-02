import { useState } from "react";
import LoginPagePresenter from "../Presenter/LoginPagePresenter";

const LoginPageContainer = () => {
  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
    saveLoginInfo: false,
  });
  return <LoginPagePresenter />;
};

export default LoginPageContainer;
