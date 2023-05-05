export const tieEventListener = (): void => {
  const targetElement: HTMLElement | null =
    document.getElementById("header-content");
  const closeBTN: HTMLElement | null = document.getElementById("close-btn");
  const openBTN: HTMLElement | null = document.getElementById("open-btn");
  document.getElementById("open-btn")?.addEventListener("click", () => {
    if (targetElement) {
      targetElement.style.visibility = "visible";
    }
    if (closeBTN) {
      closeBTN.style.display = "block";
    }
    if (openBTN) {
      openBTN.style.display = "none";
    }
  });

  document.getElementById("close-btn")?.addEventListener("click", () => {
    if (targetElement) {
      targetElement.style.visibility = "hidden";
    }
    if (closeBTN) {
      closeBTN.style.display = "none";
    }
    if (openBTN) {
      openBTN.style.display = "block";
    }
  });
};
