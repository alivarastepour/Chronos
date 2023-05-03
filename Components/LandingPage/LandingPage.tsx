import Benefits from "../Benefits/Container/BenefitsContainer";
import Header from "../Header/Header";
import Overview from "../Overview/Overview";
import Plans from "../Plans/Plans";
import Trust from "../Trust/Trust";
import Agile from "../Agile/Agile";
import Footer from "../Footer/Footer";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />

      <Overview />

      <Benefits />

      <Plans />

      <Trust />

      <Agile />

      <Footer />
    </>
  );
};
export default LandingPage;
