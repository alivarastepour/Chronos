let isClockTicking = false; // if true, the timer and interval used for auto scroll behaviour should be active, else should be cleared
let transformValueH = -1; // a global variable to keep track of the transform value in horizontal direction
let transformValueV = -1; // a global variable to keep track of the transform value in vertival direction
let increasing: boolean = false; // if true, the scroll is in backward mode

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
// initializes the transform values: transformValue, transformValueH and transformValueV based on previous events.
// @ts-ignore
const initTransformValues = (direction, steps) => {
  let transformValue = 0;
  if (direction == "horizontal") {
    if (transformValueH == -1) {
      // if there is no value held for later scrolls, init it with the proper value
      transformValue = -steps;
      transformValueH = -steps;
    } else {
      // if there is a value held for later scroll, use it.
      transformValue = transformValueH;
    }
  } else {
    if (transformValueV == -1) {
      transformValue = -steps;
      transformValueV = -steps;
    } else {
      transformValue = transformValueV;
    }
  }
  return transformValue;
};

// calculates how much a specific container should move
const calculateTransformValues = (
  transformValue: any,
  maxTransformValue: any,
  minTransformValue: any,
  steps: any,
  direction: any
) => {
  if (increasing) {
    if (transformValue >= maxTransformValue) {
      // if reached the maximum allowed amount for transform value, reset it
      transformValue = -steps;
      if (direction == "horizontal") {
        transformValueH = transformValue;
      } else {
        transformValueV = transformValue;
      }
      increasing = false;
    } else {
      transformValue += steps;
      if (direction == "horizontal") {
        transformValueH = transformValue;
      } else {
        transformValueV = transformValue;
      }
    }
  } else { // if reached the minimum allowed amount for transform value, reset it
    if (transformValue <= minTransformValue) {
      transformValue = minTransformValue + steps;
      if (direction == "horizontal") {
        transformValueH = transformValue;
      } else {
        transformValueV = transformValue;
      }
      increasing = true;
    } else {
      transformValue -= steps;
      if (direction == "horizontal") {
        transformValueH = transformValue;
      } else {
        transformValueV = transformValue;
      }
    }
  }
  return transformValue;
};

// handles the main procedure for auto scrolling.
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
  let transformValue: number = initTransformValues(direction, steps);
  let interval: NodeJS.Timeout | undefined = undefined;
  let timeout: NodeJS.Timer | undefined = undefined;

  interval = setInterval(() => { // if there is no intersection, clear the timeout and the interval
    if (!isClockTicking) {
      clearInterval(interval);
      clearTimeout(timeout);
    }

    const current = document.getElementById(currentElementID);
    const next = document.getElementById(nextElementID);

    if (current && next) {
      // transform the proper container using translate
      if (direction == "horizontal") {
        current.style.transform = `translateX(${transformValue}px)`;
        next.style.transform = `translateX(${transformValue}px)`;
      } else {
        current.style.transform = `translateY(${transformValue}px)`;
        next.style.transform = `translateY(${transformValue}px)`;
      }
      timeout = setTimeout(() => {
        transformValue = calculateTransformValues(
          transformValue,
          maxTransformValue,
          minTransformValue,
          steps,
          direction
        );
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
    isClockTicking = true;
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
  } else {
    isClockTicking = false;
  }
};
