export const changeOnHover = () => {
  const parent = document.getElementById("features-header");
  parent?.addEventListener("click", (e) => {
    const target: Element | null = e.target as Element;

    if (!target.id.startsWith("feature-header-")) return;
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
  });
};
