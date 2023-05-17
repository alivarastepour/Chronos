type swipeDir = "left" | "right";

const changeHeader = (target: Element): void => {
  if (target.classList.contains("features-selected")) return;

  const parent: Element = document.getElementById("features-header") as Element;

  for (let i = 0; i < parent.childElementCount; i++) {
    const child: Element = parent.children[i];
    if (child.classList.contains("features-selected")) {
      child.classList.remove("features-selected");
      child.classList.add("features-not-selected");
      break;
    }
  }

  target.classList.add("features-selected");
  target.classList.remove("features-not-selected");
};

const getCurrent = (): string | never => {
  const parent = document.getElementById("features-counter") as Element;
  for (let i = 0; i < parent.childElementCount; i++) {
    const current: Element = parent.children[i];
    if (current.classList.contains("features-counter-active")) {
      const id: string = current.id;
      const ids: string[] = id.split("-");
      return ids[ids.length - 1];
    }
  }
  throw Error("features counter element must have been changed intentionally.");
};

const getNext = (dir: swipeDir, current: number): number => {
  let next: number = 0;

  if (dir == "left") {
    next = current - 1;
    if (next < 0) next = 5;
  } else {
    next = current + 1;
    if (next > 5) next = 0;
  }

  return next;
};

const changeContentOnSwipe = (
  direction: swipeDir,
  distance: number,
  setContent: Function
): void => {
  if (Math.abs(distance) < 40) return;

  direction = getDirection(distance);

  const current: number = +getCurrent() - 1;
  const next: number = getNext(direction, current);

  setContent(next);
};

const getDirection = (distance: number): swipeDir => {
  return distance < 0 ? "right" : "left";
};

const handleSwipeEvents = (parent: HTMLElement, setContent: Function): void => {
  let screenStartX: number = 0;
  let screenStartY: number = 0;
  let direction: swipeDir;

  parent.addEventListener(
    "touchstart",
    (event: TouchEvent) => {
      screenStartX = event.targetTouches[0].screenX;
    },
    { passive: true }
  );

  parent.addEventListener(
    "touchend",
    (event: TouchEvent) => {
      screenStartY = event.changedTouches[0].screenX;

      const distance: number = screenStartY - screenStartX;

      changeContentOnSwipe(direction, distance, setContent);
    },
    { passive: true }
  );
};

const handleClickEvents = (parent: Element, setContent: Function): void => {
  parent.addEventListener("click", (event) => {
    const target: Element | null = event.target as Element;
    const targetID: string = target.id;

    const onHeader: boolean = targetID.startsWith("feature-header-");
    const onCounter: boolean = targetID.startsWith("features-counter-");

    if (!onHeader && !onCounter) return;

    if (onHeader) changeHeader(target);

    const num: string[] = targetID.split("-");
    const selected = num[num.length - 1];
    setContent(+selected - 1);
  });
};

export const handleChangeContent = (setContent: Function): void => {
  const parent: HTMLElement | null =
    document.getElementById("features-wrapper");

  handleClickEvents(parent as Element, setContent);

  handleSwipeEvents(parent as HTMLElement, setContent);
};
