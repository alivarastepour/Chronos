const changeHeader = (parent: HTMLElement, target: Element) => {
  if (target.classList.contains("features-selected")) return;

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

const changeContent = (id: string, setContent: Function) => {
  const num: string[] = id.split("-");
  const selected = num[num.length - 1];
  setContent(+selected - 1);
};

export const changeOnClick = (setContent: Function) => {
  const parent = document.getElementById("features-header");
  parent?.addEventListener("click", (e) => {
    const target: Element | null = e.target as Element;
    const targetID: string = target.id;
    if (!targetID.startsWith("feature-header-")) return;
    changeHeader(parent, target);
    changeContent(targetID, setContent);
  });
};
