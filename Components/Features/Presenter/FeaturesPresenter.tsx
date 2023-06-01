import FeaturesLarge from "./Features.large";
import FeaturesSmall from "./Features.small";

interface IfeaturesPresenter {
  isDeviceSmall: boolean;
}

const FeaturesPresenter: React.FC<IfeaturesPresenter> = ({ isDeviceSmall }) => {
  return <>{isDeviceSmall ? <FeaturesSmall /> : <FeaturesLarge />}</>;
};

export default FeaturesPresenter;
