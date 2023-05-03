import { useEffect } from "react";
import { intersectionHandler } from "../utill/transformHandler";
import BenefitsPresenter from "../presenter/BenefitsPresenter";

const BenefitsContainer = () => {
  const initIntersectionObserver = (
    target: Element | null
  ): IntersectionObserver | null => {
    if (target == null) {
      console.error("benefits section wrapper was not found.");
      return null;
    }
    const options: IntersectionObserverInit = {
      root: null,
      threshold: 1.0,
      rootMargin: "0px",
    };
    const intersectionOberver: IntersectionObserver = new IntersectionObserver(
      intersectionHandler,
      options
    );
    return intersectionOberver;
  };

  const indicatorInitializer = (indicator: Element | null): void => {
    indicator?.addEventListener("click", (event) => {
      const target: Element | null = event.target as Element;
      const currentTarget: Element | null = event.currentTarget as Element;
      if (Object.is(currentTarget, target)) {
        return;
      }
      const className: DOMTokenList = target.classList;
      if (className.contains("benefits-counter-active")) {
        return;
      } else {
        target.classList.remove("benefits-counter-deactive");
        target.classList.add("benefits-counter-active");
        let ch: any = null;
        indicator.childNodes.forEach((child) => {
          if (ch === null) {
            const childElem = child as Element;
            ch = childElem.classList.contains("benefits-counter-active")
              ? childElem
              : null;
          }
        });
        if (ch instanceof Element) {
          ch.classList.remove("benefits-counter-active");
          ch.classList.add("benefits-counter-deactive");
        }
      }
    });
  };

  useEffect(() => {
    const target: Element | null = document.querySelector("#benefit-container");
    const observer: any = initIntersectionObserver(target);
    if (observer instanceof IntersectionObserver) {
      // @ts-ignore if target is null then observer won't be an instance of IntersectionObsrrver
      observer.observe(target);
    }

    const indicator: Element | null =
      document.getElementById("benefits-counter");

    indicatorInitializer(indicator);

    () => {
      observer?.disconnect();
    };
  }, []);
  return <BenefitsPresenter />;
};

export default BenefitsContainer;
