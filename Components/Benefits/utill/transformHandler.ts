interface scrollParameters {
  minTransformValue: number;
  maxTransformValue: number;
  steps: number;
  direction: "horizontal" | "vertical";
  currentElementID: string;
  nextElementID: string;
  parentElementID: string;
  timerCycle: number;
  intervalCycle: number;
}

export const handleScroll = ({
  minTransformValue,
  maxTransformValue,
  steps,
  direction,
  currentElementID,
  nextElementID,
  parentElementID,
  timerCycle,
  intervalCycle,
}: scrollParameters) => {
  let transformValue: number = -steps;
  let increasing: boolean = false;
  let interval: NodeJS.Timeout | undefined = undefined;
  let timeout: NodeJS.Timer | undefined = undefined;

  const calculateTransformValue = () => {
    if (increasing) {
      if (transformValue >= maxTransformValue) {
        transformValue = -steps;
        increasing = false;
      } else {
        transformValue += steps;
      }
    } else {
      if (transformValue <= minTransformValue) {
        transformValue = minTransformValue + steps;
        increasing = true;
      } else {
        transformValue -= steps;
      }
    }
  };

  // if (isCloclTicking) {
  interval = setInterval(() => {
    const current = document.getElementById(currentElementID);
    const next = document.getElementById(nextElementID);

    if (current && next) {
      if (direction == "horizontal") {
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

export const intersectionHandler = (
  entries: IntersectionObserverEntry[]
): void => {
  const entry: IntersectionObserverEntry = entries[0];
  const isInView: boolean = entry.isIntersecting;
  if (isInView) {
    const titlesCount =
      document.getElementById("benefits-title-container")?.childElementCount ??
      0;
    const contentsCount =
      document.getElementById("benefits-content-container")
        ?.childElementCount ?? 0;
    const beneftisCount = Math.max(contentsCount, titlesCount);

    const titlesScrollHeight =
      document.getElementById("benefits-title-container")?.scrollHeight ?? 0;
    const contentsScrollWidth =
      document.getElementById("benefits-content-container")?.scrollWidth ?? 0;

    const titleHeight = titlesScrollHeight / titlesCount;
    const contentWidth = contentsScrollWidth / contentsCount;

    const minTitle = -(titleHeight * (beneftisCount - 1));
    const minContent = -(contentWidth * (beneftisCount - 1));
    const timerCycle = 500;
    const intervalCycle = 1000;
    const scrollTitle: scrollParameters = {
      minTransformValue: minTitle,
      maxTransformValue: 0,
      steps: titleHeight,
      direction: "vertical",
      currentElementID: "current-title",
      nextElementID: "next-title",
      parentElementID: "benefits-title-container",
      timerCycle,
      intervalCycle,
    };
    const scrollContent: scrollParameters = {
      minTransformValue: minContent,
      maxTransformValue: 0,
      steps: contentWidth,
      direction: "horizontal",
      currentElementID: "current-content",
      nextElementID: "next-content",
      parentElementID: "benefits-content-container",
      timerCycle,
      intervalCycle,
    };
    handleScroll({ ...scrollTitle });
    handleScroll({ ...scrollContent });
  }
};
