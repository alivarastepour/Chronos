type Tdirection = "left" | "right";
type TdirectionSign = "-" | "+";

let swipeCoefficient: number = 1;

const get = (id: string) => document.getElementById(id);

const getSwipeDispathcers = (): HTMLElement[] => {
  const leftDispatcher = get("features-small-arrow-left");
  const rightDispatcher = get("features-small-arrow-right");
  return [leftDispatcher as HTMLElement, rightDispatcher as HTMLElement];
};

const getSwipeTargets = (): HTMLElement[] => {
  const imageContainer = get("features-small-image-container");
  const contentContainer = get("features-small-content-container");
  return [imageContainer as HTMLElement, contentContainer as HTMLElement];
};

const getSwipeDirectionFromDispatcher = (target: Element): Tdirection => {
  return target.id.includes("right") ? "right" : "left";
};

const getDirectionSign = (direction: Tdirection): TdirectionSign => {
  return direction === "right" ? "-" : "+";
};

const getCurrentTransformValue = (
  value: string,
  direction: TdirectionSign,
  constantTransformValue: number
) => {
  const prevValue = value.trim() === "" ? 0 : +value.split("(")[1].slice(0, -3);
  return direction === "+"
    ? prevValue + constantTransformValue
    : prevValue - constantTransformValue;
};

const swipeTheContainer = (
  container: HTMLElement,
  direction: TdirectionSign
) => {
  const swipeAmountConstant =
    container.scrollWidth / container.childElementCount;
  container.childNodes.forEach((child) => {
    const childHTMLElement = child as HTMLElement;
    const transformValue = getCurrentTransformValue(
      childHTMLElement.style.transform,
      direction,
      swipeAmountConstant
    );
    (child as HTMLElement).style.transform = `translateX(${transformValue}px)`;
  });
};

const swipeHandler = (event: MouseEvent) => {
  const direction = getSwipeDirectionFromDispatcher(
    event.currentTarget as Element
  );
  const directionSign = getDirectionSign(direction);

  const [imageContainer, contentContainer] = getSwipeTargets();

  swipeTheContainer(imageContainer, directionSign);
  swipeTheContainer(contentContainer, directionSign);
};

export const handleSwipeEffect = () => {
  const swipeDispatchers = getSwipeDispathcers();
  swipeDispatchers.forEach((swipeDispatcher) =>
    swipeDispatcher.addEventListener("click", swipeHandler)
  );
};
