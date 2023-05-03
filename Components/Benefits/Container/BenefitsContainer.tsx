import { useEffect } from "react";
import { intersectionHandler } from "../utill/transformHandler";
import BenefitsPresenter from "../presenter/BenefitsPresenter";

const BenefitsContainer = () => {
  useEffect(() => {
    const target: Element | null = document.querySelector("#benefit-container");
    if (target !== null) {
      const options: IntersectionObserverInit = {
        root: null,
        threshold: 1.0,
        rootMargin: "0px",
      };
      const intersectionOberver: IntersectionObserver =
        new IntersectionObserver(intersectionHandler, options);
      intersectionOberver.observe(target);
      () => {
        intersectionOberver.disconnect();
      };
    }
  }, []);
  return <BenefitsPresenter />;
};

export default BenefitsContainer;
