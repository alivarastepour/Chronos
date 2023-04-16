import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const LandingPage = () => {
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
        <div className="title">comming soon...</div>
      </div>
    </>
  );
};
export default LandingPage;
