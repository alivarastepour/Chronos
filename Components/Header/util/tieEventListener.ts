export const tieEventListener = (): void => {
  const targetElement: HTMLElement = document.getElementById(
    "header-content"
  ) as HTMLElement;
  const closeBTN: HTMLElement = document.getElementById(
    "close-btn"
  ) as HTMLElement;
  const openBTN: HTMLElement = document.getElementById(
    "open-btn"
  ) as HTMLElement;

  openBTN.addEventListener("click", () => {
    targetElement.style.visibility = "visible";
    targetElement.style.opacity = "1";
    targetElement.style.width = `${targetElement.clientWidth * 2}px`;
    closeBTN.style.display = "block";
    openBTN.style.display = "none";
  });

  closeBTN.addEventListener("click", () => {
    targetElement.style.visibility = "hidden";
    targetElement.style.opacity = "0";
    targetElement.style.width = `${targetElement.clientWidth / 2}px`;
    closeBTN.style.display = "none";
    openBTN.style.display = "block";
  });

  window.addEventListener("resize", (event) => {
    const width: number = (event.currentTarget as Window).innerWidth;
    if (width > 720) {
      targetElement.style.visibility = "visible";
      targetElement.style.opacity = "1";
      targetElement.style.width = "unset";
    } else {
      targetElement.style.visibility = "hidden";
      targetElement.style.opacity = "0";
      if (width > 500) {
        targetElement.style.width = "25%";
      } else {
        targetElement.style.width = "50%";
      }
    }
  });
};
