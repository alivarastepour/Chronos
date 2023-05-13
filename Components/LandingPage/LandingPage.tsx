import Benefits from "../Benefits/Container/BenefitsContainer";
import Header from "../Header/Header";
import Overview from "../Overview/Overview";
import Plans from "../Plans/Plans";
import Trust from "../Trust/Trust";
import Agile from "../Agile/Agile";
import Footer from "../Footer/Footer";
import Features from "../Features/Features";
import CookiesTOS from "../CookiesTOS/CookiesTOS";
import FastJoin from "../FastJoin/FastJoin";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />

      <Overview />

      {/* <Benefits /> */}
      <Features />

      <Plans />

      <Trust />

      <Agile />

      <FastJoin />

      <Footer />

      <CookiesTOS />
    </>
  );
};
export default LandingPage;
