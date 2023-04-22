export const handleBenefitScroll = (
  minTransformValue: number,
  maxTransformValue: number,
  steps: number,
  direcion: "horizontal" | "vertical",
  currentElementID: string,
  nextElementID: string,
  parentElementID: string,
  timerCycle: number,
  intervalCycle: number
) => {
  let transformValue: number = -steps;
  let increasing: boolean = false;
  let interval: NodeJS.Timeout;
  let timeout: NodeJS.Timer;

  const calculateTransformValue = () => {
    if (increasing) {
      if (transformValue == maxTransformValue) {
        transformValue = -steps;
        increasing = false;
      } else {
        transformValue += steps;
      }
    } else {
      if (transformValue == minTransformValue) {
        transformValue = minTransformValue + steps;
        increasing = true;
      } else {
        transformValue -= steps;
      }
    }
  };

  interval = setInterval(() => {
    const current = document.getElementById(currentElementID);
    const next = document.getElementById(nextElementID);

    if (current && next) {
      if (direcion == "horizontal") {
        current.style.transform = `translateX(${transformValue}px)`;
        next.style.transform = `translateX(${transformValue}px)`;
      } else {
        current.style.transform = `translateY(${transformValue}px)`;
        next.style.transform = `translateY(${transformValue}px)`;
      }
      timeout = setTimeout(() => {
        calculateTransformValue();
        const nextt = increasing
          ? next.previousElementSibling ??
            document.getElementById(parentElementID)?.lastElementChild
          : next.nextElementSibling ??
            document.getElementById(parentElementID)?.firstElementChild;

        current.removeAttribute("id");
        nextt?.setAttribute("id", nextElementID);
        next?.setAttribute("id", currentElementID);
      }, timerCycle);
    }
  }, intervalCycle);
};
