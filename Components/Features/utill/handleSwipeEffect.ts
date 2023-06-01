const get = (id: string) => document.getElementById(id);

const getSwipeDispathcers = (): HTMLElement[] => {
  const leftDispatcher = get("features-small-arrow-left");
  const rightDispatcher = get("features-small-arrow-right");
  return [leftDispatcher as HTMLElement, rightDispatcher as HTMLElement];
};

const swipeHandler = (event: MouseEvent) => {
  const target = event.currentTarget as Element;
  
};

export const handleSwipeEffect = () => {
  const swipeDispatchers = getSwipeDispathcers();
  swipeDispatchers.forEach((swipeDispatcher) =>
    swipeDispatcher.addEventListener("click", swipeHandler)
  );
};
