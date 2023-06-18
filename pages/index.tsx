import LandingPage from "@/Components/LandingPage/LandingPage";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Chronos | Manage Your Time Like You Are The God Of It.</title>
        <meta
          name="description"
          content="chronos is a web-based management tool that helps your organization to manage tasks in an efficient way."
        />
      </Head>
      <LandingPage />
    </>
  );
};
export default Home;
