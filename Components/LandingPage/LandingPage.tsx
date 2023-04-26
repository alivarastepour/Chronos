import Benefits from "../Benefits/Benefits";
import Header from "../Header/Header";
import Overview from "../Overview/Overview";
import Plans from "../Plans/Plans";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />

      <Overview />

      <Benefits />

      <Plans />
    </>
  );
};
export default LandingPage;
