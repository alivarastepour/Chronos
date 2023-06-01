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

const swipeTheContainer = (
  container: HTMLElement,
  direction: TdirectionSign
) => {
  const swipeAmount = container.scrollWidth / container.childElementCount;
  container.childNodes.forEach((child) => {
    (child as HTMLElement).style.transform = `translateX(${direction}${
      swipeCoefficient * swipeAmount
    }px)`;
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
