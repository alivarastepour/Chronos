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

const handleSwipeEvents = (setContent: Function, parent: HTMLElement) => {
  let screenstartx: number | undefined;
  let screenendx: number | undefined;
  let dir: swipeDir;
  // let started = false;
  parent?.addEventListener(
    "touchstart",
    (e) => {


      screenstartx = e.targetTouches[0].screenX;
      // started = true;
    },
    { passive: true }
  );

  parent?.addEventListener(
    "touchend",
    (e) => {
      // if (!started) {
      // return;
      // }
      screenendx = e.changedTouches[0].screenX;

      // @ts-ignore
      if (screenstartx > screenendx) {
        dir = "left";
      } else {
        dir = "right";
      }
      const current = +getCurrent() - 1;
      let next;

      let id = "";
      if (dir == "left") {
        if (current - 1 < 0) {
          next = 5;
        } else {
          next = current - 1;
        }
        // id = `features-counter-${0}`;
      } else {
        // id = `features-counter-${0}`;
        if (current + 1 > 5) {
          next = 0;
        } else {
          next = current + 1;
        }
      }
      setContent(next);
      // started = false;
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

export const handleChangeContent = (content: number, setContent: Function) => {
  const parent = document.getElementById("features-wrapper");

  handleClickEvents(parent as Element, setContent);
  handleSwipeEvents(setContent, parent as HTMLElement);
};
