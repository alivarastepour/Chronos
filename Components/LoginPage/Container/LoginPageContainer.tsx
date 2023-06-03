import { useState } from "react";
import LoginPagePresenter from "../Presenter/LoginPagePresenter";
import type { TloginState } from "../TloginState";
import { useSession, signIn, signOut } from "next-auth/react";

const LoginPageContainer = () => {
  const [loginState, setLoginState] = useState<TloginState>({
    username: "",
    password: "",
    saveLoginInfo: false,
  });

  const { data: session } = useSession();
  console.log(session);

  return (
    <LoginPagePresenter
      loginState={loginState}
      setLoginState={setLoginState} 
      loginToGoogle={signIn}
    />
  );
};

export default LoginPageContainer;
