import Benefits from "../Benefits/Benefits";
import Header from "../Header/Header";
import Overview from "../Overview/Overview";
import Plans from "../Plans/Plans";
import Trust from "../Trust/Trust";
import Agile from "../Agile/Agile";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />

      <Overview />

      <Benefits />

      <Plans />

      <Trust />

      <Agile />
    </>
  );
};
export default LandingPage;
