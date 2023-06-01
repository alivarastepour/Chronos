import useMediaQuery from "@/Components/Hooks/useMediaQuery";
import FeaturesPresenter from "../Presenter/FeaturesPresenter";

const FeaturesContainer = () => {
  const [isDeviceSmall] = useMediaQuery({ queries: [{ "max-width": 700 }] });

  return <FeaturesPresenter isDeviceSmall={isDeviceSmall} />;
};

export default FeaturesContainer;
