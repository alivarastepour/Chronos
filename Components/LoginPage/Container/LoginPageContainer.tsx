import { useState } from "react";
import LoginPagePresenter from "../Presenter/LoginPagePresenter";
import type { TloginState } from "../TloginState";
import { useSession, signIn } from "next-auth/react";

const LoginPageContainer = () => {
  const [loginState, setLoginState] = useState<TloginState>({
    username: "",
    password: "",
    saveLoginInfo: false,
  });

  const session = useSession();
  console.log(session);

  return (
    <LoginPagePresenter
      loginState={loginState}
      setLoginState={setLoginState}
      signIn={signIn}
    />
  );
};

export default LoginPageContainer;
