const SELECTORS: string[] = ["1", "2", "3"];

const removePrevEffects = (items: string[], selector: string): void => {
  items.forEach((item: string) => {
    const id: string = `card-wrapper-${item}`;
    const element: Element | null = document.getElementById(id);
    const classNames: DOMTokenList | undefined = element?.classList;
    let remove: string[] = [];
    classNames?.forEach((className: string) => {
      if (className.startsWith(selector)) remove.push(className);
    });
    element?.classList.remove(...remove);
  });
};

const changeActiveCounter = (target: string): void => {
  SELECTORS.forEach((selector: string) => {
    document
      .getElementById(`plans-counter-${selector}`)
      ?.classList.add(
        target === selector ? "counter-active" : "counter-deactive"
      );

    document
      .getElementById(`plans-counter-${selector}`)
      ?.classList.remove(
        target === selector ? "counter-deactive" : "counter-active"
      );
  });
};

const changeEffect = (event: Event): void => {
  const target: Element = event.currentTarget as Element;
  const targetID: string = target.id;
  const ID: string = targetID[targetID.length - 1];
  const element: Element | null = document.getElementById(`card-wrapper-${ID}`);
  const activeSelector: "left" | "right" | "mid" =
    ID === "1" ? "left" : ID === "2" ? "mid" : "right";

  if (element?.classList.contains(`active-${activeSelector}`)) return;

  changeActiveCounter(ID);

  removePrevEffects(SELECTORS, "deactive-");

  if (targetID.endsWith("1")) {
    removePrevEffects(["2", "3"], "active-");

    element?.classList.add("active-right");

    document.getElementById("card-wrapper-2")?.classList.add("deactive-right");
    document.getElementById("card-wrapper-3")?.classList.add("deactive-right");
  } else if (targetID.endsWith("2")) {
    removePrevEffects(["1", "3"], "active-");

    element?.classList.add("active-mid");

    document.getElementById("card-wrapper-1")?.classList.add("deactive-left");
    document.getElementById("card-wrapper-3")?.classList.add("deactive-right");
  } else if (targetID.endsWith("3")) {
    removePrevEffects(["1", "2"], "active-");

    element?.classList.add("active-left");

    document.getElementById("card-wrapper-1")?.classList.add("deactive-left");
    document.getElementById("card-wrapper-2")?.classList.add("deactive-left");
  } else {
    console.error("an unknown element is being detected.");
  }
};

type directionKeys = "1" | "2" | "3";
type directionValues = "left" | "mid" | "right";

type changeDirection = {
  [key in directionKeys]: directionValues;
};

const getChangeDirection = (
  targetPosition: keyof changeDirection
): directionValues => {
  const positionMap: changeDirection = { 1: "right", 2: "mid", 3: "left" };
  return positionMap[targetPosition];
};

const getOppositeDirection = (dir: directionValues) => {
  switch (dir) {
    case "left":
      return "right";
    case "mid":
      return "mid";
    case "right":
      return "left";
  }
};

const focusOnTarget = (target: Element, dir: directionValues) => {
  target.classList.add(`active-${dir}`);
  target.classList.remove(`deactive-${getOppositeDirection(dir)}`);
};

const removeFocusOnPrevTarget = (
  parent: HTMLElement,
  changeDirection: directionValues
) => {
  // parent.childNodes.forEach((child) => {
  //   const childClassList: DOMTokenList = (child as Element).classList;
  //   if (childClassList.contains("active-left")) {
  //     childClassList.remove("active-left");
  //     childClassList.add("deactive-right");
  //   } else if (childClassList.contains("active-mid")) {
  //     childClassList.remove("active-mid");
  //     childClassList.add("deactive-mid");
  //   } else if (childClassList.contains("active-right")) {
  //     childClassList.remove("active-right");
  //     childClassList.add("deactive-left");
  //   }
  // });
};

const effectChange = (event: Event) => {
  const target: Element = event.currentTarget as Element;
  const targetID: string = target.id;
  const targetIDLength = targetID.length;
  const targetPosition = targetID[targetIDLength - 1] as directionKeys;
  const changeDirection = getChangeDirection(targetPosition);
  const indirectTargetID = targetID.startsWith("card-wrapper-")
    ? `plans-counter-${targetPosition}`
    : `card-wrapper-${targetPosition}`;
  const indirectTarget = get(indirectTargetID) as Element;
  const targetParent = target.parentElement as HTMLElement;
  const indirectTargetParent = indirectTarget.parentElement as HTMLElement;

  removeFocusOnPrevTarget(targetParent, changeDirection);
  removeFocusOnPrevTarget(indirectTargetParent, changeDirection);

  console.log(changeDirection);

  focusOnTarget(target, changeDirection);
  focusOnTarget(indirectTarget, changeDirection);
};

const getFocusTargets = (): string[] => {
  const targets: string[] = [];
  ["plans-counter-", "card-wrapper-"].forEach((classname: string) => {
    SELECTORS.forEach((selctor: string) => {
      targets.push(`${classname}${selctor}`);
    });
  });
  return targets;
};

const get = (elementID: string): Element | null => {
  return document.getElementById(elementID);
};

export const focusOnHover = (): void => {
  const targets: string[] = getFocusTargets();

  const elements: Element[] = targets.map(
    (target: string) => get(target) as Element
  );

  elements.forEach((element: Element) =>
    element.addEventListener("click", effectChange)
  );
};
