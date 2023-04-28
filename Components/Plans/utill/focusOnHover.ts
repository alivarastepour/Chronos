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

export const focusOnHover = (): void => {
  ["plans-counter-", "card-wrapper-"].forEach((classname: string) => {
    SELECTORS.forEach((selctor: string) => {
      const element: Element | null = document.getElementById(
        `${classname}${selctor}`
      );
      element?.addEventListener("click", changeEffect);
    });
  });
};
