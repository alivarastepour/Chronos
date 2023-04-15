import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          fontFamily: inter.style.fontFamily,
          fontSize: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>comming soon...</div>
      </div>
    </>
  );
};
export default Home;
