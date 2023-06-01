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
};
