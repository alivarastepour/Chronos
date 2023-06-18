import LoginPage from "@/Components/LoginPage/Container/LoginPageContainer";
import Head from "next/head";

const Login = () => {
  return (
    <>
      <Head>
        <title>Chronos | Login To Your Account</title>
        <meta
          name="description"
          content="login to your chronos account using an already created one or a provider. signup if you don't have an account."
        />
      </Head>
      <LoginPage />
    </>
  );
};

export default Login;
