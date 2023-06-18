import SignUpPage from "@/Components/SignUpPage/Container/SignUpPageContaienr";
import Head from "next/head";

const Login = () => {
  return (
    <>
      <Head>
        <title>Chronos | Sign Up</title>
        <meta
          name="description"
          content="signup for a chronos account; prepare for changes in your department! login if you already have an account"
        />
      </Head>
      <SignUpPage />
    </>
  );
};

export default Login;
