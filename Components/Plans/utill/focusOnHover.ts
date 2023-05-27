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

const getDeactiveScenarios = (dir: directionValues): directionValues[] => {
  switch (dir) {
    case "left":
      return ["right"];
    case "right":
      return ["left"];
    case "mid":
      return ["left", "right", "mid"];
  }
};

const focusOnCurrentTarget = (target: Element, dir: directionValues): void => {
  target.classList.add(`active-${dir}`);
  const deactives: directionValues[] = getDeactiveScenarios(dir);
  deactives.forEach((scenario: directionValues) =>
    target.classList.remove(`deactive-${scenario}`)
  );
};

const removeFocusOnPrevTarget = (parent: HTMLElement): void => {
  parent.childNodes.forEach((child: ChildNode) => {
    const childClassList: DOMTokenList = (child as Element).classList;
    if (childClassList.contains("active-left")) {
      childClassList.remove("active-left");
      childClassList.add("deactive-right");
    } else if (childClassList.contains("active-mid")) {
      childClassList.remove("active-mid");
      childClassList.add("deactive-mid");
    } else if (childClassList.contains("active-right")) {
      childClassList.remove("active-right");
      childClassList.add("deactive-left");
    }
  });
};

const shiftSecondContaier = (dir: directionValues) => {
  const secondContainer: Element = get("card-wrapper-2") as Element;
  if (dir === "left") {
    secondContainer.classList.add("deactive-left");
    secondContainer.classList.remove("deactive-right");
    secondContainer.classList.remove("deactive-mid");
  } else if (dir === "right") {
    secondContainer.classList.add("deactive-right");
    secondContainer.classList.remove("deactive-left");
    secondContainer.classList.remove("deactive-mid");
  }
};

const effectChange = (event: Event): void => {
  const target: Element = event.currentTarget as Element;
  const targetID: string = target.id;
  const targetIDLength: number = targetID.length;
  const targetPosition: directionKeys = targetID[
    targetIDLength - 1
  ] as directionKeys;
  const changeDirection: directionValues = getChangeDirection(targetPosition);
  const indirectTargetID: string = targetID.startsWith("card-wrapper-")
    ? `plans-counter-${targetPosition}`
    : `card-wrapper-${targetPosition}`;
  const indirectTarget: Element = get(indirectTargetID) as Element;
  const targetParent: HTMLElement = target.parentElement as HTMLElement;
  const indirectTargetParent: HTMLElement =
    indirectTarget.parentElement as HTMLElement;

  removeFocusOnPrevTarget(targetParent);
  removeFocusOnPrevTarget(indirectTargetParent);

  focusOnCurrentTarget(target, changeDirection);
  focusOnCurrentTarget(indirectTarget, changeDirection);

  shiftSecondContaier(changeDirection);
};

const getFocusTargets = (): string[] => {
  const targets: string[] = [];
  ["plans-counter-", "card-wrapper-"].forEach((classname: string) => {
    ["1", "2", "3"].forEach((selctor: string) => {
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
