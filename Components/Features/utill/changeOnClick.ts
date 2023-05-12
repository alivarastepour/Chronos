type swipeDir = "left" | "right";

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

const changeContent = (id: string, setContent: Function) => {
  const num: string[] = id.split("-");
  const selected = num[num.length - 1];
  setContent(+selected - 1);
};

const getCurrent = () => {
  const parent = document.getElementById("features-counter") as Element;
  for (let i = 0; i < parent.childElementCount; i++) {
    const current = parent.children[i];
    if (current.classList.contains("features-counter-active")) {
      const id = current.id;
      const ids: string[] = id.split("-");
      return ids[ids.length - 1];
    }
  }
  return "";
};

const getNext = (dir: swipeDir, current: number) => {
  let next;

  if (dir == "left") {
    if (current - 1 < 0) {
      next = 5;
    } else {
      next = current - 1;
    }
  } else {
    if (current + 1 > 5) {
      next = 0;
    } else {
      next = current + 1;
    }
  }
  return next;
};

const handleSwipeEvents = (setContent: Function, parent: HTMLElement) => {
  let screenstartx: number = 0;
  let screenendx: number = 0;
  let dir: swipeDir;

  parent?.addEventListener(
    "touchstart",
    (e) => {
      screenstartx = e.targetTouches[0].screenX;
    },
    { passive: true }
  );

  parent?.addEventListener(
    "touchend",
    (e) => {
      screenendx = e.changedTouches[0].screenX;

      const distance = screenendx - screenstartx;

      if (Math.abs(distance) < 40) {
        return;
      }

      const current = +getCurrent() - 1;

      if (distance < 0) dir = "left";
      else dir = "right";

      const next = getNext(dir, current);

      setContent(next);
    },
    { passive: true }
  );
};

const handleClickEvents = (parent: Element, setContent: Function) => {
  parent?.addEventListener("click", (e) => {
    const target: Element | null = e.target as Element;
    const targetID: string = target.id;
    const onHeader: boolean = targetID.startsWith("feature-header-");
    const onCounter: boolean = targetID.startsWith("features-counter-");
    if (!onHeader && !onCounter) return;

    changeContent(targetID, setContent);
    if (onHeader) {
      changeHeader(target);
    }
  });
};

export const handleChangeContent = (setContent: Function) => {
  const parent = document.getElementById("features-wrapper");

  handleClickEvents(parent as Element, setContent);
  handleSwipeEvents(setContent, parent as HTMLElement);
};
