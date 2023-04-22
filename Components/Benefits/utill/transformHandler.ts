const handleBenefitScroll = () => {
  let transformValue: number = -160;
  let increasing: boolean = false;
  let interval: NodeJS.Timeout;
  let timeout: NodeJS.Timer;

  const calculateTransformValue = () => {
    if (increasing) {
      if (transformValue == 0) {
        transformValue = -160;
        increasing = false;
      } else {
        transformValue += 160;
      }
    } else {
      if (transformValue == -480) {
        transformValue = -320;
        increasing = true;
      } else {
        transformValue -= 160;
      }
    }
  };

  interval = setInterval(() => {
    const current = document.getElementById("current");
    const next = document.getElementById("next");

    if (current && next) {
      current.style.transform = `translateY(${transformValue}px)`;
      next.style.transform = `translateY(${transformValue}px)`;
      timeout = setTimeout(() => {
        calculateTransformValue();
        const nextt = increasing
          ? next.previousElementSibling ??
            document.getElementById("benefits-title-container")
              ?.lastElementChild
          : next.nextElementSibling ??
            document.getElementById("benefits-title-container")
              ?.firstElementChild;

        current.removeAttribute("id");
        nextt?.setAttribute("id", "next");
        next?.setAttribute("id", "current");
      }, 2000);
    }
  }, 4000);
};

export const intersectionHandler = (
  entries: IntersectionObserverEntry[]
): void => {
  const entry: IntersectionObserverEntry = entries[0];
  const isInView: boolean = entry.isIntersecting;
  if (isInView) handleBenefitScroll();
  return;
};
