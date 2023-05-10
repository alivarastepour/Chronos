const changeHeader = (target: Element) => {
  if (target.classList.contains("features-selected")) return;

  const parent = document.getElementById("features-header") as Element;

  for (let i = 0; i < parent.childElementCount; i++) {
    const child = parent.children[i];
    if (child.classList.contains("features-selected")) {
      child.classList.remove("features-selected");
      child.classList.add("features-not-selected");
      break;
    }
  }

  target.classList.add("features-selected");
  target.classList.remove("features-not-selected");
};

const changeContentLargeDevice = (id: string, setContent: Function) => {
  const num: string[] = id.split("-");
  const selected = num[num.length - 1];
  setContent(+selected - 1);
};

const changeContentSmallDevice = () => {};

export const changeOnClick = (setContent: Function) => {
  const parent = document.getElementById("features-wrapper");
  parent?.addEventListener("click", (e) => {
    const target: Element | null = e.target as Element;
    const targetID: string = target.id;
    const onHeader: boolean = targetID.startsWith("feature-header-");
    const onCounter: boolean = targetID.startsWith("features-counter-");
    if (!onHeader && !onCounter) return;

    changeContentLargeDevice(targetID, setContent);
    if (onHeader) {
      changeHeader(target);
    }
  });
};
